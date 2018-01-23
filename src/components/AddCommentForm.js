import React from 'react'
import UserForm from './UserForm'
import TextArea from './TextArea'

function AddCommentForm() {
    return(
        <div>
            <h5>Add new comment</h5>
            <UserForm />
            <TextArea label = "Text:" />
        </div>
    )
}

export default AddCommentForm