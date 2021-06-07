import React from 'react'
import "./LinkApi.css"

function LinkApi({Link}) {
    return (
        <div className="link">
            <p>Direct link</p>
            <p> {Link} </p>
        </div>
    )
}

export default LinkApi
