import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import BigButton from '../../components/common/BigButton';
import KeyboardSpacer from '../../components/common/KeyboardSpacer';
import PageContainer from '../../components/common/PageContainer';
import Text from '../../components/common/Text';
import TextField from '../../components/common/TextField';

import userIdIsValid from '../../utilities/userIdIsValid';

const NewUser = (props) => {
  const [userId, setUserId] = useState('');

  const handleSubmit = () => {
    props.dispatch({
      type: 'setCurrentUser',
      user: { id: userId }
    })
  }

  return (
    <PageContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>
            Create Your Account
          </Text>
          <View style={styles.textFieldsContainer}>
            <TextField
              containerStyle={styles.textField}
              placeholder="User ID"
              value={userId}
              onChangeText={setUserId}
            />

            <Text style={styles.infoText}>
              The below fields are optional. 
              By default, this information will be 
              hidden from the public, but that can be 
              changed in the settings to help other find
              and message your account.
            </Text>
            <TextField
              containerStyle={styles.textField}
              placeholder="First Name (Optional)"
            />
            <TextField
              containerStyle={styles.textField}
              placeholder="Last Name (Optional)"
            />
            <TextField
              containerStyle={styles.textField}
              placeholder="Phone (Optional)"
            />
            <TextField
              containerStyle={styles.textField}
              placeholder="Email (Optional)"
            />
          </View>
          <BigButton
            disabled={!userIdIsValid(userId)}
            label="Get Started"
            style={{ marginTop: 16 }}
            onPress={handleSubmit}
          />
          <Text style={{ marginTop: 16 }}>{`<  Go Back`}</Text>
        </ScrollView>
        <KeyboardSpacer />
      </SafeAreaView>
    </PageContainer>
  )
}

export default connect()(NewUser);

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    flex: 1
  },
  infoText: {
    textAlign: 'center',
    padding: 8,
    marginTop: 16
  },
  textField: {
    marginBottom: 8,
    fontSize: 18
  },
  textFieldsContainer: {
    width: '85%'
  },
  title: {
    fontSize: 32,
    marginBottom: 32
  }
});
