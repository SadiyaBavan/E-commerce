import { Link } from "react-router-dom";
import { Btn } from "../../../components/utilities";
import { resetpassSchema } from "../../../core/schema/Resetpass.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const Resetpass = () => {


  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(resetpassSchema),
    });
  
    const onsubmit = (data) => {
      console.log(data);
    };
  return (
    <>
      <div>
        <div className="benner-title bg-orange h-[229px]">
          <h1 className="py-5 text-white text-center">
           Reset <br /> Password 
            
          </h1>
        </div>

        <form className="mb-6" onSubmit={handleSubmit(onsubmit)}>
          <div className="form-card h-[353px] w-[353px] mx-auto rounded-2xl p-3 mt-[-50px] bg-white shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]">
            <h3 className="text-[10px] mb-[14px]">Your new password must be different from previously used password.</h3>

            {/* Email */}
            <label className="my-1">
              New Password<span className="text-red">*</span>
            </label>
            <input
              {...register ("newPassword")}
              type="password"
              className="py-2 px-1 w-full border-gray border-[1px] rounded-[5px]"
              placeholder="Enter your email"
            />
            {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}

            

            {/* Password */}
            <label className="my-1">
              Confirm Password<span className="text-red">*</span>
            </label>
            <input
            {...register("confirmPassword")}
              type="password"
              className="py-2 px-1 w-full border-gray border-[1px] rounded-[5px]"
              placeholder="Enter your password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

            

            
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

export { Resetpass };
