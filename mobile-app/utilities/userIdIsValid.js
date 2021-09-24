const userIdIsValid = (userId) => {
  if(!userId)
    return false;

  return userId.length >= 8;
}

export default userIdIsValid;
