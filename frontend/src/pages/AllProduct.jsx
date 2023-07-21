import React from "react";
import { useSelector } from "react-redux";

const AllProduct = () => {
  let store = useSelector((store) => store);
  console.log(store);
  return <div>AllProduct</div>;
};

export default AllProduct;
