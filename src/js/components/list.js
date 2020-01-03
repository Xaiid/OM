import React, { useState, useEffect } from 'react';
import css from 'styles/List';
import Item from './item.js';

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: props.items || [],
      root: props.root
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

  render () {
    return (<section className={this.state.items.length ? css.subitems : css.list}>
      <ol>
        {
          this.state.items.map((i, index) => {
            return <Item
              key={this.state.items[index].id}
              remove={this.remove}
              update={this.update}
              item={this.state.items[index]}
            />

          })
        }
      </ol>
      <button
        type="button"
        className={this.state.root ? css.item : css.subitem}
        onClick={this.add}>{this.state.root? <span><i className="fas fa-plus"></i> New Item</span>: <span><i className="fas fa-plus"></i> Sub Item</span> }</button>
    </section>
    )
  }
}

export default List;
