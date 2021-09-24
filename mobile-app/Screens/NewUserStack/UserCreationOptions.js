import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useLinkProps } from '@react-navigation/native';

import BigButton from '../../components/common/BigButton';
import PageContainer from '../../components/common/PageContainer';
import Text from '../../components/common/Text';

import splashBase from '../../assets/splashCenterIcon.png';

const { height, width } = Dimensions.get('window');

const UserCreationOptions = () => {
  const newAccountLinkProps = useLinkProps({
    to: {
      screen: 'NewUser'
    }
  });

  return (
    <PageContainer>
      <Image
        source={splashBase}
        style={styles.backgroundImage}
      />
      <SafeAreaView style={styles.contentContainer}>
        <BigButton
          label="Set Up A New Account"
          {...newAccountLinkProps}
        />
        <TouchableOpacity style={styles.textButton}>
          <Text>
            Restore From Saved Keys
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </PageContainer>
  )
}

export default UserCreationOptions;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    height,
    width
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  textButton: {
    marginBottom: 48,
    marginTop: 16
  }
})
