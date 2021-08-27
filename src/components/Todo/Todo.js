import List from "./List";

function Todo(props) {

  const { list } = props;

  return (
    <ul id="myUL">
      {
        list.map(
          (todo , key) => {
            return (
              <List todo={todo}  idx={key} />
            )
          }
        )
      }
    </ul>
  );
}

export default Todo;
