import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import Toolbar from "./Toolbar";
import Pagination from "./Pagination";

const InventoryManagement = () => {
  const HeaderData = ["Id", "Name", "Price", "Quantity", "Status", "Action"];

  const products = [
    {
      id: 123,
      name: "pencil",
      price: 25,
      quantity: 100,
      status: "in stock",
    },
    {
      id: 123,
      name: "pencil",
      price: 25,
      quantity: 100,
      status: "in stock",
    },
    {
      id: 123,
      name: "pencil",
      price: 25,
      quantity: 100,
      status: "in stock",
    },
    {
      id: 123,
      name: "pencil",
      price: 25,
      quantity: 100,
      status: "in stock",
    },
    {
      id: 123,
      name: "pencil",
      price: 25,
      quantity: 100,
      status: "in stock",
    },
    {
      id: 123,
      name: "pencil",
      price: 25,
      quantity: 100,
      status: "in stock",
    },

    {
      id: 123,
      name: "pencil",
      price: 25,
      quantity: 100,
      status: "in stock",
    },
    {
      id: 123,
      name: "pencil",
      price: 25,
      quantity: 100,
      status: "in stock",
    },
    {
      id: 123,
      name: "pencil",
      price: 25,
      quantity: 100,
      status: "in stock",
    },
    {
      id: 123,
      name: "pencil",
      price: 25,
      quantity: 100,
      status: "in stock",
    },
    {
      id: 123,
      name: "pencil",
      price: 25,
      quantity: 100,
      status: "in stock",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [next, setNext] = useState(false);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const renderRow = (products) => {
    return (
      <>
        <td className="px-6 py-4 whitespace-nowrap">{products.id}</td>
        <td className="px-6 py-4 whitespace-nowrap">{products.name}</td>
        <td className="px-6 py-4">{products.price}</td>
        <td className="px-6 py-4">{products.quantity}</td>
        <td className="px-6 py-4">{products.status}</td>
        <td className="px-6 py-4">
          <button onClick={() => alert("Delete clicked")}>Delete</button>
        </td>
      </>
    );
  };

  return (
    <div className="p-2">
      <Toolbar />
      <Table
        headers={HeaderData}
        data={products}
        renderRow={renderRow}
        emptyMessage={"Table is empty"}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        products={products}
      />
    </div>
  );
};

export default InventoryManagement;
