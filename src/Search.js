import React from 'react';
import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';

export default class Search extends React.Component {
  state = {
    searchResults: {
      isSearching: false,
      isPristine: true,
      searchText: '',
      results: []
    }
  }

  processResponse = (response) => {
    const searchResults = {...response, isSearching: false, isPristine: false};
    this.setState({
      searchResults
    });
  };

	render() {
  	return (
    	<div>
        <SearchForm onSubmit={this.processResponse} />
        <SearchResults 
          {...this.state.searchResults}
        /> 
    	</div>
    );
  }	
}