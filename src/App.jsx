import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import GeneralLayout from "./Layouts/General";
import meData from "./texts/profile.json";
import { ProjectsPage } from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return meData;
        },
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
