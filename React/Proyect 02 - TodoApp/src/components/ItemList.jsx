

export const ItemList = ({ data, onDeleteTodo, onToggleTodo }) => {





  return (
    <>
      {
        data.map(({ id, description, done }) => (
          <li className="list-group-item d-flex justify-content-between"
            key={id} onDoubleClick={() => onToggleTodo(id)}>
            <span className={`align-self-center ${done === true ? 'text-decoration-line-through' : ''}`}
            >{description}</span>
            <button className="btn btn-outline-danger" onClick={() => onDeleteTodo(id)}>Eliminar</button>
          </li>
        ))
      }

    </>
  )
}
