import React, { useEffect, useState,useContext } from "react";
import useForm from "../../hooks/form.js";
import { v4 as uuid } from "uuid";
import List from "../list/List";
import "./todo.css";
import Form from "../form/Form.js";
import { SettingsContext } from "../../context/context.js";
import superagent from "superagent";
import { LoginContext } from "../../context/loginContext.js";

const ToDo = () => {
  const API = "https://todo-backend-5.herokuapp.com"
  const settings = useContext(SettingsContext);
  const loginContext=useContext(LoginContext)

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  useEffect( async () => {
    try {
      const res = await superagent.get(`${API}/api/v1/todo`)
      .set('Authorization', 'Bearer ' + loginContext.token)
        setList(res.body)
        console.log(res);

  } catch (error) {
      alert('Invalid Render');
  }

  }, [loginContext.isUpdated,settings.showCompleted, settings.itemsPerPage]);

  async function addItem(item) {
    console.log(list);
    // item.id = uuid();
    item.complete = false;
    

      console.log(loginContext.token);

      let obj = {
        toDoItem: item.text,
        assignedTo:item.assignee,
        difficulty:item.difficulty,
        complete:item.complete,
      }
    try {
      console.log(item.text);
      const res = await superagent.post(`${API}/api/v1/todo`)
      .send(obj)
      .set('Authorization', 'Bearer ' + loginContext.token)
      console.log(res);
      console.log(list);
  } catch (error) {
      alert('Invalid data');
  }
setList([...list, item]);
  }

  async function deleteItem(id) {
    console.log(id);
    try {
      const res = await superagent.delete(`${API}/api/v1/todo/${id}`)
      .set('Authorization', 'Bearer ' + loginContext.token)
      const items = list.filter(item => item.id !== id);
      setList(items);
      console.log("items>>>>",items);
      console.log("delete>>>>>",res);

  } catch (error) {
      alert('Invalid delete');
  }

  }

  async function toggleComplete(id) {
    console.log(id);
    let updatedItem;
  const items = list.map(item => {
    if (item.id == id) {
      item.complete = !item.complete;
      updatedItem=item;
    }
    return item;
  });
  
 
    const res = await superagent.put(`${API}/api/v1/todo/${id}`)
    .send(updatedItem)
    .set('Authorization', 'Bearer ' + loginContext.token)
    loginContext.setIsUpdated(!loginContext.isUpdated);
    
    // setList([...list, updatedItem]);
}


  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete);
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete.length}`;
  }, [list,settings.showCompleted]);


  return (
    <>
      <header style={{ width: "1000px", margin: "0 auto" }}>
        <nav
          className="bp3-navbar .modifier "
          style={{ color: "white", backgroundColor: "rgb(31 17 31)" }}
        >
          <h2>To Do List: {incomplete.length} Items Pending, and {list.length - incomplete.length} Completed</h2>
        </nav>
      </header>
      <div className="div-flex">
         <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
        <div>
          <List list={list} incomplete={incomplete} toggleComplete={toggleComplete} deleteItem={deleteItem}/>
        </div>
      </div>
    </>
  );
};

export default ToDo;
