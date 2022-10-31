import React from 'react';
import { FC, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useMutation } from '@apollo/client';
import updateIsFavoritedById from '../../GraphQL/Mutations/updateIsFavoritedById';
import GameCardInfo from '../GameCardInfo/GameCardInfo';
import './GameCard.css';

interface GameCardProps {
  gameId: string;
  gameName: string;
  publisher: string;
  platform: string;
  genre: string;
  isFavorited: boolean;
}

const GameCard: FC<GameCardProps> = ({ gameId, gameName, publisher, platform, genre, isFavorited }) => {

  const info = {
    "where": {
      "gameId": gameId
    },
    "update": {
      "isFavorited": !isFavorited
    }
  }

  const [isFavoriteState, setIsFavoriteState] = useState<boolean>(isFavorited)
  const [heartColor, setHeartColor] = useState<string>(isFavorited ? "#ff3399" : "disabled");
  const [toggleIsFavorited] = useMutation(updateIsFavoritedById, { variables: info });

  useEffect(() => {
    setHeartColor(isFavoriteState ? "#ff3399" : "disabled");
  }, [isFavoriteState]);

  const handleToggleFavorite = (e: React.MouseEvent<HTMLElement>) => {
    toggleIsFavorited();
    setIsFavoriteState(!isFavoriteState);
  }

  return (
    <Card
      sx={{
        width: 250,
        height: 390,
      }}
      id={gameId}
    >
      <CardHeader
        title={gameName}
        subheader={publisher}
        sx={{
          minHeight: 150,
        }}
      />
      <div className='cardColorBox' />
      <CardActions disableSpacing>
        <IconButton
          onClick={handleToggleFavorite}
          aria-label="add to favorites"
        >
          <FavoriteIcon sx={{ color: heartColor }} />
        </IconButton>
        <GameCardInfo
          gameNameInfo={gameName}
          publisherInfo={publisher}
          platformInfo={platform}
          genreInfo={genre}
        />
      </CardActions>
    </Card>
  );
}

export default GameCard;

