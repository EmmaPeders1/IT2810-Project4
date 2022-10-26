import GameCard from '../../Components/GameCard/GameCard';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import './Home.css';
import { useQuery } from '@apollo/client';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Search from '../../Components/Input/Search';
import FilterBox from '../../Components/FilterBox/FilterBox';
import getGameDataForCards from '../../GraphQL/Queries/getGameDataForCards';


interface CardDataProps{
  gameId: string;
  gameName: string;
  publisher: {publisherId: string};
  platform: {platformId: string};
  genre: {genreId: string};
}

export default function Home(){

  const [input, setInput] = useState<string>("");

  let info = {
    "where": {
      "gameName_CONTAINS": input,
    },
    "options":{
      "limit": 10
    }
  }

  const { loading, error, data } = useQuery(getGameDataForCards, {variables: info});


  function handleInput(event: React.MouseEvent<HTMLButtonElement>) {
    let input = document.getElementById("search-game") as HTMLInputElement;
    setInput(input.value);
  }

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error.message}</p>;
  return(
    <div className="home">
      <div className="search-container" >
        <Search />
        <Button
          onClick={handleInput}
          label=" SEARCH "
          className="search-button"
          icon={faSearch}
        />
        <FilterBox/>
        <div className='gamecard-container'>
          {data.games.map((cardData: CardDataProps ) =>
          <GameCard
          key={cardData.gameId}
          gameId={cardData.gameId}
          gameName={cardData.gameName}
          publisher={cardData.publisher.publisherId}
          platform={cardData.platform.platformId}
          genre={cardData.genre.genreId} />)}
        </div>
      </div>
    </div>
    );
}