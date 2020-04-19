import React from 'react';
import Ticket from './Ticket';

function TicketList() {
  return (
    <Ticket 
      location='3A'
      names="Jamison and Nichole"
      issue="Firebase will not save record!" />
    <Ticket 
      location='4B'
      names="Pat and Jim"
      issue="Prop types are throwing an error" />
  );
}

export default TicketList;