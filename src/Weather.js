import React from 'react';

export default function Weather({Weatherlink}) {
    return (
        <div>
            <img src={Weatherlink}/>
        </div>
    )
}