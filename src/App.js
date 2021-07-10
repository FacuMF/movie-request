import "./App.css";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoria: "peliculas",
      searchMode: false,
    };

    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory = (categoriaELegida) => {
    this.setState({
      categoria: categoriaELegida,
      searchMode: false,
    });
  };

  setSearchMode = (value) => {
    this.setState({
      searchMode: value,
    });
  };

  render() {
    return (
      <div className="App">
        <SideBar
          categoria={this.state.categoria}
          onCategoryChange={this.changeCategory}
        />
        <MainContent
          categoria={this.state.categoria}
          searchMode={this.state.searchMode}
          setSearchMode={this.setSearchMode}
        />
      </div>
    );
  }
}

export default App;
