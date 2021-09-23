import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import PageContainer from '../../components/common/PageContainer';
import Switch from '../../components/common/rn/Swtch';
import Text from '../../components/common/Text';

const Settings = (props) => {
  return (
    <PageContainer style={styles.container}>
      
      {/* DARK MODE TOGGLE */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Use Dark Mode?</Text>
        <Switch
          value={props.colorMode === 'dark'}
          onValueChange={() => {
            props.dispatch({
              type: 'setColorMode',
              mode: props.colorMode === 'dark' ? 'light' : 'dark'
            })
          }}
        />
      </View>

    </PageContainer>
  )
}

export default connect(state => ({
  colorMode: state.colorMode,
  colors: state.colors
}))(Settings);

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  optionText: {
    fontSize: 16
  }
});
