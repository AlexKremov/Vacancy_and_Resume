import { useState } from "react"
import {Square} from "../components/Square"


const items = [
    {id: 1, pleace: 'row 1 column 1'},
    {id: 2, pleace: 'row 1 column 2'},
    {id: 3, pleace: 'row 1 column 3'},
    {id: 4, pleace: 'row 2 column 1'},
    {id: 5, pleace: 'row 2 column 2'},
    {id: 6, pleace: 'row 2 column 3'},
    {id: 7, pleace: 'row 3 column 1'},
    {id: 8, pleace: 'row 3 column 2'},
    {id: 9, pleace: 'row 3 column 3'}
]




export const Testpage =() => {
    const [listres, setListres] = useState([])

    return (
        <div className="main-container">
        <div className="square">
        
            {items.map((e) => {
                
                return <Square key={e.id+ 'key'} pleace={e.pleace}  handleadd={(id) => {
                    setListres([...listres, {id: id}])
                    
                }} 
                handleremove={
                    (id) => {
                        setListres(listres.filter((e) => {
                            return e.id !== id
                        }))
                        
                    }
                }
                /> 
                
            })}
            
        </div>
        
        <div className="res-list"> Red Squares
            {listres.map((e) => {
                return <p>{e.id}</p>
            })}
        </div>
        </div>
    )
    
}