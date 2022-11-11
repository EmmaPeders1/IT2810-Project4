import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import Search from '../../Components/Input/Search';
import FilterBox from '../../Components/FilterBox/FilterBox';
import ResultContainer from '../../Components/ResultContainer/ResultContainer';
import './Home.css';

/**
 * A Funtional component that displays the main page
 * The page consists of filter and search options and the GameCards
 */
export default function Home() {

  // functions to set the different states
  const [input, setInput] = useState<string>("");
  const [platformName, setPlatformName] = useState<string>();
  const [publisherName, setPublisherName] = useState<string>();
  const [genreName, setGenreName] = useState<string>();
  const [sortInput, setSortInput] = useState<string>("ASC");

  // function which handles the input in the search field
  function handleInput(event: React.MouseEvent<HTMLButtonElement>) {
    let input = document.getElementById("search-game") as HTMLInputElement;
    setInput(input.value);
  }

  // function which handles the input in the filter fields
  function handleFilter(platformInput: string, publisherInput: string, genreInput: string, sortInput: string) {
    setPlatformName(platformInput);
    setPublisherName(publisherInput);
    setGenreName(genreInput);

    if (sortInput === "") {
      setSortInput("ASC");
    }
    else {
      setSortInput(sortInput);
    }
  }

  return (
    <div className="home">

      {/* Search and filter-elements */}
      <div className="search-container" >
        <Search />
        <Button
          aria-label="search button"
          onClick={handleInput}
          label=" SEARCH "
          className="search-button"
          icon={faSearch}
        />
        <FilterBox handleFilter={handleFilter} />
      </div>

      <ResultContainer input={input} publisher={publisherName} platform={platformName} genre={genreName} sort={sortInput} />
    </div >
  );
}