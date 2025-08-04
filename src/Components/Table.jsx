import React, {useEffect, useState} from 'react';

const Table = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    console.log(data);
    return (
        <>
            <table className='w-full border-collapse border border-gray-400'>
                <tbody>
                <tr>
                    <th className='border border-gray-400 p-2'>SI No.</th>
                    <th className='border border-gray-400'>Name</th>
                    <th className='border border-gray-400'>Username</th>
                    <th className='border border-gray-400'>Email</th>
                    <th className='border border-gray-400'>Phone</th>
                    <th className='border border-gray-400'>Action</th>
                </tr>
                </tbody>
                <tbody>
                {
                    data.map((item) => (
                            <tr key={item.id}>
                                <td className='border border-gray-400 text-center p-2'>{item.id}</td>
                                <td className='border border-gray-400 text-center'>{item.name}</td>
                                <td className='border border-gray-400 text-center'>{item.username}</td>
                                <td className='border border-gray-400 text-center'>{item.email}</td>
                                <td className='border border-gray-400 text-center'>{item.phone}</td>
                                <td className='border border-gray-400 text-center'>
                                    <button className='cursor-pointer'>👁️</button>
                                    <button className='cursor-pointer'>✏️</button>
                                    <button className='cursor-pointer'>⚰️</button>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </>
    )
}

export default Table