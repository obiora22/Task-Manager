import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/index';
import './index.css';

class List extends React.Component {
  

  render() {
    var cards  = this.props.cards.map((card, index) => {
     return  <Card 
        key={card.id}
        cardId={card.id}
        title={card.title}
        description={card.description}
        tasks={card.tasks}
        taskCallbacks={this.props.taskCallbacks}
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

List.propTypes = {
  taskCallbacks: PropTypes.object.isRequired
}

export default List;
