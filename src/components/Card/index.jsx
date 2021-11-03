import { useDrag } from 'react-dnd';

export default function Card({card}) {
    const [{isDragging},drag] = useDrag(()=>({
        type:"card",
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} 
            className="card-wrapper"
            style={{opacity:isDragging ? 0.3 : 1}}>                    
            <header className="card-header">
                <h3>{card.title}</h3>
                <i>{card.icon}</i>
            </header>            
            <p className="card-content">{card.content}</p>
        </div>
    )
};
