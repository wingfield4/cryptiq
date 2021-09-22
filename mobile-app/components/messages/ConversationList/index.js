import React from 'react';
import {
  SectionList
} from 'react-native';
import moment from 'moment';

import ConversationCard from '../ConversationCard';
import Divider from '../../common/Divider';
import SectionHeader from './SectionHeader';

const ConversationList = (props) => {
  /* TODO Revisit this, I'm sure there's a better way to do it */
  let sections = [
    { title: 'Today', data: [] },
    { title: 'This Week', data: [] },
    { title: 'This Month', data: [] },
    { title: 'This Year', data: [] },
    { title: 'More Than A Year Ago', data: [] },
  ];

  props.users.forEach(user => {
    let mostRecentInteraction = moment(user.mostRecentInteraction);
    
    if(mostRecentInteraction.isAfter(moment().subtract(1, 'day'))) {
      sections[0].data.push(user);
    } else if(mostRecentInteraction.isAfter(moment().subtract(1, 'week'))) {
      sections[1].data.push(user);
    } else if(mostRecentInteraction.isAfter(moment().subtract(1, 'month'))) {
      sections[2].data.push(user);
    } else if(mostRecentInteraction.isAfter(moment().subtract(1, 'year'))) {
      sections[3].data.push(user);
    } else {
      sections[4].data.push(user);
    }
  })

  return (
    <SectionList
      sections={sections.filter(section => section.data.length > 0)}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ConversationCard user={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <SectionHeader title={title} />
      )}
      ItemSeparatorComponent={Divider}
    />
  )
}

export default ConversationList;
