import React from "react";
import { products } from "../products/productBoxes";
import Product from "../Product";

const MainDisplay = ({
  selectedProduct,
  setProduct,
  cart,
  addToCart,
  prodArrIndex,
  changeProductArr,
}) => {
  const addingToCart = () => {
    const copy = [...cart];
    copy.push(products[prodArrIndex][selectedProduct]);
    addToCart(copy);
    console.log(copy);
  };

  const nextPageList = () => {
    if (prodArrIndex >= products.length - 1) {
      changeProductArr(0);
    } else {
      changeProductArr(prodArrIndex + 1);
    }
  };

  const prevPageList = () => {
    if (prodArrIndex <= 0) {
      changeProductArr(products.length - 1);
    } else {
      changeProductArr(prodArrIndex - 1);
    }
  };

  return (
    <>
      <div className="title">
        <h2>Products</h2>
      </div>
      <div className="page-btn-container">
        <button onClick={() => prevPageList()}>Prev page</button>
        <button onClick={() => nextPageList()}>Next page</button>
      </div>
      <div className="giant-flex">
        <div className="product-container">
          <div className="main-product">
            <Product
              img={products[prodArrIndex][selectedProduct].img}
              desc={products[prodArrIndex][selectedProduct].description}
              price={products[prodArrIndex][selectedProduct].price}
            />
          </div>
          <div className="lower-portion">
            {products[prodArrIndex].map((el, i) => {
              if (i !== selectedProduct) {
                return (
                  <Product
                    key={i}
                    img={el.img}
                    desc={el.description}
                    price={el.price}
                    handler={() => setProduct(i)}
                  />
                );
              }
            })}
          </div>
        </div>
        <div>
          <div>
            <h2>Product Information</h2>
          </div>
          {products[prodArrIndex].map((el, i) => {
            if (i === selectedProduct) {
              return <p>{el.details}</p>;
            }
          })}
          <button onClick={() => addingToCart()}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default MainDisplay;
