import { Component } from "react";
import UnmountExample from "./UnmountExample";
//https://www.freecodecamp.org/news/react-component-lifecycle-methods/
export class ExampleOfLC extends Component {
    constructor() {
        super()
        this.state = { inc: 1, todo: [] }
        console.log('hello i am constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('hello i am get derived state from props')
        if (state.inc > 10) {
            return { inc: 0 }
        }
        else {
            return true
        }
    }
    shouldComponentUpdate(props,state)
    {
        if(state.inc>4)
            {
                return false
            }
            else{
                return true
            }
       
    }
    getSnapshotBeforeUpdate(preProps,prevState)
    {
        console.log('i am getsnapshotBeforeUpdate',preProps,prevState)
        return null
    }
    componentDidUpdate()
    {
        console.log('hello i am component did update')
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(item => this.setState({ todo: item })).catch((err) => console.log(err))
        console.log('hello i am component did mount')
    }
    componentWillUnmount()
    {
        console.log('hello i am unmount')
    }
    incHandler = () => {
        this.setState({ inc: this.state.inc + 1 })
    }
    render() {
        console.log('hello i am render')
        return (
            <>
            {this.state.inc===4 && <UnmountExample/>}
              {!(this.state.inc===4) && <> <h1>life cycle method</h1>
                <h1>inc:{this.state.inc}</h1>
                <button onClick={this.incHandler}>inc</button> </>}  
            </>
        )
    }
}