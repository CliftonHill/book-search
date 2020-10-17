import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//*for Modal
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
//*end

//********Modal ************
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal {props.num}</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
// *********end modal*******

const styleObj= {
  backgroundColor: "rgb(47, 67, 106, 80%)"
}

function SimpleRating(props) {
  return (
    <div>
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Rating name="read-only" value={props.stars} size="small" readOnly />
    </Box>
    </div>
  );
}

export default function Tile(props) {
  function handleClick () {

  }

  return(
    <div style={styleObj} className="tile">
      <div className="tile-contents" >
        <img src={"images/" + props.image} onClick={handleClick}/>
        <div><TransitionsModal num={props.num}/><br/><SimpleRating stars={props.stars} /></div>
      </div>

    </div>

  );
};

export {TransitionsModal};
