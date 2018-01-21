import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

const Article = (props) => {
  const {article, isOpen, onButtonClick} = props
  const body = isOpen && (
    <div>
      <section>{article.text}</section>
      <CommentList comments={article.comments}/>
    </div>
  )
  return (
    <div>
      <h2>
        {article.title}
        <button onClick={() => onButtonClick(article.id)}>
          {isOpen ? 'close' : 'open'}
        </button>
      </h2>
      {body}
      <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
  onButtonClick: PropTypes.func,
}


export default Article