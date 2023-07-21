import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Box,
  Center,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
const AllProduct = () => {
  let store = useSelector((store) => store);
  let [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let data = axios
      .get("https://fair-lamb-kimono.cyclic.app/product")
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

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
      <Box>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={10}>
          {data?.map((item) => {
            return (
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"space-evenly"}
                p="20px"
                boxShadow={
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                }
              >
                <Center
                  boxShadow={
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                  }
                  h="40%"
                >
                  <Image
                    w="90%"
                    h="50%"
                    src={item.product_image}
                    alt={item.product_name}
                  />
                </Center>
                <Text maxH={"100px"} overflow={"hidden"} fontSize={"25px"}>
                  {item.product_name}
                </Text>

                <Text fontSize={"25px"} fontWeight={"bold"}>
                  Price : {item.product_price}
                </Text>
                <Text fontSize={"20px"} fontWeight={"bold"}>
                  Colors_Avilable : {item.colors_avl.toUpperCase()}
                </Text>
                <Text maxH={"100px"} overflow={"auto"} fontWeight={"bold"}>
                  Description : {item.product_desc}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default AllProduct;
