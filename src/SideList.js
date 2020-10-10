import { act } from '@testing-library/react';
import React from 'react';
const SideList = (
    {
        children,
        title,
        active=""
        
    }
) => {
    return ( <div className= {active?"active":"sideListdiv"} >
        <span className="svg">{children}</span>
        <span className="title">{title}</span>


    </div>);
}
 
export default SideList;