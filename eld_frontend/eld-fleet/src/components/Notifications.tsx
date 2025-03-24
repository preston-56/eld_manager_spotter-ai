import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Notifications = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate fetching notifications from an API
    const fetchNotifications = async () => {
      setCount(3); // Replace with API response
    };

    fetchNotifications();
  }, []);

  return (
    <Button variant="ghost" className="relative p-2">
      <Bell className="text-gray-600 w-6 h-6" />
      {count > 0 && (
        <Badge
          variant="destructive"
          className="absolute -top-1 -right-1 text-xs px-1 rounded-full"
        >
          {count}
        </Badge>
      )}
    </Button>
  );
};

export default Notifications;
