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
  }

  componentDidMount(axios
    .get("/home")
    .then(results => {


      this.setState({
        gList: results;
      });
    })
    .catch((err)=> {console.log(error)};)

  addItem() { let data = state.groceryItem;
    // console.log(this.state.groceryItem);
    axios
      .post("/post", { data })
      .then(response => {
        this.setState({
          gList: [...this.state.gList, data],
          groceryItem: ""
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    document.getElementById("GroceryInput").focus();}

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
