import React from 'react'
import { Button } from 'semantic-ui-react'

const Dashboard = ({balls, setBalls, strikes, setStrikes}) => {
   

    const handleBall = () => {
        balls > 3 ? setBalls(0) : setBalls(balls + 1)
    }
    const handleStrike = () => {
        strikes > 2 ? setStrikes(0) : setStrikes(strikes + 1)
    }
    const handleFoul = () => {
        strikes === 0 ? setStrikes(strikes + 1) : setStrikes(strikes + 2)
    }
    const handleHit = () => {
        setStrikes(0)
        setBalls(0)
    }
    return(
        <div>
            <Button basic color='green' onClick = {handleBall}>Ball</Button>
            <Button basic color='red' onClick = {handleStrike}>Strike</Button>
            <Button basic color='blue' onClick = {handleFoul}>Foul</Button>
            <Button basic color='yellow' onClick = {handleHit}>Hit</Button>
        </div>
    )
}

export default Dashboard