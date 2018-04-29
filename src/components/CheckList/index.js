import React from 'react';
import './index.css';

class CheckList extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    var tasks = this.props.tasks.map((task) => 
      <li class="flex">
        <input type="checkbox" defaultChecked={task.done}/>
        {task.name}
        <p className="check-list-button">Remove Task</p>
      </li>
    )
    return (
      <div>
        <ul>{tasks}</ul>
      </div>
    );
  }


}

export default CheckList;
