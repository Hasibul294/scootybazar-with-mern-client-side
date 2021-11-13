import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Product from "../Home/Product/Product";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://powerful-beyond-32668.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner className="text-center" animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div>
      <Navigation></Navigation>
      <div className="my-5 p-4">
        <h2 className="mb-0">Our Brand New Scooty</h2>
        <hr className="border-bottom border-4 border-success mx-auto w-25" />
        <Container>
          <Row className="g-4 my-3">
            {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllProducts;
