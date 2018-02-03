import React, {Component, PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import {connect} from 'react-redux'
import CommentList from '../CommentList'
import {deleteArticle} from '../../AC'
import {createFiltratedArticlesSelector} from '../../selectors'
import './style.css'

class Article extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        article: PropTypes.object.isRequired,
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

        if(!Object.keys(article).length) return null

        const body = isOpen && (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments} ref = {this.setCommentsRef} key = {this.state.count}/>
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
        const {deleteArticle, id} = this.props
        deleteArticle(id)
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

const mapStateToProps = (state, ownProps) => {
    const filtratedArticlesSelector = createFiltratedArticlesSelector()
    return (state, ownProps) => {
        return {
            article: filtratedArticlesSelector(state, ownProps)
        }
    }
}


export default connect(mapStateToProps, { deleteArticle })(Article)