import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from "react-bootstrap-table2-editor";
import product from "mockdata/products";

const columns = [
  {
    dataField: "date",
    text: "Date",
    sort: true,
    editable: false
  },
  {
    dataField: "task",
    text: "Task",
    sort: true,
    validator: (newValue, row, column) => {
      if (newValue.length === 0) {
        return {
          valid: false,
          message: "Value cannot be Empty"
        };
      }
      return true;
    }
  },
  {
    dataField: "status",
    text: "Status",
    sort: true
  },
  {
    dataField: "activities",
    text: "Activities",
    sort: true
  },
  {
    dataField: "duration",
    text: "Duration",
    sort: true
  },
  {
    dataField: "notes",
    text: "Notes",
    sort: true
  }
];
const defaultSorted = [
  {
    dataField: "date",
    order: "desc"
  }
];
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Displaying {to} of {size} records
  </span>
);
const options = {
  paginationSize: 7,
  pageStartIndex: 0,
  alwaysShowAllBtns: true, // Always show next and previous button
  withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: "First",
  prePageText: "Back",
  nextPageText: "Next",
  lastPageText: "Last",
  nextPageTitle: "First page",
  prePageTitle: "Pre page",
  firstPageTitle: "Next page",
  lastPageTitle: "Last page",
  showTotal: true,
  paginationTotalRenderer: customTotal,
  sizePerPageList: [
    {
      text: "7",
      value: 7
    },
    {
      text: "10",
      value: 10
    },
    {
      text: "All",
      value: product.length
    }
  ]
};
const indication = () => {
  return "No Data";
};
function Table() {
  const [products] = useState(product);
  return (
    <>
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={paginationFactory(options)}
        cellEdit={cellEditFactory({ mode: "dbclick", blurToSave: true })}
        bordered={false}
        noDataIndication={indication}
      />
    </>
  );
}

export default Table;
