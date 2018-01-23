import React from 'react'
import PropTypes from 'prop-types'

export function manageClass (el, action, className) {
   el.classList[action](className)
}

manageClass.propTypes = {
    el: PropTypes.object.isRequired,
    action: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}

 