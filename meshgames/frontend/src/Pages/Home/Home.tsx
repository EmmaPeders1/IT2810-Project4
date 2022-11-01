import { faArrowDown, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Button from '../../Components/Button/Button';
import Search from '../../Components/Input/Search';
import FilterBox from '../../Components/FilterBox/FilterBox';
import GameCard from '../../Components/GameCard/GameCard';
import getGameDataForCards from '../../GraphQL/Queries/getGameDataForCards';
import './Home.css';

// props which the GameCards use
interface CardDataProps {
  gameId: string;
  gameName: string;
  publisher: { publisherId: string };
  platform: { platformId: string };
  genre: { genreId: string };
  isFavorited: boolean;
}

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
  const [sortInput, setSortInput] = useState<null | string>("ASC");
  const [limit, setLimit] = useState<number>(8);

  // variables for the query
  let info = {
    "where": {
      "publisher": {
        "publisherId_CONTAINS": publisherName
      },
      "platform": {
        "platformId_CONTAINS": platformName
      },
      "genre": {
        "genreId_CONTAINS": genreName
      },
      "gameName_CONTAINS": input
    },
    "options": {
      "sort": [
        {
          "gameName": sortInput
        }
      ],
      "limit": limit,
      "offset": 0,
    },
    "gamesAggregateWhere2": {
      "publisher": {
        "publisherId_CONTAINS": publisherName
      },
      "platform": {
        "platformId_CONTAINS": platformName
      },
      "genre": {
        "genreId_CONTAINS": genreName
      },
      "gameName_CONTAINS": input
    }
  }

  // function which executes the query
  const { loading, error, data, fetchMore } = useQuery(getGameDataForCards, { variables: info });

  // function which handles the input in the search field
  function handleInput(event: React.MouseEvent<HTMLButtonElement>) {
    let input = document.getElementById("search-game") as HTMLInputElement;
    setInput(input.value);
    setLimit(8);
  }

  // function which clears the search
  function handleClear() {
    setInput("");
    setPublisherName("");
    setPlatformName("");
    setGenreName("");
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

    setLimit(8);
  }

  // function which handles the pagination
  // Known bug: the first time "Load more" is pressed, nothing happens.
  // The following times, the expected behaviour happens.
  // we believe this to be a problem regarding the cache.
  // On the web, many people have experienced something similar, but we couldn't find a solution
  function handleLoadMore(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newLimit = limit + 8;
    fetchMore({
      variables: {
        offset: 0,
        limit: newLimit,
      },
    }).then(fetchMoreResult => {
      setLimit(newLimit);
    });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="home">

      {/* Search and filter-elements */}
      <div className="search-container" >
        <Search />
        <Button
          onClick={handleInput}
          label=" SEARCH "
          className="search-button"
          icon={faSearch}
        />
        <FilterBox handleFilter={handleFilter} />
      </div>

      {/* Div which diplays the user's search */}
      <div className="info-container">
        <p className='info-p'><b>Title: </b> {input}</p>
        <p className='info-p'><b>Publisher: </b> {publisherName} </p>
        <p className='info-p'><b>Platform: </b> {platformName} </p>
        <p className='info-p'><b>Genre: </b>{genreName} </p>
        <p className='info-p'><b>Sort: </b>{sortInput} </p>
        <Button
          label='CLEAR'
          icon={faTrash}
          onClick={handleClear}
        />
      </div>

      {/* Message which will appear if there are no matching games to the user's input */}
      {
        data.gamesAggregate.count === 0 &&
        <p className='zero-message'>There are no games that match your search...</p>
      }

      {/* Flexbox with the favorited GameCards */}
      <div className='gamecard-container'>
        {data.games.map((cardData: CardDataProps) =>
          <GameCard
            key={cardData.gameId}
            gameId={cardData.gameId}
            gameName={cardData.gameName}
            publisher={cardData.publisher.publisherId}
            platform={cardData.platform.platformId}
            genre={cardData.genre.genreId}
            isFavorited={cardData.isFavorited} />)}
      </div>

      {/* Button which appears if there are more GameCards to diplay */}
      {
        (data.gamesAggregate.count > data.games.length) &&
        <div className="loadButton-container" id="loadButton-container">
          <Button
            className="load-button"
            id="load-button"
            label='LOAD MORE'
            icon={faArrowDown}
            onClick={handleLoadMore}
          />
        </div>
      }
    </div >
  );
}