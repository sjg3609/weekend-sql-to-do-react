import { useState, useEffect } from 'react';
import axios from 'axios';

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
            <h2>To Do List:</h2>
            <ul>
                {
                    toDoListArray.map((item) => (
                        <div id="toDoList">
                            <li key={item.id}>{item.task}</li>
                            <button onClick={(e) => completeTask()}>Complete</button>
                        </div>
                        
                    ))
                }
            </ul>
                

            
               
                
            
        </div>
       
    )

};


export default ToDoList;