import { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoListItem from './ToDoListItem';
import ToDoListForm from './ToDoListForm';

function ToDoList() {
    let [toDoListItem, setToDoListItem] = useState('');
    const [toDoListArray, setToDoListArray] = useState([]);
    
    const fetchToDoList = () => {
        axios.get('/todo').then((response) => {
            setToDoListArray(response.data);
            }).catch((error) => {
                console.log(`Error in GET: ${error}`);
                alert(`Something went wrong in GET!`);
            });

    }
    
    useEffect(() => {
        fetchToDoList();
    }, []);


    return (
        <div>
            <h2>Add a Task:</h2>
            <ToDoListForm 
                toDoListItem={toDoListItem}
                setToDoListItem={setToDoListItem}
                fetchToDoList={fetchToDoList}
            />
            <h2>To Do List:</h2>
            <ul>
                {
                    toDoListArray.map((item) => (
                        <div id="toDoList">
                            <ToDoListItem 
                                key={item.id}
                                item={item}
                                fetchToDoList={fetchToDoList}
                            />
                        </div>
                        
                    ))
                }
            </ul>
                

            
               
                
            
        </div>
       
    )

};


export default ToDoList;