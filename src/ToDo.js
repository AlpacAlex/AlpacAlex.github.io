import React, { useState } from "react";
import { Paper, Grid, Box, Checkbox, Input } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Delete } from "@material-ui/icons";
import styles from "./myStyle";



function ToDo({ todo, toggleTask, removeTask, updateTask }) {
    //console.log(todo)
    //console.log(todo.isShow)
    const [changeValue, setChangeValue] = useState(todo.task)
    const validInputText = /^[\w\s]{1,18}$/gm;

    const handleChangeValue = (e) => {
        //console.log(e.target);
        const newTextInput = e.currentTarget.value;
        //let newText = newTextInput + newText
        //console.log(todo.id);
        
        
        setChangeValue(newTextInput)
        
        if (e.keyCode === 13) //27 - esc 13 - enter
        {
            const isValid = validInputText.test(newTextInput);
            if (isValid) {
                updateTask(todo.id, newTextInput)
            } else {
                setChangeValue(todo.task)
            }
            document.activeElement.blur()
        } else if (e.keyCode === 27) {
            setChangeValue(todo.task)
            document.activeElement.blur()
        }
    }

    
    return (
        <Grid item xs={12}>
            <Paper elevation={2} style={styles.ToDo.Paper}>
                <Checkbox 
                    checked={todo.complete ? true : false}
                    onChange={()=>{}} 
                    onClick={() => toggleTask(todo.id)}
                    color="secondary"
                />
                <Input 
                    value={changeValue} 
                    disableUnderline={true}
                    onChange={handleChangeValue} 
                    onKeyDown={handleChangeValue}
                    style={{ width: "64%" }}
                />
                <Box component="span" style={styles.ToDo.Date} textAlign="right" m={1}>{new Date(todo.id).toLocaleDateString()}</Box>
                
                <IconButton
                    style={styles.ToDo.Icon}               
                    color="secondary"
                    aria-label="Delete"
                    onClick={() => removeTask(todo.id)}
                >
                    <Delete fontSize="small" />
                </IconButton>
            </Paper>
        </Grid> 
    );
    
}


export default ToDo;