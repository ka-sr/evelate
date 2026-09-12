import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/work/$projectId")({
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center page-shell max-w-md">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          This project page is no longer available or has been removed.
        </p>
        <Button size="lg" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 size-5" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
