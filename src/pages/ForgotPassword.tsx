import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Code2,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { getPasswordStrength } from "../utils/helper";
import { Link } from "react-router-dom";

export function ForgotPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const passwordStrength = getPasswordStrength(newPassword);
  const passwordsMatch =
    confirmPassword.length > 0 && newPassword === confirmPassword;
  const passwordsDontMatch =
    confirmPassword.length > 0 && newPassword !== confirmPassword;

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword && passwordStrength.strength >= 2) {
      // Mock reset functionality
      setIsReset(true);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-600/20 to-slate-950"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 size-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 size-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="size-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code2 className="size-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">DevTinder</span>
            </div>
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            {!isReset ? (
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center size-16 bg-purple-500/20 rounded-full mb-4">
                    <Lock className="size-8 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Reset Password
                  </h2>
                  <p className="text-gray-300">
                    Choose a strong password to secure your account
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleReset} className="space-y-5">
                  {/* New Password */}
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-white">
                      New Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showNewPassword ? (
                          <EyeOff className="size-5" />
                        ) : (
                          <Eye className="size-5" />
                        )}
                      </button>
                    </div>

                    {/* Password Strength Indicator */}
                    {newPassword.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex gap-1">
                          {[1, 2, 3].map((level) => (
                            <div
                              key={level}
                              className={`h-1 flex-1 rounded-full transition-colors ${
                                level <= passwordStrength.strength
                                  ? passwordStrength.color
                                  : "bg-white/20"
                              }`}
                            />
                          ))}
                        </div>
                        <p
                          className={`text-xs ${
                            passwordStrength.strength === 1
                              ? "text-red-400"
                              : passwordStrength.strength === 2
                                ? "text-yellow-400"
                                : "text-green-400"
                          }`}
                        >
                          Password strength: {passwordStrength.label}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-12 ${
                          passwordsMatch
                            ? "border-green-500"
                            : passwordsDontMatch
                              ? "border-red-500"
                              : ""
                        }`}
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="size-5" />
                        ) : (
                          <Eye className="size-5" />
                        )}
                      </button>
                    </div>

                    {/* Match Indicator */}
                    {confirmPassword.length > 0 && (
                      <div className="flex items-center gap-2">
                        {passwordsMatch ? (
                          <>
                            <CheckCircle className="size-4 text-green-400" />
                            <p className="text-xs text-green-400">
                              Passwords match
                            </p>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="size-4 text-red-400" />
                            <p className="text-xs text-red-400">
                              Passwords don't match
                            </p>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Password Requirements */}
                  <div className="bg-white/5 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-medium text-white">
                      Password must contain:
                    </p>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li className="flex items-center gap-2">
                        <div
                          className={`size-1.5 rounded-full ${newPassword.length >= 8 ? "bg-green-400" : "bg-gray-500"}`}
                        />
                        At least 8 characters
                      </li>
                      <li className="flex items-center gap-2">
                        <div
                          className={`size-1.5 rounded-full ${/[A-Z]/.test(newPassword) ? "bg-green-400" : "bg-gray-500"}`}
                        />
                        One uppercase letter
                      </li>
                      <li className="flex items-center gap-2">
                        <div
                          className={`size-1.5 rounded-full ${/[a-z]/.test(newPassword) ? "bg-green-400" : "bg-gray-500"}`}
                        />
                        One lowercase letter
                      </li>
                      <li className="flex items-center gap-2">
                        <div
                          className={`size-1.5 rounded-full ${/\d/.test(newPassword) ? "bg-green-400" : "bg-gray-500"}`}
                        />
                        One number
                      </li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white h-12"
                    disabled={!passwordsMatch || passwordStrength.strength < 2}
                  >
                    <Lock className="size-5 mr-2" />
                    Reset Password
                  </Button>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="space-y-6 text-center py-8">
                <div className="inline-flex items-center justify-center size-20 bg-green-500/20 rounded-full mb-4">
                  <CheckCircle className="size-10 text-green-400" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">
                    Password Reset!
                  </h2>
                  <p className="text-gray-300">
                    Your password has been successfully reset. You can now sign
                    in with your new password.
                  </p>
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white h-12">
                  Sign In
                </Button>
              </div>
            )}
          </div>

          {/* Help Text */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Remember your password?{" "}
            <Link to="/" className="text-pink-400 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
