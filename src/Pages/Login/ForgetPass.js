import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.config';
import Loading from '../Shared/Loading';

const ForgetPass = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const handleForgetPass = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const success = await sendPasswordResetEmail(email);
    if (success) {
      toast('Email sent');
    }
  };
  if (sending) {
    return <Loading></Loading>;
  }
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="forgetPass-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="forgetPass-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">Enter Your Email</h3>

          <form
            onSubmit={handleForgetPass}
            className="grid grid-cols-1 gap-3 mt-6">
            <input
              name="email"
              type="email"
              placeholder="Your registered Email"
              className="input input-bordered w-full"
              required
            />

            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full"
            />
          </form>
          <p className="text-red-600">
            <small>{error && error.message}</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
