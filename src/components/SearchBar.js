import React from 'react';
import App from './App';

class SearchBar extends React.Component {
  state = { input: '' };

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.input);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              value={this.state.myInput}
              type='text'
              placeholder='Type Something...'
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
