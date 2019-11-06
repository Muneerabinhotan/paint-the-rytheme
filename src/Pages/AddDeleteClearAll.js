import React from 'react';

const AddDeleteClearAll = (props) =>{
    const List = props.adding.map((img,index)=>{
        return (<div> <img key={index} className="image" src={img} alt=""/>
        <button onClick={()=>props.deleteItem(img)}>Delete Item</button>
        </div> )
    })

    // const clearList = props.clear.map((img,index)=>{
    //     return <img key={index} className="image" src={img} alt=""/>
    // })
    return(
        <div>
            <h2>List</h2>
            {List}
            <button onClick={props.clearList}>Clear List!</button>

      
        </div>
    );
}

export default AddDeleteClearAll;