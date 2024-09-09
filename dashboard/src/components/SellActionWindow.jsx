// // // // // import React, { useState, useContext } from "react";
// // // // // import axios from "axios";
// // // // // import GeneralContext from "./GeneralContext";
// // // // // import "./SellActionWindow.css"; // Add styles for the SellActionWindow

// // // // // const SellActionWindow = ({ uid }) => {
// // // // //   const [stockQuantity, setStockQuantity] = useState(1);
// // // // //   const [stockPrice, setStockPrice] = useState(0.0);
// // // // //   const { closeSellWindow } = useContext(GeneralContext);

// // // // //   const handleSellClick = () => {
// // // // //     axios.post("http://localhost:3004/newSell", {
// // // // //       name: uid,
// // // // //       qty: stockQuantity,
// // // // //       price: stockPrice,
// // // // //       mode: "SELL",
// // // // //     }).then(response => {
// // // // //       console.log("Sell order placed successfully", response);
// // // // //       closeSellWindow();
// // // // //     }).catch(error => {
// // // // //       console.error("Error placing sell order", error);
// // // // //     });
// // // // //   };

// // // // //   const handleCancelClick = () => {
// // // // //     closeSellWindow();
// // // // //   };

// // // // //   return (
// // // // //     <div className="container" id="sell-window" draggable="true">
// // // // //       <div className="regular-order">
// // // // //         <div className="inputs">
// // // // //           <fieldset>
// // // // //             <legend>Qty.</legend>
// // // // //             <input
// // // // //               type="number"
// // // // //               name="qty"
// // // // //               id="qty"
// // // // //               onChange={(e) => setStockQuantity(e.target.value)}
// // // // //               value={stockQuantity}
// // // // //             />
// // // // //           </fieldset>
// // // // //           <fieldset>
// // // // //             <legend>Price</legend>
// // // // //             <input
// // // // //               type="number"
// // // // //               name="price"
// // // // //               id="price"
// // // // //               step="0.05"
// // // // //               onChange={(e) => setStockPrice(e.target.value)}
// // // // //               value={stockPrice}
// // // // //             />
// // // // //           </fieldset>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="buttons">
// // // // //         <span>Margin required ₹140.65</span>
// // // // //         <div>
// // // // //           <button className="btn btn-red" onClick={handleSellClick}>
// // // // //             Sell
// // // // //           </button>
// // // // //           <button className="btn btn-grey" onClick={handleCancelClick}>
// // // // //             Cancel
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SellActionWindow;
// // // // // SellActionWindow.jsx

// // // // // import React, { useState, useContext } from "react";
// // // // // import axios from "axios";
// // // // // import GeneralContext from "./GeneralContext";
// // // // // import { toast } from 'react-toastify'; // Import the toast function
// // // // // import "./SellActionWindow.css"; // Add styles for the SellActionWindow

// // // // // const SellActionWindow = ({ uid }) => {
// // // // //   const [stockQuantity, setStockQuantity] = useState(1);
// // // // //   const [stockPrice, setStockPrice] = useState(0.0);
// // // // //   const { closeSellWindow } = useContext(GeneralContext);

// // // // //   const handleSellClick = () => {
// // // // //     axios.post("http://localhost:3004/newSell", {
// // // // //       name: uid,
// // // // //       qty: stockQuantity,
// // // // //       price: stockPrice,
// // // // //       mode: "SELL",
// // // // //     }, { withCredentials: true }) // Ensure cookies are included
// // // // //       .then(response => {
// // // // //         console.log("Sell order placed successfully", response);
// // // // //         closeSellWindow();
// // // // //         toast.success("Sell order placed successfully!");
// // // // //       })
// // // // //       .catch(error => {
// // // // //         console.error("Error placing sell order", error);
// // // // //         if (error.response && error.response.status === 404) {
// // // // //           toast.error("No matching order found to Sell.");
// // // // //         } else {
// // // // //           toast.error("An error occurred while placing the sell order.");
// // // // //         }
// // // // //       });
// // // // //   };
  

