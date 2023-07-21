import React, { useEffect, useState } from "react";
import {
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AddProduct } from "./ApiProductRequest";
import { useSelector } from "react-redux";

const AddProducts = ({ ad, setReload, reload, setAd }) => {
  const [modalData, setModalData] = useState({
    product_name: "",
    product_image: "",
    colors_avl: "",
    product_price: "",

    product_desc: "",
  });
  const store = useSelector((store) => store);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handelChange = (e) => {
    let { value, name, type } = e.target;

    if (type === "number") {
      value = +value;
    }

    setModalData({ ...modalData, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    AddProduct(store.data.token, modalData)
      .then((res) => {
        onClose();
        setReload(!reload);
        setAd(!ad);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add product Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handelSubmit}>
            <FormLabel>product name</FormLabel>
            <Input
              ref={initialRef}
              placeholder="product name"
              value={modalData?.product_name}
              name="product_name"
              onChange={handelChange}
              isRequired
            />
            <FormLabel>product Image Url</FormLabel>
            <Input
              placeholder="product Image Url"
              value={modalData?.product_image}
              name="product_image"
              onChange={handelChange}
              isRequired
            />
            <FormLabel>product Price (in lacs)</FormLabel>
            <Input
              placeholder="product product_price"
              value={modalData?.product_price}
              name="product_price"
              onChange={handelChange}
              type="number"
              isRequired
            />
            <FormLabel>Colors avl</FormLabel>
            <Input
              placeholder="product colors_avl"
              value={modalData?.colors_avl}
              name="colors_avl"
              onChange={handelChange}
              type="text"
              isRequired
            />
            <FormLabel>Product Desc</FormLabel>
            <Input
              placeholder="product description"
              value={modalData?.product_desc}
              name="product_desc"
              onChange={handelChange}
              type="text"
              isRequired
            />

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddProducts;
