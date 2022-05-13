import React from 'react';
import { useState } from 'react';


const Square =(props) => {
    const [color, setColor] = useState('white')
    return (
        <div key={props.id} id={props.itemid} pleace={props.pleace} className={color} onMouseOver={(e) => {
            
            if (color === 'red') {
                setColor('white')
                props.handleremove(props.pleace)

                

            }
            if (color === 'white') {
                setColor('red')
                props.handleadd(props.pleace)
                
                
            }
            
        }
        }>
            {props.itemid}
        </div>
        
    )
}

export { Square };