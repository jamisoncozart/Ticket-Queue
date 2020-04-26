import React from 'react';
import Ticket from './Ticket';

function TicketList(props){
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.ticketList).map((ticket) => {
        return <Ticket
          whenTicketClicked={props.onTicketSelection}
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id} />
      })}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};

export default TicketList;