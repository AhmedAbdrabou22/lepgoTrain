import React from 'react'



const CategoryButton = ({ButtonOfArray , searchByCategory}) => {
    const onFilter = (btn)=>{
        searchByCategory(btn)
    }
    return (
        <div className='m-auto text-center'>
            {
                ButtonOfArray.length >=1 ? (
                    ButtonOfArray.map((btn)=>{
                        return(
                            <button onClick={()=>onFilter(btn)} className='btn1 btn'>{btn}</button>
                        )
                    })
                ) : (<h1>No Buttons</h1>)
            }
        </div>
    )
}

export default CategoryButton
