import React from 'react';
import KanbanBoard from '../components/KanbanBoard/index';


const token = sessionStorage.getItem('access_token');
console.log('Session', token)
const URL  = `http://localhost:3030/api/Cards?access_token=${token}`;

var headers = {
  'Content-Type': 'application/json',
}

class KanbanContainer extends React.Component {
  constructor() {
    super();
    this.state = { cards: [] };
  }
  addTask(cardId, taskName) {

  }
  componentDidMount() {
    fetch(URL, {
      method: 'GET',
      headers: headers
    })
    .then((response) => {
      if (!response.ok) throw Error('Request error ...');
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      this.setState({cards: responseData})
    })
    .catch((e) => console.log(e.message));

   
  }

  render() {
    console.log(this.state.cards)
    return <KanbanBoard cards={this.state.cards} 
            taskCallbacks={
            {
              add: this.addTask,
              delete: this.deleteTask,
              toggle: this.toggleTask
            }
          }/>
  }

}

export default KanbanContainer;
