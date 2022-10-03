// make sure to import react, as well as useState for your component
// useState is one of the hooks we'll be using
import React, { useState } from 'react'

const PersonCard = (props)=> {
    // destructuring allows us to refer to each prop by key, without using props.firstName. Instead, we can just use 'firstName'
    const { firstName, lastName, hairColor } = props
    // let's use state to pass in age to our person card
    const [age, setAge] = useState(props.age)
    return(
        <div>
            <h1>{ lastName }, {firstName}</h1>
            <ul>
                <li>Age: { age }</li>
                <li>Hair color: { hairColor }</li>
            </ul>
        </div>
    )
}
export default PersonCard