import React from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

const ErrorMessage = ({open, message, close}) => (
            <Dialog title={"Error: " + message.error}
                    open={open}
                    onRequestClose={close}
                    >
                    <p>{message.details}</p>
            </Dialog>
        );

ErrorMessage.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.objectOf(PropTypes.string).isRequired,
    close: PropTypes.func.isRequired
};

export default ErrorMessage;
