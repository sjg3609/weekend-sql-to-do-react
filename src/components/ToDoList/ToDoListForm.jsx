import axios from 'axios'

function ToDoListForm({toDoListItem, setToDoListItem, fetchToDoList}) {
    
    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/todo', {
            task: toDoListItem
        }).then((response) => {
            setToDoListItem('');
            fetchToDoList();
        }).catch((error) => {
            console.log(`Error in POST for submitForm ${error}`);
            alert('Something went wrong in POST!');
        })
    }

    

    return (
        <>
        <form onSubmit={submitForm}>
            Task: <input type="text" value={toDoListItem} onChange={(e) => setToDoListItem(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
        </>
    );
}

export default ToDoListForm;