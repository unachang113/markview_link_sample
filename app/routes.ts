import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("mark-view-sample", "./routes/mark-view-sample.tsx"),
] satisfies RouteConfig;
