import React, { useState, useEffect } from 'react';
import Item from './item.js';

class List extends React.Component {
  constructor(props) {
    super(props)

    this.emptyItems = [{ id: 0, text: 'HOLA', items: [] }]

    this.state = {
      items: this.emptyItems,
    }
  }

  remove = id => {
    let position = this.state.items.indexOf(this.state.items.find(obj => id === obj.id))
    let items = this.state.items.slice()
    items.splice(position, 1)
    this.setState({
      items: items,
    })
  }

  add = () => {
    this.setState({
      items: [...this.state.items, { id: this.state.items.length, items: [] }],
    })
  }

  render () {
    return (<section>

      <button
        type="button"
        className="add"
        onClick={this.add}>Add Item</button>
      <ol>
        {
          this.state.items.map((i, index) => {
            return <Item
              key={this.state.items[index].id}
              remove={this.remove}
              item={this.state.items[index]}
            />

          })
        }
      </ol>
    </section>
    )
  }
}

export default List;
