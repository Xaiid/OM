import React, {useState} from 'react';
import List from './list.js';
import css from 'styles/Item';

function Item({item, remove, update, ...props}){

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
    <li key={item.id} >
       {editMode && (<input
        value={item.text}
        onChange={(e) => {update(e.target.value, item.id)}}
        type="text"
      />)}
      {!editMode && <label> {item.text}</label>}
      {editMode && <button
          type="button"
          className={css.cancel}
          onClick={cancel}><i class="fas fa-window-close"></i></button>}
      <button
          type="button"
          className="edit"
          onClick={toggleEditMode}>{editMode ? <i className="fas fa-save"></i> : <i className="fas fa-edit"></i>}</button>
      <button
        type="button"
        className="remove"
        onClick={() => {remove(item.id)}}>
        <i className="fas fa-trash"></i>
      </button>
      <List
        items={item.items}/>
    </li>
  )
}

export default Item;
