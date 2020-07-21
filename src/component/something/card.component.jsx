import React, { } from 'react';

export function Card(){
    return (
        <div className="cardBorder">
            <div className="BigCard">
                <div className="CardImage">
                    <img src="" alt=""/>
                </div>
                <div className="CardContent">
                    <h3>Javascript</h3>
                    <p>this is an interesting Javascript tutorial</p>
                </div>
                <div className="CardButton">
                    <button>This is a card</button>
                </div>
            </div>            
        </div>
    );
}