// // // // //   const handleCancelClick = () => {
// // // // //     closeSellWindow();
// // // // //   };

// // // // //   return (
// // // // //     <div className="container" id="sell-window" draggable="true">
// // // // //       <div className="regular-order">
// // // // //         <div className="inputs">
// // // // //           <fieldset>
// // // // //             <legend>Qty.</legend>
// // // // //             <input
// // // // //               type="number"
// // // // //               name="qty"
// // // // //               id="qty"
// // // // //               onChange={(e) => setStockQuantity(e.target.value)}
// // // // //               value={stockQuantity}
// // // // //             />
// // // // //           </fieldset>
// // // // //           <fieldset>
// // // // //             <legend>Price</legend>
// // // // //             <input
// // // // //               type="number"
// // // // //               name="price"
// // // // //               id="price"
// // // // //               step="0.05"
// // // // //               onChange={(e) => setStockPrice(e.target.value)}
// // // // //               value={stockPrice}
// // // // //             />
// // // // //           </fieldset>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="buttons">
// // // // //         <span>Margin required ₹150</span>
// // // // //         <div>
// // // // //           <button className="btn btn-red" onClick={handleSellClick}>
// // // // //             Sell
// // // // //           </button>
// // // // //           <button className="btn btn-grey" onClick={handleCancelClick}>
// // // // //             Cancel
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SellActionWindow;
// // // // import React, { useState, useContext } from "react";
// // // // import axios from "axios";
// // // // import GeneralContext from "./GeneralContext";
// // // // import { toast } from 'react-toastify'; // Import the toast function
// // // // import "./SellActionWindow.css"; // Add styles for the SellActionWindow

// // // // const SellActionWindow = ({ uid }) => {
// // // //   const [stockQuantity, setStockQuantity] = useState(1);
// // // //   const [stockPrice, setStockPrice] = useState(0.0);
// // // //   const { closeSellWindow } = useContext(GeneralContext);

// // // //   const handleSellClick = () => {
// // // //     const userId = /* Obtain userId from your app context or state */;
    
// // // //     axios.post("http://localhost:3004/newSell", {
// // // //       name: uid,
// // // //       qty: stockQuantity,
// // // //       price: stockPrice,
// // // //       mode: "SELL",
// // // //       userId: userId // Make sure to include userId here
// // // //     }, { withCredentials: true })
// // // //       .then(response => {
// // // //         console.log("Sell order placed successfully", response);
// // // //         closeSellWindow();
// // // //         toast.success("Sell order placed successfully!");
// // // //       })
// // // //       .catch(error => {
// // // //         console.error("Error placing sell order", error.response?.data || error.message);
// // // //         toast.error("An error occurred while placing the sell order.");
// // // //       });
// // // //   };
  

// // // //   const handleCancelClick = () => {
// // // //     closeSellWindow();
// // // //   };

// // // //   return (
// // // //     <div className="container" id="sell-window" draggable="true">
// // // //       <div className="regular-order">
// // // //         <div className="inputs">
// // // //           <fieldset>
// // // //             <legend>Qty.</legend>
// // // //             <input
// // // //               type="number"
// // // //               name="qty"
// // // //               id="qty"
// // // //               onChange={(e) => setStockQuantity(e.target.value)}
// // // //               value={stockQuantity}
// // // //             />
// // // //           </fieldset>
// // // //           <fieldset>
// // // //             <legend>Price</legend>
// // // //             <input
// // // //               type="number"
// // // //               name="price"
// // // //               id="price"
// // // //               step="0.05"
// // // //               onChange={(e) => setStockPrice(e.target.value)}
// // // //               value={stockPrice}
// // // //             />
// // // //           </fieldset>
// // // //         </div>
// // // //       </div>

