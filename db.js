const todo = {
   data:[
]
}
var db;
export default db = {
   addTodo : (obj)=>  
{
   todo.data.push(obj);
}
,
deleteTodo : (index) =>
{
   // const index = todo.indexOf(todoText)
   todo.data.splice(index,1)
}
,
getTodo : ()=>
{
   return todo
}
,
updateTodo : (index,newTodoText)=>
{
   // const index = todo.data.indexOf(todoText);
   todo.data[index].todo = newTodoText;
   console.log(todo)
}
}
