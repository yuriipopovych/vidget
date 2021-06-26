import React from 'react'

export default function Statistics({options, pers, total}) {
    return (
        <div>
            <p>Good: {options.good}</p>
            <p>Neutral: {options.neutral}</p>
            <p>Bad: {options.bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {pers} %</p>
        </div>
    )
}
