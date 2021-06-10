import React from 'react'
import "./LinkApi.css"

function LinkApi({Link}) {
    return (
        <div className="link">
            <p>Direct link</p>
            <a target='true' href={Link}> {Link} </a>
        </div>
    )
}

export default LinkApi
