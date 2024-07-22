import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getProductById } from "../../data/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Box, Flex } from "@chakra-ui/react";
import { CircleLoader } from "react-spinners";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams(); //insertad el id en la ruta lo guardamos mediante useParams en la prop productId
  const [loading, setLoading] = useState(true);

  useEffect(() => { //se ejcuta solamente cuano el componente se monta
    const getData = async () => {
      const queryRef = doc(db,'productos',productId) //la funcion doc recibe base, coleccion y parametro para que firebase filtre documento por el parametro. Trase ref a la bd
      const response = await getDoc(queryRef) //no es array sino documento, se crea referencia de consulta queryRef
      console.log(response)
      const newItem = { //creamos un objeto que tiene los datos del doc + el id
        ...response.data(), id: response.id
      }
      setProduct(newItem) //actualizamos estado
      setLoading(false)

      
    }
    getData()

 //  setLoading(true);
 //  getProductById(productId)
 //    .then((data) => setProduct(data))
 //    .catch((error) => console.log(error))
 //    .finally(() => setLoading(false));
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
