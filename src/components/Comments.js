import React, { Component } from 'react'

class Comments extends Component {

	render() {

		const commentElements = this.props.comments.map((comment, index) => <ul>
			<li key={comment.id}>
				<div>{comment.text}</div>
				<div>User:
					<a href='#'>{comment.user}</a>
				</div>
			</li>
		</ul>)

		return (
			<div>{commentElements}</div>
		)
	}

}

export default Comments