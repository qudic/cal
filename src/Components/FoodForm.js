import React, { Component } from 'react';
import { Form, FormControl, Button, Table} from 'react-bootstrap';
//import Select from 'react-select';

class FoodForm extends Component {

  countrys = [
    {name: 'NETHERLANDS', value: 'NETHERLANDS'}, 
    {name: 'NORWAY', value: 'NORWAY'},
    {name: 'GERMANY', value: 'GERMANY'},
    {name: 'DENMARK', value: 'DENMARK'},
    {name: 'LUXEMBOURE', value: 'LUXEMBOURE'},
    {name: 'MONACO', value: 'MONACO'},
    {name: 'MALTA', value: 'MALTA'},
    {name: 'BELGIUM', value: 'BELGIUM'},
    {name: 'BULGARIA', value: 'BULGARIA'},
    {name: 'SWEDEN', value: 'SWEDEN'},
    {name: 'SLOVENIA', value: 'SLOVENIA'},
    {name: 'ICELAND', value: 'ICELAND'},
    {name: 'IRELAND', value: 'IRELAND'},
    {name: 'UNITEDKINGDOM', value: 'UNITEDKINGDOM'},
    {name: 'AUSTRIA', value: 'AUSTRIA'},
    {name: 'FRANCE', value: 'FRANCE'},
    {name: 'FINLAND', value: 'FINLAND'},
  ]
  
  usedtypes = [ 
    {name: 'hotel', value: 'hotel'}, 
    {name: 'restaurant', value: 'restaurant'},
    {name: 'entertainment', value: 'entertainment'},
    {name: 'exhibition', value: 'exhibition'},
    {name: 'seminar', value: 'seminar'},
    {name: 'public transport', value: 'public transport'},
    {name: 'taxi', value: 'taxi'},
    {name: 'rental car', value: 'rental car'},
    {name: 'oiling', value: 'oiling'}
  ]

  rates = [
    [6,0,0,21,21,9,9,21,0],
    [12,0,0,25,25,12,12,0,0],
    [7,19,19,19,19,19,19,19,0],
    [25,25,0,25,25,0,0,0,0],
    [3,3,17,17,17,3,3,17,17],
    [5.5,10,0,20,20,0,0,0,0],
    [7,18,0,18,18,0,0,0,0],
    [6,0,0,21,21,6,6,15.5,0],
    [9,20,0,20,20,20,0,0,20],
    [25,10,25,25,25,6,12,12.5,25],
    [0,0,0,22,22,9.5,12,0,0],
    [11,0,0,24,24,0,0,0,0],
    [9,0,0,23,23,0,0,0,0],
    [20,20,20,20,20,0,0,20,20],
    [10,10,0,20,20,10,20,20,0],
    [10,10,0,20,20,0,0,0,20],
    [10,0,0,24,24,0,10,24,20]
  ]

  
  addPerson(e) {

    let x = 0, y = 0;
    
    if (this.country.value === 'NETHERLANDS')
      x = 0;
    else if (this.country.value === 'NORWAY')
      x = 1;
    else if (this.country.value === 'GERMANY')
      x = 2;  
      else if (this.country.value === 'DENMARK')
      x = 3;  
      else if (this.country.value === 'LUXEMBOURE')
      x = 4;  
      else if (this.country.value === 'MONACO')
      x = 5;  
      else if (this.country.value === 'MALTA')
      x = 6;  
      else if (this.country.value === 'BELGIUM')
      x = 7;  
      else if (this.country.value === 'BULGARIA')
      x = 8;  
      else if (this.country.value === 'SWEDEN')
      x = 9;  
      else if (this.country.value === 'SLOVENIA')
      x = 10;  
      else if (this.country.value === 'ICELAND')
      x = 11;  
      else if (this.country.value === 'IRELAND')
      x = 12;  
      else if (this.country.value === 'UNITEDKINGDOM')
      x = 13;  
      else if (this.country.value === 'AUSTRIA')
      x = 14;  
      else if (this.country.value === 'FRANCE')
      x = 15;  
      else if (this.country.value === 'FINLAND')
      x = 16;  




    if (this.usedtype.value === 'hotel')
      y = 0;
    else if (this.usedtype.value === 'restaurant')
      y = 1;
    else if (this.usedtype.value === 'entertainment')
      y = 2; 
    else if (this.usedtype.value === 'exhibition')
      y = 3;    
    else if (this.usedtype.value === 'seminar')
      y = 4;    
    else if (this.usedtype.value === 'public transport')
      y = 5;
    else if (this.usedtype.value === 'taxi')
      y = 6; 
    else if (this.usedtype.value === 'rental car')
      y = 7;    
    else if (this.usedtype.value === 'oiling')
      y = 8;    
    

    e.preventDefault();
    const country = this.country.value;
    const usedtype = this.usedtype.value;
    const price = this.price.value;
    const return_price = this.rates[x][y] * this.price.value * 0.01;
    if(!country || !usedtype || !price) {
        alert("Please fill all fields.");
        return;
    }
    
    
      const newPerson = [country, usedtype, price, return_price];
      this.props.onAddPerson(newPerson);  
    
    
  }
  render() {   

    return (
      <Form onSubmit={this.addPerson.bind(this)}>
        
        <Table responsive>
    <thead>
      <tr>
      
        <th>country</th>
        <th>type</th>
        <th>price</th>
        <th></th>

      </tr>
      
    </thead>
    <tbody>
    <tr>
      
      <td style={{width:'30%'}}>
        <FormControl 
          value={this.props.country} 
          inputRef={ref => this.country = ref} 
          componentClass="select" placeholder="country">
          {this.countrys.map((e, key) => {
            return <option key={key} value={e.value}>{e.name}</option>
          })}
        </FormControl>
      </td>
      <td style={{width:'30%'}}>
        <FormControl
          value={this.props.usedtype} 
          inputRef={ref => this.usedtype = ref} 
          componentClass="select" placeholder="type">
          {this.usedtypes.map((e, key) => {
            return <option key={key} value={e.value}>{e.name}</option>
          })}
        </FormControl>
      </td>
      <td style={{width:'26%'}}>
        <FormControl 
          value={this.props.price} 
          inputRef={ref => this.price = ref} 
          type="number" placeholder="price" />
      </td>
      <td>
        <Button id="button-submit" bsStyle="primary" type="submit">
          &nbsp;&nbsp;+&nbsp;&nbsp;
        </Button>
      </td>
      
    </tr>
    </tbody>
  </Table>



      
            
    
            
            
    
            
    
      </Form>
    );
  }
}
  


export default FoodForm;


