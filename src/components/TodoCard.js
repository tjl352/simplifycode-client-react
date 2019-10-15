import React, {useState, useEffect} from 'react';

function TodoCard() {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/todos')
      .then(res => res.json())
      .then(todos => {
        setTodos([...todos]);
        setIsLoaded(!isLoaded);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div className="col-sm-12">
      {todos.map(todo => (
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{todo.title}</h5>
              <small className="text-muted">{todo.date}</small>
            </div>
            <p className="mb-1">{todo.description}</p>
            <small className="text-muted">{todo.date}</small>
          </a>
        </div>
      ))}
    </div>
  );
}
export default TodoCard;
