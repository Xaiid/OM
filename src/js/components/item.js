import React from 'react';

class Item extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      item: props.item,
      editMode: false
    }

    this.props = props;
  }

  toggleEditMode = () => {
     this.setState({
      editMode: !this.state.editMode
    })
  }

   remove = id => {
    let position = this.state.item.items.indexOf(this.state.item.items.find(obj => id === obj.id))
    let items = this.state.item.items.slice()
    items.splice(position, 1)
    this.setState({
      item: {...this.state.item, items: items},
    })
   }

   edit = id => {
    let position = this.state.item.items.indexOf(this.state.item.items.find(obj => id === obj.id))
    let items = this.state.item.items.slice()

    this.setState({
      item: {...this.state.item, items: items},
    })
  }

  addChild = id => {
    let item = {...this.state.item}
    item.items.push({ id: `${item.id}${this.state.item.items.length}`, items: [], text: '' })

    this.setState({
      item: item,
    })
  }

 update = (e, id) => {
   let items = this.state.item.items.slice()
   let index = this.state.item.items.indexOf(this.state.item.items.find(obj => id === obj.id))
   items[index]['text'] = e.target.value

    this.setState({
      item: {...this.state.item, items: items},
    })
  }


  render () {
    return (
      <li key={this.state.item.id}>
        {this.state.editMode && (<input
          value={this.state.item.text}
          onChange={(e) => {this.props.update(e, this.state.item.id)}}
          type="text"
        />)}
        {!this.state.editMode && (<label>{this.state.item.text}</label>)}
        <button
          type="button"
          className="add"
          onClick={() => {this.addChild(this.state.item.id)}}>Add Sub Item</button>
        <button
          type="button"
          className="edit"
          onClick={this.toggleEditMode}>{this.state.editMode ? 'Save': 'Edit'}</button>
        <button
          type="button"
          className="remove"
          onClick={() => {this.props.remove(this.state.item.id)}}>X</button>
        <ol>
          {this.state.item.items.map((i, index) => {
            return <Item
              key={`${this.state.item.id}${index}`}
              add={this.addChild}
              remove={this.remove}
              update={this.update}
              item={i}
            />
          })}
        </ol>
      </li>
    )
  }
}

export default Item;
