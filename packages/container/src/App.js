import React from 'react'
import { mount } from 'marketing/MarketingApp'
import MarketingAppMount from './components/MarketingAppMount'

console.log(mount)

export default () => {
   return (
        <>
        <h1>hi Conatiner</h1>
        <hr></hr>
        <MarketingAppMount /></>
    )
}
