import React, { useEffect, useState } from 'react'
import "./Search.css"
import { useSearchParams } from 'react-router-dom'
import { callAPI } from '../../utils/callApi';

import MapA from './mapA';

const Search = () => {
    const [searchP] = useSearchParams();
    const [suggestions, setSuggestions] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const getSearchResult=()=>{
        // const searchT = searchP.get("searchT");

        callAPI(`db_menu.json`).then((suggestionResults)=>{
            setSuggestions(suggestionResults);
            const data = suggestionResults;
            <MapA data={suggestionResults} />
            console.log(data);
        })
    }

    useEffect(()=>{
        getSearchResult();
    },[searchP]);

    return (
        <div className='smain'>
            {/* <div className="smain"> */}
                <div className="sinput">
                    <input onChange={(e)=>setSearchTerm(e.target.value)} type="text" className="sinputfield" value={searchTerm} />
                </div>
            {/* </div> */}
            {
                suggestions && (
                    
                <div className="searchbox">
                  {suggestions[0].items
                    .filter((suggestion) => {
                      const currentSearchTerm = searchTerm.toLowerCase();
                      const title = suggestion.name.toLowerCase();
                    //   console.log(suggestion.id);
                    //   console.log(title);
                      return (
                        currentSearchTerm &&
                        title.startsWith(currentSearchTerm) &&
                        title !== currentSearchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((suggestion) => (
                      <div className='searchbox-1'
                        key={suggestion.id}
                        onClick={() => setSearchTerm(suggestion.name)}
                      >
                        {suggestion.name}
                      </div>
                    ))}
                </div>
              )}

           
              </div>
      );
}

export default Search
