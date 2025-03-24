import { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

const UserProfile = () => {
  const [user, setUser] = useState<{ name: string; avatar: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/users/");
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setUser({
            name: data[0].name || "Unknown User",
            avatar: data[0].avatar || ""
          });
        } else {
          setError("No users found");
        }
      } catch {
        setError("Failed to load user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex items-center space-x-3 p-2 rounded-lg">
      {loading ? (
        <Skeleton className="w-10 h-10 rounded-full" />
      ) : (
        <Avatar className="w-10 h-10">
          <AvatarImage src={user?.avatar} alt={user?.name} />
          <AvatarFallback>
            {user?.name ? user.name.charAt(0) : "U"}
          </AvatarFallback>
        </Avatar>
      )}

      <div className="flex flex-col">
        {loading ? (
          <Skeleton className="h-4 w-24 rounded" />
        ) : error ? (
          <span className="text-red-500">{error}</span>
        ) : (
          <span className="text-gray-700 font-medium">{user?.name}</span>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
