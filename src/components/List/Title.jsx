
export default function Title({list}){

    return(
        <div className="title-wrapper">
            <h2 className="title">{list.status}</h2>
            <div className="title__color-bar" style={{background: list.color}}/>
        </div>
    )
}