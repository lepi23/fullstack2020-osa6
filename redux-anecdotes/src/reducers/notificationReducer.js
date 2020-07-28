
const notificationReducer = (state = null, action) => {
  
    switch (action.type) {
      case 'NOTIFY':
        return action.message
      case 'NOTIFYRESET':
        return null        
      default:
        return state
    }
}
export const resetNotification = () => {
  return {
    type: 'NOTIFYRESET',
  }
}

export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch({
      type: 'NOTIFY',
      message
    })
    setTimeout(() => {
      dispatch(resetNotification())
}, 5000)
  }
}
export default notificationReducer