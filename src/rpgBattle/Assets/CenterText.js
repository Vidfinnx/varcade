function CenterText(props) {

    const { characterName, moveName, damage } = props


    return (
        <div>
            <p>
                { characterName } { moveName }<br></br>  <br></br>{ damage }
            </p>
        </div>
    )

}

export default CenterText