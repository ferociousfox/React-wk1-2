import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';




const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Header(props){
  const { classes } = props;
  const linkDecoration = {
    textDecoration: 'none',
    color: 'black'
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Help queue
          </Typography>
          <Link style={linkDecoration} to="/"><Button color='inherit'>Home</Button></Link>
          <Link style={linkDecoration} to="/newticket"><Button color='inherit'>Create Ticket</Button></Link>
        </Toolbar>
      </AppBar>

    </div>
  );
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
