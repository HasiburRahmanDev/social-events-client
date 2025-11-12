import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Stay Updated on Social Events 🎉
      </h2>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletter and never miss an exciting event again.
      </p>

      <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
