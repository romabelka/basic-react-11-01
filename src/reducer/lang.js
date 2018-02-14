import { Record } from 'immutable'
import { LOAD_DICTIONARY, START, SUCCESS, FAIL } from '../constants'

const ReducerRecord = Record({
    code: '',
    i18n: {}
})

export default (lang = new ReducerRecord(), action) => {
    const { type, payload, response } = action

    switch (type) {
        case LOAD_DICTIONARY + SUCCESS:
            return lang
                .set('code', payload.langCode)
                .set('i18n', response)
    }

    return lang
}