import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Amdadul Haque | Frontend & Full-Stack Developer',
    description:
        'Frontend developer building modern web experiences with React, Next.js, and TypeScript, and growing into full-stack engineering.',
    openGraph: {
        title: 'Amdadul Haque | Frontend & Full-Stack Developer',
        description:
            'Frontend developer building modern web experiences with React, Next.js, and TypeScript, and growing into full-stack engineering.',
        type: 'website',
        // Do NOT add a URL here until you have a real deployed domain.
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Amdadul Haque | Frontend & Full-Stack Developer',
        description:
            'Frontend developer building modern web experiences with React, Next.js, and TypeScript.',
    },
    // [REPLACE] favicon — drop an /app/icon.png or /public/favicon.ico
};

export const viewport: Viewport = {
    themeColor: '#0a0f0d',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} dark`}
            suppressHydrationWarning
        >
            <body className="min-h-screen bg-background font-sans text-foreground antialiased">
                {children}
            </body>
        </html>
    );
}
