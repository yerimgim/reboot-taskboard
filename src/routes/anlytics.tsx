import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/anlytics")({
  component: AnlyticsComponent,
});

function AnlyticsComponent() {
  return (
    <div className="flex flex-col gap-2">
      <h1>통계</h1>
    </div>
  );
}
