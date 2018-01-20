import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {
/*
        defaultOpen: PropTypes.bool, //if Article is open by default
*/
        article: PropTypes.shape({
//            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            foo: 'bar'
        }
    }

    shouldComponentUpdate(nextProps) {
      return this.props.isOpen !== nextProps.isOpen;
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