import React from "react";

const RpgHeroHealthBar = (props) => {
    const { bgcolor, completed, heroHps } = props;
    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#000000",
        borderRadius: 50,
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
        fontWeight: 'bold'
    }



    return (

        <div id="enemyHealthBar">
            <div style={ containerStyles }>
                <div style={ fillerStyles }>
                    <span style={ labelStyles }>{ `${heroHps}` }</span>
                </div>
            </div>
        </div>

    );
};

export default RpgHeroHealthBar;