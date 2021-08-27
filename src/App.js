import './App.css';
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";

const App = () => {
      const todoList = [
    { msg: "Hit The Gym", isDone: false },
    { msg: "Pay Bills", isDone: false },
    { msg: "Meet George", isDone: true },
    { msg: "Buy Eggs", isDone: false }
  ];
    return (
        <>
            <Header />
            <Todo list = {todoList}  />
            
            </>
    );
}

export default App;