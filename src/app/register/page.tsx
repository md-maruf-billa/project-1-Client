"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/dashboard"); // then navigate
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-[#4F9CF9] mb-6">Register Now</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4 p-6 bg-white text-gray-800 rounded shadow-md"
      >
        <input
          type="text"
          name="name"
          className="border border-gray-300 p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          className="border border-gray-300 p-2 rounded"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="phone"
          className="border border-gray-300 p-2 rounded"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border border-gray-300 p-2 rounded"
        />

        <button
          type="submit"
          className="bg-[#4F9CF9] hover:bg-[#6eb4fc] text-white hover:text-black transition duration-300 p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default RegisterPage;
