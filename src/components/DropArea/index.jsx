import React from "react";
import { useDrop } from "react-dnd";
import{ statuses } from "../../data";

const DropArea = ({onDrop,children,status}) =>{
    const [{isOver}, drop]=useDrop({
        accept:"CARD",
        canDrop: (item,monitor) =>{
            const itemIndex = statuses.findIndex(statItem =>statItem.status === item.status);
            const statusIndex = statuses.findIndex(statItem => statItem.status === status);
            return [itemIndex +1, itemIndex-1, itemIndex].includes(statusIndex);
        },
        drop:(item,monitor) => {
            onDrop(item,monitor,status);
        },
        collect: monitor =>({
            isOver:monitor.isOver()
        })
    });

    return(
        <div ref={drop} className={"drop-wrapper"}>
            {React.cloneElement(children, {isOver})}
        </div>
    )
}

export default DropArea;