import React,{Component} from 'react';

export default class Comments extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let {comment} = this.props;
		//console.dir(comment);
		return(
			<div className="Comment">
				<h4 className="userComment">{comment.user}</h4>
				<div className="textComment">{comment.text}</div>
			</div>
		);
	}
}