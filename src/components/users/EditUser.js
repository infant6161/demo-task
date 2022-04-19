import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/products/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/products/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
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
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
