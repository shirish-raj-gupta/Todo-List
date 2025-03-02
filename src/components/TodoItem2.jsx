function TodoItem2(){
  let todoName="Buy Sugar";
  let todoDate='03/03/2025';
  return (
  <div className="container">
    <div className="row">
  <div className="col-6">
    {todoName}
    </div>
  <div className="col-4">
    {todoDate}
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-danger">DELETE</button>
  </div>
</div>
</div>
);
}
export default TodoItem2;