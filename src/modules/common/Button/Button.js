import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'


const ButtonDefault = ({
  children,
  onClick,
  id='ok-button',
  variant,
  loading,
  disabled,
  minWidth=98,
  ...rest
}) => (
  <Button 
    id={id} 
    variant={variant} 
    color={'primary'}
    disabled={disabled || loading}
    onClick={onClick}
    style={{
      minWidth
    }}
    {...rest}
  >
    { loading ? <CircularProgress color='inherit' size={24} /> : children ? children : 'ok'}
  </Button>
)

export default ButtonDefault
