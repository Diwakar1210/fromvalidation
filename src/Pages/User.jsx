import React from 'react';
import Table from "../Components/Table.jsx";

const User = () => {
    return (
        <>
            <div className='p-4'>
                <div className='flex items-center justify-between mb-3'>
                    <h1 className='text-2xl'>Table</h1>
                    <button className='bg-sky-500 rounded py-2 px-3.5 text-sm'>Add User</button>
                </div>
                <Table/>
            </div>
        </>
    )
}

export default User