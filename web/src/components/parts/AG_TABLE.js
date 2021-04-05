import React, { useState } from 'react'
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise'

function AG_TABLE(props) {

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

        const updateData = (data) => {
            setRowData(data);
        };

        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => updateData(data));
    };

  const searchDivStyle={backgroundColor:"#dedede",padding:10}
  const searchStyle={width:"100%",padding:"10px 20px",borderRadius:20,outline:0,
  border:"2px #1F72C6 solid",fontSize:"100%"}

  const onFilterTextChange=(e)=>{
    gridApi.setQuickFilter(e.target.value)
  }
    return (
        <div style={{ width: "100%", height: '100%' }}>
            <div style={{ height: '90%', boxSizing: 'border-box' }}>

      <div style={searchDivStyle}>
      <input type="search" style={searchStyle} onChange={onFilterTextChange} placeholder="search ....."/>
      </div>
                <div
                    id="myGrid"
                    style={{
                        height: '100%',
                        width: "100%",
                    }}
                    className="ag-theme-alpine"
                >
                    <AgGridReact
                        columnDefs={props.columns}
                        rowData={props.data}
                        rowSelection={'multiple'}
                        onGridReady={onGridReady}
                        defaultColDef={{flex: 1}}
                    />
                </div>
            </div>
        </div>
    )
}

export default AG_TABLE
