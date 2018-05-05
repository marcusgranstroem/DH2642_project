import React from 'react';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

const ErrorMessage = ({open, message}) => (
            <Dialog title="Error"
                    open={open}
                    >
                    <p>{message}</p>
            </Dialog>
        );

ErrorMessage.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired
};

export default ErrorMessage;
