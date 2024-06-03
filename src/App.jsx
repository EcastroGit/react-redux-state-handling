import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import UserInfo from "./components/UserInfo";
import Products from "./components/Products";
import Invoice from "./components/Invoice";
import { prices } from "./pricesData/prices";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div>
        <h1 style={{ textAlign: "center" }}>React - Redux</h1>
      </div>
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        <div className="container">
          <UserInfo />
        </div>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Products</h2>
          <Products />
        </div>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Invoice</h2>
          <Invoice data={prices} />
        </div>
      </div>
    </div>
  );
}

export default App;
