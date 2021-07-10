import React from "react";
import "../App.css";

class SearchForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text == "") return;
    this.props.onSubmit(this.state.text, 1);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          className="search-input"
          placeholder={
            this.props.categoria === "peliculas"
              ? "Escriba una película..."
              : "Escriba una serie..."
          }
        />
        <button onClick={this.handleSubmit} className="submit-search">
          Buscar
        </button>
      </form>
    );
  }
}

export default SearchForm;
