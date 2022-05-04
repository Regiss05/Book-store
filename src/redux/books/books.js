const ADD_REMINDER = 'bookstore/books/ADDBOOK';
const DELETE_REMINDER = 'bookstore/books/REMOVEBOOK';

const initialStore = {
  reminders: [],
};

const reminderReducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'ADD_REMINDER':
      return {
        reminders: [...state.reminders, action.reminder],
      };
    case 'DELETE_REMINDER':
      return {
        reminders: state.reminders.filter((reminder) => reminder.id !== action.id),
      };
    default:
      return state;
  }
};

export const addBook = () => ({
  type: ADD_REMINDER,
});
export const removeBook = () => ({
  type: DELETE_REMINDER,
});

export default reminderReducer;
