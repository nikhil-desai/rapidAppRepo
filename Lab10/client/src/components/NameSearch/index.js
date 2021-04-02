import React from "react";

class NameSearch extends React.Component {
  readName(event) {
    event.preventDefault();
    // Getting Name
    let element = document.querySelector("#name");
    fetch("/employees/" + element.value)
      .then((res) => {
        return res.json();
      })
      // Posting Age
      .then((processed) => {
        let reporting = document.querySelector("#reportingArea");

        if (processed.error) {
          reporting.innerHTML = processed.error;
        } else {
          reporting.innerHTML = processed.age;
        }
      });
    element.value = "";
  }
  render() {
    return (
      <div>
        <h2>Name</h2>
        <form onsubmit={this.readName}>
          <input id="name" type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NameSearch;
