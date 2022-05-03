const initialStore = {
    reminders: [],
}

const reminderReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'ADD_REMINDER':
            return {
                reminders: [...state.reminders, action.reminder]
            }
        case 'DELETE_REMINDER':
            return {
                reminders: state.reminders.filter(reminder => reminder.id !== action.id)
            }
        default:
            return state
    }
}

export default reminderReducer;
