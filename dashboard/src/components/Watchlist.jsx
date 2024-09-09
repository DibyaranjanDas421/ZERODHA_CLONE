// import React from 'react';
// import { useState } from 'react';
// import { watchlist } from '../data/data';
// import {Tooltip,Grow} from "@mui/material";
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import GeneralContext from './GeneralContext';


// function Watchlist() {
//     return (  
//         <div className="watchlist-container">
//         <div className="search-container">
//           <input
//             type="text"
//             name="search"
//             id="search"
//             placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
//             className="search"
//           />
//           <span className="counts"> {watchlist.length}/ 50</span>
//         </div>
  
//         <ul className="list">
//          {watchlist.map((stock,index)=>{
//           return(
//             <WatchListItem stock={stock} key={index} />
//           )
//          })}
//         </ul>
//       </div>
//     );
// }


// export default Watchlist ;

// const WatchListItem =({stock})=>{
//   const [showWatchListAction,setShowWatchListAction]=useState(false);
//   const handelMouseEnter=(e)=>{
//     setShowWatchListAction(true);
//   }
//   const handelMouseLeave=(e)=>{
//     setShowWatchListAction(false);
//   }
//   return(
//     <li onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseLeave}>
//       <div className="item">
//         <p className={stock.isDown ? "down":"up"}>{stock.name}</p>
//         <div className="itemInfo">
//           <span className='percent'>{stock.percent}</span>
//           {stock.isDown ?(
//             <KeyboardArrowDownIcon className='down'/>
//           ) :<KeyboardArrowUpIcon className='down'/> }
//            <span className='price'>{stock.price}</span>
//         </div>
//       </div>
//       {showWatchListAction && <WatchlistActions uid={stock.name}/>}
//     </li>
//   )
// }

// const WatchlistActions=({uid})=>{
//   return(
//     <span className='actions'>
//       <span>
//         <Tooltip title='Buy(B)' placement='top' arrow TransitionComponent={Grow}>
//           <button className='buy'>Buy</button>
//         </Tooltip>
//         <Tooltip title='Sell(s)' placement='top' arrow TransitionComponent={Grow}>
//           <button className='sell'>Sell</button>
//         </Tooltip>
//         <Tooltip title='Sell(s)' placement='top' arrow TransitionComponent={Grow}>
//          <button className='action'><BarChartOutlinedIcon className='icon'/></button> 
//         </Tooltip>
//         <Tooltip title='Sell(s)' placement='top' arrow TransitionComponent={Grow}>
//          <button className='action'><MoreHorizOutlinedIcon className='icon'/></button> 
//         </Tooltip>
//       </span>

//     </span>
//   )
// }

// import React, { useState, useContext } from "react";
// import { Tooltip, Grow } from "@mui/material";
// import {
//   BarChartOutlined,
//   KeyboardArrowDown,
//   KeyboardArrowUp,
//   MoreHoriz,
// } from "@mui/icons-material";
// import GeneralContext from "./GeneralContext";
// import { watchlist } from "../data/data";

// const Watchlist = () => {
//   return (
//     <div className="watchlist-container">
//       <div className="search-container">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="counts"> {watchlist.length} / 50</span>
//       </div>

//       <ul className="list">
//         {watchlist.map((stock, index) => {
//           return <WatchListItem stock={stock} key={index} />;
//         })}
//       </ul>
//     </div>
//   );
// };

// const WatchListItem = ({ stock }) => {
//   const [showWatchlistActions, setShowWatchlistActions] = useState(false);

//   const handleMouseEnter = () => {
//     setShowWatchlistActions(true);
//   };

//   const handleMouseLeave = () => {
//     setShowWatchlistActions(false);
//   };

//   return (
//     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="item">
//         <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="down" />
//           ) : (
//             <KeyboardArrowUp className="down" />
//           )}
//           <span className="price">{stock.price}</span>
//         </div>
//       </div>
//       {showWatchlistActions && <WatchListActions uid={stock.name} />}
//     </li>
//   );
// };

