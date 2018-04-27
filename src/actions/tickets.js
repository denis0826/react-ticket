
import uuid from 'uuid';

export const addTicket = ({ 
  title = '', 
  subtitle = '', 
} = {}) => ({
  type: 'ADD_TICKET',
  ticket:{
    id: uuid(),
    title,
    subtitle,
  }
});

// REMOVE_TICKET
export const removeTicket = ({ id } = {}) => ({
  type: 'REMOVE_TICKET',
  id
});
// EDIT_TICKET
export const editTicket = ( id, updates) => ({
  type: 'EDIT_TICKET',
  id,
  updates
});