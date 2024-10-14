'use client'

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      console.error("Erreur de connexion:", result.error);
    } else {
      console.log("Connexion réussie");
    }
  };

  return (
      <div className="min-h-screen">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 shadow-md rounded-md bg-white mt-8">
          <h3 className="font-bold text-center">Connexion</h3>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="mb-5">
            <p>
              Pas encore de compte ?
              <Link href="/registerformpage" className="font-medium underline underline-offset-1 text-accent">
                créer un compte
              </Link>
            </p>
          </div>

          <button
              type="submit"
              className="w-full bg-blueOcean text-white py-2 px-4 rounded-md hover:bg-blueOcean/75 transition-colors"
          >
            Connexion
          </button>
        </form>
      </div>
  );
};

export default LoginForm;
