import React from "react";

const RpgHeroHealthBar = (props) => {
    const { bgcolor, completed, heroHps } = props;

    const containerStyles = {
        height: 10,
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

    return (
        <div id="enemyHealthBar">
            <div style={ containerStyles }>
                <div style={ fillerStyles }>
                    <span style={ labelStyles }></span>
                </div>

            </div>
        </div>
    );
};

export default RpgHeroHealthBar;
