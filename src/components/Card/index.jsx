import { useDrag, useDrop} from "react-dnd";
import {Fragment, useState, useRef } from "react";
import Window from "./../Window";

const Card = ({item, index, moveItem, status}) =>{

    const ref=useRef(null)
    const [{isDragging}, drag] = useDrag({
        type:"CARD",
        item:{
            type:"CARD",
            ...item,
            index
        },
        
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const [,drop] = useDrop({
        accept:"CARD",
        hover(item,monitor) {
            if(!ref.current){
                return;
            }

            const dragIndex=item.index;
            const hoverIndex = index;

            if(dragIndex===hoverIndex){
                return;
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            // {if dragIndex is less then hoverIndex we dont  move item}
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    });

    const [showCardContent,setShowCardContent]=useState(false);
    const onOpen = () => setShowCardContent(true);
    const onClose=()=> setShowCardContent(false);

    drag(drop(ref));    
    return (
        <Fragment>
            <div
                className={"card-wrapper"}
                ref={ref}
                style={{opacity: isDragging ? 0.3 : 1}}
                onClick={onOpen}
                >
                <header className="card-header">
                    <div className={"card-bar"} style={{background: status.color}} />
                    <h3 className={"card-title"}>{item.title}</h3>
                    <p className={"card-status"}>{item.icon}</p>
                </header>
                
                <p className={"card-content"}>{item.content}</p>
                
            </div>
            <Window
                item={item}
                onClose={onClose}
                show={showCardContent}/>
        </Fragment>
    )
};

export default Card;