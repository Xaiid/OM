import React, { useState, useEffect } from 'react';
import Item from './item.js';

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: props.items || [],
      root: props.root
    }
    this.update = this.update.bind(this)
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
      items: [...this.state.items, { id: this.state.items.length, items: [],  text: `Item ${this.state.items.length + 1}` }],
    })
  }

  update = (text, id) => {
    let items = this.state.items.slice()
    let index = this.state.items.indexOf(this.state.items.find(obj => id === obj.id))
    items[index]['text'] = text
    this.setState({
      items: items,
    })
  }

  addChild = id => {
    let items = this.state.items.slice()
    let index = this.state.items.indexOf(this.state.items.find(obj => id === obj.id))
    items[index]['items'].push({ id: `${items[index].id}${items[index].items.length}`, items: [], text: `Item ${items[index].items.length}` })
    this.setState({
      items: items,
    })
  }

  render () {
    return (<section>
      <button
        type="button"
        className="add"
        onClick={this.add}>{this.state.root? 'Add Item' : 'Add Sub Item'}</button>
      <ol>
        {
          this.state.items.map((i, index) => {
            return <Item
              key={this.state.items[index].id}
              remove={this.remove}
              update={this.update}
              add={this.addChild}
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
