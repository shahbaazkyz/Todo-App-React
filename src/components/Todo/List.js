function list(props) {
  const { todo , idx } = props;

  return (
    <>
      <li key={idx} className = {todo.isDone ? "checked" : ""} >{todo.msg}</li>
    </>
  );
}

export default list;
 