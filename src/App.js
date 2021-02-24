import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       age: '',
       salary: '',
       hobby: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <Container fluid className="container">
        <Header as='h2'>Production Logs - Zeezam Presents</Header>
        <Form className="form">
          <Form.Field>
            <label>Product Name</label>
            <input placeholder='Enter the product name' />
          </Form.Field>
          <Form.Field>
            <label>Quantity</label>
            <input placeholder='Product quantity' />
          </Form.Field>
          <Form.Field>
            <label>Date of Production</label>
            <input placeholder='dd/mm/yyyy' />
          </Form.Field>
          <Form.Field>
            <label>Variant</label>
            <input placeholder='Enter product variant here' />
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}