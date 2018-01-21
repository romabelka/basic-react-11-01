import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import MyTypes from '../types'
import CommentList from './CommentList'

class Article extends PureComponent {
    static propTypes = {
/*
        defaultOpen: PropTypes.bool, //if Article is open by default
*/
        article: MyTypes.ArticleType.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            foo: 'bar'
        }
    }

    render() {
        console.log('---', 'rerendering')
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments} />
            </div>
        )
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={(ev) => onButtonClick(ev, article)}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

}


export default Article