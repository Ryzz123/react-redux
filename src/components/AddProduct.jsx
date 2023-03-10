import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveProducts } from "../features/productSlice";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();
    await dispatch(saveProducts({title, price}));
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={createProduct} className="box mt-5">
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input type="text" className="input" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
