import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
    title: "George Wen's Personal Website",
    description: 'My personal website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-gradient-to-r from-indigo-900 via-slate-900 to-zinc-900 text-white rounded">
        <header className="sticky top-0 p-4">
            <nav className="flex gap-4">
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        <main className="p-8">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-500">
        </footer>
        </body>
        </html>
    );
}
