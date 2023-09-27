import React from "react";

 export default function TodoItem(list)
 {

    return (<div className="List" onClick={()=>{{list.onChecked(list.id)}}}>
            <h3>{list.text}</h3>
    </div>)
 }