export const getPasswordStrength = (password: string) => {
  if (password.length === 0) return { strength: 0, label: "", color: "" };
  if (password.length < 6)
    return { strength: 1, label: "Weak", color: "bg-red-500" };
  if (password.length < 10)
    return { strength: 2, label: "Fair", color: "bg-yellow-500" };
  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password))
    return { strength: 2, label: "Fair", color: "bg-yellow-500" };
  return { strength: 3, label: "Strong", color: "bg-green-500" };
};
