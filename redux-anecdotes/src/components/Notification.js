import React from 'react'
import { connect } from 'react-redux'


const Notification = (props) => {
  const notification = props.message

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(notification) {
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
  return (
    <div></div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    message: state.message,
    filter: state.filter
  }
}


export default connect(mapStateToProps)(Notification)