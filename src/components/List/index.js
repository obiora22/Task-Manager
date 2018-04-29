import React from 'react';
import Card from '../Card/index';
import './index.css';

class List extends React.Component {
  

  render() {
    var cards  = this.props.cards.map((card, index) => {
     return  <Card 
        key={card.id}
        id={card.id}
        title={card.title}
        description={card.description}
        tasks={card.tasks}
      />
    })
    return (
      <div className="list">
        <h3>{this.props.title}</h3>
        {cards}
      </div>
    )
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default List;