// // // //       <div className="buttons">
// // // //         <span>Margin required ₹150</span>
// // // //         <div>
// // // //           <button className="btn btn-red" onClick={handleSellClick}>
// // // //             Sell
// // // //           </button>
// // // //           <button className="btn btn-grey" onClick={handleCancelClick}>
// // // //             Cancel
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SellActionWindow;
// // // // SellActionWindow.jsx
// // // import React, { useState, useContext } from "react";
// // // import axios from "axios";
// // // import GeneralContext from "./GeneralContext";
// // // import { toast } from 'react-toastify'; // Import the toast function
// // // import "./SellActionWindow.css"; // Add styles for the SellActionWindow

// // // const SellActionWindow = ({ uid }) => {
// // //   const [stockQuantity, setStockQuantity] = useState(1);
// // //   const [stockPrice, setStockPrice] = useState(0.0);
// // //   const { closeSellWindow, userId } = useContext(GeneralContext); // Retrieve userId from context

// // //   const handleSellClick = () => {
// // //     if (!userId) {
// // //       toast.error("User is not logged in.");
// // //       return;
// // //     }

// // //     axios.post("http://localhost:3004/newSell", {
// // //       name: uid,
// // //       qty: stockQuantity,
// // //       price: stockPrice,
// // //       mode: "SELL",
// // //       userId: userId, // Include userId here
// // //     }, { withCredentials: true }) // Ensure cookies are included
// // //       .then(response => {
// // //         console.log("Sell order placed successfully", response);
// // //         closeSellWindow();
// // //         toast.success("Sell order placed successfully!");
// // //       })
// // //       .catch(error => {
// // //         console.error("Error placing sell order", error.response?.data || error.message);
// // //         if (error.response && error.response.status === 404) {
// // //           toast.error("No matching order found to Sell.");
// // //         } else {
// // //           toast.error("An error occurred while placing the sell order.");
// // //         }
// // //       });
// // //   };

// // //   const handleCancelClick = () => {
// // //     closeSellWindow();
// // //   };

// // //   return (
// // //     <div className="container" id="sell-window" draggable="true">
// // //       <div className="regular-order">
// // //         <div className="inputs">
// // //           <fieldset>
// // //             <legend>Qty.</legend>
// // //             <input
// // //               type="number"
// // //               name="qty"
// // //               id="qty"
// // //               onChange={(e) => setStockQuantity(e.target.value)}
// // //               value={stockQuantity}
// // //             />
// // //           </fieldset>
// // //           <fieldset>
// // //             <legend>Price</legend>
// // //             <input
// // //               type="number"
// // //               name="price"
// // //               id="price"
// // //               step="0.05"
// // //               onChange={(e) => setStockPrice(e.target.value)}
// // //               value={stockPrice}
// // //             />
// // //           </fieldset>
// // //         </div>
// // //       </div>

// // //       <div className="buttons">
// // //         <span>Margin required ₹150</span>
// // //         <div>
// // //           <button className="btn btn-red" onClick={handleSellClick}>
// // //             Sell
// // //           </button>
// // //           <button className="btn btn-grey" onClick={handleCancelClick}>
// // //             Cancel
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SellActionWindow;
// // import React, { useState, useContext, useEffect } from "react";
// // import axios from "axios";
// // import GeneralContext from "./GeneralContext";
// // import { toast } from 'react-toastify';
// // import "./SellActionWindow.css"; // Add styles for the SellActionWindow

// // const SellActionWindow = ({ uid }) => {
// //   const [stockQuantity, setStockQuantity] = useState(1);
// //   const [stockPrice, setStockPrice] = useState(0.0);
// //   const { closeSellWindow } = useContext(GeneralContext);
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     // Retrieve userId from localStorage
// //     const storedUserId = localStorage.getItem("userId");
// //     setUserId(storedUserId);
// //   }, []);

// //   const handleSellClick = () => {
// //     if (!userId) {
// //       toast.error("User is not logged in.");
// //       return;
// //     }

