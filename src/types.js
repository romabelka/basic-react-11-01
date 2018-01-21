import PropTypes from 'prop-types'

const CommentType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  text: PropTypes.string
});

const CommentListType = PropTypes.arrayOf(CommentType);

const ArticleType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  comments: CommentListType
});

const ArticleListType = PropTypes.arrayOf(ArticleType);

export default {CommentType, CommentListType, ArticleType, ArticleListType};
