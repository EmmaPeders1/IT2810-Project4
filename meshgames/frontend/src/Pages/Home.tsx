import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import './Home.css';

export default function Home(){

  const [input, setInput] = useState<string>("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

return(
  <div className="home">
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

  </div>

  );
}