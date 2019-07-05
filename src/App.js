import React from 'react';
import UserCards from './UserCards';

class App extends React.Component {
  state = {
    load: false,
    loading: false,
  }

  isLoading = () => {
    this.setState({ load: true });
    
    setTimeout(() => {
      this.setState({ loading: true });
    }, 1000);
  }

  render() {
    return (
      this.state.loading
      ? <UserCards />
      : <button
          onClick={this.isLoading}
          className="button-load"
        >
          {this.state.load ? 'Loading...' : 'Load'}
        </button> 
    );
  }
}

export default App;