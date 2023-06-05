import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from "./AddUser.module.css";
import Button from '../UI/Button'; 

const AddUser = (props) => {

const [enterUsername,setEnterUsername]=useState("")
const [enterAge,setEnterAge]=useState("")

    const addUserHandler =(event) => {
        event.preventDefault();

        if(enterUsername.trim().length === 0 || enterAge.trim().length === 0)
        {
            window.alert("input field empty")
            return;  
        }
        if(+enterAge<1){
            window.alert("age less then 1")
            return;
        }

        props.onAddUser(enterUsername,enterAge);
        setEnterUsername("")
        setEnterAge("")
    }

    const usernameChangedHandler=(event)=>{
        setEnterUsername(event.target.value)
    }

    const ageChangedHandler=(event)=>{
        setEnterAge(event.target.value)
       
    }

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enterUsername} onChange={usernameChangedHandler}/>
        <label htmlFor='age'>Age (years)</label>
        <input id='age' type='number' value={enterAge} onChange={ageChangedHandler} />
        <Button type='submit'>Add user</Button>
    </form>
    
    </Card>
  )
}

export default AddUser