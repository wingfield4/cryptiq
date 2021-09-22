import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import PageContainer from '../components/common/PageContainer';
import Text from '../components/common/Text';

const Privacy = (props) => {
  return (
    <PageContainer style={styles.container}>
      <Text>
        Here's some text about how we value privacy blah blah blah
      </Text>
    </PageContainer>
  )
}

export default connect(state => ({
  colorMode: state.colorMode,
  colors: state.colors
}))(Privacy);

const styles = StyleSheet.create({
  container: {
    padding: 8
  }
});
