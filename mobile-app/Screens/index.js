import React from 'react';
import { connect } from 'react-redux';

import MainTabs from './MainTabs';

const Screens = (props) => {
  return (
    <>
      {props.currentUser && <MainTabs />}
      {!props.currentUser && <></>}
    </>
  )
}

export default connect(state => ({
  currentUser: state.currentUser
}))(Screens);
