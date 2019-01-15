import React from 'react';
import './holidays.scss';

class holidays extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/holidays/${view}`);
  }

  render() {
    return (
      <div>
        <h3>holidays</h3>
        <button className='btn btn-danger' onClick={this.changeView} id='12345'>Holiday McHolidayface</button>
      </div>
    );
  }
}

export default holidays;
