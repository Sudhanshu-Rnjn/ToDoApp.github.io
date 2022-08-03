import React, { useEffect, useState } from "react";
import "./style.css"

const Mainpage = () => {

    // accessing local data 

    const getLocalData = () => {
        const lists = localStorage.getItem("mytolist");

        if(lists){
            return JSON.parse(lists);
        }
        else{
            return [];
        }
    }
    // local Storage.........................................
  

    const [inputdata, setInputdData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [editItem, setEditItem] = useState([]);
    const [togglebtn, setToggleBtn] = useState(false);

    // Adding Items
    const additem = () => {
        if (!inputdata) {
            alert("Add some item")
        }
        else if (inputdata && togglebtn) {
            setItems(items.map((ele) => {
                if (ele.id === editItem) {
                    return { ...ele, name: inputdata };
                }
                return ele;
            }))
        }
        else {
            const newDta = {
                id: new Date().getTime().toString(),
                name: inputdata
            }
            setItems([...items, newDta]);
        }
        setToggleBtn(false);
        setInputdData("");
    }

    // Removing itenssss
    const deleteItem = (index) => {
        const updateditems = items.filter((ele) => {
            return ele.id !== index;
        });
        setItems(updateditems);

    }


    const editItems = (index) => {
        const item_to = items.find((ele) => {
            return ele.id === index
        })
        setEditItem(index);

        setInputdData(item_to.name)

        setToggleBtn(true);
    }

    useEffect(() => {
        localStorage.setItem("mytolist", JSON.stringify(items));
    }, [items]);
    return (

        <div>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="" alt="image"></img>
                        <figcaption>Add Your list here✌</figcaption>
                        <div className="addItems">
                            <input type="text"
                                placeholder="Add Item"
                                className="form-control"
                                value={inputdata}
                                onChange={(e) => {
                                    setInputdData(e.target.value);
                                }}
                            ></input>
                            {togglebtn ? (<i className="fa fa-edit" onClick={additem}></i>
                            ) : (
                                <i className="fa fa-plus" onClick={additem}></i>
                            )};

                        </div>
                        {/* showItems */}


                        <div className="showItems">

                            {items.map((ele) => {
                                return (
                                    <div className="eachItem">
                                        <h3>{ele.name}</h3>
                                        <div className="todo-btn">
                                            {/* icon */}
                                            <i className="far fa-edit" onClick={() => editItems(ele.id)}></i>
                                            <i className="far fa-trash-alt" onClick={() => deleteItem(ele.id)}></i>

                                        </div>
                                    </div>

                                );
                            })}

                        </div>

                        <div className="showItems">
                            <button className="btn effect04" data-sm-link-text="Remove All "
                                onClick={() => setItems([])}
                            >


                                <span>Check List</span>
                            </button>
                        </div>
                    </figure>
                </div>

            </div>


            -
        </div>
    );

}
{/* <i class="fa-solid fa-plus"></i> */ }
export default Mainpage;