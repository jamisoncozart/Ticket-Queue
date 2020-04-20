import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(currentState => ({
      formVisibleOnPage: !currentState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList />
      addTicketButton = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    )
  }
}

export default TicketControl;