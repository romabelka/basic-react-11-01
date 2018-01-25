import React, { Component } from 'react'
import {Form, Input, Button}  from './Form'
import validate from '../decorators/validate' 

class InputUserName extends Component {
    static defaultProps = {
        label: 'Name',
        name: 'Name'
    }

    render() {
        const label = this.props.label && (<label>{this.props.label}</label>);
        const InputComponent = validate(Input)
        const attrs = this.props
        return (
            <div>
                {label}
                <InputComponent {...attrs}/>
            </div>
        )
    }
}

class InputUserText extends Component {
    static defaultProps = {
        label: 'Text',
        name: 'Text'
    }

    render() {
        const label = this.props.label && (<label>{this.props.label}</label>);
        const InputComponent = validate(Input)
        const attrs = this.props
        return (
            <div>
                {label}
                <InputComponent {...attrs}/>
            </div>
        )
    }
}

class CommentForm extends Component {
    render() {
        return (
            <Form>
                <InputUserName />
                <InputUserText />
                <Button caption="Send" type="submit"/>
            </Form>
        )
    }
}

export default CommentForm