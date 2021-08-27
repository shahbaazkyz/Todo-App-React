function list(props) {
  const {  wantDelete, done, sendTodo } = props;
  


  return (
    <>
      
      {
        sendTodo.map(
          (value, indexx) => {
            return (
              <>
                <li
                  onClick={() => done(indexx)}
                  className={value.isDone ? "checked" : ""}
                >
                  {value.msg}
                  <span
                    className="close"
                    onClick={(ev) => {
                      ev.stopPropagation();
                      wantDelete(indexx);
                    }}
                  >
                    X
                  </span>
                </li>
              </>
            );
          }
        )
      }
{/* 
      <li key={idx} onClick={() => done(idx) }  className={todo.isDone ? "checked" : ""}>
        {todo.msg}
      <span className="close" onClick={()=>{wantDelete(idx)}} >
        x
      </span >
      </li> */}
    </>
  );
}

export default list;
 