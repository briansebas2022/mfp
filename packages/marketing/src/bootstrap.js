//import all the dependency for react
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// define a mount function to load the app into speacif dom element

const mount = (ele) => {
    ReactDOM.render(<App></App>, ele)
}

// if dev mode then directly call mount and load it locally
if (process.env.NODE_ENV === 'development') { 
    if(document.querySelector('#marketing_div'))
        mount(document.querySelector('#marketing_div'))

}
//else export the mount function such that container can call it with its dom ele
export { mount }


