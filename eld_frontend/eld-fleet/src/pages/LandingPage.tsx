import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function LandingPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center p-6 relative">

      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Plan Trips. Track Routes. Stay Compliant.
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Spotter AI Fleet helps you manage trips efficiently with real-time
          routing, automated stop planning, and driver log compliance.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          {/* Button for Dashboard with dark styling */}
          <Button className="bg-gray-900 text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-700 transition-all rounded-md px-6 py-3">
            <Link to="/login">Go to Dashboard</Link>
          </Button>

          {/* Button for Learn More with outline and dark mode adjustments */}
          <Button
            variant="outline"
            className="bg-gray-900 text-white border-gray-900 focus:ring-2 focus:ring-gray-700 transition-all rounded-md px-6 py-3"
            asChild
          >
            <a
              href="https://spotter.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        <Card>
          <CardHeader>
            <CardTitle>📍 Route Planning</CardTitle>
          </CardHeader>
          <CardContent>
            Enter trip details and get optimized routes with rest stops &
            fueling points.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>🛑 Smart Stop Scheduling</CardTitle>
          </CardHeader>
          <CardContent>
            Automatically schedule fuel stops and required rest breaks to stay
            compliant.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>📄 ELD Log Sheets</CardTitle>
          </CardHeader>
          <CardContent>
            Generate accurate daily log sheets for multi-day trips with
            compliance tracking.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
