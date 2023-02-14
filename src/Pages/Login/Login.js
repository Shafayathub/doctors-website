import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import google from '../../assets/images/google.png';
import auth from '../../firebase/firebase.config';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    console.log(errors);
  };
  if (gUser) {
    console.log(gUser);
  }
  if (gLoading) {
    return <Loading></Loading>;
  }
  if (gError) {
    console.log(gError);
  }
  return (
    <section className="mt-5 flex justify-center">
      <div className="lg:w-96 border rounded-lg shadow-xl p-10">
        <h4 className="text-3xl font-semibold text-center">Login</h4>
        <form className="mt-5" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register('email', { required: 'Please enter a valid Email' })}
              placeholder="Email address"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p role="alert" className="text-red-600">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register(
                'password',
                {
                  minLength: {
                    value: 8,
                    message: 'Password must be eight characters or longer',
                  },
                },
                {
                  required: 'Please enter your Password',
                }
              )}
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full max-w-xs mt-3"
            type="submit"
          />
        </form>
        <p className="mt-2">
          New here?
          <Link to="/register" className="ml-1 text-secondary">
            Create an account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline w-full">
          <img className="w-8 mr-2 rounded-lg" src={google} alt="GOOGLE" />{' '}
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </section>
  );
};

export default Login;
