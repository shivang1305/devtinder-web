import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Code2, Mail, ShieldCheck, ArrowLeft, CheckCircle } from "lucide-react";

export function EmailVerification() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleResendOTP = () => {
    // Mock resend functionality
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock verification
    setIsVerified(true);
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
            {!isVerified ? (
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center size-16 bg-pink-500/20 rounded-full mb-4">
                    <Mail className="size-8 text-pink-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Verify Your Email
                  </h2>
                  <p className="text-gray-300">
                    Enter the verification code sent to your email
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleVerify} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="otp" className="text-white">
                      Verification Code
                    </Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter 6-digit code"
                      value={otp}
                      onChange={(e) =>
                        setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                      }
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-center text-2xl tracking-widest"
                      maxLength={6}
                      required
                    />
                    <p className="text-xs text-gray-400 text-center">
                      Check your email for the 6-digit code
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white h-12"
                    disabled={otp.length !== 6}
                  >
                    <ShieldCheck className="size-5 mr-2" />
                    Verify Email
                  </Button>
                </form>

                {/* Resend Code */}
                <div className="text-center space-y-3">
                  <p className="text-sm text-gray-300">
                    Didn't receive the code?
                  </p>
                  {countdown > 0 ? (
                    <p className="text-sm text-pink-400">
                      Resend code in {countdown}s
                    </p>
                  ) : (
                    <button
                      onClick={handleResendOTP}
                      className="text-sm text-pink-400 hover:text-pink-300 font-medium"
                    >
                      Resend Code
                    </button>
                  )}
                </div>

                {/* Back to Login */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-white"
                  >
                    <ArrowLeft className="size-4" />
                    Back to Login
                  </a>
                </div>
              </div>
            ) : (
              /* Success State */
              <div className="space-y-6 text-center py-8">
                <div className="inline-flex items-center justify-center size-20 bg-green-500/20 rounded-full mb-4">
                  <CheckCircle className="size-10 text-green-400" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">
                    Email Verified!
                  </h2>
                  <p className="text-gray-300">
                    Your email has been successfully verified. You can now
                    continue to your account.
                  </p>
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white h-12">
                  Continue to Dashboard
                </Button>
              </div>
            )}
          </div>

          {/* Help Text */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Having trouble?{" "}
            <a href="#" className="text-pink-400 hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
