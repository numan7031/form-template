import React from 'react'
import { useForm } from 'react-final-form-hooks'
import TextField from '@modules/common/TextField'
import Button from '@modules/common/Button'
import Grid from '@material-ui/core/Grid'

const requiredValidate = value => (value ? undefined : 'Required')

const Basic = () => {
  const { form, handleSubmit, submitting } = useForm({
    onSubmit: (values) => console.log(values),
  })
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5} direction='row' justify='center' alignItems='center' style={{ marginTop: '50px' }}>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              form={form}
              validate={requiredValidate}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              form={form}
              validate={requiredValidate}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              loading={submitting}
              disabled={submitting}
            >
              Submit
        </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  )
}

export default Basic
