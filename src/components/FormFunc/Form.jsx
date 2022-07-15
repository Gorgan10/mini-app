import React, {useState} from "react";
import {Input} from "../FormClass/Input";
import {Button} from "../FormClass/Button";


export const Form = () => {
    // state = {
    //     name: 'Click',
    //     value: '',
    //     messages: [],
    //     visible: true
    // }

    const [name] = useState('click')
    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([])
    const [visible, setVisible] = useState(true)

    const handleClick = () => {
        setMessages([...messages, value])
        setValue('')
    }

    const handleChange = (ev) => {
        setValue(ev.target.value)
    }

    return <>
        <button onClick={() => setVisible(!visible)}>
            {visible ? 'hide' : 'show'}
        </button>
        {visible && <ul>
            {messages.map(message => <li>{message}</li>)}
        </ul>}

        <Input change={handleChange} value={value}/>
        <Button name={name} click={handleClick}/>
    </>

}