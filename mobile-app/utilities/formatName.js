const formatName = (user) => {
  if(user.firstName || user.lastName) {
    return `${user.firstName} ${user.lastName}`;
  }

  return `${user.id}`;
}

export default formatName;
