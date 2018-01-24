import React from 'react'
import InputField from '../InputField'

const AddCommentForm = () => {
  return (
    <fieldset>
      <InputField
        label='Name'
        type='text'
        placeholder='Your name'
      />
      <br/>
      <InputField
        label='Comment text'
        type='textarea'
        placeholder='Type here...'
      />
    </fieldset>
  )
}

export default AddCommentForm