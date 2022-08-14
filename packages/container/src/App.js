import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MarketingAppMount from './components/MarketingAppMount'
import Header from './components/Header'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({ productionPrefix: 'co' })

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <>
                    <Header />
                    <MarketingAppMount />
                </>
            </StylesProvider>

        </BrowserRouter>

    )
}
