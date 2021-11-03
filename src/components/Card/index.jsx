import { useDrag, useDrop } from 'react-dnd';
import {useState, useRef} from 'react';
import Window from '../Window';

export default function Card({card,index, moveCard, status}) {

    const ref=useRef(null);

    const [{isDragging},drag] = useDrag(()=>({
        type:"card",
        card:{type:"card", ...card, index },
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging(),
        }),
    }));

    const [,drop]=useDrop({
        accept:"card",
        hover(card,monitor){
            if(!ref.current){
                return;
            }

            const dragIndex=card.index;
            const hoverIndex = index;

            if(dragIndex===hoverIndex){
                return;
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            // {if dragIndex is less then hoverIndex we dont  move card}
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            //and if its greater we dont move card
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(dragIndex, hoverIndex);
            card.index=hoverIndex;
        }
    });

    const [showCard, setShowCard] = useState(false);
    const onOpen = () => setShowCard(true);
    const onClose = () => setShowCard(false);

    drag(drop(ref));

    return (
        <div>
            <div 
                ref={ref} 
                className="card-wrapper"
                style={{opacity:isDragging ? 0.3 : 1}}
                onClick={onOpen}
                status={status}>    

                <header className="card-header">
                    <div className="card-bar" style={{background:status.color}}></div>
                    <h3>{card.title}</h3>
                    <i>{card.icon}</i>
                </header>            
                <p className="card-content">{card.content}</p>
            </div>
            <Window
                card={card}
                onClose={onClose}
                show={showCard}/>
        </div>
    )
};
