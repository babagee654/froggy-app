import React from "react"
import Frog from "./Frog"
import data from "../data"

export default function Main() {

    // Make each frog data object a state
    const [frogs, setFrogs] = React.useState(data)

    function toggle(id) {
        console.log(`${id} clicked boiii`)
        setFrogs(prevFrogs => {
            return prevFrogs.map(currFrog => {
                return currFrog.id === id ? { ...currFrog, on: !currFrog.on } : currFrog
            })
        })
    }

    // Map the elements to print
    const frogElements = frogs.map((frog) => {
        console.log(frog)
        return (
            <div>
                <Frog
                    key={frog.id}
                    frog={frog}
                    toggle={toggle}
                />
                <hr></hr>
            </div>
        )
    })

    return (
        <main className="content--container">
            {frogElements}
        </main>
    )
}