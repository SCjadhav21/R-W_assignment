import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import { DeleteProduct, EditProducts, getData } from "./ApiProductRequest";
import { useSelector } from "react-redux";

const Product = () => {
  const store = useSelector((store) => store);
  let [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [reload, SetReload] = useState(false);
  const [modalData, setModalData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addproducts, setAddproducts] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    setLoading(true);

    getData()
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, [reload]);

  const handelModal = (el) => {
    setModalData(el);
    onOpen();
  };

  const handelChange = (e) => {
    let { value, name, type } = e.target;
    if (type === "number") {
      value = +value;
    }

    setModalData({ ...modalData, [name]: value });
  };

  const handelEdit = (e) => {
    e.preventDefault();
    setLoading(true);
    EditProducts(store.data.token, modalData)
      .then((res) => {
        onClose();
        SetReload(!reload);
      })
      .finally(() => setLoading());
  };

  function handelDelete(id) {
    setLoading(true);
    DeleteProduct(store.data.token, id)
      .then((res) => {
        SetReload(!reload);
      })
      .finally(() => setLoading());
  }

  if (loading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="green">
          <Thead>
            <Tr>
              <Th>Sr_No</Th>
              <Th>product_name</Th>
              <Th>product_image</Th>
              <Th>product_price</Th>
              <Th>colors_avl</Th>

              <Th>product_desc</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item, index) => {
              return (
                <Tr key={item._id}>
                  <Td>{index + 1}</Td>
                  <Td>{item.product_name}</Td>
                  <Td>
                    <Image src={item.product_image} />
                  </Td>
                  <Td>{item.product_price}</Td>
                  <Td>{item.colors_avl.toUpperCase()}</Td>

                  <Td maxW="300px" overflow={"auto"}>
                    {item.product_desc}
                  </Td>

                  <Td>
                    <Button
                      leftIcon={<EditIcon />}
                      colorScheme="pink"
                      variant="solid"
                      onClick={() => handelModal(item)}
                    >
                      Edit
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      leftIcon={<DeleteIcon />}
                      colorScheme="red"
                      variant="solid"
                      onClick={() => handelDelete(item._id)}
                    >
                      Delete
                    </Button>{" "}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit product Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handelEdit}>
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

              <FormLabel>product description</FormLabel>
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
      <Button m="20px" onClick={() => setAddproducts(true)}>
        Add More products
      </Button>
    </div>
  );
};

export default Product;
