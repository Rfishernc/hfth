import React from 'react';
import './holidayDetail.scss';

class holidayDetail extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/holidays/${view}/edit`);
  }

  changeViewFriends = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/holidays/${view}/friends`);
  }

  render() {
    return (
      <div>
        <h3>holidayDetail</h3>
        <button className='btn btn-danger' onClick={this.changeView} id='12345'>Edit Holiday</button>
        <button className='btn btn-danger' onClick={this.changeViewFriends} id='12345'>See friends at Holiday</button>
      </div>
    );
  }
}

export default holidayDetail;
