function displayLikes(users) {
  if (users.length === 0) {
    return "no one likes this";
  } else if (users.length === 1) {
    return `${users[0]} likes this`;
  } else if (users.length === 2) {
    const [name1, name2] = users;
    return `${name1} and ${name2} like this`;
  } else if (users.length === 3) {
    const [name1, name2, name3] = users;
    return `${name1}, ${name2} and ${name3} like this`;
  } else {
    const [name1, name2] = users;
    return `${name1}, ${name2} and ${users.length - 2} others like this`;
  }
}

module.exports = displayLikes;
