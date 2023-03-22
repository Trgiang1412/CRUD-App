import React from 'react'
interface Data {
    message?: string;
}

export const ErrorMessage: React.FC = (props: Data) => {
  if (!props.message) {
    return null
  }
  const styles = {
    color: '#DC3545',
    fontSize: '16px'
  }
  return (
    <span style={styles}>{props.message}</span>
  )
}
