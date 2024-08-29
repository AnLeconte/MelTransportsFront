import React from "react";

const CreateAccount = () => {
  return (
    <div className="min-h-screen">
      <form className="max-w-sm mx-auto p-4 shadow-md rounded-md bg-whiteIsh mt-8">
        <h3 className="font-bold text-center">Créer un compte</h3>
        <div className="mb-4">
          <label id="name" className="block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            id="lastname"
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />

          <label id="name" className="block text-sm font-medium text-gray-700">
            Prénom
          </label>
          <input
            id="firstname"
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blueOcean text-white py-2 px-4 rounded-md hover:bg-blueOcean/75 transition-colors"
        >
          Créer mon compte
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
