import GameCard from '../../Components/GameCard/GameCard';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import './Home.css';
import { gql, useQuery } from '@apollo/client';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Search from '../../Components/Input/Search';
import FilterBox from '../../Components/FilterBox/FilterBox';


export default function Home(){

  const GET_GAMEDATA = gql`
  query Games($where: GameWhere, $options: GameOptions){
    games(where: $where, options: $options){
      gameId
      gameName
      publisher{
        publisherId
      }
      platform{
        platformId
      }
      genre{
        genreId
      }
    }
  }
`;

const info = {
  /*"where": {
    "gameId_CONTAINS": "Wii"
  },*/
  "options":{
    "limit": 10
  }
}

  const { loading, error, data } = useQuery(GET_GAMEDATA, {variables: info});

  const [input, setInput] = useState<string>("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }
 
  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error.message}</p>;
  return(
    <div className="home">
        <div className="search-container" >
              <Search></Search>
              <Button
                onClick={handleSubmit}
                label=" SEARCH "
                className="search-button"
                icon={faSearch}
                onKeyDown={() => console.log("Search!")}
              />
              <FilterBox/>
              <div className='gamecard-container'>
              {data.games.map((cardData: { gameId: string; gameName: string; publisher: {publisherId: string}; platform: {platformId: string}; genre: {genreId: string} }) => <GameCard key={cardData.gameId} gameId={cardData.gameId} gameName={cardData.gameName} publisher={cardData.publisher.publisherId} platform={cardData.platform.platformId} genre={cardData.genre.genreId} />)}

              </div>
          </div>
    </div>
    );
}