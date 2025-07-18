import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center text-white">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Team CI/CD Pipeline</h1>
        <p className="mb-6 text-gray-300">
          Build, Deploy, and Scale Your Projects Effortlessly
        </p>
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all font-semibold">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
