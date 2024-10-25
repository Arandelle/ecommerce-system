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
  ];

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
      <Pagination />
    </div>
  );
};

export default InventoryManagement;
