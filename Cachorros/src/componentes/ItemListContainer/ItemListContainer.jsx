import { Center, Heading, Flex, Spinner } from "@chakra-ui/react";
//import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { db } from "../../config/firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]); //se inicializa como array vacio, espera varios productos
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

 //console.log(db) // sólo console.log de la base de datos. Antes se importó.
  
  useEffect(() => {
    setLoading(true);
    const getData = async() => { // async porque espera resultados
      const coleccion = collection (db, 'productos') //definicion de variable de referencia  a la coleccion

      const queryRef = !categoryId ? // query donde si no hay categorias trae toda la colección
      coleccion : query(coleccion,where('categoria', '==', categoryId)) // si hay categoria que traiga la propiedad  categoria = al parametro de la url

      //creamos una referencia de consulta queryRef
      const response =  await getDocs(queryRef) // con metodo getDocs obtengo los documentos de uno o de otro
    //  console.log(response)

      const products = response.docs.map((doc) => { //map de la respuesta para crear un nuevo item
        const  newItem = {
          ...doc.data(), id: doc.id
        }     //creo un objeto para unir id de firebase  y propiedades del producto que estan separados
        return newItem
      })
      setProductos(products) // actualiza estado con array products, para pasrselo a Itemlist
      setLoading(false)
    }


    getData() 
  }, [categoryId]);
 
  return (
    <Flex direction={"column"} justify={"center"} align={"Center"}>
      <Heading mt={5}>{title}</Heading>
      {loading ? (
        <Flex justify={"center"} align={"center"} h={"50vh"}>
          <CircleLoader color="#088a91" />
        </Flex>
      ) : (
        <ItemList
          productos={productos} //nombre prop = data
        />
      )}
    </Flex>
  );
};

export default ItemListContainer;
