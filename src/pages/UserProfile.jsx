import { useEffect, useState } from "react";
import { getAllUsers } from "../services/userService";

export default function UserProfile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6 mx-auto h-200 w-200 ">
      <h1 className="text-2xl font-bold mb-4 text-[#1c1c1c]">Liste des utilisateurs</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-4">
        {users.length === 0 ? (
          <p className="text-[#1c1c1c]">Aucun utilisateur trouvé.</p>
        ) : (
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left text-[#1c1c1c]">Nom</th>
                <th className="px-4 py-2 text-left text-[#1c1c1c]">Prenom</th>
                <th className="px-4 py-2 text-left text-[#1c1c1c]">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2 text-[#1c1c1c]">{user.nom || "—"}</td>
                  <td className="px-4 py-2 text-[#1c1c1c]">{user.prenom || "—"}</td>
                  <td className="px-4 py-2 text-[#1c1c1c]">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
