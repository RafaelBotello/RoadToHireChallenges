import React from "react";
import "./style.css";

function Products(props) {
  let floatr = {
    float: "right"
  };
  return (
    <div data-price={props.dataprice1} className={props.class1}>
      <div data-price={props.dataprice2} className={props.class2} />
      <b>{props.name}</b>
      <p>
        {props.description}
        <br />
        {props.colors}
        <i style={floatr}>{props.price}</i>
      </p>
    </div>
  );
}

export default Products;
