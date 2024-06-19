import { createContext, useReducer } from "react";
import reducer from "../reducers/todoReducer";
import { deleteTodoHandler, setTextTodoHandler, sumbitTodoHandler } from "../action/todoActionCreator";
export let todoContextValue = createContext()
function TodoContext({ children }) {
    let initalState = {
        text: '',
        todo: []
    }
    let [todo, dispatch] = useReducer(reducer, initalState)
    //function for setting the text
    function setTodoHandler(value) {
        dispatch(setTextTodoHandler(value))
    }
    //function for deleteHandler
    function todoDeleteHandler(id) {
        dispatch(deleteTodoHandler(id))
    }
    //function for submit handler
    function todoSubmitHandler() {
        dispatch(sumbitTodoHandler())
    }
    return <todoContextValue.Provider value={{ ...todo, setTodoHandler, todoSubmitHandler, todoDeleteHandler }}>
        {children}
    </todoContextValue.Provider>
}

export default TodoContext