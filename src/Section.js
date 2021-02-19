import React from 'react';
import Weather from "./Weather";

export default function Section({sity, children}) {
    return (<>
    <h1>{sity}</h1>
    {children}
    </>
)};