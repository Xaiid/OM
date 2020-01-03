import React from 'react';
import css from 'styles/Page';
import List from './components/list.js';

const emptyItems = [{ id: 0, subitems: [], text: 'Item 1' }]
export default function App() {
  return (
    <div className={css.container}>
      <h1>List</h1>
      <List items={emptyItems} root={true}/>
    </div>
  );
}
