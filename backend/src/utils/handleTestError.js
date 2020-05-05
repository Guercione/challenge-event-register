module.exports = (expected, received) => {
  throw new Error(
    `Expected ${expected}, received: ${JSON.stringify(received)}`
  );
};
