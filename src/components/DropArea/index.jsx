import React from "react";
import { useDrop } from "react-dnd";
import { lists } from "../../data";

export default function DropArea({children, onDrop, status}){
    const [{isOver}, drop] = useDrop({
        accept:"card",
        canDrop: (card,monitor)=>{
            const cardIndex = lists.findIndex(listItem => listItem.status === card.status);
            const listIndex = lists.findIndex(listItem => listItem.status === status);
            return [cardIndex+1, cardIndex-1, cardIndex].includes(listIndex)
        },
        drop:(card, monitor) => {
            onDrop(card, monitor, status);
        },
        colect: monitor => ({
            isOver:monitor.isOver()
        })
    });
    return(
        <div ref={drop} className="list-wrapper">            
            {React.cloneElement(children, {isOver})}
        </div>
    )
}