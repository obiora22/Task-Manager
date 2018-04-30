import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Input} from 'reactstrap';
import './index.css';

class CheckList extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formInput = e.target.taskName.value;
    this.props.taskCallbacks.add(this.props.id, formInput);
    e.target.reset();
  }
  
  render() {
    var tasks = this.props.tasks.map((task, index) => 
      <li className="flex" key={index}>
        <input type="checkbox" defaultChecked={task.done} onChange={this.props.taskCallbacks.toggle.bind(null, task.id, index)}/>
        {task.name}
        <p className="check-list-button" onClick={this.props.taskCallbacks.delete.bind(null, task.id, index)}>Remove Task</p>
      </li>
    )
    return (
      <div>
        <ul>{tasks}</ul>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input type="text" name="taskName" placeholder="enter task and press Enter to submit"/>
          </FormGroup>
        </Form>
      </div>
    );
  }


}

CheckList.propTypes = {
  taskCallbacks: PropTypes.object.isRequired,
  cardId: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired
}
export default CheckList;
