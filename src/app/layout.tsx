import './globals.css';
import { ReactNode } from 'react';
import Image from 'next/image';
import LinkedinIcon from "@/app/icons/linkedin";
import GithubIcon from "@/app/icons/github";
import EmailIcon from "@/app/icons/email";
export const metadata = {
    title: "George Wen's Personal Website",
    description: 'My personal website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="bg-gradient-to-r from-indigo-900 via-slate-900 to-zinc-900 text-white rounded">
        <body className="text-zinc-300">
        <div className="fixed inset-0 -z-10 bg-gradient-to-r from-indigo-900 via-slate-900 to-zinc-900"/>
        <header className="sticky top-0 p-4">
            <nav className="flex gap-4">
                <a href="#">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        <main className="p-8">{children}</main>
        <footer className="flex gap-4 items-center sticky bottom-0 p-4">
            <LinkedinIcon/>
            <GithubIcon/>
            <EmailIcon/>
        </footer>
        </body>
        </html>
    );
}
