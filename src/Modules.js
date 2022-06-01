import { LibraryBooks } from '@material-ui/icons'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './modules.css'

const Modules = () => {
    return (
        <Link to="/modules-content" className="featured-module">
           <div className="featuredItem-module">
           <span className="featuredMoney-module">Understanding the basics</span>
        <div className="featuredMoneyContainer-module">
        <span className="featuredTitle-module">Created by: Steve</span>
          <span className="">
             
          </span>
        </div>
        <span className="featuredSub-module">
            <LibraryBooks className="book-icon"/> Modules: 1</span>
            <FaLongArrowAltRight size={20}  className="featuredIcon-module negative-module"/>
      </div>
       
        </Link>
    )
}

export default Modules
