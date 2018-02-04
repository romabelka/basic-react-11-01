import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    function genId(len) {
        function getRandomChar() {
            let number = Math.round(Math.random() * 15);
            return number < 10 ? String.fromCharCode(97 + number) : String.fromCharCode(39 + number)
        }
    
        let result = getRandomChar();
        for (let i = 0; i < len - 1; i++) {
            result += getRandomChar();
        }
        return result;
    }

    console.log('--- new id: ', genId(10))

    next(action)
}