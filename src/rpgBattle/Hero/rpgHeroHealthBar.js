import React, { useState, useEffect } from 'react';

class RpgHeroHealthBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            percentage: 100
        }

        this.nextStep = this.nextStep.bind(this)
    }

    nextStep() {
        if (this.state.percentage === 100) return
        this.setState(prevState => ({ percentage: prevState.percentage + 20 }))
    }

    render() {
        return (
            <div>

                <ProgressBar percentage={ this.state.percentage } />


            </div>
        )
    }
}

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Filler percentage={ props.percentage } />
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler" style={ { width: `${props.percentage}%` } } />
}

// ReactDOM.render(
//     <ProgressBarExample />,
//     document.querySelector('#app')
// )

export default RpgHeroHealthBar