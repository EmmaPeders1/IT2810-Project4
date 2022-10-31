import React from 'react';
import { FC, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './GameCard.css';
import { useMutation } from '@apollo/client';
import updateIsFavoritedById from '../../GraphQL/Mutations/updateIsFavoritedById';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

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

  const [expanded, setExpanded] = useState(false);
  const [isFavoriteState, setIsFavoriteState] = useState<boolean>(isFavorited)
  const [heartColor, setHeartColor] = useState<string>(isFavorited ? "#ff3399" : "disabled");
  const [toggleIsFavorited] = useMutation(updateIsFavoritedById, { variables: info });

  useEffect(() => {
    setHeartColor(isFavoriteState ? "#ff3399" : "disabled");
  }, [isFavoriteState]);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleToggleFavorite = (e: React.MouseEvent<HTMLElement>) => {
    toggleIsFavorited();
    setIsFavoriteState(!isFavoriteState);
  }

  return (
    <Card
      sx={{
        width: 250,
        maxHeight: 500,
        minHeight: 250,
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
        <IconButton onClick={handleToggleFavorite} aria-label="add to favorites">
          <FavoriteIcon sx={{ color: heartColor }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          data-testid="ExpandMoreButton"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph align='left'>Genre: {genre}</Typography>
          <Typography paragraph align='left'>Platform: {platform}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default GameCard;

