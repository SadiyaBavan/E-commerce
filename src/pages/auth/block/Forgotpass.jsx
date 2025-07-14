import { Btn } from '../../../components/utilities'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { forgotpassSchema } from '../../../core/schema/Forgotpass.schema';
import { zodResolver } from '@hookform/resolvers/zod';

const Forgotpass = () => {

  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(forgotpassSchema),
      });
    
      const onsubmit = (data) => {
        console.log(data);
      };
  return (
    <>
      <div>
        <div className="benner-title bg-orange h-[229px]">
          <h1 className="py-5 text-white text-center">
           Forgot <br />  Password 
            
          </h1>
        </div>

        <form className="mb-6" onSubmit={handleSubmit(onsubmit)}>
          <div className="form-card h-[248px] w-[335px] mx-auto rounded-2xl p-3 mt-[-50px] bg-white shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]">
            <h3 className="text-[20px] mb-[14px]">Enter your email to receive a password reset link.</h3>

            {/* Email */}
            <label className="my-1">
              Email Address<span className="text-red">*</span>
            </label>
            <input
            {...register("emailAddress")}
              type="email"
              className="py-2 px-1 w-full border-gray border-[1px] rounded-[5px]"
              placeholder="Enter your email"
            />
            {errors.emailAddress && <p className="text-red-500 text-sm">{errors.emailAddress.message}</p>}

            
            
            {/* Button */}
            <div className="flex items-center justify-center mt-[20px] relative z-99">
              <Btn children="Sign In" type="submit" variant="primary" />
            </div>
          </div>
        </form>

        <div className="text-center mt-5">
          <span className="text-black">Back to</span>{" "}
          <Link to="/auth/register" className="font-medium text-black underline">
            Sign In
          </Link>
        </div>
      </div>
    </>
  )
}

export {Forgotpass}
