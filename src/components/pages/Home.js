import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    loadproducts();
  }, []);

  const loadproducts = async () => {
    const result = await axios.get("http://localhost:3003/products");
    setproducts(result.data.reverse());
  };

  const deleteproducts = async id => {
    await axios.delete(`http://localhost:3003/products/${id}`);
    loadproducts();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date </th>
              <th scope="col">Quantity Available</th>
              <th scope="col">Price(in RS)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.date}</td>
                <td>{user.qty}</td>
                <td>{user.price}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/products/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/products/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteproducts(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
