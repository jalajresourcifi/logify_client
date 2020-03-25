import React from "react";
import { Link } from "react-router-dom";
const pagination = props => {
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="kt-portlet">
            <div className="kt-portlet__body">
              <div className="kt-pagination kt-pagination--brand">
                <ul className="kt-pagination__links">
                  <li className="kt-pagination__link--first">
                    <Link to="">
                      <i className="fa fa-angle-double-left kt-font-brand"></i>
                    </Link>
                  </li>
                  <li className="kt-pagination__link--next">
                    <Link to="">
                      <i className="fa fa-angle-left kt-font-brand"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="">...</Link>
                  </li>
                  <li>
                    <Link to="">29</Link>
                  </li>
                  <li>
                    <Link to="">30</Link>
                  </li>
                  <li className="kt-pagination__link--active">
                    <Link to="">31</Link>
                  </li>
                  <li>
                    <Link to="">32</Link>
                  </li>
                  <li>
                    <Link to="">33</Link>
                  </li>
                  <li>
                    <Link to="">34</Link>
                  </li>
                  <li>
                    <Link to="">...</Link>
                  </li>
                  <li className="kt-pagination__link--prev">
                    <Link to="">
                      Link <i className="fa fa-angle-right kt-font-brand"></i>
                    </Link>
                  </li>
                  <li className="kt-pagination__link--last">
                    <Link to="">
                      Link{" "}
                      <i className="fa fa-angle-double-right kt-font-brand"></i>
                    </Link>
                  </li>
                </ul>
                <div className="kt-pagination__toolbar">
                  <select className="form-control kt-font-brand">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  <span className="pagination__desc">
                    Displaying 10 of 230 records
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default pagination;
