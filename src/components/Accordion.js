import React from 'react';

export default class Accordion extends React.Component {
    state = {
        error: null,
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => {
      openArticleId === this.state.openArticleId ? this.setState({ openArticleId: null }) : this.setState({ openArticleId });
    }
}
