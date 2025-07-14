import { Link } from "react-router-dom"
import { Btn } from "../../../components/utilities"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {registerSchema} from "../../../core/schema/Register.schema"


function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted Data:", data);
    
    // AIP data prepare
    const bodyData = {
      user_agent: "EI-AAPP",
      name: data?.name,
      email: data?.email,
      mobile: data?.country_code + "-" + data?.phone,
      password: data?.password,
    };
    
    console.log("body", bodyData);
    
    axios
    .post(
      "https://emaadinfotech-demos.in/ecommerce-api/user_api/register",
      bodyData
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <div>
        {/* Banner */}
        <div className="benner-title bg-orange h-[229px]">
          <h1 className="py-5 text-white text-center">
            Create your <br /> account
          </h1>
        </div>

        {/* Form */}
        <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
          <div className='form-card h-auto w-[353px] mx-auto rounded-2xl p-4 mt-[-50px] bg-white shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]'>
            <h3 className="text-[20px] mb-[14px]">Welcome back! Please enter your details</h3>

            {/* Name */}
            <label className="my-2 block">Name<span className="text-red-500">*</span></label>
            <input
              {...register("name")}
              type="text"
              className="py-2 px-1 w-full border border-gray-300 rounded-[5px]"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            {/* Email */}
            <label className="my-2 block">Email Address<span className="text-red-500">*</span></label>
            <input
              {...register("email")}
              type="email"
              className="py-2 px-1 w-full border border-gray-300 rounded-[5px]"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            {/* Mobile Number */}
            <label className="block my-2">Mobile Number<span className="text-red-500">*</span></label>
            <div className="flex gap-2">
              <select
                {...register("country_code")}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-black"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                {...register("phone")}
                type="tel"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-200"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

            {/* Password */}
            <label className="my-2 block">Password<span className="text-red-500">*</span></label>
            <input
              {...register("password")}
              type="password"
              className="py-2 px-1 w-full border border-gray-300 rounded-[5px]"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            {/* Checkbox */}
            <div className="flex items-start my-3">
              <input
                {...register("acceptTerms")}
                type="checkbox"
                id="terms"
                className="mt-1 mr-2 h-[20px] w-[20px] rounded border-gray-300 text-red-500 focus:ring-red-400"
              />
              <label htmlFor="terms" className="ml-2">
                I agree to all <span className="font-medium">Terms, Privacy and Fees</span>
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-red-500 text-sm">{errors.acceptTerms.message}</p>
            )}

            {/* Button */}
            <div className="flex items-center justify-center mt-4 relative z-10">
              <Btn type="submit" variant="primary">Sign In</Btn>
            </div>
          </div>
        </form>

        {/* Link to Login */}
        <div className="text-center mt-5">
          <span className="text-black">Already have an </span>
          <Link to="/auth/Login" className="font-medium text-black underline">
            account?
          </Link>
        </div>
      </div>
    </>
  );
}

export { Register };