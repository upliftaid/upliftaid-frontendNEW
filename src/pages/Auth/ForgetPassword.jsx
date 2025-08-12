import { FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {z} from "zod";
import { useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    email: z.string().email("Invalid email, please provide a valid email"),
});


export default function ForgetPassword() {
  const navigate = useNavigate();

  const {register, handleSubmit, formState:{errors, isSubmitting }, setError} = useForm({resolver: zodResolver(schema)})

  const onsubmit = async(data) => {
    try {
        // your api call
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log(data)

        navigate('/reset-password')

    } catch (error) {
        setError("root", {
            type: "manual",
            message: "Invalid email or password",
        });
    }
}



  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#00733C] via-white to-[#00b894] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>
      <div className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 w-full max-w-md animate-fade-in-up">
      <div className="flex justify-center mb-6">
        <img
             src={logo}
              alt="Upliftaid Logo"
             className="w-24 h-24 rounded-full shadow-lg object-contain"
        />

      </div>

      <h2 className="text-3xl font-bold text-center text-green-800 mb-6 tracking-tight">
        Please enter your email
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
        
        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-green-800" />
          <input
            type="email"
            disabled={isSubmitting}
            placeholder="Email"
            {...register("email")}
            className="w-full pl-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
          />
          {
            errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          }
        </div>
        

        <button
          type="submit"
          disabled={isSubmitting}
          style={isSubmitting ? { cursor: "not-allowed", opacity: 0.5 } : {}}
          className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-transform transform hover:scale-105 duration-200 shadow-md"
        >
          submit
        </button>
        {
            errors.root && <p className="text-red-500 text-center text-xs w-full">{errors.root.message}</p>
        }
      </form>

      <p className="text-center mt-4 text-sm text-green-900">
        <button
          disabled={isSubmitting}
          style={isSubmitting ? { cursor: "not-allowed", opacity: 0.5 } : {}}
          onClick={() => navigate("/auth")}
          className="underline font-semibold hover:text-green-700"
        >
          Go back
        </button>
      </p>
    </div>
    </div>
  );
}
