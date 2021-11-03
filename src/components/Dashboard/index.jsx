import DropArea from "../DropArea";
import  List from "../List";
import Card from "../Card";
import { cardsData, statuses } from "../../data";
import { useState } from "react";

export default function Dashboard() {

    const [cards, setCards] = useState(cardsData);

    const onDrop = (card, monitor, status) =>{
        const changeCardStatus = statuses.find(statusItem =>statusItem.status===status);
        setCards(prev => {
            const newCards = 
                prev.filter( i => i.id !== card.id)
                    .concat({...card, status, icon:changeCardStatus.icon});
            return [...newCards];                    
        });
    };

    const moveCard = (dragIndex, hoverIndex) => {
        const card = cards[dragIndex];
        setCards(prev => {
            const newCards = prev.filter((i, index)=> index !== dragIndex);
            newCards.splice(hoverIndex, 0, card);
            return [...newCards];
        })
    }
    
    return(
        <div className="dashboard">            
            {statuses.map(status =>{
                return(
                    <div key={status.status} className="list-wrapper">
                        <div className="title-wrapper">
                            <h2 className="title" >{status.status.toUpperCase()}</h2>
                            <div className="title__color-bar" style={{background: status.color}}/>
                        </div>                        
                        <DropArea onDrop={onDrop} status={status.status}>
                            <List>
                            {cards
                                .filter(card => card.status===status.status)
                                .map((card, index)=>
                                   <Card key={card.id}
                                        card={card}
                                        index={index}
                                        moveCard={moveCard}
                                        status={status}
                                        type={card.type}/>
                                )
                            }
                            </List>
                        </DropArea>
                    </div>
                )
            })}
           
        </div>
    );
}