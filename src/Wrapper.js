import React from 'react'
import Router from './Router'
import {Provider} from "react-redux"
import {store} from "./redux/store"

export default () => {
    return(
        <Provider store={store}>
            <Router />
        </Provider>
    )
}