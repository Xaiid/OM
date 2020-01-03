import React, { useState, useEffect } from 'react';
import css from 'styles/List';
import Item from './item.js';
import * as uuid from 'uuid/v1';

function List({ root, items, editing, ...props }) {
  const [itemList, setList] = useState(items || []);

  const remove = id => {
    let position = itemList.indexOf(itemList.find(obj => id === obj.id));
    let items = itemList.slice();
    items.splice(position, 1);
    setList(items);
  };

  const add = () => {
    setList([...itemList, { id: uuid(), items: [], text: `New Item` }]);
  };

  const update = (text, id) => {
    let items = itemList.slice();
    let index = itemList.indexOf(itemList.find(obj => id === obj.id));
    items[index]['text'] = text;
    setList(items);
  };

  return (
    <section
      className={[
        itemList.length ? css.subitems : css.list,
        root ? css.root : ''
      ].join(' ')}
    >
      <ol>
        {itemList.map((i, index) => {
          return (
            <Item
              key={itemList[index].id}
              remove={remove}
              update={update}
              item={itemList[index]}
            />
          );
        })}
      </ol>

      <button
        type="button"
        className={[
          root ? css.item : css.subitem,
          editing ? css.hidden : ''
        ].join(' ')}
        onClick={add}
      >
        {root ? (
          <span>
            <i className="fas fa-plus" /> New Item
          </span>
        ) : (
          <span>
            <i className="fas fa-plus" /> Sub Item
          </span>
        )}
      </button>
    </section>
  );
}

export default List;
