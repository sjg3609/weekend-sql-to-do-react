import axios from 'axios';


function ToDoListItem({item, fetchToDoList}) {


    const completeTask = (e) => {
        axios.put(`/todo/${item.id}`).then((response) => {
            console.log(response);
            fetchToDoList();
        }).catch((error) => {
            console.log(`Error in completeTask, ${error}`);
            alert('Something went wrong in completeTask!');
        });
    }

    const deleteTask = (e) => { 
        console.log(`delete task ${item.id}`);
        axios.delete(`/todo/${item.id}`).then((response) => {
            fetchToDoList();
        }).catch((error) => {
            console.log(`Error in deleteTask ${error}`);
            alert('Something went wrong in deleteTask!');
        })
    }

    const getDecoration = () => {
        if(item.complete === true) {
            return 'line-through';
        } else {
            return 'none';
        }
    }

    return (
        <>
            <li style={{textDecoration: getDecoration()}}>{item.task}</li>
                 <button onClick={(e) => completeTask()}>Complete</button>
                <button onClick={(e) => deleteTask()}>Delete</button>
        </>
    );
}

export default ToDoListItem;