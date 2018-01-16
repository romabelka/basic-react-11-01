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
      <div className='mt4 pt4 bt b--gray'>
        <h2 className='mt0 mb3 flex items-center'>
          {article.title}
          <button
            onClick={this.handleClick}
            className={`br2 bn ph2 pv1 white f5 ml3 ${this.state.isOpen ? 'bg-red' : 'bg-blue'}`}
          >
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