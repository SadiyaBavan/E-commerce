import { Btn } from '../../../components/utilities'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../../core/schema/Login.schema'
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <div className="benner-title bg-orange h-[229px]">
          <h1 className="py-5 text-white text-center">
            Welcome Back! <br />
            Let's Get Started
          </h1>
        </div>

        <form className="mb-6" onSubmit={handleSubmit(onsubmit)}>
          <div className="form-card h-[353px] w-[353px] mx-auto rounded-2xl p-3 mt-[-50px] bg-white shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]">
            <h3 className="text-[20px] mb-[14px]">Access Your Account and Explore More</h3>

            {/* Email */}
            <label className="my-1">
              Email Address<span className="text-red">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              className="py-2 px-1 w-full border-gray border-[1px] rounded-[5px]"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            {/* Password */}
            <label className="my-1">
              Password <span className="text-red">*</span>
            </label>
            <input
              {...register("password")}
              type="password"
              className="py-2 px-1 w-full border-gray border-[1px] rounded-[5px]"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <div className="py-3">
              <span className="underline text-gray-dark">Forgot Password?</span>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center mt-4 relative z-99">
              <Btn children="Sign In" type="submit" variant="primary" />
            </div>
          </div>
        </form>

        <div className="text-center mt-5">
          <span className="text-black">Not a member?</span>{" "}
          <Link to="/auth/register" className="font-medium text-black underline">
            Create an account
          </Link>
        </div>
      </div>
    </>
  )
}

export { Login }
