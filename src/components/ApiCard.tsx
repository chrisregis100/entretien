import React, { useState } from "react";

const Utilisateur = ({ utilisateur }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!utilisateur) return null;

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* En-tête de la carte avec l'image */}
      <div className="relative">
        <div className="h-32 bg-gray-200"></div>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt={utilisateur.name}
          className="absolute left-4 -bottom-10 rounded-full border-4 border-white w-20 h-20 object-cover"
        />
      </div>

      {/* Contenu principal */}
      <div className="pt-12 pb-4 px-6">
        <h2 className="text-xl font-bold text-gray-800">{utilisateur.name}</h2>
        <p className="text-sm text-blue-500">@{utilisateur.username}</p>

        <button
          className="mt-4 w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium   focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Masquer les détails" : "Afficher les détails"}
        </button>
      </div>

      {/* Section des détails */}
      {showDetails && (
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 space-y-2 text-sm">
          <div className="flex">
            <span className="font-medium w-24 text-gray-600">Adresse:</span>
            <span className="text-gray-800">
              {utilisateur.address.street}, {utilisateur.address.suite},{" "}
              {utilisateur.address.city}, {utilisateur.address.zipcode}
            </span>
          </div>

          <div className="flex">
            <span className="font-medium w-24 text-gray-600">Téléphone:</span>
            <span className="text-gray-800">{utilisateur.phone}</span>
          </div>

          <div className="flex">
            <span className="font-medium w-24 text-gray-600">Site web:</span>
            <span className="text-gray-800">{utilisateur.website}</span>
          </div>

          <div className="flex">
            <span className="font-medium w-24 text-gray-600">Entreprise:</span>
            <span className="text-gray-800">{utilisateur.company.name}</span>
          </div>

          <div className="flex">
            <span className="font-medium w-24 text-gray-600">Description:</span>
            <span className="text-gray-800">
              {utilisateur.company.catchPhrase}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Utilisateur;
