import Title from './Title'

export default function List({isOver,children}){
    const className = isOver ? "highlight" : "";

    return(
        <div className={`list ${className}`}>
            <Title />
            {children}    
        </div>
    )
}