function formatPhoneNumber(nums) {
  let part1 = nums.slice(0, 3).join("");
  let part2 = nums.slice(3, 6).join("");
  let part3 = nums.slice(6).join("");
  return `(${part1}) ${part2}-${part3}`;
}

module.exports = formatPhoneNumber;
