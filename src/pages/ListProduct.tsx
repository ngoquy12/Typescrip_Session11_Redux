import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { useSelector, useDispatch } from "react-redux";
import { formatMoney } from "./../common/formatData";
import { act_add_cart } from "../actions/cartActions";

type Product = {
  listProduct: [];
  product_id: number;
  product_name: string;
  image: string;
  price: number;
  description: string;
};

const ListProduct: React.FC<{}> = () => {
  const listProduct = useSelector((product: Product) => product.listProduct);
  const dispatch = useDispatch();

  // Hàm gửi dữ liệu lên reducer
  const handleAddToCart = (product: Product) => {
    dispatch(act_add_cart(product));
  };

  return (
    <div>
      <Navbar />
      <>
        {/* List product start */}
        <section style={{ backgroundColor: "#eee" }}>
          <div className="text-center container py-5">
            <h4 className="mt-4 mb-5">
              <strong>DANH SÁCH SẢN PHẨM</strong>
            </h4>
            <div className="row">
              {listProduct.map((product: Product) => (
                <div
                  className="col-lg-4 col-md-12 mb-4"
                  key={product.product_id}
                >
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img height={300} src={product.image} className="w-100" />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-primary ms-2">New</span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="" className="text-reset">
                        <h5 className="card-title mb-3">
                          {product.product_name}
                        </h5>
                      </a>
                      <h6 className="mb-3">{formatMoney(product.price)}</h6>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-primary"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* List product end */}
        <Footer />
      </>
    </div>
  );
};

export default ListProduct;
