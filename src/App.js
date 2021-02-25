import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import axios from 'axios'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       quantity: '',
       prod_date: '',
       variant: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/c0973a08-e659-4a94-9b71-c2686afcfc83', this.state)
    .then(response => {
      console.log(response);
    })
  }
  
  render() {
    const { name, quantity, prod_date, variant } = this.state;    
    return (
      <Container fluid className="container">
        <Header as='h2'>Zeezam Presents Production Logger</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Product Name</label>
            <input placeholder='Enter the name of the product' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Quantity</label>
            <input placeholder='Enter the quantity of product created' type="number" name = "quantity" value = {quantity} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Production Date</label>
            <input placeholder='Enter the date of production in dd/mm/yyyy format' type="date" name = "prod_date" value = {prod_date} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Variant</label>
            <input placeholder='Enter the variant of the product, if available' type="text" name = "variant" value = {variant} onChange={this.changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}