import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BrandLogo, Button } from '@discussify/styleguide';
import styles from './InitialScreen.css';

const InitialScreen = ({ onAuthenticate, className }) => (
    <div className={ classNames(styles.initialScreen, className) }>
        <div className={ styles.brand }>
            <BrandLogo
                variant="vertical"
                colored
                className={ styles.logo } />
            <div className={ styles.tagline }>Discuss the Web.</div>
        </div>
        <Button
            variant="primary"
            fullWidth
            onClick={ onAuthenticate }>
            Login with uPort
        </Button>
    </div>
);

InitialScreen.propTypes = {
    onAuthenticate: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default InitialScreen;
