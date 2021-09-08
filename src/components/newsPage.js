import React from 'react';

const NewsPаge = ({ match, newsList }) => {
  const { id } = match.params;
  const card = newsList.find(item => item.id === Number(id))
  const { by, score, url, time, title, kids} = card;

  return (
    <>
      ku
    </>
  )
}
export default NewsPаge;