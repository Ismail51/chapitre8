import React from 'react';
import { useForm } from 'react-hook-form'



function Login() {
  const { register, handleSubmit, formState } = useForm();
	const {errors} = formState;
  const onSubmit = (data) => {
console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register('userName', {required: 'You need to enter the description' })}
            placeholder="nom d'utilisateur" />
          <p> {errors.description && errors.description.message} </p>
          
          <input {...register('password', {required: 'You need to enter the description' })}
            placeholder="mot de passe" />
          <p> {errors.description && errors.description.message} </p>
          <button className="button" type="submit">Submit</button>
      </form>
          <h2>Login</h2>

    
    </div>
  );
}

export default Login ;