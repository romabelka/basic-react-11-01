import React from 'react'
import PropTypes from 'prop-types'

function Loader(props, {dictionary}) {
    return (
        <h2>{dictionary.Loading}...</h2>
    )
}

Loader.propTypes = {
}

Loader.contextTypes = {
    dictionary: PropTypes.object
}

export default Loader