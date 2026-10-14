import React from "react";

function ItemList(props) {

    return (
        <>
            <div>
                <ul>
                    <li onClick={() => {
                        props.deleteFunction(props.id)
                    }}>{props.toDoItem}</li>
                </ul>
            </div>
        </>
    )
}

export default ItemList;