// const WatchListActions = ({ uid }) => {
//   const { openBuyWindow } = useContext(GeneralContext);

//   const handleBuyClick = () => {
//     openBuyWindow(uid); // Correct usage of context to open the buy window
//   };

//   return (
//     <span className="actions">
//       <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
//         <button className="buy" onClick={handleBuyClick}>
//           Buy
//         </button>
//       </Tooltip>
//       <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
//         <button className="sell">Sell</button>
//       </Tooltip>
//       <Tooltip
//         title="Analytics (A)"
//         placement="top"
//         arrow
//         TransitionComponent={Grow}
//       >
//         <button className="action">
//           <BarChartOutlined className="icon" />
//         </button>
//       </Tooltip>
//       <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//         <button className="action">
//           <MoreHoriz className="icon" />
//         </button>
//       </Tooltip>
//     </span>
//   );
// };

// export default Watchlist;
// import React, { useState, useContext } from "react";
// import { Tooltip, Grow } from "@mui/material";
// import {
//   BarChartOutlined,
//   KeyboardArrowDown,
//   KeyboardArrowUp,
//   MoreHoriz,
// } from "@mui/icons-material";
// import GeneralContext from "./GeneralContext";
// import { watchlist } from "../data/data";

// const Watchlist = () => {
//   return (
//     <div className="watchlist-container">
//       <div className="search-container">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="counts"> {watchlist.length} / 50</span>
//       </div>

//       <ul className="list">
//         {watchlist.map((stock, index) => {
//           return <WatchListItem stock={stock} key={index} />;
//         })}
//       </ul>
//     </div>
//   );
// };

// const WatchListItem = ({ stock }) => {
//   const [showWatchlistActions, setShowWatchlistActions] = useState(false);

//   const handleMouseEnter = () => {
//     setShowWatchlistActions(true);
//   };

//   const handleMouseLeave = () => {
//     setShowWatchlistActions(false);
//   };

//   return (
//     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="item">
//         <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="down" />
//           ) : (
//             <KeyboardArrowUp className="down" />
//           )}
//           <span className="price">{stock.price}</span>
//         </div>
//       </div>
//       {showWatchlistActions && <WatchListActions uid={stock.name} />}
//     </li>
//   );
// };

// const WatchListActions = ({ uid }) => {
//   const { openBuyWindow, openSellWindow } = useContext(GeneralContext); // Get openSellWindow from context

//   const handleBuyClick = () => {
//     openBuyWindow(uid);
//   };

//   const handleSellClick = () => {
//     openSellWindow(uid); // Open the sell window when the sell button is clicked
//   };

//   return (
//     <span className="actions">
//       <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
//         <button className="buy" onClick={handleBuyClick}>
//           Buy
//         </button>
//       </Tooltip>
//       <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
//         <button className="sell" onClick={handleSellClick}>
//           Sell
//         </button>
//       </Tooltip>
//       <Tooltip
//         title="Analytics (A)"
//         placement="top"
//         arrow
//         TransitionComponent={Grow}
//       >
//         <button className="action">
//           <BarChartOutlined className="icon" />
//         </button>
//       </Tooltip>
//       <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//         <button className="action">
//           <MoreHoriz className="icon" />
//         </button>
//       </Tooltip>
//     </span>
//   );
// };

// export default Watchlist;
import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";

const Watchlist = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={stock.name} />
        ))}
      </ul>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => setShowWatchlistActions(true);
  const handleMouseLeave = () => setShowWatchlistActions(false);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  const handleBuyClick = () => openBuyWindow(uid);
  const handleSellClick = () => openSellWindow(uid);

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={handleBuyClick}>
          Buy
        </button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell" onClick={handleSellClick}>
          Sell
        </button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};

export default Watchlist;
