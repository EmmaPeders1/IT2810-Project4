import './GameCardInfo.css';
import { Box, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import Button from '../../Components/Button/Button';
import { faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Props which is passed into GameCardInfo (which will get their values from GameCard)
interface gameCardInfoProps {
  gameNameInfo: string;
  publisherInfo: string;
  platformInfo: string;
  genreInfo: string;
}

function GameCardInfo(props: gameCardInfoProps) {

  // function which keeps track of wheter the information is visible or not
  const [open, setOpen] = useState(false);

  // functions which change the state of "open"
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Icon which will show the information if clicked on */}
      <div onClick={handleOpen} className="infoIcon" data-testid="InfoButton">
        <FontAwesomeIcon icon={faInfoCircle}/>
      </div>

      {/* Modal which handles the open and close functions */}
      <Modal
        open={open}
        onClose={handleClose}
      >
        {/* div where the information is visible */}
        <div className="infoBoxInner">
          <Box sx={{ backgroundColor: 'background.paper', borderRadius: '5%', border: 'solid #9d00a8' }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ textAlign: 'center', m: 1, fontWeight: 'bold', bgcolor: 'background.paper' }}
            >
              Game information:
            </Typography>

            {/* Information given by the props */}
            <Typography
              sx={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', bgcolor: 'background.paper' }}>
              <b>Title: </b> {props.gameNameInfo} <br />
              <b>Publisher: </b> {props.publisherInfo} <br />
              <b>Platform: </b> {props.platformInfo} <br />
              <b>Genre: </b> {props.genreInfo} <br />
            </Typography>

            {/* Button to close the field (the user can also just click outside of the box, but added just in case) */}
            <div className="button-container">
              <Button
                icon={faClose}
                label=" CLOSE "
                className="closeInfo-button"
                onClick={handleClose}
              />
            </div>
          </Box>
        </div>
      </Modal >
    </div >
  );
}

export default GameCardInfo;
