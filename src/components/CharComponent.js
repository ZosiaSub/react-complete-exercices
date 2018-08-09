import React from 'react';
import styles from './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className={styles.CharComponent}
            onClick={props.onClick}
        >{props.character}</div>
    );
}

export default charComponent;