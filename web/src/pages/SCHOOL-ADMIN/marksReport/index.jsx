import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactToPrint from "react-to-print";



const thStyle = {
    fontFamily: "Anton",
    fontWeight: "normal",
    fontStyle: "normal"
  };


  class ComponentToPrint extends React.Component {
    render() {
      return (
        <table>
          <thead style={thStyle}>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
          </thead>
          <tbody>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
export class index extends Component {
    render() {
        return (
            <div>
            <ReactToPrint
              trigger={() => <button>Print this out!</button>}
              content={() => this.componentRef}
            />
            <ComponentToPrint ref={(el) => (this.componentRef = el)} />         
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
