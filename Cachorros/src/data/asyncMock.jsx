export const productos = [
    {
    id: 1,
    nombre: "Mix proteína y fibra",
    precio: 9500,
    categoria: "Grandes",
    stock: 10,
    descripcion: "Recomendado para perros de tamaño grande. Bolsa de 7kg.",
    img: 'https://media.istockphoto.com/id/1478400523/es/foto/un-perro-beagle-est%C3%A1-tirado-en-el-suelo-junto-a-un-taz%C3%B3n-de-comida-seca.webp?b=1&s=170667a&w=0&k=20&c=KbqfGd42W5Cb_iT_8OpM_UNIRiBD67j7xTEkx7BYnYc='
    },
    {
        id: 2,
        nombre: "Mix proteína y vegetal",
        precio: 8900,
        categoria: "Medianos",
        stock: 9,
        descripcion: "Recomendado para mascotas en etapa adulta. Bolsa de 7kg.",
        img: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D' 
    },
    {
        id: 3,
        nombre: "Mix proteico cachorros",
        precio: 5000,
        categoria: "Cachorros",
        stock: 5,
        descripcion: "Recomendado para mascotas en etapa de crecimiento. Bolsa de 7kg.",
        img: 'https://media.istockphoto.com/id/1470000114/es/foto/lindos-cachorros-comiendo-de-sus-cuencos.webp?b=1&s=170667a&w=0&k=20&c=9IsJSlJfJcT9OleRE-2AXIP8BtliQdS9UCoOXbbk0fY=' 
    }
    ]  

    export const getProducts = () => {
        return new Promise ( (resolve) => {
            setTimeout (() => {
                resolve (productos)
            }, 2000 )
        })
    }