import React from 'react'
import data from './data'


const CategoryButton = () => {
        const ButtonOfArray = [...new Set(data.map((btn)=>{return btn.category}))]
        console.log(ButtonOfArray);
    return (
        <div className='m-auto text-center'>
            {
                ButtonOfArray.length >=1 ? (
                    ButtonOfArray.map((btn)=>{
                        return(
                            <button className='btn1 btn'>{btn}</button>
                        )
                    })
                ) : (<h1>No Buttons</h1>)
            }
        </div>
    )
}

export default CategoryButton
