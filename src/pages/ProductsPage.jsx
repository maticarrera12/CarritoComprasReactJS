import { useContext, useState } from "react"
import { CardComponent } from "../components/CardComponent"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"
import { PaginationComponent } from "../components/PaginationComponent"


export const ProductsPage = () => {

const {products} = useContext(ProductContext)
const {addProduct, removeProduct} = useContext(CartContext)

//paginacion

const [page, setPage] = useState(1)
const itemPerPage = 3


const indexLastItem = page* itemPerPage
const indexFirstItem = indexLastItem - itemPerPage 
const currentProducts = products.slice(indexFirstItem, indexLastItem)

const handleChangePage = (event, value)=>{
  setPage(value)
}

const totalPages = Math.ceil(products.length / itemPerPage)

  return (
    <>
    <h2>Productos</h2>
    <hr />
    
    {currentProducts.map(product => (
        <CardComponent
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        handlerAdd={()=> addProduct(product)}
        handlerRemove={()=> removeProduct(product.id)}
        />
    ))}
    <PaginationComponent
    count={totalPages}
    page={page}
    onChange={handleChangePage}
    />
    </>
  )
}
