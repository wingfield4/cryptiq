import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Logo from '../../components/common/Logo';
import PageContainer from '../../components/common/PageContainer';
import Text from '../../components/common/Text';

const Privacy = (props) => {
  return (
    <PageContainer>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.container}
      >
        <Logo />
        <View style={styles.textContainer}>
          <Text style={styles.logoText}>
            <Text style={{ ...styles.logoText, color: props.colors.accent5 }}>crypt</Text>
            <Text style={{ ...styles.logoText, color: props.colors.accent3 }}>iq</Text>
          </Text>
        </View>
        <View style={{ ...styles.divider, backgroundColor: props.colors.border }} />
        <Text>
          Cryptiq values your privacy or whatever blah blah blah. Here's how we do it
        </Text>
      </ScrollView>
    </PageContainer>
  )
}

export default connect(state => ({
  colorMode: state.colorMode,
  colors: state.colors
}))(Privacy);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  divider: {
    height: 1,
    width: '75%',
    marginTop: 16,
    marginBottom: 16
  }, 
  logoText: {
    fontSize: 48,
    fontFamily: 'Source Sans Pro'
  },
  textContainer: {
    marginTop: 32
  }
});
