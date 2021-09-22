import moment from 'moment';

const thisUserId = `awfabpiubfaw`;

const messages = [
  /* FROM DAVID WINGFIELD */
  {
    id: 'AOBE8297B29DJ29B',
    encryptedContent: '&SD9FB9S(DF79BDFIIS+_(*HF2SNDF2',
    sentAt: moment().subtract(10, 'days').format(),
    sentFrom: 'taylor_swift_luvr_11',
    sentTo: thisUserId,
    receivedAt: moment().subtract(10, 'days').add(5, 'seconds').format()
  },
  {
    id: 'SKJDBF82YBIHFSBDF',
    encryptedContent: `This won't actually be plain text`,
    sentAt: moment().subtract(9, 'days').format(),
    sentFrom: 'taylor_swift_luvr_11',
    sentTo: thisUserId,
    receivedAt: moment().subtract(9, 'days').add(5, 'seconds').format()
  },

  /* FROM HAPPY MANGO */
  {
    id: 'ASD3RB35QBREQB',
    encryptedContent: `8O34YIGFEABOUWIEYBFOAUWEYBF`,
    sentAt: moment().subtract(2, 'hours').format(),
    sentFrom: 'happy_mango_935',
    sentTo: thisUserId,
    receivedAt: moment().subtract(2, 'hours').add(5, 'seconds').format()
  },
  {
    id: 'ASLDKFHBWEF',
    encryptedContent: `8O34YIGWEYBF`,
    sentAt: moment().subtract(1.5, 'hours').format(),
    sentFrom: 'happy_mango_935',
    sentTo: thisUserId,
    receivedAt: moment().subtract(1.5, 'hours').add(5, 'seconds').format()
  },
  {
    id: 'ALSKDJBFASDF3434',
    encryptedContent: `This is a sent message`,
    sentAt: moment().subtract(1.6, 'hours').format(),
    sentFrom: thisUserId,
    sentTo: 'happy_mango_935',
    receivedAt: moment().subtract(1.6, 'hours').add(5, 'seconds').format(),
    readAt: moment().subtract(1.6, 'hours').add(20, 'seconds').format()
  },
  {
    id: 'ASDKJFB2834YBFH',
    encryptedContent: `8O34YIGFEABOUWIEYBFOAUWEYBFABOUWIABOUWIABOUWIABOUWIABOUWIABOUWI`,
    sentAt: moment().subtract(1, 'hours').format(),
    sentFrom: 'happy_mango_935',
    sentTo: thisUserId,
    receivedAt: moment().subtract(1, 'hours').add(5, 'seconds').format()
  },
  {
    id: 'ASDIYFBWYIUEF',
    encryptedContent: `This is another sent message`,
    sentAt: moment().subtract(.5, 'hours').format(),
    sentFrom: thisUserId,
    sentTo: 'happy_mango_935',
    receivedAt: moment().subtract(.5, 'hours').add(5, 'seconds').format()
  },

  /* FROM THOUGHTFUL SKATEBOARD */
  {
    id: 'ASIDLFYB28YEIBFHJ',
    encryptedContent: `8O34YIGFEABOUWIEYBFOAUWEYBF`,
    sentAt: moment().subtract(1, 'hours').format(),
    sentFrom: 'thoughful_skateboard_192',
    sentTo: thisUserId,
    receivedAt: moment().subtract(1, 'hours').add(5, 'seconds').format()
  },
  {
    id: 'AWEIFHKBJDF',
    encryptedContent: `8O34YIGFEABOUWIEYBFOAUWEYBF`,
    sentAt: moment().subtract(1, 'hours').format(),
    sentFrom: 'thoughful_skateboard_192',
    sentTo: thisUserId,
    receivedAt: moment().subtract(1, 'hours').add(5, 'seconds').format()
  },
];

export default messages;