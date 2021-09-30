import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Text from '../common/Text';

const AccountInformation = ({ colors, currentUser, dispatch, ...props }) => {
  const fields = [{
    label: 'Username',
    data: currentUser.username
  }];

  if(currentUser.firstName)
    fields.push({ label: 'First Name', data: currentUser.firstName })

  if(currentUser.middleName)
    fields.push({ label: 'Middle Name', data: currentUser.middleName })

  if(currentUser.lastName)
    fields.push({ label: 'Last Name', data: currentUser.lastName })

  if(currentUser.email)
    fields.push({ label: 'Email', data: currentUser.email })

  if(currentUser.phone)
    fields.push({ label: 'Phone', data: currentUser.phone })

  return (
    <View
      style={[
        styles.container,
        { borderColor: colors.border }
      ]}
      {...props}
    >
      {fields.map((field, index) => (
        <View
          style={[
            styles.fieldContainer,
            { backgroundColor: index%2 === 1 ? colors.widgetBackground : colors.pageBackground }
          ]}
          key={field.label}
        >
          <Text style={styles.label}>{field.label}</Text>
          <Text style={styles.data}>{field.data}</Text>
        </View>
      ))}
    </View>
  )
}

export default connect(state => ({
  colors: state.colors,
  currentUser: state.currentUser
}))(AccountInformation);

const styles = StyleSheet.create({
  container: {
    paddingTop: 96,
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
    flex: 1
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  },
  label: {
    fontSize: 16
  }
})
