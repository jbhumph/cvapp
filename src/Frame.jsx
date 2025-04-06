import { useState } from 'react'
import General from './General.jsx'
import Educational from './Educational.jsx'
import Practical from './Practical.jsx'

function Frame() {
    return (
        <div className="frame">
            <General />
            <Educational />
            <Practical />
        </div>
    )
}

export default Frame