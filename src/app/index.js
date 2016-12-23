/*
 * @Author: yinjikai
 * @Date: 2016-12-22 13:47:20
 * @Last Modified by: yinjikai
 * @Last Modified time: 2016-12-23 11:07:54
 */
import './main.scss'
import React, { Component } from 'react'
import { render } from 'react-dom'
class Hello extends Component {
    render() {
        return (
            <h1>hello webpack</h1>
        )
    }
}
render(<Hello />, document.getElementById('root'))
