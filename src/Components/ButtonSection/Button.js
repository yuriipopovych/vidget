import React from 'react'

export default function Button({plus}) {
    return (
        <div onClick={plus}>
            <button name='good'>Good</button>
            <button name='neutral'>Neutral</button>
            <button name='bad'>Bad</button>
        </div>
    )
}
