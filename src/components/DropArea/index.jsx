import React from "react";
import { useDrop } from "react-dnd";
import { statuses } from "../../data";

export default function DropArea({onDrop,children, status}){
    const [{isOver}, drop] = useDrop({
        accept:"card",
        canDrop: (card,monitor)=>{
            const cardIndex = statuses.findIndex(statusItem => statusItem.status === card.status);
            const statusIndex = statuses.findIndex(statusItem => statusItem.status === status);
            return [cardIndex +1, cardIndex -1, cardIndex].includes(statusIndex);
        },
        drop:(card, monitor) => {
            onDrop(card, monitor, status);
        },
        colect: monitor => ({
            isOver:monitor.isOver()
        })
    });
    return(
        <div ref={drop} className="drop-wrapper">            
            {React.cloneElement(children, {isOver})}
        </div>
    )
}