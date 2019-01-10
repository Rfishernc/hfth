import React from 'react';
import './friends.scss';
import { Link } from 'react-router-dom';

class friends extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/friends/${view}/edit`);
  }

  render() {
    return (
      <div>
        <h3>friends</h3>
        <button className='btn btn-danger' onClick={this.changeView} id='12345'>Friendy McFriendFace</button>
      </div>
    );
  }
}

export default friends;
