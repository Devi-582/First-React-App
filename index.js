import React from "react";
import ReactDOM from "react-dom/client";
import Paragraph from "./paragraph";
import Details from "./details";
import pic from './sun.jpg';

const Flower = () =>{
    return (
      <div>
        <Paragraph />
        <img src={pic} alt="sun flower" height={200} width={200} />
        <Details />
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Flower />);
export default Flower;

