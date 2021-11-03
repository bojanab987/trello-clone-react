const List = ({isOver, children}) =>{
    const className = isOver ? "highlight":"";

    return (
        <div className={`list ${className}`} >
            {console.log({children})}
            {children}
        </div>
    )
}

export default List;