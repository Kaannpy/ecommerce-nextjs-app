import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign up{" "}
        </h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Create an account to start shopping with us. It's quick and easy!
        </p>
        <SignUpForm />
      </div>
    </div>
  );
}
