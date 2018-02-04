import React, {Component, PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import {connect} from 'react-redux'
import {createArticleSelector} from '../../selectors'
import CommentList from '../CommentList'
import {deleteArticle} from '../../AC'
import './style.css'

class Article extends PureComponent {
    static propTypes = {
        id: PropTypes.string,

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
            foo: 'bar',
            count: 0
        }
    }

    render() {
        console.log('---', 'rerendering')
        const {article, isOpen, toggleOpen} = this.props
        const body = isOpen && (
            <div>
                <section>{article.text}</section>
                <CommentList article = {article} ref = {this.setCommentsRef} key = {this.state.count}/>
            </div>
        )
        return (
            <div>
                <h2 ref = {this.setTitleRef} onClick = {this.increment}>
                    {article.title}
                    <button onClick={toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <button onClick = {this.handleDelete}>
                        delete
                    </button>
                </h2>
                <CSSTransition
                    transitionAppear
                    component = "div"
                    transitionName = "article"
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                    transitionAppearTimeout = {1000}
                >
                    {body}
                </CSSTransition>
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleDelete = () => {
        deleteArticle(article.id)
    }

    increment = () => this.setState({
        count: this.state.count + 1
    })

    setTitleRef = (titleRef) => {
        this.titleRef = titleRef
    }

    setCommentsRef = commentsRef => {
/*
        setInterval(() => {
            commentsRef.setState({ isOpen: !commentsRef.state.isOpen })
        }, 500)
*/
    }

}

const createMapStateToProps = () => {
    const articleSelector = createArticleSelector()
    return (state, ownProps) => {
        return {
            article: articleSelector(state, ownProps)
        }
    }
}


export default connect(createMapStateToProps, { deleteArticle })(Article)