import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60_000, // Data stays "fresh"
            gcTime: 1000 * 60 * 10,    // Cache garbage collection happens after 10 minutes
            retry: 1,                 // Automatically retry failed requests once
            refetchOnWindowFocus: false, // Turn off automatic refetching when window gains focus
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>
);