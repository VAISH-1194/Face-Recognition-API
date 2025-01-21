// import React from 'react';

// const Home = () => {
//   return (
//     <div
//       style={{
//         fontFamily: 'Arial, sans-serif',
//         padding: '20px',
//         overflow: 'hidden',
//         marginLeft: '200px',
//         minHeight: '91.2vh',
//         backgroundImage: `url('https://img.lovepik.com/photo/40026/0455.jpg_wh860.jpg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: '#ffffff',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
//         Welcome to the Face Recognition App
//       </h2>
//       <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
//         Select a feature from the sidebar to get started.
//       </p>
//     </div>
//   );
// };

// export default Home;
















import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        position: 'relative',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        marginLeft: '200px', // Adjust based on your sidebar width
        minHeight: '91.2vh',
        backgroundImage: `url('https://img.lovepik.com/photo/40026/0455.jpg_wh860.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#000000', // Text color for readability
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Overlay with #59629d color */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(89, 98, 157, 0.7)', // Semi-transparent overlay with #59629d color
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2, // Place content above the overlay
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Welcome to the Face Recognition App
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Select a feature from the sidebar to get started.
        </p>
      </div>
    </div>
  );
};

export default Home;
