import React, { Component } from 'react'

class Comments extends Component {

	render() {

		// if () const commentElements = 'There are no comments yet'
		const commentElements = this.props.comments ? 

		this.props.comments.map((comment, index) => <ul>
			<li key={comment.id}>
				<div>{comment.text}</div>
				<div>User:
					<a href='#'>{comment.user}</a>
				</div>
			</li>
		</ul>)

		:

		'There are no comments yet'

		return (
			<div>{commentElements}</div>
		)
	}

}

export default Comments