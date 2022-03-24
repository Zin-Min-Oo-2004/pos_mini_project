import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="row">
        <div className="col-1 border-right p-0">
          <h1>First Part</h1>
        </div>
        <div className="col-2 border-right product_background_color">
          <div className="product_list_row">
            <div className="width-10 single_product">
              <h3>Title a san htae kyi tar pr kha bya</h3>
              <p>1000 MMK</p>
              <button className="add_to_cart">Add To Cart</button>
            </div>
            <div className="width-10 single_product">
              <h3>Title</h3>
              <p>1000 MMK</p>
              <button className="add_to_cart">Add To Cart</button>
            </div>
            <div className="width-10 single_product">
              <h3>Title</h3>
              <p>1000 MMK</p>
              <button className="add_to_cart">Add To Cart</button>
            </div>
            <div className="width-10 single_product">
              <h3>Title</h3>
              <p>1000 MMK</p>
              <button className="add_to_cart">Add To Cart</button>
            </div>
            <div className="width-10 single_product">
              <h3>Title</h3>
              <p>1000 MMK</p>
              <button className="add_to_cart">Add To Cart</button>
            </div>
            <div className="width-10 single_product">
              <h3>Title</h3>
              <p>1000 MMK</p>
              <button className="add_to_cart">Add To Cart</button>
            </div>
            <div className="width-10 single_product">
              <h3>Title</h3>
              <p>1000 MMK</p>
              <button className="add_to_cart">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="col-1">
          <h1>Third Part</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
