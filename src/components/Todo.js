const Todo = ({submitHandler}) => {
    const todoArray = [] 
        return (
            <div className="itemBox">
                {todoArray.map((item, index) => {
                    <ul
                    key={index}
                    value={item}
                    >{index}, {item}
                    </ul>
                })}
            </div>
        )
}
export default Todo;