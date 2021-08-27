function list(props) {
  const { todo , idx } = props;

  return (
    <>
      <li key={idx} >{todo.msg}</li>
    </>
  );
}

export default list;
