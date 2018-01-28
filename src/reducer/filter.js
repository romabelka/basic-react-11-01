import {ARTICLES_FILTER_BY_DATE, ARTICLES_FILTER_BY_KEYS} from '../constants'

export default (filter = { from: null, to: null, keys: [] }, action) => {
    const {type, payload} = action

    switch (type) {
        case ARTICLES_FILTER_BY_DATE:
            let { from, to } = payload;
            return Object.assign({}, filter, { from, to });

        case ARTICLES_FILTER_BY_KEYS:
            return Object.assign({}, filter, { keys: payload.keys });
    }

    return filter;
}