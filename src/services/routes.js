import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Lista from '../pages/Lista/Lista'
import Specs from '../pages/Specs/Specs'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Lista} />
            <Route path="/specs/:id" component={Specs} />
        </BrowserRouter>
    )
}