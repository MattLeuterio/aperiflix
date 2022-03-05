const scrollUpTo = (element, to, duration) => {
  if (duration <= 0) {
    return;
  }
  const difference = to - element.scrollTop;
  const perTick = (difference / duration) * 10;
  setTimeout(() => {
    element.scrollTop += perTick;
    if (element.scrollTop === to) {
      return;
    }
    scrollUpTo(element, to, duration - 10);
  }, 10);
};
export default scrollUpTo;
