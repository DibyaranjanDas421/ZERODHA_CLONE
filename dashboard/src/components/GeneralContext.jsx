// // // import React, { useState } from "react";

// // // import BuyActionWindow from "./BuyActionWindows";


// // // const GeneralContext = React.createContext({
// // //   openBuyWindow: (uid) => {},
// // //   closeBuyWindow: () => {},
// // // });

// // // export const GeneralContextProvider = (props) => {
// // //   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
// // //   const [selectedStockUID, setSelectedStockUID] = useState("");

// // //   const handleOpenBuyWindow = (uid) => {
// // //     setIsBuyWindowOpen(true);
// // //     setSelectedStockUID(uid);
// // //   };

// // //   const handleCloseBuyWindow = () => {
// // //     setIsBuyWindowOpen(false);
// // //     setSelectedStockUID("");
// // //   };

// // //   return (
// // //     <GeneralContext.Provider
// // //       value={{
// // //         openBuyWindow: handleOpenBuyWindow,
// // //         closeBuyWindow: handleCloseBuyWindow,
// // //       }}
// // //     >
// // //       {props.children}
// // //       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
// // //     </GeneralContext.Provider>
// // //   );
// // // };

// // // export default GeneralContext;
// // import React, { useState } from "react";
// // import BuyActionWindow from "./BuyActionWindows";

// // const GeneralContext = React.createContext();

// // export const GeneralContextProvider = (props) => {
// //   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
// //   const [selectedStockUID, setSelectedStockUID] = useState("");

// //   const openBuyWindow = (uid) => {
// //     setIsBuyWindowOpen(true);
// //     setSelectedStockUID(uid);
// //   };

// //   const closeBuyWindow = () => {
// //     setIsBuyWindowOpen(false);
// //     setSelectedStockUID("");
// //   };

// //   return (
// //     <GeneralContext.Provider
// //       value={{
// //         openBuyWindow,
// //         closeBuyWindow,
// //         isBuyWindowOpen,
// //         selectedStockUID,
// //       }}
// //     >
// //       {props.children}
// //       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
// //     </GeneralContext.Provider>
// //   );
// // };

// // export default GeneralContext;
// // import React, { useState } from "react";
// // import BuyActionWindow from "./BuyActionWindows";

// // const GeneralContext = React.createContext();

// // export const GeneralContextProvider = ({ children }) => {
// //   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
// //   const [selectedStockUID, setSelectedStockUID] = useState("");

// //   const openBuyWindow = (uid) => {
// //     setIsBuyWindowOpen(true);
// //     setSelectedStockUID(uid);
// //   };

// //   const closeBuyWindow = () => {
// //     setIsBuyWindowOpen(false);
// //     setSelectedStockUID("");
// //   };

// //   return (
// //     <GeneralContext.Provider
// //       value={{
// //         openBuyWindow,
// //         closeBuyWindow,
// //         isBuyWindowOpen,
// //         selectedStockUID,
// //       }}
// //     >
// //       {children}
// //       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
// //     </GeneralContext.Provider>
// //   );
// // };

// // export default GeneralContext;
// // import React, { useState } from "react";
// // import BuyActionWindow from "./BuyActionWindows";
// // import SellActionWindow from "./SellActionWindow"; // Import the SellActionWindow component

// // const GeneralContext = React.createContext();

// // export const GeneralContextProvider = ({ children }) => {
// //   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
// //   const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); // New state for Sell Window
// //   const [selectedStockUID, setSelectedStockUID] = useState("");

// //   const openBuyWindow = (uid) => {
// //     setIsBuyWindowOpen(true);
// //     setSelectedStockUID(uid);
// //   };

// //   const closeBuyWindow = () => {
// //     setIsBuyWindowOpen(false);
// //     setSelectedStockUID("");
// //   };

// //   const openSellWindow = (uid) => {
// //     setIsSellWindowOpen(true);
// //     setSelectedStockUID(uid);
// //   };

// //   const closeSellWindow = () => {
// //     setIsSellWindowOpen(false);
// //     setSelectedStockUID("");
// //   };

// //   return (
// //     <GeneralContext.Provider
// //       value={{
// //         openBuyWindow,
// //         closeBuyWindow,
// //         openSellWindow, // Add the openSellWindow function to the context
// //         closeSellWindow, // Add the closeSellWindow function to the context
// //         isBuyWindowOpen,
// //         isSellWindowOpen, // Pass sell window state to context
// //         selectedStockUID,
// //       }}
// //     >
// //       {children}
// //       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
// //       {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />} {/* Render SellActionWindow */}
// //     </GeneralContext.Provider>
// //   );
// // };

// // export default GeneralContext;

// import React, { useState, createContext } from "react";
// import BuyActionWindow from "./BuyActionWindows"; // Adjust the import path as needed
// import SellActionWindow from "./SellActionWindow"; // Adjust the import path as needed

// const GeneralContext = createContext();

// export const GeneralContextProvider = ({ children }) => {
//   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
//   const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
//   const [selectedStockUID, setSelectedStockUID] = useState("");

//   const openBuyWindow = (uid) => {
//     setIsBuyWindowOpen(true);
//     setSelectedStockUID(uid);
//   };

//   const closeBuyWindow = () => {
//     setIsBuyWindowOpen(false);
//     setSelectedStockUID("");
//   };

//   const openSellWindow = (uid) => {
//     setIsSellWindowOpen(true);
//     setSelectedStockUID(uid);
//   };

//   const closeSellWindow = () => {
//     setIsSellWindowOpen(false);
//     setSelectedStockUID("");
//   };

//   return (
//     <GeneralContext.Provider
//       value={{
//         openBuyWindow,
//         closeBuyWindow,
//         openSellWindow,
//         closeSellWindow,
//         isBuyWindowOpen,
//         isSellWindowOpen,
//         selectedStockUID,
//       }}
//     >
//       {children}
//       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
//       {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
//     </GeneralContext.Provider>
//   );
// };

// export default GeneralContext;
// GeneralContext.jsx
import React, { useState, createContext } from "react";
import BuyActionWindow from "./BuyActionWindows"; // Adjust the import path as needed
import SellActionWindow from "./SellActionWindow"; // Adjust the import path as needed

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [userId, setUserId] = useState(""); // Add userId to state

  const openBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const openSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const closeSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
        isBuyWindowOpen,
        isSellWindowOpen,
        selectedStockUID,
        userId, // Provide userId through context
        setUserId, // Provide setter for userId
      }}
    >
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
