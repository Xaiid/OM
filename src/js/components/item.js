import React from 'react';

class Item extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      item: props.item
    }

    this.props = props;
  }

   remove = id => {
    let position = this.state.item.items.indexOf(this.state.item.items.find(obj => id === obj.id))
    let items = this.state.item.items.slice()
    items.splice(position, 1)
    this.setState({
      item: {...this.state.item, items: items},
    })
  }

  addChild = id => {
    let item = {...this.state.item}
    item.items.push({ id: `${item.id}${this.state.item.items.length}`, items: [] })

    this.setState({
      item: item,
    })
  }

  render () {
    return (
      <li key={this.state.item.id}>
        <input
          type="text"
        />
        <button
          type="button"
          className="remove"
          onClick={() => {this.addChild(this.state.item.id)}}>Add Child</button>
        <button
          type="button"
          className="remove"
          onClick={() => {this.props.remove(this.state.item.id)}}>X</button>
        <ol>
          {this.state.item.items.map((i, index) => {
            return <Item
              key={this.state.item.id}
              add={this.addChild}
              remove={this.remove}
              item={i}
            />
          })}
        </ol>
      </li>
    )
  }
}

export default Item;
