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
        style={{ flex: 1 }}
      >
        <Logo />
        <View style={styles.textContainer}>
          <Text style={styles.logoText}>
            <Text style={{ ...styles.logoText, color: props.colors.accent5 }}>crypti</Text>
            <Text style={{ ...styles.logoText, color: props.colors.accent3 }}>q</Text>
          </Text>
        </View>
        <View style={{ ...styles.divider, backgroundColor: props.colors.border }} />
        <Text style={styles.infoText}>
          Cryptiq values and protects your privacy above all. Here's how we do it:
        </Text>
        <Text style={styles.infoText}>
          Cryptiq uses end-to-end encryption. That means no one other than the 
          intended recipent - not even us - can ever read the contents of your messages.
        </Text>
        <Text style={styles.infoText}>
          We know it can be hard to trust application developers. That's why
          we don't require any personally identifying information, and we don't track or share
          your device's signature. You're free to use our service completely anonymously.
        </Text>
        <Text style={styles.infoText}>
          Cryptiq is completely open source, which means everything we do is out in the open.
          You can view the source code yourself at {`<GIT_REPO_HERE>`}.
        </Text>
        <Text style={styles.infoText}>
          You can view our full privacy policy here.
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
    alignItems: 'center',
    paddingBottom: 16
  },
  divider: {
    height: 1,
    width: '75%',
    marginTop: 16,
    marginBottom: 16
  },
  infoText: {
    padding: 8,
    textAlign: 'center',
    width: '100%'
  },
  logoText: {
    fontSize: 48,
    fontFamily: 'Source Sans Pro'
  },
  textContainer: {
    marginTop: 32
  }
});
