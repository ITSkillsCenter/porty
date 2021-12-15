import React from 'react'
import Nav from './Nav'
import HeaderCatalog from './Catalog'

function HeaderNavs() {
    return (
        <div className="position-absolute tm-site-header">
        <div className="container-fluid position-relative">
          <div className="row">
            <HeaderCatalog/>
            <Nav/>
          </div>
        </div>
      </div>
    )
}

export default HeaderNavs
