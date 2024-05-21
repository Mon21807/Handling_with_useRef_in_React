// Dynamic Form Input Focus
// src/App.js
import React, { useRef } from 'react';
import './App.css';

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  return (
    <div className="App">
      <h1>Dynamic Form Input Focus</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" ref={nameRef} />
          <button type="button" onClick={() => handleFocus(nameRef)}>Focus Name</button>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" ref={emailRef} />
          <button type="button" onClick={() => handleFocus(emailRef)}>Focus Email</button>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordRef} />
          <button type="button" onClick={() => handleFocus(passwordRef)}>Focus Password</button>
        </div>
      </form>
    </div>
  );
}

export default App;


// Real-time Input Validation
// // src/App.js
// import React, { useRef, useState } from 'react';
// import './App.css';

// function App() {
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleFocus = (ref) => {
//     ref.current.focus();
//   };

//   const validateName = () => {
//     const name = nameRef.current.value;
//     if (name.length < 3) {
//       setNameError('Name must be at least 3 characters long.');
//     } else {
//       setNameError('');
//     }
//   };

//   const validateEmail = () => {
//     const email = emailRef.current.value;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setEmailError('Invalid email address.');
//     } else {
//       setEmailError('');
//     }
//   };

//   const validatePassword = () => {
//     const password = passwordRef.current.value;
//     if (password.length < 6) {
//       setPasswordError('Password must be at least 6 characters long.');
//     } else {
//       setPasswordError('');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Dynamic Form Input Focus & Real-time Validation</h1>
//       <form>
//         <div>
//           <label>Name:</label>
//           <input type="text" ref={nameRef} onBlur={validateName} />
//           <button type="button" onClick={() => handleFocus(nameRef)}>Focus Name</button>
//           {nameError && <p className="error">{nameError}</p>}
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" ref={emailRef} onBlur={validateEmail} />
//           <button type="button" onClick={() => handleFocus(emailRef)}>Focus Email</button>
//           {emailError && <p className="error">{emailError}</p>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" ref={passwordRef} onBlur={validatePassword} />
//           <button type="button" onClick={() => handleFocus(passwordRef)}>Focus Password</button>
//           {passwordError && <p className="error">{passwordError}</p>}
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;


// Custom Form Submission Handling
// // src/App.js
// import React, { useRef, useState } from 'react';
// import './App.css';

// function App() {
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [formMessage, setFormMessage] = useState('');

//   const handleFocus = (ref) => {
//     ref.current.focus();
//   };

//   const validateName = () => {
//     const name = nameRef.current.value;
//     if (name.length < 3) {
//       setNameError('Name must be at least 3 characters long.');
//     } else {
//       setNameError('');
//     }
//   };

//   const validateEmail = () => {
//     const email = emailRef.current.value;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setEmailError('Invalid email address.');
//     } else {
//       setEmailError('');
//     }
//   };

//   const validatePassword = () => {
//     const password = passwordRef.current.value;
//     if (password.length < 6) {
//       setPasswordError('Password must be at least 6 characters long.');
//     } else {
//       setPasswordError('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validateName();
//     validateEmail();
//     validatePassword();
//     if (!nameError && !emailError && !passwordError) {
//       setFormMessage('Form submitted successfully!');
//       // Custom form processing logic here
//     } else {
//       setFormMessage('Please correct the errors in the form.');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Advanced Form Handling with useRef</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" ref={nameRef} onBlur={validateName} />
//           <button type="button" onClick={() => handleFocus(nameRef)}>Focus Name</button>
//           {nameError && <p className="error">{nameError}</p>}
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" ref={emailRef} onBlur={validateEmail} />
//           <button type="button" onClick={() => handleFocus(emailRef)}>Focus Email</button>
//           {emailError && <p className="error">{emailError}</p>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" ref={passwordRef} onBlur={validatePassword} />
//           <button type="button" onClick={() => handleFocus(passwordRef)}>Focus Password</button>
//           {passwordError && <p className="error">{passwordError}</p>}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {formMessage && <p className="message">{formMessage}</p>}
//     </div>
//   );
// }

// export default App;
