import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class TableData extends Component { 
  onDelete(item) {
      this.props.deletePerson(item);
      
  }
  
  render() {
    

    
    const row = this.props.data.map((item) =>
    <tr key={item.id}>
      <td key={item.country}>{item.country}</td>
      <td key={item.usedtype}>{item.usedtype}</td>
      <td key={item.price}>{item.price}</td>
      <td key={item.return_price}>{item.return_price}</td>
      
      <td><Button onClick={this.onDelete.bind(this, item)} bsStyle="danger">&nbsp;&nbsp;-&nbsp;&nbsp;</Button></td>
    </tr>
    
    );
    return (
    <Table responsive>
    <thead>
      <tr>
      
        <th>country</th>
        <th>type</th>
        <th>price</th>
        <th>return</th>
        <th></th>

      </tr>
      
    </thead>
    <tbody>
    {row}
    </tbody>
    <thead>
      <tr>
      
        <th>total</th>
        <th></th>
        <th>{this.props.total.price}</th>
        <th>{this.props.total.return_price}</th>
        <th>{/*{this.props.total.return_price > 0 ? Math.ceil(this.props.total.return_price / this.props.total.price * 10000) / 100 : ""}%*/}</th>

      </tr>
      
    </thead>
  </Table>
    );
  }
}

export default TableData;


