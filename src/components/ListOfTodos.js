const ListOfTodos = ({todoArray}) => {
        return (
            <div>
               {todoArray.map(todo => (
                <p>
                    {todo}
                </p>
               ))}
            </div>
        )
}
export default ListOfTodos;