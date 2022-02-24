import React from 'react';
import { MdGrid4X4, MdList } from "react-icons/md";

const NameHeader = () => {
    return (
        <>
            <MdGrid4X4/>
                <div style={{flex: '3 0 auto', padding: '0 0 0 2%'}}>Mike </div>
            <MdList/>
        </>
    )
}

export default NameHeader;