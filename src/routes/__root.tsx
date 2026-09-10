import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">메인</Link>
          <Link to="/anlytics">통계</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  );
}
