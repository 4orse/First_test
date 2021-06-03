import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    Stack,
    TextField,
  } from '@shopify/polaris';

class Index extends React.Component {
    state = {
        name: '',
        email:'',
        message:''
    };


  
render(){
    const {name} = this.state;
    const {email} = this.state;
    const {message} = this.state;

  return (
    <Page>
        <Layout>
            <Card sectioned>
                <Form onSubmit={this.handleSubmit}>
                    <FormLayout>
                    
                    <TextField
                        onChange={this.handleChange('name')}
                        label="name"
                        value={name}
                        type="name"
                    />
                     <TextField
                        onChange={this.handleChange('email')}
                        label="email"
                        value={email}
                        type="email"
                    />
                    <TextField
                        onChange={this.handleChange('message')}
                        label="message"
                        value={message}
                        type="message"
                    />
            <Button primary submit>Send Message</Button>
                    </FormLayout>
                </Form>
        </Card>
      </Layout>
    </Page>
  );
}

handleSubmit = (e) => {
    e.preventDefault();
     let data ={
        name:this.state.name,
        email:this.state.email,
        message:this.state.message,
    }
    axios.post('/api/forma',data)
        .then(res=>{
            this.setState({
                sent:true 
            },this.resetForm())
        })
        
        .catch(()=>{
            console.log('message not sent');
        })
    };

    



handleChange = (field) => {
    return (value)=>this.setState({[field]:value});
    };
};






export default Index;