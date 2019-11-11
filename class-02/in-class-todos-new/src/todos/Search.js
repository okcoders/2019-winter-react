import React from 'react'
import { Button, TextField } from '@material-ui/core'

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
				<TextField variant="outlined" value={this.state.searchTerm} onChange={this.searchChange} type="text" />
				<Button color="primary" variant="contained" onClick={() => this.props.updateFilter(this.state.searchTerm)}>Search</Button>
			</div>
		)
	}
}

export default Search