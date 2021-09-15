import React from "react";

const RpgEnemyHealthBar = (props) => {
    const { bgcolor, completed, enemyHps } = props;
    const containerStyles = {
        height: 15,
        width: '100%',
        backgroundColor: "#000000",
        borderRadius: 2,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',

    }

    return (<div id="enemyHealthBar">
        <div style={ containerStyles }>
            <div style={ fillerStyles }>
                <span style={ labelStyles }></span>
            </div>
        </div></div>

    );
};

export default RpgEnemyHealthBar;
