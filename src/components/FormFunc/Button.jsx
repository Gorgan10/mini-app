import React from "@types/react";

export const Button = (props) => {
    return <button onClick={props.click}>{props.name}</button>
}