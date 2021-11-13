import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://powerful-beyond-32668.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [products]);
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner className="text-center" animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div className="my-5 p-4">
      <h2 className="mb-0 text-primary">Our Brand New Scooty</h2>
      <hr className="border-bottom border-4 border-success mx-auto w-25" />
      <Container>
        <Row className="g-4 my-3">
          {products.slice(0, 6).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
