import React from 'react'

class Search extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			searchTerm: ''
		}
	}


	searchChange = (event) => {
		this.setState({searchTerm: event.target.value})
	}

	render() {
		return (
			<div>
				<span>
					Search Term
				</span> 
				<input value={this.state.searchTerm} onChange={this.searchChange} type="text" />
				<button onClick={() => this.props.updateFilter(this.state.searchTerm)}>Search</button>
			</div>
		)
	}
}

export default Search