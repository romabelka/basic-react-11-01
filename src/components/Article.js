import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

PropTypes.shape.Article = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    comments: PropTypes.array
}).isRequired

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape.Article,
        defaultOpen: PropTypes.bool, //if Article is open by default
        isActive: PropTypes.bool,
        toggleOpen: PropTypes.func,
        toggleActive: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            foo: 'bar'
        }
    }

    componentWillReceiveProps(nextProps) {
      const {isOpen, isActive, toggleOpen} = nextProps
      if (isOpen && !isActive) toggleOpen()
    }

    render() {
        console.log('---', 'rerendering')
        const {article, isOpen, toggleOpen, toggleActive} = this.props

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
                    <button onClick={() => {
                      toggleOpen()
                      toggleActive(article.id)
                    }}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

}


export default toggleOpen(Article)
