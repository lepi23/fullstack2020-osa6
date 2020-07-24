import store  from '../store'

const notificationReducer = (state, action = 'NOTHING') => {
    console.log(action)
    switch (action.type) {
      case 'VOTE':
        return action
      default:
        return action
    }
}
export const voteNotification = action => {
    return {
      type: 'VOTE',
      action,
    }
}
export default notificationReducer