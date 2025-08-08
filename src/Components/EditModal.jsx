import React from 'react'
import PrimaryButton from './PrimaryButton'

const EditModal = () => {
    return (
        <div className='Modal w-md bg-amber-600 rounded absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10 p-3 hidden'>
            <h3 className='mb-3 text-2xl font-bold text-center'>Edit User</h3>
            <form>
                <div className="form-fields mb-3">
                    <label htmlFor='email' className='inputLabel'>Name</label>
                    <input type="email" name="email" placeholder='Enter your email id' id='email' className='inputField' />
                </div>
                <div className="form-fields mb-3">
                    <label htmlFor='email' className='inputLabel'>User Name</label>
                    <input type="email" name="email" placeholder='Enter your email id' id='email' className='inputField' />
                </div>
                <div className="form-fields mb-3">
                    <label htmlFor='email' className='inputLabel'>Email</label>
                    <input type="email" name="email" placeholder='Enter your email id' id='email' className='inputField' />
                </div>
                <div className="form-fields mb-3">
                    <label htmlFor='email' className='inputLabel'>Email</label>
                    <input type="email" name="email" placeholder='Enter your email id' id='email' className='inputField' />
                </div>
                <div className='flex items-center justify-end gap-2'>
                    <button className='inputSubmitBtn bg-gray-500'>Cancel</button>
                    <PrimaryButton/>
                </div>
            </form>
        </div>
    )
}

export default EditModal