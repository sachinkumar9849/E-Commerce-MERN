import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="section_title">
              <h2 className="font-weight-bold">Product List</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <select name="" id="">
              <option value="">One</option>
            </select>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-3">
                <div className="card custom-card">
                  <img
                    src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    className="card-img-top"
                    alt="Product Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Elegant Product</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: $29.99</li>
                    <li className="list-group-item">Category: Fashion</li>
                    <li className="list-group-item">In Stock: 15</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card custom-card">
                  <img
                    src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    className="card-img-top"
                    alt="Product Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Elegant Product</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: $29.99</li>
                    <li className="list-group-item">Category: Fashion</li>
                    <li className="list-group-item">In Stock: 15</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card custom-card">
                  <img
                    src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    className="card-img-top"
                    alt="Product Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Elegant Product</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: $29.99</li>
                    <li className="list-group-item">Category: Fashion</li>
                    <li className="list-group-item">In Stock: 15</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card custom-card">
                  <img
                    src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    className="card-img-top"
                    alt="Product Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Elegant Product</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: $29.99</li>
                    <li className="list-group-item">Category: Fashion</li>
                    <li className="list-group-item">In Stock: 15</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="pagination mt-4">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
