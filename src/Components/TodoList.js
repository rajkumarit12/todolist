import React from "react";

function Todo({ list }) {
    return (
        <React.Fragment>
            <h1>Todo - {list.length}</h1>
            <ul>
                {list.map(({ itemId, displayText }) => {
                    return (
                        <li key={itemId}>{displayText}</li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default Todo;