import React from 'react'

const Sidebar = () => {
    const activemenu = true
    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activemenu && (<>
                <div className='flex justify-between items-center'>
                    Sidebar
                </div>
            </>)}
        </div>
    )
}

export default Sidebar