import React from "react";
import style from "./searchList.module.css";

class SearchComponent extends React.Component {
  state = { searchString: "" };

  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    var searchItems = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      searchItems = searchItems.filter(function (i) {
        return i.first_name.toLowerCase().match(searchString);
      });
    }

    return (
      <div>
        <input
          className={style.inp}
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange}
          placeholder="Введите данные"
        />
        <ul className={style.list}>
          {searchItems.map(function (i) {
            return <li>{i.first_name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default SearchComponent;
