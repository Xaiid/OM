import React from 'react';
import css from 'styles/Page';
import List from './components/list.js';

export default function App() {
  return (
    <div className={css.container}>
      <List />
    </div>
  );
}
