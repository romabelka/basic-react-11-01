import React, {Component, PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            foo: 'bar'
        }
    }

    render() {
        console.log('---', 'rerendering')
        const {article, isOpen, toggleOpen} = this.props
        const body = isOpen && (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments} ref = {this.setCommentsRef} />
            </div>
        )
        return (
            <div>
                <h2 ref = {this.setTitleRef}>
                    {article.title}
                    <button onClick={toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    setTitleRef = (titleRef) => {
        this.titleRef = titleRef
        console.log('---', titleRef)
    }

    setCommentsRef = commentsRef => {
        console.log('---', 'comments', commentsRef, findDOMNode(commentsRef))
/*
        setInterval(() => {
            commentsRef.setState({ isOpen: !commentsRef.state.isOpen })
        }, 500)
*/
    }

}


export default Article