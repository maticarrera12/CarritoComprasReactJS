import { useContext, useState } from "react";
import { CardComponent } from "../components/CardComponent";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { PaginationComponent } from "../components/PaginationComponent";

export const ProductsPage = ({ searchTerm }) => {
  const { products } = useContext(ProductContext);
  const { addProduct, removeProduct } = useContext(CartContext);

  // Paginación
  const [page, setPage] = useState(1);
  const itemPerPage = 5;

  const indexLastItem = page * itemPerPage;
  const indexFirstItem = indexLastItem - itemPerPage;

  // Filtrar productos por búsqueda
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );

  const currentProducts = filteredProducts.slice(indexFirstItem, indexLastItem);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemPerPage);

  return (
    <>
      <h2>Productos</h2>
      <hr />
      {filteredProducts.length === 0 ? (
        <p>Ningún producto coincide con tu búsqueda</p>
      ) : (
        <>
          {currentProducts.map(product => (
            <CardComponent
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              handlerAdd={() => addProduct(product)}
              handlerRemove={() => removeProduct(product.id)}
            />
          ))}
          <PaginationComponent
            count={totalPages}
            page={page}
            onChange={handleChangePage}
          />
        </>
      )}
    </>
  );
};
