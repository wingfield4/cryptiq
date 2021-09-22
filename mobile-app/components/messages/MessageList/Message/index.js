import React from 'react';
import { connect } from 'react-redux';

import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

const Message = (props) => {
  if(props.currentUser && props.message.sentFrom === props.currentUser.id) {
    return <SentMessage message={props.message} />
  }

  return <ReceivedMessage message={props.message} />
}

export default connect(state => ({
  currentUser: state.currentUser
}))(Message);