// //     axios.post("http://localhost:3004/newSell", {
// //       name: uid,
// //       qty: stockQuantity,
// //       price: stockPrice,
// //       mode: "SELL",
// //       userId: userId, // Include userId here
// //     }, { withCredentials: true }) // Ensure cookies are included
// //       .then(response => {
// //         console.log("Sell order placed successfully", response);
// //         closeSellWindow();
// //         toast.success("Sell order placed successfully!");
// //       })
// //       .catch(error => {
// //         console.error("Error placing sell order", error.response?.data || error.message);
// //         if (error.response && error.response.status === 404) {
// //           toast.error("No matching order found to Sell.");
// //         } else {
// //           toast.error("An error occurred while placing the sell order.");
// //         }
// //       });
// //   };

// //   const handleCancelClick = () => {
// //     closeSellWindow();
// //   };

// //   return (
// //     <div className="container" id="sell-window" draggable="true">
// //       <div className="regular-order">
// //         <div className="inputs">
// //           <fieldset>
// //             <legend>Qty.</legend>
// //             <input
// //               type="number"
// //               name="qty"
// //               id="qty"
// //               onChange={(e) => setStockQuantity(e.target.value)}
// //               value={stockQuantity}
// //             />
// //           </fieldset>
// //           <fieldset>
// //             <legend>Price</legend>
// //             <input
// //               type="number"
// //               name="price"
// //               id="price"
// //               step="0.05"
// //               onChange={(e) => setStockPrice(e.target.value)}
// //               value={stockPrice}
// //             />
// //           </fieldset>
// //         </div>
// //       </div>

// //       <div className="buttons">
// //         <span>Margin required ₹150</span>
// //         <div>
// //           <button className="btn btn-red" onClick={handleSellClick}>
// //             Sell
// //           </button>
// //           <button className="btn btn-grey" onClick={handleCancelClick}>
// //             Cancel
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SellActionWindow;
// import React, { useState, useContext, useEffect } from "react";
// import axios from "axios";
// import GeneralContext from "./GeneralContext";
// import { toast } from 'react-toastify';
// import "./SellActionWindow.css"; // Add styles for the SellActionWindow

// const SellActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);
//   const { closeSellWindow } = useContext(GeneralContext);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const storedUserId = localStorage.getItem("userId");
//     setUserId(storedUserId);
//   }, []);

//   const handleSellClick = () => {
//     const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
  
//     axios.post("http://localhost:3004/newSell", {
//       name: uid,
//       qty: stockQuantity,
//       price: stockPrice,
//       mode: "SELL",
//     }, {
//       headers: { Authorization: `Bearer ${token}` },
//       withCredentials: true
//     })
//     .then(response => {
//       console.log("Sell order placed successfully", response);
//       closeSellWindow();
//       toast.success("Sell order placed successfully!");
//     })
//     .catch(error => {
//       console.error("Error placing sell order", error.response?.data || error.message);
//       const errorMessage = error.response?.data?.message || "An error occurred while placing the sell order.";
//       toast.error(errorMessage);
//     });
//   };
  
//   const handleCancelClick = () => {
//     closeSellWindow();
//   };

//   return (
//     <div className="container" id="sell-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹150</span>
//         <div>
//           <button className="btn btn-red" onClick={handleSellClick}>
//             Sell
//           </button>
//           <button className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellActionWindow;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from 'react-toastify'; // Import the toast function
// import "./SellActionWindow.css"; // Add styles for the SellActionWindow

// const SellActionWindow = ({ uid, closeSellWindow }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   useEffect(() => {
//     // Optional: If you need to perform any setup on mount
//   }, []);

//   const handleSellClick = () => {
//     // Retrieve JWT token from cookies
//     const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
    
//     if (!token) {
//       toast.error("User is not logged in.");
//       return;
//     }

//     axios.post("http://localhost:3004/newSell", {
//       name: uid,
//       qty: stockQuantity,
//       price: stockPrice,
//       mode: "SELL",
//     }, {
//       headers: { Authorization: `Bearer ${token}` },
//       withCredentials: true
//     })
//     .then(response => {
//       console.log("Sell order placed successfully", response);
//       closeSellWindow();
//       toast.success("Sell order placed successfully!");
//     })
//     .catch(error => {
//       console.error("Error placing sell order", error.response?.data || error.message);
//       const errorMessage = error.response?.data?.message || "An error occurred while placing the sell order.";
//       toast.error(errorMessage);
//     });
//   };

