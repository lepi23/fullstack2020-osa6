import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notificationReducer } from '../reducers/notificationReducer'

const Notification = () => {
  const dispatch = useDispatch()
  const notification = ''//useSelector(store => store)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification