import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchAllProductAsync,
  fetchProductsByFiltersAsync,
  selectAllProducts,
  selectTotalItems,
} from "../productListSlice";
import { ITEMS_PER_PAGE } from "../../../app/constants";
import { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
const filters = [
  {
    id: "category",
    name: "category",
    options: [
      {
        value: "smartphones",
        label: "smartphones",
        checked: false,
      },
      {
        value: "laptops",
        label: "laptops",
        checked: false,
      },
      {
        value: "fragrances",
        label: "fragrances",
        checked: false,
      },
      {
        value: "skincare",
        label: "skincare",
        checked: false,
      },
      {
        value: "groceries",
        label: "groceries",
        checked: false,
      },
      {
        value: "home-decoration",
        label: "home decoration",
        checked: false,
      },
      {
        value: "furniture",
        label: "furniture",
        checked: false,
      },
      {
        value: "tops",
        label: "tops",
        checked: false,
      },
      {
        value: "womens-dresses",
        label: "womens dresses",
        checked: false,
      },
      {
        value: "womens-shoes",
        label: "womens shoes",
        checked: false,
      },
      {
        value: "mens-shirts",
        label: "mens shirts",
        checked: false,
      },
      {
        value: "mens-shoes",
        label: "mens shoes",
        checked: false,
      },
      {
        value: "mens-watches",
        label: "mens watches",
        checked: false,
      },
      {
        value: "womens-watches",
        label: "womens watches",
        checked: false,
      },
      {
        value: "womens-bags",
        label: "womens bags",
        checked: false,
      },
      {
        value: "womens-jewellery",
        label: "womens jewellery",
        checked: false,
      },
      {
        value: "sunglasses",
        label: "sunglasses",
        checked: false,
      },
      {
        value: "automotive",
        label: "automotive",
        checked: false,
      },
      {
        value: "motorcycle",
        label: "motorcycle",
        checked: false,
      },
      {
        value: "lighting",
        label: "lighting",
        checked: false,
      },
    ],
  },
];
const sortOptions = [
  { name: "Best Rating", sort: "rating", order: "desc", current: false },
  { name: "Price: Low to High", sort: "price", order: "asc", current: false },
  { name: "Price: High to Low", sort: "price", order: "desc", current: false },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const [page, setPage] = useState(1);
  const totalItems = useSelector(selectTotalItems);

  const handleFilter = (e, section, option) => {
    const newFilter = { ...filter };
    if (e.target.checked) {
      if (newFilter[section.id]) {
        newFilter[section.id].push(option.value);
      } else {
        newFilter[section.id] = [option.value];
      }
    } else {
      const index = newFilter[section.id].findIndex(
        (el) => el === option.value
      );
      newFilter[section.id].splice(index, 1);
    }
    console.log({ newFilter });
    setFilter(newFilter);
  };
  const handleSort = (e, option) => {
    const sort = { _sort: option.sort, _order: option.order };
    console.log({ sort });
    setSort(sort);
  };

  const handlePage = (page) => {
    console.log({ page });
    setPage(page);
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchProductsByFiltersAsync({ filter, sort, pagination }));
  }, [dispatch, filter, sort, page]);

  useEffect(()=>{
    setPage(1);
  },[totalItems,sort])

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
            <form>
              {filters.map((section) => {
                return (
                  <div className="form-check" key={section.id}>
                    {section.name}
                    {section.options.map((option, optionIdx) => {
                      return (
                        <div key={option.value}>
                          <input
                            id={`filter-mobile-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            defaultChecked={option.checked}
                            onChange={(e) => handleFilter(e, section, option)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox1"
                          >
                            {option.label}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </form>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-8"></div>
              <div className="col-lg-4">
                <div class="form-group">
                  <label for="exampleSelect">Select an option:</label>
                  {sortOptions.map((option) => (
                    <option onClick={(e) => handleSort(e, option)}>
                      {option.name}
                    </option>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              {products.map((product, index) => {
                const {
                  thumbnail,
                  category,
                  brand,
                  stock,
                  rating,
                  discountPercentage,
                  price,
                  title,
                } = product;
                return (
                  <div className="col-lg-3 mb-4" key={product.id}>
                    <div className="card custom-card">
                      <Link to="/product-detail">
                        <img
                          src={thumbnail}
                          className="card-img-top"
                          alt="Product Image"
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          ${price}
                          <span className="line_throw">
                            $
                            {Math.round(
                              product.price * (1 - discountPercentage / 100)
                            )}
                          </span>
                        </li>
                        <li className="list-group-item"> {rating}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <Pagination
                page={page}
                setPage={setPage}
                handlePage={handlePage}
                totalItems={totalItems}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;

// {Math.round(product.price*(1-product.discountPercentage/100))}
