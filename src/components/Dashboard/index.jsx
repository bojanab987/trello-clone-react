import List from '../List';
import DropArea from '../DropArea';
import Card from '../Card';
import {statuses, cardsData} from '../../data';
import { useState, useEffect } from 'react';
import AddCard from '../AddCard';

const Dashboard = () => {
    const [items, setItems] =  useState(cardsData);    

    const addItem = (item) =>{
      setItems([...items, item]);
    }
  
    useEffect(()=>{
      const items=JSON.parse(localStorage.getItem('items'));
      if(items){
        setItems(items)
      }
    }, []);
  
    useEffect(()=>{
      localStorage.setItem('items', JSON.stringify(items))
    }, [items]);
    
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
                          type={item.type}
                        /> 
                      )
                    }
                      <AddCard 
                        addItem={addItem}
                        status={s.status}
                        icon={s.icon} 
                      />
                  </List>
                </DropArea>
            </div>
          );
        })}
      </div>      
    )
}

export default Dashboard;