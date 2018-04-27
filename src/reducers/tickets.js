
//tickets Reducer

const ticketsReducerDefault = [];

const ticketsReducer = (state = ticketsReducerDefault, action) => {
  switch(action.type) {
    case 'ADD_TICKET':
      return [
        ...state,
        action.ticket
      ]
    case 'REMOVE_TICKET':
      return state.filter(({ id }) => id !== action.id);      
    case 'EDIT_TICKET':
      return state.map(( ticket ) => {
        if (ticket.id === action.id) {
          return {
            ...ticket,
            ...action.updates
          }
        } else {
          return ticket;
        }
      });
    default:
      return state;
  }
}

export default ticketsReducer