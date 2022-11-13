import { useQuery } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import GameCard from '../../Components/GameCard/GameCard';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import getFavorites from '../../GraphQL/Queries/getFavorites';
import './Favorites.css';

// Props which is passed into the GameCards
interface CardDataProps {
  gameId: string;
  gameName: string;
  publisher: { publisherId: string };
  platform: { platformId: string };
  genre: { genreId: string };
  isFavorited: boolean;
}

/**
* A functional component that displays the favorited games
 */
export default function Favorites(){

  // Where-statement to the query
  let info = {
    "where": {
      "isFavorited": true
    }
  }

  // useQuery to get the favorited games with loading and error handling
  const { loading, error, data } = useQuery(getFavorites, { variables: info });
  if (loading) return <p className="loading"><CircularProgress />Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return(
    <div>
      <h1>Favorites</h1>
      {/* Message which will appear if there are no favorited games */}
      {data.games.length === 0 &&
      <p>There are no favorited games...</p>}

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
      <ScrollToTop />
    </div>
  );
}