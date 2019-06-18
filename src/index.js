import React from "react";
import ReactDOM from "react-dom";
import { products } from "./products";

function Product(props) {
  const { items } = props;
  return (
    <div>
      {items.map(product => (
        <div className="product" key={product.id}>
          <div className="product-image-wrapper">
            <a className="product-page-link" href={product.id}>
              <img alt={product.name} src={product.image} />
            </a>
          </div>
          <div className="buttons-wrapper">
            <button>{product.type.toUpperCase()}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Product items={products} />, rootElement);
