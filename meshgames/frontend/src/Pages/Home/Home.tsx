import GameCard from '../../Components/GameCard/GameCard';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import './Home.css';
import { useQuery } from '@apollo/client';
import Search from '../../Components/Input/Search';
import FilterBox from '../../Components/FilterBox/FilterBox';
import getGameDataForCards from '../../GraphQL/Queries/getGameDataForCards';
import SortBox from '../../Components/SortBox/SortBox';

interface CardDataProps {
  gameId: string;
  gameName: string;
  publisher: { publisherId: string };
  platform: { platformId: string };
  genre: { genreId: string };
}

export default function Home() {

  const [input, setInput] = useState<string>("");
  const [platformName, setPlatformName] = useState<string>();
  const [publisherName, setPublisherName] = useState<string>();
  const [genreName, setGenreName] = useState<string>();
  const [sortInput, setSortInput] = useState<string>();
  const [limit, setLimit] = useState<number>(8);

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
      "limit": limit,
      "offset": 0,
      "sort": [
        {
          "gameName": null
        }
      ]
    }
  }

  const { loading, error, data, fetchMore } = useQuery(getGameDataForCards, { variables: info });


  function handleInput(event: React.MouseEvent<HTMLButtonElement>) {
    let input = document.getElementById("search-game") as HTMLInputElement;
    setInput(input.value);
    setLimit(8);
  }

  function handleFilter(platformInput: string, publisherInput: string, genreInput: string) {
    setPlatformName(platformInput);
    setPublisherName(publisherInput);
    setGenreName(genreInput);
    setLimit(8);
  }


  //known bug: the first time "load more is pressed", nothing happens. The following times, the expected behaviour happens.
  //we believe this to be a problem regarding the cache. On the web, many people have experienced something similar, but we could'nt find a solution
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

  function handleSort(sortInput:string) {
    setSortInput(sortInput);
    console.log(sortInput);
  }

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error.message}</p>;

  return(
    <div className="home">
      <div>
        Search: {input} <br />
        Publisher: {publisherName} <br />
        Platform: {platformName} <br />
        Genre:{genreName} <br />
      </div>
      <div className="search-container" >
        <Search />
        <Button
          onClick={handleInput}
          label=" SEARCH "
          className="search-button"
          icon={faSearch}
        />
        <FilterBox handleFilter={handleFilter}/>
        <SortBox handleSort= {handleSort}/>
      </div>
      <div className='gamecard-container'>
        {data.games.map((cardData: CardDataProps) =>
          <GameCard
            key={cardData.gameId}
            gameId={cardData.gameId}
            gameName={cardData.gameName}
            publisher={cardData.publisher.publisherId}
            platform={cardData.platform.platformId}
            genre={cardData.genre.genreId} />)}
      </div>
      <div className="loadButton-container">

        <Button
          className="load-button"
          onClick={handleLoadMore}>
          <p>"Load More.."</p></Button>
      </div>
    </div>
  );
}