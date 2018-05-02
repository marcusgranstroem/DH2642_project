import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';

const Snack = ({open, message, duration}) => (
    <Snackbar open={open}
        message={message}
        autoHideDuration={duration}
    />
);

Snack.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired
}

export default Snack;
