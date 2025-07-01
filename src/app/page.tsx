"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useUserSubscription } from "@/hooks/useUserSubscription";
import { User } from "@/core/models/user";

// type User = { id: string; name: string; email: string };

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({ id: "", displayName: "", email: "" });
  const [users, setUsers] = useState<User[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [searchedUser, setSearchedUser] = useState<User | null>(null);

  // Utilisation du hook temps réel pour l'utilisateur recherché
  const { user: realtimeUser, error: realtimeError } = useUserSubscription(searchedUser ? searchedUser.id : null);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      const usersList = Array.isArray(data) ? data : [];
      setUsers(usersList);
    } catch {
      setMessage("Erreur lors du chargement des utilisateurs.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const url = editMode ? `/api/users/${formData.id}` : "/api/users";
      const method = editMode ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMessage = data.error || "Erreur lors de l'opération.";
        setMessage(errorMessage);
        return;
      }

      const successMessage = editMode ? "Utilisateur modifié !" : "Utilisateur créé !";
      setMessage(successMessage);
      setFormData({ id: "", displayName: "", email: "" });
      setEditMode(false);
      fetchUsers();
    } catch {
      setMessage("Erreur de connexion.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const shouldDelete = confirm("Supprimer cet utilisateur ?");
    if (!shouldDelete) {
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (!res.ok) {
        const errorMessage = data.error || "Erreur lors de la suppression.";
        setMessage(errorMessage);
        return;
      }

      setMessage("Utilisateur supprimé !");
      fetchUsers();
    } catch {
      setMessage("Erreur de connexion.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (user: User) => {
    setFormData(user);
    setEditMode(true);
    setMessage("");
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchedUser(null);
    setMessage("");

    try {
      const res = await fetch(`/api/users/${searchId}`);
      const data = await res.json();

      if (!res.ok) {
        const errorMessage = data.error || "Utilisateur non trouvé.";
        setMessage(errorMessage);
        return;
      }

      setSearchedUser(data);
    } catch {
      setMessage("Erreur de connexion.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setFormData({ id: "", displayName: "", email: "" });
  };

  const getFormTitle = () => {
    if (editMode) {
      return "Modifier un utilisateur";
    }
    return "Créer un utilisateur";
  };

  const getSubmitButtonText = () => {
    if (isLoading) {
      if (editMode) {
        return "Modification...";
      }
      return "Création...";
    }

    if (editMode) {
      return "Modifier";
    }
    return "Créer utilisateur";
  };

  const getMessageClassName = () => {
    const baseClasses = "mt-4 p-3 rounded-md text-center";
    const isSuccess = /(succès|créé|modifié|supprimé|!)/i.test(message);

    if (isSuccess) {
      return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;
    }
    return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`;
  };

  const renderFormSection = () => {
    return (
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">{getFormTitle()}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="id" className="block text-sm font-medium mb-1">
              ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={(e) => setFormData((f) => ({ ...f, id: e.target.value }))}
              required
              disabled={editMode}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Entrez l'id"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.displayName}
              onChange={(e) => setFormData((f) => ({ ...f, displayName: e.target.value }))}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Entrez le nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="Entrez l'email"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {getSubmitButtonText()}
          </button>
          {editMode && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="w-full mt-2 bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500"
            >
              Annuler la modification
            </button>
          )}
        </form>
      </div>
    );
  };

  const renderRealtimeData = (realtimeUser: User | null, realtimeError: Error | null) => {
    if (realtimeError) {
      return <div className="text-red-600">Erreur : {realtimeError.message}</div>;
    }

    if (!realtimeUser) {
      return <div className="text-gray-500">Aucune donnée temps réel</div>;
    }

    return (
      <div>
        <div>
          <b>ID (RT) :</b> {realtimeUser.id}
        </div>
        <div>
          <b>Nom (RT) :</b> {realtimeUser.displayName}
        </div>
        <div>
          <b>Email (RT) :</b> {realtimeUser.email}
        </div>
      </div>
    );
  };

  const renderSearchSection = () => {
    return (
      <div className="w-full max-w-md mt-4">
        <h3 className="text-lg font-semibold mb-2">Rechercher un utilisateur par ID</h3>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="ID utilisateur"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rechercher
          </button>
        </form>
        {searchedUser && (
          <div className="mt-2 p-2 border rounded bg-gray-50 dark:bg-gray-800">
            <div>
              <b>ID :</b> {searchedUser.id}
            </div>
            <div>
              <b>Nom :</b> {searchedUser.displayName}
            </div>
            <div>
              <b>Email :</b> {searchedUser.email}
            </div>
            <div className="mt-2">
              <b>Temps réel Firestore :</b>
              {renderRealtimeData(realtimeUser, realtimeError)}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderEmptyUsersRow = () => {
    if (users.length > 0) {
      return null;
    }

    return (
      <tr>
        <td colSpan={4} className="text-center py-2">
          Aucun utilisateur
        </td>
      </tr>
    );
  };

  const renderUsersTable = () => {
    return (
      <div className="w-full mt-8">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Liste des utilisateurs</h3>
          <button onClick={fetchUsers} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
            Rafraîchir
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="px-2 py-1 border">ID</th>
                <th className="px-2 py-1 border">Nom</th>
                <th className="px-2 py-1 border">Email</th>
                <th className="px-2 py-1 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {renderEmptyUsersRow()}
              {users.map((user) => (
                <tr key={user.email}>
                  <td className="border px-2 py-1">{user.id}</td>
                  <td className="border px-2 py-1">{user.displayName}</td>
                  <td className="border px-2 py-1">{user.email}</td>
                  <td className="border px-2 py-1 flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                    >
                      Éditer
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderDemoLinks = () => {
    return (
      <div className="w-full mt-8">
        <h3 className="text-lg font-semibold mb-4 text-center">🎯 Pages de démonstration</h3>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/auth-demo"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            📝 Démo Authentification
          </a>
          <a
            href="/payment-demo"
            className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
          >
            💳 Démo Paiements Stripe
          </a>
        </div>
      </div>
    );
  };

  const renderMessage = () => {
    if (!message) {
      return null;
    }

    return <div className={getMessageClassName()}>{message}</div>;
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-2xl">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />

        {renderFormSection()}
        {renderSearchSection()}
        {renderUsersTable()}
        {renderDemoLinks()}
        {renderMessage()}
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
