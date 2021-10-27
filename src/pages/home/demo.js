import React, { useState } from 'react';

function Demo() {
    const [bgColor, setBgColor] = useState('bg-one');
    const handleToggleBgColor = ()=>{
        setBgColor(bgColor==='bg-one'?'bg-two':'bg-one')
    }
    return (
        <div className={bgColor} onClick={handleToggleBgColor}>toggle background-color</div>
    );
}
export default Demo