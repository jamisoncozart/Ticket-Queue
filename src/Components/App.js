import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App() {
  const name = "Jamison";
  const name2 = "Nichole";
  return (
    <React.Fragment>
      <Header />
      <TicketList />
    </React.Fragment>
  );
}

export default App;