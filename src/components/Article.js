import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

const Article = (props) => {
  console.log('---', 'rerendering')
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
        <button onClick={(ev) => onButtonClick(article.id)}>
          {isOpen ? 'close' : 'open'}
        </button>
      </h2>
      {body}
      <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
    </div>
  )
}


export default Article