import GameCard from '../../Components/GameCard/GameCard';
import { faArrowDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import './Home.css';
import { useQuery } from '@apollo/client';
import Search from '../../Components/Input/Search';
import FilterBox from '../../Components/FilterBox/FilterBox';
import getGameDataForCards from '../../GraphQL/Queries/getGameDataForCards';

interface CardDataProps {
  gameId: string;
  gameName: string;
  publisher: { publisherId: string };
  platform: { platformId: string };
  genre: { genreId: string };
  isFavorited: boolean;
}

export default function Home() {

  const [input, setInput] = useState<string>("");
  const [platformName, setPlatformName] = useState<string>();
  const [publisherName, setPublisherName] = useState<string>();
  const [genreName, setGenreName] = useState<string>();
  const [sortInput, setSortInput] = useState<null | string>("ASC");
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
      "sort": [
        {
          "gameName": sortInput
        }
      ],
      "limit": limit,
      "offset": 0,
    }
  }

  const { loading, error, data, fetchMore } = useQuery(getGameDataForCards, { variables: info });

  function handleInput(event: React.MouseEvent<HTMLButtonElement>) {
    let input = document.getElementById("search-game") as HTMLInputElement;
    setInput(input.value);
    setLimit(8);
  }

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

  //known bug: the first time "load more" is pressed, nothing happens. The following times, the expected behaviour happens.
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
      </div>
      {data.games.length === 0 &&
        <p>There are no games that match your search...</p>
      }
      <div className='gamecard-container'>
        {console.log(data.games.length)}
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
      {data.games.length >= 8 &&
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
    </div>
  );
}