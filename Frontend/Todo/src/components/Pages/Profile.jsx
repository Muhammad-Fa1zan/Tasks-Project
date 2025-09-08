import { useState, useEffect } from "react";
import { UserProfile } from "../../api/UserProfile"; // API to fetch user details
import { UpdatePassword } from "../../api/UpdatePasswordApi";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await UserProfile();
        setUser(data);
        console.log(data._id);
      } catch (err) {
        console.error("❌ Failed to fetch profile:", err.message);
      }
    };
    fetchProfile();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }
    try {
      await UpdatePassword(password);
      setMessage("✅ Password updated successfully");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      return new Error(error, "Failed to change password")
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-800 px-4">
      <div className="w-full max-w-md bg-zinc-700 p-8 rounded-2xl shadow-lg text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Profile</h2>

        {user ? (
          <>
            {/* User Info */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-gray-300">Username</label>
                <input
                  type="text"
                  value={user.username}
                  disabled
                  className="w-full mt-1 rounded-lg bg-zinc-800 px-3 py-2 border border-zinc-600 text-gray-300 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full mt-1 rounded-lg bg-zinc-800 px-3 py-2 border border-zinc-600 text-gray-300 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Change Password */}
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">Change Password</h3>

              <div>
                <label className="block text-sm text-gray-300">
                  New Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 rounded-lg bg-zinc-800 px-3 py-2 border border-zinc-600 text-white focus:ring-2 focus:ring-zinc-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full mt-1 rounded-lg bg-zinc-800 px-3 py-2 border border-zinc-600 text-white focus:ring-2 focus:ring-zinc-500 outline-none"
                  required
                />
              </div>

              {message && (
                <p className="text-sm text-center mt-2">
                  {message.includes("✅") ? (
                    <span className="text-green-400">{message}</span>
                  ) : (
                    <span className="text-red-400">{message}</span>
                  )}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-zinc-600 hover:bg-zinc-500 text-white py-2 rounded-lg font-semibold transition"
              >
                Update Password
              </button>
            </form>
          </>
        ) : (
          <p className="text-center text-gray-400">Loading profile...</p>
        )}
      </div>
    </div>
  );
}
