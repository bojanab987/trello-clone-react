import React, { useState } from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddCard = ({ addItem,status,icon }) => {
    const [item, setItem] = useState({type:"CARD", title:'', content:'',status:'', icon:''});
    const [showModal, setShowModal] = useState(false);    

    const handleClick = () =>{
        setShowModal(true);
    }

    const handleSubmit = (e) => {
        const {type, title, content, status, icon} = item;       
        console.log(type, title, content,status, icon)
        
        e.preventDefault();        
        addItem(item);
        setItem({type:"CARD", title:'', content:'',status:'', icon:''});
    };

    const handleChange = (e) => {
        setItem({
            ...item, 
            status:status,
            icon:icon,
            [e.target.name]:e.target.value
        })
    }

    const onClose=()=> setShowModal(false);

    return (
    <div className={"add-card"}
          status={status}
          icon={icon}>
        <button className="add-card-btn" onClick={handleClick}>+ Add Task</button>      
        <Modal
            isOpen={showModal}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}>
        
            <div className="close-btn-ctn">
                <h2 className="form-header">Add New Task...</h2>
                <button className="close-btn" onClick={onClose}>X</button>        
            </div>
            <form 
                className="form"
                onSubmit={handleSubmit}>
                
                <label className="hidden" htmlFor="status"/>
                <input className="hidden" name="status" value={status}/>
                <label className="hidden" htmlFor="icon"/>                
                <input className="hidden" name="icon" value={icon}/>

                <div className="form-input-group">
                <label htmlFor="title" className="label">Task title:</label>
                <input
                    className="input" 
                    name="title"
                    type="text" 
                    id="title" 
                    value={item.title} 
                    onChange={handleChange } />
                </div>
                <div className="form-input-group">
                <label htmlFor="content" className="label">Task description:</label>
                <textarea
                    className="input" 
                    rows="20"
                    name="content" 
                    type="text" 
                    id="title" 
                    value={item.content}
                    onChange={handleChange} />
                </div>

            
            <button className="form-save">Save Item</button>
      </form>    
    </Modal>
    </div>
  );
};

export default AddCard;
