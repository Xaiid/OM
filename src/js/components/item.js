import React, {useState} from 'react';
import List from './List.js';
import '../../styles/Page.css';


function Item({item, remove, add, update, addChild, ...props}){

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }


  return (
    <li key={item.id} className="Page">
       {editMode && (<input
        value={item.text}
        onChange={(e) => {update(e, item.id)}}
        type="text"
      />)}
      {!editMode && <label> {item.text}</label>}
      <button
          type="button"
          className="edit"
          onClick={toggleEditMode}>{editMode ? 'Save': 'Edit'}</button>
      <button
        type="button"
        className="remove"
        onClick={() => {remove(item.id)}}>X</button>
      <List items={item.items}/>
    </li>
  )
}

export default Item;
