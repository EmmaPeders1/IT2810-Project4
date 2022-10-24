import GameCard from '../Components/GameCard/GameCard';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import './Home.css';
import  {gql, useQuery} from '@apollo/client'

const GET_GAMEDATA = gql`
  query GamesIdandName{
    games {
      gameId
      gameName
    }
  }
`;

export default function Home(){

  const [input, setInput] = useState<string>("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  const {loading, error, data} = useQuery(GET_GAMEDATA);
  if(loading) return <p>'Loading...'</p>;
  else{
    return(
      <div className="home" >
          <div className="search-container" >
            <Input
              className='URL-input'
              onChange={handleInput}
              placeholder={"Search for a game"}
            />
            <Button
              onClick={handleSubmit}
              label=" SEARCH "
              className="search-button"
              icon={faSearch}
              onKeyDown={() => console.log("search!")}
            />
          </div>
          <div className='gamecard-container'>
            <div>{JSON.stringify(data)}</div>
            <GameCard gameId={'id'} gameName={'game name'} publisher={'publisher'} platform={'platform'} genre={'genre'} />
          </div>
      </div>
    );
  }
}