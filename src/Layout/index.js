import React from 'react'
import PropTypes from 'prop-types'
import {Navbar} from '../components'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}
Layout.propTypes = {
    children: PropTypes.node
}

export default Layout
