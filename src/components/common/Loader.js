
import PropTypes from 'prop-types'


import React, { Component } from 'react';

export default class Loader extends Component {
    static contextTypes = { 
        dict : PropTypes.object
    }

  render() {
    return (
        <h2>{this.context.dict.LOAD}</h2>
    )
  }
};


Loader.propTypes = {
}
