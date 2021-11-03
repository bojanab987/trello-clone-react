import Title from './Title'
export default function List({children}){

    return(
        <div className="list">
            <Title />
            {children}    
        </div>
    )
}