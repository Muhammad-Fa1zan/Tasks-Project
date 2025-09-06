import { useForm } from "react-hook-form";
import { RegisterUserApi } from "../../api/RegisterUserApi";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const res = await RegisterUserApi(data);
      console.log("✅ Registered:", res);
      localStorage.setItem("token", res.token);
      navigate("/");
    } catch (error) {
      console.error("❌ Registration error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-800">
      <div className="w-full max-w-md rounded-xl bg-zinc-700 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Register
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Username
            </label>
            <input
              {...register("username", { required: "Username is required" })}
              className="mt-1 w-full rounded-lg border border-zinc-600 bg-zinc-800 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="Enter username"
            />
            {errors.username && (
              <p className="text-sm text-red-400">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 w-full rounded-lg border border-zinc-600 bg-zinc-800 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="mt-1 w-full rounded-lg border border-zinc-600 bg-zinc-800 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-sm text-red-400">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-zinc-600 py-2 font-semibold text-white hover:bg-zinc-500 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-zinc-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
