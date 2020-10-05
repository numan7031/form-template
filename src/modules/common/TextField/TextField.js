import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useField } from 'react-final-form-hooks'

const TextFieldCustom = ({
  name,
  form,
  validate,
  ...props
}) => {
  const formField = useField(name, form, validate)
  return (
    <TextField
      {...formField.input}
      {...props}
      error={formField.meta.touched && formField.meta.error}
      helperText={formField.meta.touched && formField.meta.error ? formField.meta.error : null}
    />
  )
}

export default TextFieldCustom
