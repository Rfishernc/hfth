import React from 'react';
import './friends.scss';
import OneFriend from '../oneFriend/oneFriend';

class friends extends React.Component {
  buildButtons = () => {
    const friendsArray = [{ id: '12345', name: 'Friendy McFriendFace' }];
    const reactArray = [];
    friendsArray.forEach((friend) => {
      const pathName = `/friends/${friend.id}/edit`;
      reactArray.push(<OneFriend id={friend.id} key={friend.id} name={friend.name} pathName={pathName}/>);
    });
    return reactArray;
  }

  render() {
    return (
      <div>
        <h3>friends</h3>
        <div>{this.buildButtons}</div>
      </div>
    );
  }
}

export default friends;
