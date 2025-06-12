import './globals.css';
import { ReactNode } from 'react';
import Image from 'next/image';

export const metadata = {
    title: "George Wen's Personal Website",
    description: 'My personal website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="bg-gradient-to-r from-indigo-900 via-slate-900 to-zinc-900 text-white rounded">
        <body>
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
            <a
                href="https://www.linkedin.com/in/george-wen-82b58b27a/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/linkedin.svg"
                    alt="Linkedin"
                    height={60}
                    width={60}
                    className="invert"
                />
            </a>

            <a
                href="https://github.com/georgew1234"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/github.svg"
                    alt="Github"
                    height={43}
                    width={43}
                    className="invert"
                />
            </a>
            <a
                href="mailto:geeorgewen@gmail.com"
            >
                <Image
                    src="/email.svg"
                    alt="Email"
                    height={60}
                    width={60}
                    className="invert"
                />
            </a>
        </footer>
        </body>
        </html>
    );
}
