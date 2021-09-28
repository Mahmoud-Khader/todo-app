import React from 'react';
import { Card, Button, FormGroup, InputGroup } from '@blueprintjs/core';
import Auth from '../login/auth';

export default function Form({ handleSubmit, handleChange }) {
  return (
    <Card className="mainItem" style={{backgroundColor:"#76c393"}}>
      <h3>Add To Do Item 🛠️</h3>
      <form onSubmit={handleSubmit}>
        <FormGroup labelFor="text-input" labelInfo="(required)">
          <label>To Do Item 📜</label>
          <InputGroup
            onChange={handleChange}
            name="text"
            id="text-input"
            placeholder="Item Details"
          />
          <label>Assigned To ✋</label>
          <InputGroup
            onChange={handleChange}
            name="assignee"
            id="text-input"
            placeholder="Assignee Name"
          />
          <div className='Difficulty'>
          <lable>Difficulty 💪</lable>
          <input

            onChange={handleChange}
            defaultValue={1}
            type="range"
         
            min={1}
            max={5}
            name="difficulty"
          />
          </div>
          <Auth capability="create">
<div >
          <Button style={{backgroundColor:"gray"}} className='button' type="submit">Add Item</Button>
          </div>
          </Auth>
        </FormGroup>
      </form>
    </Card>
  );
}