import React, {useState} from 'react';
import '../../styles/Page.css';
import List from './list.js';


function Item({item, remove, add, update, ...props}){

  const [editMode, setEditMode] = useState(false);
  const [prevValue, setPrevValue] = useState(item.text);

  const toggleEditMode = () => {
    setPrevValue(item.text)
    setEditMode(!editMode)
  }

  const cancel = () => {
    update(prevValue, item.id)
    setEditMode(false)
  }

  return (
    <li key={item.id} className="Page">
       {editMode && (<input
        value={item.text}
        onChange={(e) => {update(e.target.value, item.id)}}
        type="text"
      />)}
      {!editMode && <label> {item.text}</label>}
      <button
        type="button"
        className="add"
        onClick={() => { add(item.id) }}>Add Sub Item</button>
      <button
          type="button"
          className="edit"
          onClick={toggleEditMode}>{editMode ? 'Save': 'Edit'}</button>
      {editMode && <button
          type="button"
          className="edit"
          onClick={cancel}>Cancel</button>}
      <button
        type="button"
        className="remove"
        onClick={() => {remove(item.id)}}>X</button>
      <List
        items={item.items}/>
    </li>
  )
}

export default Item;