//   const handleCancelClick = () => {
//     closeSellWindow();
//   };

//   return (
//     <div className="container" id="sell-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹150</span>
//         <div>
//           <button className="btn btn-red" onClick={handleSellClick}>
//             Sell
//           </button>
//           <button className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellActionWindow;
// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { toast } from 'react-toastify'; // Import the toast function
// import GeneralContext from "./GeneralContext"; // Import GeneralContext
// import "./SellActionWindow.css"; // Add styles for the SellActionWindow

// const SellActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);
//   const { closeSellWindow } = useContext(GeneralContext); // Get closeSellWindow from context

//   const handleSellClick = () => {
//     // Retrieve JWT token from cookies
//     const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
    
//     if (!token) {
//       toast.error("User is not logged in.");
//       return;
//     }

//     axios.post("http://localhost:3004/newSell", {
//       name: uid,
//       qty: stockQuantity,
//       price: stockPrice,
//       mode: "SELL",
//     }, {
//       headers: { Authorization: `Bearer ${token}` },
//       withCredentials: true
//     })
//     .then(response => {
//       console.log("Sell order placed successfully", response);
//       closeSellWindow(); // Call closeSellWindow from context
//       toast.success("Sell order placed successfully!");
//     })
//     .catch(error => {
//       console.error("Error placing sell order", error.response?.data || error.message);
//       const errorMessage = error.response?.data?.message || "An error occurred while placing the sell order.";
//       toast.error(errorMessage);
//     });
//   };

//   const handleCancelClick = () => {
//     closeSellWindow(); // Call closeSellWindow from context
//   };

//   return (
//     <div className="container" id="sell-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹150</span>
//         <div>
//           <button className="btn btn-red" onClick={handleSellClick}>
//             Sell
//           </button>
//           <button className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellActionWindow;
import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify'; // Import the toast function
import GeneralContext from "./GeneralContext"; // Import GeneralContext
import "./SellActionWindow.css"; // Add styles for the SellActionWindow

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeSellWindow } = useContext(GeneralContext); // Get closeSellWindow from context

  // Function to retrieve JWT token from cookies
  const getTokenFromCookies = () => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
   
    console.log("All Cookies:", cookies); // Log all cookies

    const tokenCookie = cookies.find(row => row.startsWith('token='));
    if (!tokenCookie) {
      console.error("Token cookie not found");
      return null;
    }
    const token = tokenCookie.split('=')[1];
    console.log("Token retrieved:", token); // Log the token for debugging
    return token;
  };

  const handleSellClick = () => {
    const token = getTokenFromCookies();

    if (!token) {
      toast.error("User is not logged in.");
      return;
    }

    console.log("Attempting to place sell order with token:", token); // Log for debugging

    axios.post("http://localhost:3004/newSell", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    }, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true
    })
    .then(response => {
      console.log("Sell order placed successfully", response);
      closeSellWindow(); // Call closeSellWindow from context
      toast.success("Sell order placed successfully!");
    })
    .catch(error => {
      console.error("Error placing sell order", error.response?.data || error.message);
      const errorMessage = error.response?.data?.message || "An error occurred while placing the sell order.";
      toast.error(errorMessage);
    });
  };

  const handleCancelClick = () => {
    closeSellWindow(); // Call closeSellWindow from context
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1" // Ensure quantity is at least 1
              onChange={(e) => setStockQuantity(Number(e.target.value))} // Ensure value is a number
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05" // Allow decimals in price with a step of 0.05
              min="0" // Price cannot be negative
              onChange={(e) => setStockPrice(Number(e.target.value))} // Ensure value is a number
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹150</span>
        <div>
          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
