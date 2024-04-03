import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TagBrowser from "./components/tags/TagBrowser";
import TagsContextProvider from "./context/TagsContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
  },
});

/*
- rozwiązanie opublikować w repozytorium GitHub
- całość powinna się uruchamiać wyłącznie po wykonaniu komend "npm ci", "npm start", "npm run storybook"
*/


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <TagsContextProvider>
        <TagBrowser />
      </TagsContextProvider>
    </QueryClientProvider>
  );
}

export default App;
