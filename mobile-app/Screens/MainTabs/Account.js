import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import PageContainer from '../../components/common/PageContainer';
import Text from '../../components/common/Text';

const Account = (props) => {
  return (
    <PageContainer style={styles.container}>
      <Text>
        Here's information about your account
      </Text>
    </PageContainer>
  )
}

export default connect(state => ({
  colorMode: state.colorMode,
  colors: state.colors
}))(Account);

const styles = StyleSheet.create({
  container: {
    padding: 8
  }
});
