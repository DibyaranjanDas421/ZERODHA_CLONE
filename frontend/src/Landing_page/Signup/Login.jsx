// // // import React, { useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import { ToastContainer, toast } from "react-toastify";

// // // const Login = () => {
// // //   const navigate = useNavigate();
// // //   const [inputValue, setInputValue] = useState({
// // //     email: "",
// // //     password: "",
// // //   });
// // //   const { email, password } = inputValue;
// // //   const handleOnChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setInputValue({
// // //       ...inputValue,
// // //       [name]: value,
// // //     });
// // //   };

// // //   const handleError = (err) =>
// // //     toast.error(err, {
// // //       position: "bottom-left",
// // //     });
// // //   const handleSuccess = (msg) =>
// // //     toast.success(msg, {
// // //       position: "bottom-left",
// // //     });

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const { data } = await axios.post(
// // //         "http://localhost:3004/login",
// // //         {
// // //           ...inputValue,
// // //         },
// // //         { withCredentials: true }
// // //       );
// // //       console.log(data);
// // //       const { success, message } = data;
// // //       if (success) {
// // //         handleSuccess(message);
// // //         setTimeout(() => {
// // //           navigate("/");
// // //         }, 1000);
// // //       } else {
// // //         handleError(message);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //     setInputValue({
// // //       ...inputValue,
// // //       email: "",
// // //       password: "",
// // //     });
// // //   };

// // //   return (
// // //     <div className="form_container">
// // //       <h2>Login Account</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <div>
// // //           <label htmlFor="email">Email</label>
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={email}
// // //             placeholder="Enter your email"
// // //             onChange={handleOnChange}
// // //           />
// // //         </div>
// // //         <div>
// // //           <label htmlFor="password">Password</label>
// // //           <input
// // //             type="password"
// // //             name="password"
// // //             value={password}
// // //             placeholder="Enter your password"
// // //             onChange={handleOnChange}
// // //           />
// // //         </div>
// // //         <button type="submit">Submit</button>
// // //         <span>
// // //           Already have an account? <Link to={"/signup"}>Signup</Link>
// // //         </span>
// // //       </form>
// // //       <ToastContainer />
// // //     </div>
// // //   );
// // // };

// // // export default Login;
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";
// // import { ToastContainer, toast } from "react-toastify";

// // const Login = () => {
// //   const [inputValue, setInputValue] = useState({
// //     email: "",
// //     password: "",
// //   });
// //   const { email, password } = inputValue;

// //   const handleOnChange = (e) => {
// //     const { name, value } = e.target;
// //     setInputValue({
// //       ...inputValue,
// //       [name]: value,
// //     });
// //   };

// //   const handleError = (err) =>
// //     toast.error(err, {
// //       position: "bottom-left",
// //     });
  
// //   const handleSuccess = (msg) =>
// //     toast.success(msg, {
// //       position: "bottom-left",
// //     });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const { data } = await axios.post(
// //         "http://localhost:3004/login",
// //         {
// //           ...inputValue,
// //         },
// //         { withCredentials: true }
// //       );
// //       const { success, message } = data;
// //       if (success) {
// //         handleSuccess(message);

// //         // Redirect to the dashboard app after successful login
// //         setTimeout(() => {
// //           // Use window.location to navigate to the dashboard app
// //           window.location.href = "http://localhost:5174/"; // Assuming dashboard runs on port 5174
// //         }, 1000);
// //       } else {
// //         handleError(message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }

// //     // Clear the input fields after submission
// //     setInputValue({
// //       email: "",
// //       password: "",
// //     });
// //   };

// //   return (
// //     <div className="form_container">
// //       <h2>Login Account</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="email">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={email}
// //             placeholder="Enter your email"
// //             onChange={handleOnChange}
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="password">Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={password}
// //             placeholder="Enter your password"
// //             onChange={handleOnChange}
// //           />
// //         </div>
// //         <button type="submit">Submit</button>
// //         <span>
// //           Already have an account? <Link to={"/signup"}>Signup</Link>
// //         </span>
// //       </form>
// //       <ToastContainer />
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

// const Login = () => {
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = inputValue;

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });

//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-left",
//     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:3004/login",
//         {
//           ...inputValue,
//         },
//         { withCredentials: true }
//       );
//       const { success, message, userId } = data;
//       if (success) {
//         handleSuccess(message);

//         // Store userId in localStorage
//         localStorage.setItem("userId", userId);

//         // Redirect to the dashboard app after successful login
//         setTimeout(() => {
//           window.location.href = "http://localhost:5174/"; // Assuming dashboard runs on port 5174
//         }, 1000);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     // Clear the input fields after submission
//     setInputValue({
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div className="form_container">
//       <h2>Login Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Enter your email"
//             onChange={handleOnChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Enter your password"
//             onChange={handleOnChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//         <span>
//           Already have an account? <Link to={"/signup"}>Signup</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      handleError("Please fill in both fields.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3004/login",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message, userId } = data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("userId", userId);
        setTimeout(() => {
          window.location.href = "http://localhost:5174/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError("Something went wrong. Please try again later.");
      console.log(error);
    }

    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
