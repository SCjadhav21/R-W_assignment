import axios from "axios";

const EditProducts = (token, payload) => {
  return axios({
    method: "PATCH",
    data: payload,
    url: `https://fair-lamb-kimono.cyclic.app/product/${payload._id}`,
    headers: {
      Authorization: token,
    },
  });
};

const DeleteProduct = (token, id) => {
  return axios({
    method: "DELETE",
    url: `https://fair-lamb-kimono.cyclic.app/product/${id}`,
    headers: {
      Authorization: token,
    },
  });
};

const getData = (token) => {
  return axios({
    method: "GET",
    url: `https://fair-lamb-kimono.cyclic.app/product/myproduct`,
    headers: {
      Authorization: token,
    },
  });
};

const AddProduct = (token, payload) => {
  return axios({
    method: "POST",
    data: payload,
    url: `https://fair-lamb-kimono.cyclic.app/product/`,
    headers: {
      Authorization: token,
    },
  });
};

export { EditProducts, getData, DeleteProduct, AddProduct };
