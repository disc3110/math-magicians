const calcDisplay = (obj) => {
  // eslint-disable-next-line no-unused-vars
  const { total, next, operation } = obj;

  if (operation) {
    return `${total} ${operation} ${next || ' '}`;
  }
  return next;
};

export default calcDisplay;
