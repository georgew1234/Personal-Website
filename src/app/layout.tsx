import './globals.css';
import { ReactNode } from 'react';
import LinkedinIcon from "@/app/components/icons/linkedin";
import GithubIcon from "@/app/components/icons/github";
import EmailIcon from "@/app/components/icons/email";
export const metadata = {
    title: "George Wen's Personal Website",
    description: 'My personal website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div className="fixed inset-0 -z-10 bg-gradient-to-r from-indigo-900 via-slate-900 to-zinc-900"/>
        <div id="textColor">
        <header className="sticky top-0 p-4">
            <nav className="flex gap-4">
                <a href="#" className="text-solid">About</a>
                <a href="#portfolio" className="text-solid">Portfolio</a>
                <a href="#contact" className="text-solid">Contact</a>
            </nav>
        </header>
        <main className="p-8">{children}</main>
        <footer className="flex gap-4 items-center sticky bottom-0 p-4">
            <LinkedinIcon/>
            <GithubIcon/>
            <EmailIcon/>
        </footer>
        </div>
        </body>
        </html>
    );
}
