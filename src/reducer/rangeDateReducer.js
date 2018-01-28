import   { SELECT_ARTICLE_DATE_FILTER }  from '../constants'

const defRange = { from: null, to: null }

export  default  ( rangeState = defRange , action  ) =>{
    
    const { type, payload } = action 
    switch(type) {
        case SELECT_ARTICLE_DATE_FILTER : return payload.range
      }
    return rangeState
}