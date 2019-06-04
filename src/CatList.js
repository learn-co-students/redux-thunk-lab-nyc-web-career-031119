import React from 'react';

const CatList = (props) => {

  const renderCats = () => props.catPics.map(cat => <img key={cat.id} src={cat.url} />)
  return (
    <div>
      <h1>All of da Cats!</h1>
      {renderCats()}
    </div>
  );
};

export default CatList
