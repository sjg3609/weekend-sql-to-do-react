import { useState, useEffect } from 'react';
import axios from 'axios';

function ToDoList() {
    const [toDoList, setToDoList] = useState([]);

    axios.get('/todo').then((response) => {
        setToDoList(response.data);
        }).catch((error) => {
            console.log(`Error in GET: ${error}`);
            alert(`Something went wrong in GET!`);
        });



    return (
        <table>
            <tr>
                <th>Task</th>
                <th>Completed</th>
                <th>Delete</th>
            </tr>

        </table>
    )

};


export default ToDoList;