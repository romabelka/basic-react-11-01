import React, { Component } from 'react'
import {Form, Input, Button}  from './Form';

class CommentForm extends Component {
    render() {
        return (
            <Form>
                <Input label='Name' name='Name'/>
                <Input label='Text' name='Text'/>
                <Button caption="Send" type="submit"/>
            </Form>
        )
    }
}

export default CommentForm