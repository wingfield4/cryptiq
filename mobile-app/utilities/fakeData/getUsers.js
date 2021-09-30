import generateId from "../generateId";
import generateFakeKeys from "./generateFakeKeys";

const getUsers = async () => {
  let key1 = await generateFakeKeys().then(keys => keys.public);
  let key2 = await generateFakeKeys().then(keys => keys.public);
  let key3 = await generateFakeKeys().then(keys => keys.public);

  return ([
    {
      id: generateId(),
      username: 'taylor_swift_luvr_11',
      publicKey: key1,
      firstName: 'David',
      middleName: null,
      lastName: 'Wingfeld',
      email: '123fakeemail@email.email',
      phone: '(123) 456-7890'
    },
    {
      id: generateId(),
      username: 'happy_mango_935',
      publicKey: key2
    },
    {
      id: generateId(),
      username: 'thoughful_skateboard_192',
      publicKey: key3
    }
  ]);
}

export default getUsers;
