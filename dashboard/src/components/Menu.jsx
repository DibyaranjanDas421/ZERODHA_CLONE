// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

// function Menu() {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdown, setIsProfileDropdown] = useState(false);

//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//   };

//   const handleProfileClick = () => {
//     setIsProfileDropdown(!isProfileDropdown);
//   };

//   const menuClass = "menu";
//   const activeMenuClass = "menu selected";

//   return (
//     <div className="menu-container">
//       <img src={logo} style={{ width: "50px" }} alt="Logo" />
//       <div className="menus">
//         <ul>
//           <li>
//             <Link style={{ textDecoration: 'none' }} to="/" onClick={() => handleMenuClick(0)}>
//               <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
//             </Link>
//           </li>
//           <li>
//             <Link style={{ textDecoration: 'none' }} to="/orders" onClick={() => handleMenuClick(1)}>
//               <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
//             </Link>
//           </li>
//           <li>
//             <Link style={{ textDecoration: 'none' }} to="/holdings" onClick={() => handleMenuClick(2)}>
//               <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
//             </Link>
//           </li>
//           <li>
//             <Link style={{ textDecoration: 'none' }} to="/positions" onClick={() => handleMenuClick(3)}>
//               <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
//             </Link>
//           </li>
//           <li>
//             <Link style={{ textDecoration: 'none' }} to="/funds" onClick={() => handleMenuClick(4)}>
//               <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
//             </Link>
//           </li>
//           <li>
//             <Link style={{ textDecoration: 'none' }} to="/apps" onClick={() => handleMenuClick(5)}>
//               <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick}>
//           <div className="avatar">ZU</div>
//           <p className="username">USERID</p>
//         </div>
//         {isProfileDropdown && <div className="dropdown-content">Profile Options Here</div>}
//       </div>
//     </div>
//   );
// }

// export default Menu;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const [userInfo, setUserInfo] = useState({ username: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await axios.get('/users', { withCredentials: true });
        
        console.log(data);

        if (response.status === 200 && response.data) {
          const { username, email } = response.data;
          if (username && email) {
            setUserInfo({ username, email });
          } else {
            console.warn('User info response does not have expected properties:', response.data);
          }
        } else {
          console.warn('Unexpected response status:', response.status);
        }
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    };

    fetchUserInfo();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  const handleLogout = async () => {
    try {
      await axios.post('/logout', {}, { withCredentials: true });
      navigate('/login');
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };
  

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src={logo} style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
          <div className="avatar" style={{ backgroundColor: '#ddd', width: '40px', height: '40px', borderRadius: '50%', textAlign: 'center', lineHeight: '40px' }}>
            {userInfo.username[0]?.toUpperCase() || 'U'}
          </div>
          <p className="username" style={{ margin: 0 }}>{userInfo.username || 'Loading...'}</p>
        </div>
        {isProfileDropdown && (
          <div className="dropdown-content">
            <p><strong>Username:</strong> {userInfo.username}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
