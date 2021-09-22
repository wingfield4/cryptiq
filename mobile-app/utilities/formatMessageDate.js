import moment from 'moment';

const formatMessageDate = (dateString) => {
  return moment(dateString).calendar();
}

export default formatMessageDate;
