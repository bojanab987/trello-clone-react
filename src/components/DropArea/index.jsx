import React from "react";

export default function DropArea({children}){

    return(
        <div className="list-wrapper">            
            {React.cloneElement(children)}
        </div>
    )
}