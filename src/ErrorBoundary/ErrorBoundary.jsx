import React, { Component } from 'react'
import ErrorModel from './ErrorModel';

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
 
  
    componentDidCatch(error, errorInfo) {
       if(error.message)
        {  
           this.setState({hasError:true})
        }
      
    }
  
    render() {
      if (this.state.hasError) {
        return <ErrorModel/>
      }
      else{
        return this.props.children;
      }
 
    }
  }
