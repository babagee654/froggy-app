import React from "react"

export default function Frog(props) {

    let { frog } = props; // The frog information

    // Dynamic import of local images
    // 1. Use require.context(RelPathOfImageFolder, true); to get the url to folder
    const images = require.context('../images', true)
    // 2. Now that we have the url to that folder, we can use images(`./image.jpg`) 
    const frogPic = images(`./${frog.imageUrl}`) // translates to "src/images/image.jpg"

    console.log(frog)

    let lifespan = frog.lifespan
    let lifespanText = [];

    if (lifespan.wild) {
        lifespanText.push(`Wild (${lifespan.wild})`)
    }
    if (lifespan.captive) {
        lifespanText.push(`Captive (${lifespan.captive})`)
    }
    if (lifespan.overall) {
        lifespanText.push(`Overall (${lifespan.overall})`)
    }

    let lifespanTextInput = lifespanText.join("    ")


    // We want background color to change on click
    // colors: #b54ac5, #4ac59e

    let containerStyle = {
        backgroundColor: frog.on ? "#F54ac5" : "#4ac59e"
    }

    return (
        <div className="frog-container" style={containerStyle} onClick={() => props.toggle(frog.id)}>
            <img className="frog-img" src={frogPic} alt={frog.name}></img>
            <div className="frog-info">
                <h3>{frog.name} <span className="alias">( {frog.alias} )</span></h3>
                <div className="sub-info">
                    <span className="continent">Found in: {frog.continent}</span>
                    {lifespanText && <span className="lifespan">{`Life Expectancy: ${lifespanTextInput}`}</span>}
                </div>
                <p> {frog.description}</p>
                <a href={`${frog.wiki}`}>Learn More</a>
            </div>
        </div>
    )
}