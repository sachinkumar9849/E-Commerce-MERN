import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByIdAsync, selectProductById } from "../productListSlice";
import { useParams } from "react-router";
import { addToCartAsync } from "../../cart/cartSlice";
import { selectLoggedInUser } from "../../auth/authSlice";

const ProductDetail = () => {
  const product = useSelector(selectProductById);
  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector(selectLoggedInUser)

  const handleCart = (e)=>{
    e.preventDefault()
    dispatch(addToCartAsync({...product,quantity:1, user:user.id}))

  }

  useEffect(() => {
    dispatch(fetchProductByIdAsync(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      {product && (
        <div className="container">
          <div className="row">
            <div className="col-md-6 center">
              <div className="row">
                <div className="col-12">
                  <img
                    src={product.thumbnail}
                    alt="Product Image"
                    className="product-image img-fluid w-100"
                  />
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="product_detail-img">
                        <img src={product.images[0]} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="product_detail-img">
                        <img src={product.images[2]} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="product_detail-img">
                        <img src={product.images[3]} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="product_detail-img">
                        <img src={product.images[4]} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>Availability: In Stock</p>

              <p>{product.description}</p>
              <button type="submit" onClick={handleCart} className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
