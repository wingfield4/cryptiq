import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { LayoutAnimation } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BigButton from '../../components/common/BigButton';
import KeyboardSpacer from '../../components/common/KeyboardSpacer';
import LoadingOverlay from '../../components/common/LoadingOverlay';
import PageContainer from '../../components/common/PageContainer';
import Text from '../../components/common/Text';
import TextField from '../../components/common/TextField';

import api from '../../utilities/api';
import addUser from '../../db/users/addUser';
import generateKeys from '../../utilities/crypto/generateKeys';
import usernameIsValid from '../../utilities/usernameIsValid';

const NewUser = (props) => {
  const [loading, setLoading] = useState(false);
  const [loadingUsername, setLoadingUsername] = useState(false);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    setLoading(true);
    const publicKey = await generateKeys({ username });

    let userData = {
      username, //never empty
      publicKey: publicKey || null,
      firstName: firstName || null,
      middleName: middleName || null,
      lastName: lastName || null,
      email: email || null,
      phone: phone  || null
    };

    console.log('userData', userData);

    const user = await api.createUser(userData)
      .then(res => res.data)
      .catch(err => console.log(err));
    
    if(user) {
      const savedUser = await addUser(user);

      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          500,
          LayoutAnimation.Types.easeInEaseOut,
          LayoutAnimation.Properties.opacity
        )
      );

      props.dispatch({
        type: 'setCurrentUser',
        user: savedUser
      });
    }
  }

  const handleGenerateUsername = async () => {
    setLoadingUsername(true);
    setUsername('');

    let newUsername = await api.generateUsername();

    setLoadingUsername(false);
    setUsername(newUsername);
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
              placeholder={loadingUsername ? "Generating Username..." : 'Username'}
              value={username}
              onChangeText={setUsername}
              autoCorrect={false}
            />
            <TouchableOpacity
              style={styles.generateTextContainer}
              onPress={handleGenerateUsername}
            >
              <Text style={styles.generateText}>Generate one for me</Text>
            </TouchableOpacity>

            {/* <Text style={styles.infoText}>
              The below fields are optional. 
              By default, this information will be 
              hidden from the public, but that can be 
              changed in the settings to help other find
              and message your account.
            </Text> */}
            <TextField
              containerStyle={styles.textField}
              placeholder="First Name (Optional)"
              value={firstName}
              onChangeText={setFirstName}
              autoCorrect={false}
            />
            <TextField
              containerStyle={styles.textField}
              placeholder="Middle Name (Optional)"
              value={middleName}
              onChangeText={setMiddleName}
              autoCorrect={false}
            />
            <TextField
              containerStyle={styles.textField}
              placeholder="Last Name (Optional)"
              value={lastName}
              onChangeText={setLastName}
              autoCorrect={false}
            />
            <TextField
              containerStyle={styles.textField}
              placeholder="Phone (Optional)"
              value={phone}
              onChangeText={setPhone}
              keyboardType="number-pad"
            />
            <TextField
              containerStyle={styles.textField}
              placeholder="Email (Optional)"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <BigButton
            disabled={!usernameIsValid(username) || loading}
            label={loading ? "Creating Your Acount..." : "Get Started"}
            style={{ marginTop: 16 }}
            onPress={handleSubmit}
          />

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ marginTop: 16 }}>
              {`<  Go Back`}
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <KeyboardSpacer />
      </SafeAreaView>
      {loading &&
        <LoadingOverlay />
      }
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
  generateText: {
    textAlign: 'center'
  },
  generateTextContainer: {
    marginBottom: 48
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
