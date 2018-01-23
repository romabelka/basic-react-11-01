import React, {Component} from 'react'  
import UserForm from './UserForm'
import Select from 'react-select'
import DayPickerBlock from './DayPickerBlock'


import 'react-select/dist/react-select.css'


class MainForm extends Component {
 
    state = {
        selected: null, 
    }
    handleChange = selected => this.setState({ selected })
    render(){
        const { articles } = this.props   
        const options = articles.map(article => ({
                    label: article.title,
                    value: article.id
                }))

        return (
            <div>
               
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi /> 
                <DayPickerBlock    />
            </div>
        )
    }
    
   


}

export default MainForm;