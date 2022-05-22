import {QueryClient, QueryClientProvider} from "react-query";
import Characters from "./components/Characters";

const queryClient = new QueryClient()

function App() {
    return (
        <div className="p-8 bg-amber-50 h-screen w-screen m-0">
            <QueryClientProvider client={queryClient}>
                <h1 className={"text-blue-600"}>Rick And Morty Characters</h1>
                <Characters/>
            </QueryClientProvider>
        </div>
    );
}

export default App;
