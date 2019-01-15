import React from 'react';
import './friends.scss';
import { Link } from 'react-router-dom';
import OneFriend from '../oneFriend/oneFriend';
import friendsData from '../../data/friendsData';

class friends extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/friends/${view}/edit`);
  }

  addFriend = () => {
    this.props.history.push('/friends/new');
  }

  buildFriends = () => {
    friendsData.getFriends()
      .then((friendsArray) => {
        const friendsRender = [];
        friendsArray.forEach((friend) => {
          friendsRender.push(<OneFriend name={friend.name} relationship={friend.relationship} email={friend.email}
          address={friend.address} isAvoiding={friend.isAvoiding} phoneNumber={friend.phoneNumber} uid={friend.uid}/>);
        });
        return friendsRender;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3>friends</h3>
        <button className='btn btn-danger' onClick={this.addFriend} id='12345'>Add a friend</button>
        {this.buildFriends()}
      </div>
    );
  }
}

export default friends;
