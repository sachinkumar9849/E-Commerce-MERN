import React from "react";
import { ITEMS_PER_PAGE } from "../../app/constants";

const Pagination = ({ handlePage, setPage, page, totalItems }) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  return (
    <>
      <div className="col-12">
        <p>
          Showing <span>{(page - 1) * ITEMS_PER_PAGE + 1}</span>to
          <span>
            {" "}
            {page * ITEMS_PER_PAGE > totalItems
              ? totalItems
              : page * ITEMS_PER_PAGE}{" "}
          </span>
          of
          <span> {totalItems} results</span>
        </p>
        <ul className="pagination mt-4">
          <li className="page-item">
            <div
              onClick={(e) => handlePage(page > 1 ? page - 1 : page)}
              className="page-link"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">«</span>
            </div>
          </li>

          {Array.from({ length: totalPages }).map((el, index) => (
            <div
              onClick={(e) => handlePage(index + 1)}
              className={`active_page ${
                index + 1 === page ? " bg-success" : "text-info"
              }`}
            >
              {index + 1}
            </div>
          ))}

          <li className="page-item">
            <div
              onClick={(e) => handlePage(page < totalPages ? page + 1 : page)}
              className="page-link"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">»</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
