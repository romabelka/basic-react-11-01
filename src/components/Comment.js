import React, {Component} from 'react'

export default Comment = ({comment} = props) => {
    return (
        <p> 
            <strong> {comment.user} </strong>
            {comment.text} 
        </p>
    )
}