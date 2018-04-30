import React from 'react';
import PropTypes from 'prop-types';
import CheckList from '../CheckList/index';

import './index.css';

class Card extends React.Component {
  constructor() {
    super();
    this.state = { showDetails: false };
    this.elementRef = React.createRef();
  }
  toggleDetails = (e) => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }
  
  render() { 
    const cardDetails = (
      <div ref={this.elementRef}>
        <p>
          {this.props.description}
        </p>
        
        <div>
          <CheckList 
            cardId={this.props.id}
            tasks={this.props.tasks}
            taskCallbacks={this.props.taskCallbacks}
          />
        </div>
      </div>
    );
    return (
      <div className="custom-card">
        <h5>{this.props.title}</h5>
        <p className={` custom-card__button ${this.state.showDetails ? 'custom-card--show-details' : ''}` }
          onClick={this.toggleDetails}>
          { this.state.showDetails ? 'Hide' : 'Show'}
        </p>
        {this.state.showDetails ? cardDetails : ''}
        <div>
          {/* <p className="custom-card__button" onClick={this.props.taskCallbacks.addTask}>Add task</p> */}
          
        </div>
      </div>
    )
  }

}

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  taskCallbacks: PropTypes.object.isRequired
}

export default Card;
