import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    date: "",
    qty: "",
    price: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/products/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
     <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
         <li className="list-group-item">Date: {user.date}</li>
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Qunatity: {user.qty}</li>
        <li className="list-group-item">Price: {user.price}</li>
      </ul>
    </div>
  );
};

export default User;
