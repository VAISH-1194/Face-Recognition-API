import React, { useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

const AgeGenderDetection = () => {
  const [image, setImage] = useState(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models"; // Path to models folder
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL);
      setIsModelLoaded(true);
    };
    loadModels();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      resetDetection(); // Reset previous results when a new image is uploaded
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetection = async () => {
    if (!isModelLoaded || !imageRef.current) return;

    const img = imageRef.current;
    const canvas = canvasRef.current;
    const detections = await faceapi
      .detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
      .withAgeAndGender();

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = img.width;
    canvas.height = img.height;

    detections.forEach((detection) => {
      const { x, y, width, height } = detection.detection.box;
      const age = detection.age.toFixed(0);
      const gender = detection.gender;

      context.strokeStyle = "#00FF00";
      context.lineWidth = 2;
      context.strokeRect(x, y, width, height);

      context.fillStyle = "#00FF00";
      context.font = "16px Arial";
      context.fillText(`${age} years, ${gender}`, x, y - 10);
    });
  };

  const resetDetection = () => {
    setImage(null); // Clear uploaded image
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        marginLeft: "220px", // Adjust based on your sidebar width
      }}
    >
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>
        Age & Gender Detection
      </h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{
              display: "block",
              margin: "10px auto",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleDetection}
            disabled={!image}
            style={{
              display: "block",
              margin: "10px auto",
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: image ? "#4CAF50" : "#ccc",
              color: "white",
              border: "none",
              cursor: image ? "pointer" : "not-allowed",
            }}
          >
            Detect Age & Gender
          </button>
          <button
            onClick={resetDetection}
            style={{
              display: "block",
              margin: "10px auto",
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
        <div style={{ position: "relative", textAlign: "center" }}>
          {image && (
            <>
              <img
                ref={imageRef}
                src={image}
                alt="Uploaded"
                style={{
                  maxWidth: "80%",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  pointerEvents: "none",
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgeGenderDetection;









































