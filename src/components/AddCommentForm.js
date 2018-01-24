import React from 'react'
import UserForm from './UserForm'
import TextArea from './TextArea'

function AddCommentForm() {
    return(
        <div>
            <h5>Add new comment</h5>
            <UserForm min = {10} max = {50} />
            <TextArea min = {10} max = {50} label = "Text:" />
        </div>
    )
}

export default AddCommentForm