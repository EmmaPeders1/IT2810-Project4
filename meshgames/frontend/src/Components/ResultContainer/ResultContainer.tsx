import { useQuery } from '@apollo/client';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import GameCard from '../GameCard/GameCard';
import getGameDataForCards from '../../GraphQL/Queries/getGameDataForCards';

interface  ResultQueryProps{
  input: string | undefined;
  publisher: string | undefined;
  platform: string | undefined;
  genre: string | undefined;
  sort: string | undefined;
}

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
 * A Funtional component that contains the ResultContainer
 */
function ResultContainer(props: ResultQueryProps) {

  const [limit, setLimit] = useState<number>(8);

  // When changing the props this will indicate change of filter, hence set new limit and query
  useEffect(() => {
    setLimit(8)
  }, [props])

  useEffect(() => {
    if(limit > 8) {
      fetchMore({
        variables: {
          offset: 0,
          limit: limit,
        },
      })
    }
  }, [limit])


  // variables for the query
  let info = {
    "where": {
      "publisher": {
        "publisherId_CONTAINS": props.publisher
      },
      "platform": {
        "platformId_CONTAINS": props.platform
      },
      "genre": {
        "genreId_CONTAINS": props.genre
      },
      "gameName_CONTAINS": props.input
    },
    "options": {
      "sort": [
        {
          "gameName": props.sort
        }
      ],
      "limit": limit,
      "offset": 0,
    },
    "gamesAggregateWhere2": {
      "publisher": {
        "publisherId_CONTAINS": props.publisher
      },
      "platform": {
        "platformId_CONTAINS": props.platform
      },
      "genre": {
        "genreId_CONTAINS": props.genre
      },
      "gameName_CONTAINS": props.input
    }
  }


  // function which executes the query
  const { loading, error, data, fetchMore } = useQuery(getGameDataForCards, { variables: info });

  // function which handles the pagination
  // Known bug: the first time "Load more" is pressed, nothing happens.
  // The following times, the expected behaviour happens.
  // we believe this to be a problem regarding the cache.
  // On the web, many people have experienced something similar, but we couldn't find a solution
  function handleLoadMore(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLimit(limit + 8)
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="ResultContainer">
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
    </div>
  );
}

export default ResultContainer;