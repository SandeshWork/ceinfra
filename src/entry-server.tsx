import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router";
import { renderToString } from "react-dom/server";
import { routeDefinitions } from "./app/route-definitions";

export async function render(url: string): Promise<string> {
  const handler = createStaticHandler(routeDefinitions);
  const request = new Request(`http://prerender.local${url}`);

  const context = await handler.query(request);

  if (context instanceof Response) {
    return "";
  }

  const router = createStaticRouter(handler.dataRoutes, context);

  return renderToString(
    <StaticRouterProvider router={router} context={context} hydrate={false} />
  );
}
