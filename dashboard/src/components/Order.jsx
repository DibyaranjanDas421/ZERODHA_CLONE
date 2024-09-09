import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import axios
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Order = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3004/allOrder", { withCredentials: true });
        console.log(response.data); // Debugging line
        setAllOrders(response.data);
      } catch (err) {
        console.log("Error fetching orders:", err);
      }
    };
    fetchAllOrders();
  }, []);

  const getModeColor = (mode) => {
    switch (mode) {
      case 'BUY':
        return 'green';
      case 'SELL':
        return 'red';
      default:
        return 'black'; // Default color if mode is neither BUY nor SELL
    }
  };

  return (
    <div className="orders">
      <h3 className="title">Holdings ({allOrders.length})</h3>
      <div className="no-orders">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Mode</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.name}
                  </TableCell>
                  <TableCell align="right">{order.qty}</TableCell>
                  <TableCell align="right">{order.price.toFixed(2)}</TableCell>
                  <TableCell align="right" style={{ color: getModeColor(order.mode) }}>
                    {order.mode}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Order;
