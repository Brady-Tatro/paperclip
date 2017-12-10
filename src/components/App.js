import React from 'react';
import Download from './downloads/Download';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }

   render() {

      return (
         <div>
            Number of Clicks
            <Download
            number={this.state.number}
            byte={this.state.byte}
            />
         </div>
      );
   }
}
export default App;
