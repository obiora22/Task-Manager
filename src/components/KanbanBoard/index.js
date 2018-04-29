import React from 'react';
import List from '../List/index';
import './index.css';

class KanbanBoard extends React.Component {
  filterCards(cards, cardStatus ) {
    return cards.filter((card) => card.status === cardStatus );
  }
  render() {
    return (
      <div className="board">
        <List id="todo" title="To Do" cards={this.filterCards(this.props.cards, "todo")}/>
        <List id="in-progress" title="In Progress" cards={this.filterCards(this.props.cards, "in-progress")}/>
        <List id="done" title="Done" cards={this.filterCards(this.props.cards, "done")}/>
      </div>
    );
  }
}

export default KanbanBoard;
