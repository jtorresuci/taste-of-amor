import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import dayjs from "dayjs";

function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/get-orders");
        setOrders(response.data.orders);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async (orderId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/delete-order/${orderId}`
      );
      console.log(response.data);
      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ overflowX: "auto", background: "#fff" }}>
      {/* <Paper> */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Option</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>{order.phone}</TableCell>
                <TableCell>{dayjs(order.date).format("MM/DD/YYYY")}</TableCell>
                <TableCell>{dayjs(order.time, "HH:mm:ss").format("h:mm A")}</TableCell>
                <TableCell>{order.address}</TableCell>
                <TableCell>{order.city}</TableCell>
                <TableCell>{order.state}</TableCell>
                <TableCell>{order.message}</TableCell>
                <TableCell>{order.option}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(order._id)}
                    sx={{ background: "#e91e63" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      {/* </Paper> */}
    </div>
  );
}

export default OrdersTable;
