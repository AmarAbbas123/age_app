import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from "./AddUser.module.css";
import Button from '../UI/Button'; 
import ErrorModel from "../UI/ErrorModel"

const AddUser = (props) => {

const [enterUsername,setEnterUsername]=useState("")
const [enterAge,setEnterAge]=useState("")
const [error,setError]=useState()

    const addUserHandler =(event) => {
        event.preventDefault();

        if(enterUsername.trim().length === 0 || enterAge.trim().length === 0)
        {
          setError({
            title:"invalid input",
            message:"please enter a valid name and age (non-empty value)"
          })
            return;  
        }
        if(+enterAge<1){
            setError({
                title:"invalid age",
                message:"please enter a valid age (> 0)"
              })
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

    const errorHandler = () => {
        setError(null)
    }

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enterUsername} onChange={usernameChangedHandler}/>
        <label htmlFor='age'>Age (years)</label>
        <input id='age' type='number' value={enterAge} onChange={ageChangedHandler} />
        <Button type='submit'>Add user</Button>
    </form>
    
    </Card>
    </div>
  )
}

export default AddUser