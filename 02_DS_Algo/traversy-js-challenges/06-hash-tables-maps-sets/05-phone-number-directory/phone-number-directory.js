function phoneNumberDirectory(arr) {
  let directory = new Map();
  for (let entry of arr) {
    let [name, number] = entry.split(":");
    directory.set(name, number);
  }
  return directory;
}

module.exports = phoneNumberDirectory;
