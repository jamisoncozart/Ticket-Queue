import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  const name='Jamison';
  const name2='Nichole';
  return(
    <React.Fragment>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr />
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
}

export default Ticket;