export const getDateFromUnixTime = (time) => {
  const date = new Date(time * 1000);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};
