// import DropArea from "../DropArea";
// import  List from "../List";
// import Card from "../Card";
// import { cardsData, statuses } from "../../data";
// import { useState } from "react";

// const Dashboard =() => {

//     const [cards, setCards] = useState(cardsData);

//     const onDrop = (card, monitor, status) =>{
//         const changeCardStatus = statuses.find(statusItem =>statusItem.status===status);
//         setCards(prev => {
//             const newCards = 
//                 prev.filter( i => i.id !== card.id)
//                     .concat({...card, status, icon:changeCardStatus.icon});
//             return [...newCards];                    
//         });
//     };

//     const moveCard = (dragIndex, hoverIndex) => {
//         const card = cards[dragIndex];
//         setCards(prev => {
//             const newCards = prev.filter((i, index)=> index !== dragIndex);
//             newCards.splice(hoverIndex, 0, card);
//             return [...newCards];
//         })
//     }
    
//     return(
//         <div className="dashboard">            
//             {statuses.map(status =>{
//                 return(
//                     <div key={status.status} className="list-wrapper">
//                         <div className="title-wrapper">
//                             <h2 className="title" >{status.status.toUpperCase()}</h2>
//                             <div className="title__color-bar" style={{background: status.color}}/>
//                         </div>                        
//                         <DropArea onDrop={onDrop} status={status.status}>
//                             <List>
//                             {cards
//                                 .filter(card => card.status===status.status)
//                                 .map((card, index)=>
//                                    <Card key={card.id}
//                                         card={card}
//                                         index={index}
//                                         moveCard={moveCard}
//                                         status={status}
//                                         type={card.type}/>
//                                 )
//                             }
//                             </List>
//                         </DropArea>
//                     </div>
//                 )
//             })}
           
//         </div>
//     );
// }

// export default Dashboard;

import List from '../List';
import DropArea from '../DropArea';
import Card from '../Card';
import {statuses, cardsData} from '../../data';
import { useState} from 'react';

const Dashboard = () => {
    const [items, setItems] =  useState(cardsData);
    console.log(items)
    
    const onDrop = (item, monitor, status) =>{
      const changeStatus = statuses.find(statItem => statItem.status === status);
  
      setItems(prev => {
          const newItems = prev
              .filter(i => i.id !== item.id)
              .concat({ ...item, status, icon: changeStatus.icon });
          return [ ...newItems ];
      });
    };
    
    const moveItem = (dragIndex, hoverIndex) => {
      const item = items[dragIndex]
      setItems(prev => {
        const newItems = prev.filter((i, idx) => idx !== dragIndex);
          newItems.splice(hoverIndex, 0, item);
          return  [ ...newItems ];
      });
    }

    return (
      <div className={"dashboard"}>
        {statuses.map(s => {
          return (
            <div key={s.status} className={"list-wrapper"}>   
              <div className="title-wrapper">
                <h2 className={"title"}>{s.status.toUpperCase()}</h2>
                <div className="title__color-bar" style={{background: s.color}}/>
              </div>  
              
                <DropArea onDrop={onDrop} status={s.status}>                
                  <List>
                    {items
                      .filter(item => item.status === s.status)
                        .map((item,idx) =>                         
                       <Card 
                            key={item.id} 
                            item={item} 
                            index={idx} 
                            moveItem={moveItem} 
                            status={s} 
                            type={item.type}/> )
                      }
                  </List>
                </DropArea>
            </div>
          );
        })}
      </div>      
    )
}

export default Dashboard;