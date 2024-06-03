import React from "react";
import { useSelector } from "react-redux";

function Invoice({ data }) {
  const email = useSelector((state) => state.user.email);
  const shirts = useSelector((state) => state.product.shirts);
  const shoes = useSelector((state) => state.product.shoes);
  const jeans = useSelector((state) => state.product.jeans);
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <i class="bi bi-receipt"></i>
        <span className="tag">Send Invoice to: </span>
        {email}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <span className="tag2">Shirts: </span>
        <span>USD $ {data.shirts}</span>
        <span className="tag2"> X </span>
        <span>{shirts}</span>
        <span className="tag2">Total: </span>
        <span>{data.shirts * shirts}</span>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <span className="tag2">Shoes: </span>
        <span>USD $ {data.shoes}</span>
        <span className="tag2"> X </span>
        <span>{shoes}</span>
        <span className="tag2">Total: </span>
        <span>{data.shoes * shoes}</span>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <span className="tag2">Jeans: </span>
        <span>USD $ {data.jeans}</span>
        <span className="tag2"> X </span>
        <span> {jeans} </span>
        <span className="tag2">Total: </span>
        <span>{data.jeans * jeans}</span>
      </div>
    </div>
  );
}

export default Invoice;
