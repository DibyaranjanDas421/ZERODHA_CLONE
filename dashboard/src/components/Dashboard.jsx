// // import React from 'react';
// // import { Routes, Route } from "react-router-dom";
// // import Watchlist from './Watchlist';
// // import Summary from './Summary';
// // import Order from './Order';
// // import Holdings from './Holdings'
// // import Positions from './Positions'
// // import Funds from './Funds'
// // import Apps from './Apps'
// // import { GeneralContextProvider } from "./GeneralContext";
// // function Dashboard() {
// //     return (  
// //         <div className="dashboard-container">
// //             <GeneralContextProvider>
// //             <Watchlist />
// //             </GeneralContextProvider>
       
// //         <div className="content">
// //           <Routes>
// //             <Route exact path="/" element={<Summary />} />
// //             <Route path="/orders" element={<Order />} />
// //             <Route path="/holdings" element={<Holdings />} />
// //             <Route path="/positions" element={<Positions />} />
// //             <Route path="/funds" element={<Funds />} />
// //             <Route path="/apps" element={<Apps />} />
// //           </Routes>
// //         </div>
      
// //     </div>
// //     );
// // }

// // export default Dashboard;
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Watchlist from './Watchlist';
// // import Summary from './Summary';
// // import Order from './Order';
// // import Holdings from './Holdings';
// // import Positions from './Positions';
// // import Funds from './Funds';
// // import Apps from './Apps';
// // import { GeneralContextProvider } from "./GeneralContext";

// // function Dashboard() {
// //     return (
// //         <div className="dashboard-container">
// //             <GeneralContextProvider>
// //                 <Router>
// //                     <Watchlist />
// //                     <div className="content">
// //                         <Routes>
// //                             <Route exact path="/" element={<Summary />} />
// //                             <Route path="/orders" element={<Order />} />
// //                             <Route path="/holdings" element={<Holdings />} />
// //                             <Route path="/positions" element={<Positions />} />
// //                             <Route path="/funds" element={<Funds />} />
// //                             <Route path="/apps" element={<Apps />} />
// //                         </Routes>
// //                     </div>
// //                 </Router>
// //             </GeneralContextProvider>
// //         </div>
// //     );
// // }

// // export default Dashboard;
// import React from 'react';
// import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter here
// import Watchlist from './Watchlist';
// import Summary from './Summary';
// import Order from './Order';
// import Holdings from './Holdings';
// import Positions from './Positions';
// import Funds from './Funds';
// import Apps from './Apps';
// import { GeneralContextProvider } from "./GeneralContext";

// function Dashboard() {
//     return (
//         <div className="dashboard-container">
//             <GeneralContextProvider>
//                 <Watchlist />
//                 <div className="content">
//                     <Routes>
//                         <Route exact path="/" element={<Summary />} />
//                         <Route path="/orders" element={<Order />} />
//                         <Route path="/holdings" element={<Holdings />} />
//                         <Route path="/positions" element={<Positions />} />
//                         <Route path="/funds" element={<Funds />} />
//                         <Route path="/apps" element={<Apps />} />
//                     </Routes>
//                 </div>
//             </GeneralContextProvider>
//         </div>
//     );
// }

// export default Dashboard;
// Dashboard.jsx

// import React from 'react';
// import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter here
// import Watchlist from './Watchlist';
// import Summary from './Summary';
// import Order from './Order';
// import Holdings from './Holdings';
// import Positions from './Positions';
// import Funds from './Funds';
// import Apps from './Apps';
// import { GeneralContextProvider } from "./GeneralContext";
// import { ToastContainer } from 'react-toastify'; // Import ToastContainer
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// function Dashboard() {
//     return (
//         <div className="dashboard-container">
//             <GeneralContextProvider>
//                 <Watchlist />
//                 <div className="content">
//                     <Routes>
//                         <Route exact path="/" element={<Summary />} />
//                         <Route path="/orders" element={<Order />} />
//                         <Route path="/holdings" element={<Holdings />} />
//                         <Route path="/positions" element={<Positions />} />
//                         <Route path="/funds" element={<Funds />} />
//                         <Route path="/apps" element={<Apps />} />
//                     </Routes>
//                 </div>
//                 <ToastContainer /> {/* Add ToastContainer to enable toasts */}
//             </GeneralContextProvider>
//         </div>
//     );
// }

// export default Dashboard;
import React from 'react';
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter here
import Watchlist from './Watchlist';
import Summary from './Summary';
import Order from './Order';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import { GeneralContextProvider } from "./GeneralContext";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function Dashboard() {
    return (
        <div className="dashboard-container">
            <GeneralContextProvider>
                <Watchlist />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Summary />} />
                        <Route path="/orders" element={<Order />} />
                        <Route path="/holdings" element={<Holdings />} />
                        <Route path="/positions" element={<Positions />} />
                        <Route path="/funds" element={<Funds />} />
                        <Route path="/apps" element={<Apps />} />
                    </Routes>
                </div>
                <ToastContainer /> {/* Add ToastContainer to enable toasts */}
            </GeneralContextProvider>
        </div>
    );
}

export default Dashboard;
