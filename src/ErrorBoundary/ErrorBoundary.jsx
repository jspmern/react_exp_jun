import React, { Component } from 'react'
import ErrorModel from './ErrorModel';

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    // static getDerivedStateFromError(error) {
    //     console.log('hello i am getDerived State From Error')
    //   // Update state so the next render will show the fallback UI.
    //   return { hasError: true };
    // }
  
    componentDidCatch(error, errorInfo) {
        console.log('hello i am component did catch')
      // You can also log the error to an error reporting service
    }
  
    render() {
      if (this.state.hasError) {
        console.log('dev test 2')
        // You can render any custom fallback UI
        return <ErrorModel/>
      }
      else{
        console.log('dev test 1')
        return this.props.children;
      }
 
    }
  }
