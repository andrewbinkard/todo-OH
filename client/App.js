import React from "react";
import GroceryItem from "./GroceryItem";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gList: [],
      GroceryItem: "",
    };
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  componentDidMount() {}

  addItem() {}

  updateItem(event) {
    console.log(event.target.value);
    event.preventDefault();
    this.setState({
      listItem: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.updateItem} placeholder="Add Item" />
        <button>Submit</button>
        <ul>
          <GroceryItem stuff={this.state.gList} />
        </ul>
      </div>
    );
  }
}
