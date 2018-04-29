import React from 'react';
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
          <p className="custom-card__button">Add task</p>
          <input type="textarea" />
        </div>
      </div>
    )
  }

}

export default Card;
