import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className='tc'>
      <input 
       id='searchInput'
       className ='di bn mh3 pa2 bg-lightest-blue shadow-3' 
       type ='search'
       placeholder='input image URL here'
       defaultValue= "https://upload.wikimedia.org/wikipedia/commons/c/c3/RH_Louise_Lillian_Gish.jpg"
       onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;