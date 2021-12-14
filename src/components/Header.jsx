import React from 'react'
import HeaderNavs from './HeaderNavs'
import HeaderDiscover from './HeaderDiscover'
import HeaderVideo from './HeaderVideo'

function Header() {
    return (
        <div className="position-relative">
        <HeaderNavs/>
         <HeaderDiscover/>
        <HeaderVideo/>
        
        </div>
       
    )
}

export default Header
