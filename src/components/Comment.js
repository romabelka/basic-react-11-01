import React, {Component} from 'react'

export default Comment = ({comment} = props) => {
    return (
        <li> 
            <p> {comment.user} </p>
            {comment.text} 
        </li>
    )
}