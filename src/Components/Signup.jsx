import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      Cpassword: '',
      gender: '',
      profession: 'select one'
    }
  });
  const password = watch('password');

  const navigate = useNavigate();
  // console.log(errors);
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='Login-wrapper w-xl mx-auto my-7 p-7 bg-amber-900 rounded-md'>
        <form onSubmit={handleSubmit((data) => {
          sessionStorage.setItem('Signupdata', JSON.stringify(data))
          setTimeout(() => {
            navigate('/login');
          }, 1000)
          console.log("Account created successfully")
        })}>
          <h3 className='mb-3 text-2xl font-bold text-center'>Register</h3>
          <div className="form-fields mb-3">
            <label htmlFor='name' className='inputLabel'>Name</label>
            <input type="text" name="name" placeholder='Enter your name' id='name' className='inputField'
              {...register('name', { required: 'Name is required', pattern: { value: /^[A-Za-z ]+$/, message: 'Name should contain only letters' } })} />
            <span className='inputErrorMessage'>{errors.name?.message}</span>
          </div>
          <div className='form-fields mb-3'>
            <label htmlFor='email' className='inputLabel'>Email</label>
            <input type="email" name="email" placeholder='Enter your email id' id='email' className='inputField'
              {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please provide valid email' } })} />
            <span className='inputErrorMessage'>{errors.email?.message}</span>
          </div>
          <div className='form-fields mb-3'>
            <label htmlFor='password' className='inputLabel'>Password</label>
            <input type="text" name="password" placeholder='Enter your password' id='password' className='inputField'
              {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be 8 characters long' }, pattern: { value: /^(?=.*\d).{8,}$/, message: 'Password must be 8 characters long', } })} />
            <span className='inputErrorMessage'>{errors.password?.message}</span>
          </div>
          <div className='form-fields mb-3'>
            <label htmlFor='Cpassword' className='inputLabel'>Confirm Password</label>
            <input type="text" name="Cpassword" placeholder='Confirm your password' id='Cpassword' className='inputField'
              {...register('Cpassword', {
                required: 'Password is required',
                validate: (value) =>
                  value === password || "Passwords do not match",
                minLength: { value: 8, message: 'Password must be 8 characters long' },
                pattern: {
                  value: /^(?=.*\d).{8,}$/,
                  message: 'Password must be 8 characters long',
                }
              })} />
            <span className='inputErrorMessage'>{errors.Cpassword?.message}</span>
          </div>
          <div className='form-fields mb-3'>
            <label className='inputLabel'>Gender</label>
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
            <span className='inputErrorMessage'>
              {errors.gender?.message}
            </span>
          </div>
          <div className='form-fields mb-3'>
            <label htmlFor='prefession' className='inputLabel'>Working Professional</label>
            <select name="profession" id="profession" className='inputField'
              {...register('profession', {
                required: 'Profession is required',
                validate: (value) =>
                  value !== "select one" || "Profession is required",
              })}>
              <option value="select one" className='text-black' disabled>-- select one --</option>
              <option value="Yes" className='text-black'>Yes</option>
              <option value="No" className='text-black'>No</option>
            </select>
            <span className='inputErrorMessage'>{errors.profession?.message}</span>
          </div>
          <button type="submit" className='inputSubmitBtn'>Submit</button>
          <Link to='/login' className='block text-sm text-center'> <i className="ri-arrow-left-line"></i> Back to login</Link>
        </form>
      </div >
    </div >
  )
}

export default Signup