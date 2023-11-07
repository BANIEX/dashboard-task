import "./MainPageThirdLayer.css";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";


const MainPageThirdLayer = () => {
  const data = [
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },
    {
      Items: "Luxury Female Handbag",
      Price: 4000,
      Quantity: "baniex",
      Status: "completed",
      Date: "10/11/2023",
    },

  
  ];
  const [rowData, setRowData] = useState(data);
  const gridRef = useRef();
  const [columnDefs, setColumnDefs] = useState([
    { field: "Items" },
    { field: "Price" },
    { field: "Quantity" },
    { field: "Status"},
    { field: "Date"}
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
  }));

  return (
    <div className="main_page_third_layer">
      <div className="table_container">
        <div className="table_container_top">
          <div>Recent Orders</div>
          <div>Export CSV</div>
        </div>
        <div className="table_container_bottom">
          <div className="ag-theme-alpine" style={{ width: 1000, height: 700 }}>
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              animateRows={true}
              rowSelection="multiple"
              defaultColDef={defaultColDef}
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default MainPageThirdLayer;
