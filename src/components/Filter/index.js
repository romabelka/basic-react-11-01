import React from 'react'
import SelectArticles from './SelectArticles'
import UserForm from './UserForm'
import DayPickerComponent from './DayPicker'

function ArticlesFilter(props) {
    return (
        <div>
            <UserForm />
            <SelectArticles articles = {props.articles} />
            <DayPickerComponent />
        </div>
    )
}

export default ArticlesFilter