import { CHANGE_FILTERS } from '../constants'
 
const defaultFilters = {
    selectedArticles: [],
    from: null,
    to: null
}
 
export default (filters = defaultFilters, action) => {
    const { type, payload } = action
    
    switch (type) {
        case CHANGE_FILTERS:
            return {...filters, ...payload.change}
    }
 
    return filters
}