import React, {useState} from 'react';
function ToDoList(){
    const [tasks , setTasks] = useState([]);
    const [newTask , setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !=""){
            const newTaskObj = {
                id: Date.now(),
                text: newTask,
                completed: false 
            };
        setTasks(t => [...t,newTaskObj]);
        setNewTask("");}
    }
    function delTask(i){
        const modifiedTasks = tasks.filter(task=> task.id!==i);
        setTasks(modifiedTasks);
    }
    function toggleTaskCompletion(taskId) {
        setTasks(tasks => tasks.map(task => 
            task.id === taskId ? {...task, completed: !task.completed} : task
        ));
    }
    return(
        <>
        <div className='heading' id='todo'>
            <h1 className='head'>To-Do-List <span className='emoji'>&#128203;</span></h1>
            <div>
                <input 
                    type="text"
                    placeholder='Enter a Task...'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className='add-button' onClick={addTask}>Add Task</button>
            </div>
            <ol style={{listStyle:'none'}}>
                {tasks.map((task,index) =>
            <li key={task.id} > <input className="check" type="checkbox"  checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)} disabled={!tasks.includes(task)}  /><span className='text' style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>{task.text}</span>
            <button className='del-button' onClick={()=> {delTask(task.id)}}>Delete</button>
            </li>
            )}
            </ol>
        </div>
        </>
    )
}
export default ToDoList