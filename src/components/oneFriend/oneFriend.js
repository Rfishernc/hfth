import React from 'react';
import './oneFriend.scss';
import { Link } from 'react-router-dom';

class oneFriend extends React.Component {
  render() {
    return (
      <div>
        <button className='btn btn-danger'><Link to={this.props.pathName} id={this.props.id}>{this.props.name}</Link></button>
      </div>
    );
  }
}

export default oneFriend;
