import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      Cpassword: '',
      gender: '',
      profession: 'select one'
    }
  });
  const navigate = useNavigate();
  // console.log(errors);
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='Login-wrapper w-xl mx-auto my-7 p-7 bg-amber-900 rounded-md'>
        <form onSubmit={handleSubmit((data) => {
          sessionStorage.setItem('Signupdata', JSON.stringify(data))
          setTimeout(()=>{
            navigate('/login');
          }, 1000)
          console.log("Account created successfully")
        })}>
          <h3 className='mb-3 text-2xl font-bold text-center'>Register</h3>
          <div className="form-fields mb-3">
            <label htmlFor='name' className='text-sm mb-1 inline-block'>Name</label>
            <input type="text" name="name" placeholder='Enter your name' id='name' className='w-full border border-solid border-gray-500 text-sm p-2 rounded-sm'
              {...register('name', { required: 'Name is required', pattern:{value:/^[A-Za-z ]+$/,message:'Name should contain only letters'} })} />
            <span className='block text-sm text-yellow-400 pt-1'>{errors.name?.message}</span>
          </div>
          <div className='form-fields mb-3'>
            <label htmlFor='email' className='text-sm mb-1 inline-block'>Email</label>
            <input type="email" name="email" placeholder='Enter your email id' id='email' className='w-full border border-solid border-gray-500 text-sm p-2 rounded-sm'
              {...register('email', { required: 'Email is required',pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:'Please provide valid email'} })} />
            <span className='block text-sm text-yellow-400 pt-1'>{errors.email?.message}</span>
          </div>
          <div className='form-fields mb-3'>
            <label htmlFor='password' className='text-sm mb-1 inline-block'>Password</label>
            <input type="text" name="password" placeholder='Enter your password' id='password' className='w-full border border-solid border-gray-500 text-sm p-2 rounded-sm'
              {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be 8 characters long' },pattern:{value:/^(?=.*\d).{8,}$/,message:'Password must be 8 characters long',}  })} />
            <span className='block text-sm text-yellow-400 pt-1'>{errors.password?.message}</span>
          </div>
          <div className='form-fields mb-3'>
            <label htmlFor='Cpassword' className='text-sm mb-1 inline-block'>Confirm Password</label>
            <input type="text" name="Cpassword" placeholder='Confirm your password' id='Cpassword' className='w-full border border-solid border-gray-500 text-sm p-2 rounded-sm'
              {...register('Cpassword', { required: 'Password is required', minLength: { value: 8, message: 'Password must be 8 characters long' },pattern:{value:/^(?=.*\d).{8,}$/,message:'Password must be 8 characters long',}  })} />
            <span className='block text-sm text-yellow-400 pt-1'>{errors.password?.message}</span>
          </div>
          <div className='form-fields mb-3'>
            <label className='text-sm mb-1 inline-block'>Gender</label>
            <div className='flex items-center gap-3'>
              <label htmlFor="genderM">
                <input
                  type="radio"
                  className="mr-3"
                  id="genderM"
                  value="Male"
                  {...register("gender", {
                    required: "Gender is required"
                  })}
                /> Male
              </label>
              <label htmlFor="genderF">
                <input
                  type="radio"
                  className="mr-3"
                  id="genderF"
                  value="Female"
                  {...register("gender")}
                /> Female
              </label>
            </div>
            <span className='block text-sm text-yellow-400 pt-1'>
              {errors.gender?.message}
            </span>
          </div>
          <div className='form-fields mb-3'>
            <label htmlFor='prefession' className='text-sm mb-1 inline-block'>Working Professional</label>
            <select name="profession" id="profession" className='w-full border border-solid border-gray-500 text-sm p-2 rounded-sm'
              {...register('profession', {
                required: 'Profession is required',
                validate: (value) =>
                  value !== "select one" || "Profession is required",
              })}>
              <option value="select one" className='text-black' disabled>-- select one --</option>
              <option value="Yes" className='text-black'>Yes</option>
              <option value="No" className='text-black'>No</option>
            </select>
            <span className='block text-sm text-yellow-400 pt-1'>{errors.profession?.message}</span>
          </div>
          <button type="submit" className='w-full cursor-pointer mb-4 bg-green-500 p-2 rounded-sm text-stone-950'>Submit</button>
          <Link to='/login' className='block text-sm text-center'> <i className="ri-arrow-left-line"></i> Back to login</Link>
        </form>
      </div >
    </div >
  )
}

export default Signup