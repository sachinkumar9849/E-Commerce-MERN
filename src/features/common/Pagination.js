import React from "react";
import { ITEMS_PER_PAGE } from "../../app/constants";

const Pagination = ({ handlePage, setPage, page, totalItems }) => {
  return (
    <>
      <div className="col-12">
        <p>
          Showing <span>{(page - 1) * ITEMS_PER_PAGE + 1}</span>to
          <span> {page * ITEMS_PER_PAGE>totalItems?totalItems: page * ITEMS_PER_PAGE} </span>of
          <span> {totalItems} results</span>
        </p>
        <ul className="pagination mt-4">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>

          {Array.from({ length: Math.ceil(totalItems / ITEMS_PER_PAGE) }).map(
            (el, index) => (
              <div
                onClick={(e) => handlePage(index + 1)}
                className={`active_page ${
                  index + 1 === page ? " bg-success" : "text-info"
                }`}
              >
                {index + 1}
              </div>
            )
          )}

          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
