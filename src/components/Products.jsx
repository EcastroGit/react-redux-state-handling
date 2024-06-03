import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShirts, addShoes, addJeans } from "../redux/productSlice";

function Products() {
  const address = useSelector((state) => state.user.address);
  const shirts = useSelector((state) => state.product.shirts);
  const shoes = useSelector((state) => state.product.shoes);
  const jeans = useSelector((state) => state.product.jeans);
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <i class="bi bi-truck"></i>
        <span className="tag">Ship to: </span>
        {address}
      </div>
      <div className="input">
        <label>Shirts amount:</label>
        <input
          className="input-number"
          type="input"
          pattern="\d*"
          inputMode="numeric"
          value={shirts}
          onChange={(event) => dispatch(addShirts(event.target.value))}
        />
      </div>
      <div className="input">
        <label>Shoes amount:</label>
        <input
          className="input-number"
          type="input"
          pattern="\d*"
          inputMode="numeric"
          value={shoes}
          onChange={(event) => dispatch(addShoes(event.target.value))}
        />
      </div>
      <div className="input">
        <label>Jeans amount:</label>
        <input
          className="input-number"
          type="input"
          pattern="\d*"
          inputMode="numeric"
          value={jeans}
          onChange={(event) => dispatch(addJeans(event.target.value))}
        />
      </div>
    </div>
  );
}

export default Products;
