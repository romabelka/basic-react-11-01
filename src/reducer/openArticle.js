import {OPEN_ARTICLE} from '../constants'

export default (openArticleId = null, action) => {
    return action.type === OPEN_ARTICLE ? action.payload.id : openArticleId
}