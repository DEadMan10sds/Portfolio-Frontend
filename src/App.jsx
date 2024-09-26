import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import GeneralLayout from "./layouts/general";
import meData from "./texts/profile.json";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
