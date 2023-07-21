import axios from "axios";

const EditProducts = (token, payload) => {
  return axios({
    method: "PATCH",
    data: payload,
    url: `http://localhost:8080/product/${payload._id}`,
    headers: {
      Authorization: token,
    },
  });
};

const DeleteProduct = (token, id) => {
  return axios({
    method: "DELETE",
    url: `http://localhost:8080/product/${id}`,
    headers: {
      Authorization: token,
    },
  });
};

const getData = () => {
  return axios.get("http://localhost:8080/product");
};

const AddProducts = (token, payload) => {
  return axios({
    method: "POST",
    data: payload,
    url: `http://localhost:8080/product/`,
    headers: {
      Authorization: token,
    },
  });
};

export { EditProducts, getData, DeleteProduct, AddProducts };
