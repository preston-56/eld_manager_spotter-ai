import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesPage: React.FC = () => {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">List of services will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesPage;
