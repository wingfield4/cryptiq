import React from 'react';
import { connect } from 'react-redux';

import MainTabs from './MainTabs';
import NewUserStack from './NewUserStack';

const Screens = (props) => {
  return (
    <>
      {props.currentUser && <MainTabs />}
      {!props.currentUser && <NewUserStack />}
    </>
  )
}

export default connect(state => ({
  currentUser: state.currentUser
}))(Screens);
