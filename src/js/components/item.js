import React, { useState } from 'react';
import List from './list.js';
import css from 'styles/Item';

function Item({ item, remove, add, update, ...props }) {
  const [editMode, setEditMode] = useState(false);
  const [prevValue, setPrevValue] = useState(item.text);
  const [showChilds, setShowChilds] = useState(true);

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setPrevValue(item.text);
  };

  const cancel = () => {
    update(prevValue, item.id);
    setEditMode(false);
  };

  const toggleChilds = () => {
    if (!editMode) {
      setShowChilds(!showChilds);
    }
  };

  return (
    <li key={item.id} className={['animated', 'fadeIn'].join(' ')}>
      {editMode && (
        <input
          value={item.text}
          onChange={e => {
            update(e.target.value, item.id);
          }}
          type="text"
        />
      )}
      {!editMode && <label> {item.text}</label>}
      {editMode && (
        <button type="button" className={css.cancel} onClick={cancel}>
          <i className="fas fa-window-close" />
        </button>
      )}
      <button type="button" className="edit" onClick={toggleEditMode}>
        {editMode ? (
          <i className="fas fa-save" />
        ) : (
          <i className="fas fa-edit" />
        )}
      </button>
      <button
        type="button"
        className="remove"
        onClick={() => {
          remove(item.id);
        }}
      >
        <i className="fas fa-trash" />
      </button>
      <button type="button" className="remove" onClick={toggleChilds}>
        {showChilds && <i className="fas fa-folder-open" />}
        {!showChilds && <i className="fas fa-folder" />}
      </button>
      <div className={showChilds ? css.sublist : css.hidden}>
        <List editing={editMode} items={item.items} />
      </div>
    </li>
  );
}

export default Item;
