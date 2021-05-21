import React, { useState } from 'react';
import MainPageLayout from "../components/MainPageLayout";

const Home = () => {
   // eslint-disable-next-line no-unused-vars
   const [input, setInput] = useState('');

   const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=men

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json()).then(result => {
        console.log(result);
    });

   };

   const onInputChange = ev => {
       // eslint-disable-next-line no-console
       setInput(ev.target.value); 
   };

   const onKeyDown = (ev) => {
       if (ev.keyCode === 13 ) {
           onSearch()
       };
   };

  

    return (
    <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <button type="button" onClick={onSearch}>
                Search
                </button>
        </MainPageLayout>
    );
};

export default Home;
