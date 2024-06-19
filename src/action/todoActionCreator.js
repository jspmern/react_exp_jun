import { DELETE, SUBMIT, TEXT_SETTER } from "./constant"

function setTextTodoHandler(value)
{
   return  { type:TEXT_SETTER, payload: value }
}
function deleteTodoHandler(id)
{
   return { type:DELETE, payload: id }
}
function sumbitTodoHandler()
{
   return { type:SUBMIT}
}
export {setTextTodoHandler,deleteTodoHandler,sumbitTodoHandler}