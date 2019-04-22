import React, {Component} from 'react';
import moment from 'moment';

import './Header.css';


class HeaderTitle extends Component {
  render() {

    return (
      <div classname='header-title'>
        <h1>Lambda School</h1>
        <h2>@LambdaSchool</h2>
        <h2>{moment().startOf('hour').fromNow()}</h2>
      </div>
    );
  }
}

export default HeaderTitle;
