import React from 'react';

function Buttons ({myFunc,hasub,hacha,value}){
    const myHandler = (i,h) => {
        myFunc(i);
    };
    const haSubmit = (i,event) =>{
        hasub(i)
    };
    const haChange = (a,event) =>{
        hacha(a);
    };

    return (
        <div>
            <button onClick={myHandler.bind(null,1)}>ADD_1</button>
            <button onClick={myHandler.bind(null,100)}>ADD_100</button>
            <button onClick={myHandler.bind(null,-1)}>DELL_1</button>
            <button onClick={myHandler.bind(null,-100)}>DELL_100</button>
            <button onClick={myHandler.bind(null,'reset')}>RESET</button>
            <form onSubmit={haSubmit}>
                <label>
                    Число:
                    <input type="text" value={value} onChange={haChange} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        </div>
    );
};

export default Buttons;