'use client'
import React from 'react';
import {useSelector} from "react-redux";

function Navbar() {
    const item=useSelector((state:any)=>state.cart)
    return (
        <div>
            {item.length}
        </div>
    );
}

export default Navbar;