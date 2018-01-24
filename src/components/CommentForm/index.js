import React, {Component} from 'react'
import './style.css'

class CommentForm extends Component {
    state = {
        user: '',
        validate: false,
        error: false
    }

    render() {
        const error = this.state.error ? <span className="error_text">Name must contain at least 10 letters</span> : ''
        const errorClass = this.state.error ? 'field error' : 'field'
        return (
            <form>
                <div className={errorClass}>
                    <label>
                        Name: <input type="text" name="name" value = {this.state.user} onChange = {this.handleChange} onBlur = {this.validateOnBlur}/>
                    </label>
                </div>
                {error}
                <div className="field">
                    <label>
                        Text: <textarea name="text"/>
                    </label>
                </div>
                <button type="submit">Отправить</button>
            </form>
        )
    }

    validateOnBlur = ev => {
        let user = ev.target.value
        if (user.length <= 10) {
            this.setState({ error: true })
        } else {
            return
        }
    }

    handleChange = ev => {
        let user = ev.target.value
        if (user.length >= 10) {
            if (this.state.error) this.setState({ error: false })
        }
        if (user.length >= 50) return
        this.setState({ user })
    }
}

export default CommentForm