import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    date: "",
    qty: "",  
    price: ""
  });

  const { name, date, qty, price } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/products", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add for Sale</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Product Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="row">
          <div className="form-group ml-3">
            <input
              type="date"
              className="form-control form-control-md"
              placeholder="Enter date"
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>&ensp;&ensp;
          <div className="form-group ">
            <input
              type="number" 
              id="quantity"
              min="1"
              max="50"
              className="form-control form-control-md"
              placeholder="Enter Available Quantity"
              name="qty"
              value={qty}
              onChange={e => onInputChange(e)}
            />
          </div>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Price for each"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
