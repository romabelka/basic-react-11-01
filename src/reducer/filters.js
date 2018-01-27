import {SET_FILTERS} from '../constants'

const defaultFilters = {
    selected: {
        data: [],
        ids: []
    },
    range: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_FILTERS:
            return Object.assign({}, filters, payload.filters)
    }

    return filters
}
