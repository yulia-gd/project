import { useAuthStore } from '../store/authStore';

export function UserProfile() {
  const { user } = useAuthStore();

  if (!user) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">My Profile</h1>
      <div className="flex items-start space-x-8">
        {/* Фото профілю */}
        <div className="flex-shrink-0">
          <img
            src={user.profilePhotoUrl}
            alt={`${user.name}'s profile`}
            className="w-44 h-44 rounded-full object-cover border-4 border-red-500 shadow-sm"
          />
        </div>
        {/* Інформація про користувача */}
        <div className="flex-grow">
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-md shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700">Name</h2>
              <p className="text-gray-800">{user.name}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700">Email</h2>
              <p className="text-gray-800">{user.email}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700">Birth Year</h2>
              <p className="text-gray-800">{user.birthYear}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700">Gender</h2>
              <p className="text-gray-800">{user.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
