import React, {Component} from 'react'

import CommentsList from './CommentsList'

class Article extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isOpen: props.defaultOpen,
    }
  }
  
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render() {
    const {article} = this.props
    const body = this.state.isOpen && (
      <section>
        {article.text}
        <CommentsList comments={article.comments} />
      </section>
    )
    return (
      <div>
        <h2>
          {article.title}
          <button onClick={this.handleClick}>
            {this.state.isOpen ? 'close' : 'open'}
          </button>
        </h2>
        <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
        {body}
      </div>
    )
  }
}


export default Article