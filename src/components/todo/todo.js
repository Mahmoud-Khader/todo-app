import React, { useEffect, useState,useContext } from "react";
import useForm from "../../hooks/form.js";
import { v4 as uuid } from "uuid";
import List from "../list/List";
import "./todo.css";
import Form from "../form/Form.js";
import { SettingsContext } from "../../context/context.js";
const ToDo = () => {
  const settings = useContext(SettingsContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
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
