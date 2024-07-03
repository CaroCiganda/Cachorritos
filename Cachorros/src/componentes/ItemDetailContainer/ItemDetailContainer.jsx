import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Box, Flex } from "@chakra-ui/react";
import { CircleLoader } from "react-spinners";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(productId)
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box>
      {loading ? (
        <Flex justify={"center"} align={"center"} h={"50vh"}>
          <CircleLoader color="#088a91" />
        </Flex>
      ) : (
        <Flex justify={"center"} align={"center"} h={"80vh"}>
        <ItemDetail {...product} />
        </Flex>
      )}
    </Box>
  );
};
export default ItemDetailContainer;
