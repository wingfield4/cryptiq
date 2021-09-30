import moment from 'moment';

import generateId from '../generateId';

const thisUserId = `12345678`;

const messages = [
  /* FROM DAVID WINGFIELD */
  {
    id: generateId(),
    content: '&SD9FB9S(DF79BDFIIS+_(*HF2SNDF2',
    sentAt: moment().subtract(10, 'days').format(),
    sentFrom: 'taylor_swift_luvr_11',
    sentTo: thisUserId,
    receivedAt: moment().subtract(10, 'days').add(5, 'seconds').format()
  },
  {
    id: generateId(),
    content: `This won't actually be plain text`,
    sentAt: moment().subtract(9, 'days').format(),
    sentFrom: 'taylor_swift_luvr_11',
    sentTo: thisUserId,
    receivedAt: moment().subtract(9, 'days').add(5, 'seconds').format()
  },

  /* FROM HAPPY MANGO */
  {
    id: generateId(),
    content: `8O34YIGFEABOUWIEYBFOAUWEYBF`,
    sentAt: moment().subtract(2, 'hours').format(),
    sentFrom: 'happy_mango_935',
    sentTo: thisUserId,
    receivedAt: moment().subtract(2, 'hours').add(5, 'seconds').format()
  },
  {
    id: generateId(),
    content: `8O34YIGWEYBF`,
    sentAt: moment().subtract(1.5, 'hours').format(),
    sentFrom: 'happy_mango_935',
    sentTo: thisUserId,
    receivedAt: moment().subtract(1.5, 'hours').add(5, 'seconds').format()
  },
  {
    id: generateId(),
    content: `This is a sent message`,
    sentAt: moment().subtract(1.6, 'hours').format(),
    sentFrom: thisUserId,
    sentTo: 'happy_mango_935',
    receivedAt: moment().subtract(1.6, 'hours').add(5, 'seconds').format(),
    readAt: moment().subtract(1.6, 'hours').add(20, 'seconds').format()
  },
  {
    id: generateId(),
    content: `8O34YIGFEABOUWIEYBFOAUWEYBFABOUWIABOUWIABOUWIABOUWIABOUWIABOUWI`,
    sentAt: moment().subtract(1, 'hours').format(),
    sentFrom: 'happy_mango_935',
    sentTo: thisUserId,
    receivedAt: moment().subtract(1, 'hours').add(5, 'seconds').format()
  },
  {
    id: generateId(),
    content: `This is another sent message`,
    sentAt: moment().subtract(.5, 'hours').format(),
    sentFrom: thisUserId,
    sentTo: 'happy_mango_935',
    receivedAt: moment().subtract(.5, 'hours').add(5, 'seconds').format()
  },

  /* FROM THOUGHTFUL SKATEBOARD */
  {
    id: generateId(),
    content: `8O34YIGFEABOUWIEYBFOAUWEYBF`,
    sentAt: moment().subtract(1, 'hours').format(),
    sentFrom: 'thoughful_skateboard_192',
    sentTo: thisUserId,
    receivedAt: moment().subtract(1, 'hours').add(5, 'seconds').format()
  },
  {
    id: generateId(),
    content: `8O34YIGFEABOUWIEYBFOAUWEYBF`,
    sentAt: moment().subtract(1, 'hours').format(),
    sentFrom: 'thoughful_skateboard_192',
    sentTo: thisUserId,
    receivedAt: moment().subtract(1, 'hours').add(5, 'seconds').format()
  },
];

export default messages;