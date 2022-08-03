import react from "react";

const ShowList=({editItems,deleteItem,ele})=>{
    return(
        <div className="eachItem">
        <h3>{ele.name}</h3>
        <div className="todo-btn">
            {/* icon */}
            <i className="far fa-edit" onClick={() => editItems(ele.id)}></i>
            <i className="far fa-trash-alt" onClick={() => deleteItem(ele.id)}></i>

        </div>
    </div>



    );
}

export default ShowList;