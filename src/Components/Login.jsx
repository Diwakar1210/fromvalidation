import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit, formState: { errors }, /* watch */ } = useForm({ defaultValues: { email: '', password: '' } });
  // console.log(watch('email'))
  const navigate = useNavigate();

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='Login-wrapper w-xl mx-auto my-7 p-7 bg-amber-900 rounded-md'>
        <form onSubmit={handleSubmit((data) => {
          // console.log(data)
          const stored = JSON.parse(sessionStorage.getItem("Signupdata"));
          if(stored.email === data.email && stored.password === data.password){
            console.log("Successfull login");
            setTimeout(()=>{
              navigate('/home');
            },1000)
          }
          // console.log(stored);
        })}>
          <h3 className='mb-3 text-2xl font-bold text-center'>Login</h3>
          <div className="form-fields mb-3">
            <label htmlFor='email' className='text-sm mb-1 inline-block'>Email</label>
            <input type="email" name="email" placeholder='Enter your email id' id='email' className='w-full border border-solid border-gray-500 text-sm p-2 rounded-sm'
              {...register("email", { required: 'Email is required', pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:'Please provide valid email'}})} />
            <span className='block text-sm text-yellow-400 pt-1'>{errors.email?.message}</span>
          </div>
          <div className='form-fields mb-3'>
            <label htmlFor='password' className='text-sm mb-1 inline-block'>Password</label>
            <input type="text" name="password" placeholder='Enter your password' id='password' className='w-full border border-solid border-gray-500 text-sm p-2 rounded-sm'
              {...register("password", { required: 'Password is required', minLength: { value: 8, message: 'Please provide password' }, pattern:{value:/^(?=.*\d).{8,}$/,message:'Password must be 8 characters long',} })} />
            <span className='block text-sm text-yellow-400 pt-1'>{errors.password?.message}</span>
          </div>
          <button type="submit" className='w-full cursor-pointer mb-4 bg-green-500 p-2 rounded-sm text-stone-950'>Submit</button>
          <Link to='/signup' className='block text-sm text-center'>Sign up</Link>
        </form>
      </div>
    </div>
  )
}

export default Login