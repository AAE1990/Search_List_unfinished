import React from "react";
import SearchComponent from "./Components/SearchList";
import MOCK_DATA from "./MOCK_DATA.json";

class HomePage extends React.Component {
  render() {
    const data = MOCK_DATA;

    return (
      <div>
        <SearchComponent items={data} />
      </div>
    );
  }
}

export default HomePage;
