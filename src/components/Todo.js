import React ,{ useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck,faPen,faTrashCan
} from '@fortawesome/free-solid-svg-icons'


function Todo(){
    const [toDo, setToDo]=useState([]);
    // Temp State
    const [newTask,setNewTask]=useState('');
    const [updateData,setUpdateData]=useState('');
    //add task
    const addTask=()=>{
        if(newTask){
            let num = toDo.length + 1;
            let newEntry = {id: num, title: newTask, status: false}
            setToDo([...toDo, newEntry])
            setNewTask('');
        }
    }
    //delete task
    const deleteTask=(id)=>{
        let newTask=toDo.filter(task =>task.id !==id)
        setToDo(newTask);
    }
    //marking as done
    const markAsDone=(id)=>{
        let newTasks=toDo.map(task =>{
            if(task.id===id){
                return({...task, status: !task.status})
            }
            return task;
        })
        setToDo(newTasks);
    }
    //cancel update
    const cancelUpdate=()=>{
        setUpdateData('');
    }
    //change task for update
    const changeTask=(e)=>{
      let newEntry={
        id:updateData.id,
        title:e.target.value ,
        status:updateData.status ? true: false
      }
      setUpdateData(newEntry)
    }
    //update task
    const updateTask=()=>{
        let filterRecords =[...toDo].filter(task=>task.id !==updateData.id);
        let updatedObject=[...filterRecords,updateData]
        setToDo(updatedObject);
        setUpdateData('');
    }
    return(
        <div className="container App">
            <br></br>
           <h2>To do list</h2>
           <br></br>
           {/* update task */}
           {updateData && updateData ? (
            <>
             <div className="row">
            <div className="column">
                <input
                value={updateData && updateData.title} 
                onChange={(e)=>changeTask(e)}
                className="form-control form-control-lg"></input>
            </div>
            <div>
                <button className="btn btn-lg btn-success mr-20"
                onClick={updateTask}>update</button>
                <button onClick={cancelUpdate} className="btn btn-lg btn-danger">cancel</button>
            </div>
           </div>
            </>
           ):(
            <>
            {/* add task */}
           <div className="row">
            <div className="column">
                <input
                value={newTask}
                onChange={ (e) =>setNewTask(e.target.value)}
                 className="form-control form-control-lg"/>
            </div>
            <div className="colun-auto">
                <button onClick={addTask} className="btn btn-lg btn-success">AddTask</button>
            </div>

           </div>
            </>
           )}
          
           
           {/* display to do */}
           {toDo && toDo.length? '':'no tasks to do'}
           {toDo && toDo
           .sort((a , b) => a.id > b.id ? 1:-1)
           .map((task, index)=>{
            return(
               <React.Fragment key={task.id}>
                <div className="col taskBg">
                    <div className={task.status ? 'done' : ''}>
                    <span className="taskNumber">{index+1}</span>
                    <span className="taskText">{task.title}</span>
                    </div>
                    <div className="icons">
                        <span title="Fulfill / Not Fulfilled"
                        onClick={(e)=>markAsDone(task.id)}>
                            <FontAwesomeIcon icon={faCircleCheck}/>
                        </span>

                        {task.status ? null :(
                            <span title="Edit"
                            onClick={()=>setUpdateData({
                                id: task.id,
                                title: task.title,
                                status: task.status ? true:false
                            })}>
                            <FontAwesomeIcon icon={faPen}/>
                        </span>
                        )}
                        
                        <span title="Delete"
                        onClick={()=>deleteTask(task.id)}>
                            <FontAwesomeIcon icon={faTrashCan}/>
                        </span>
                    </div>
                </div>
             
               </React.Fragment>
            )
           })
           }

        </div>
    )
}
export default Todo;