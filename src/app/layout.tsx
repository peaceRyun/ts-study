import type { Metadata } from 'next';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import localFont from 'next/font/local';
import Header from '@/components/layout/header/Header';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'next.js template',
    description: '페이지 설명',
    openGraph: {
        title: '페이지 제목',
        description: '페이지 설명',
        type: 'website',
        url: 'http://www.mysite.com/article/article1.html',
        images: [
            {
                url: 'http://www.mysite.com/article/article1_featured_image.jpg',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: '페이지 제목',
        description: '페이지 설명',
        images: ['http://www.mysite.com/article/article1.html'],
        creator: '사이트 명',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-gov-dynamic-subset.min.css'
                />
            </head>
            <body>
                <ChakraProvider>
                    <div id='wrap'>
                        <Header />
                        <main>{children}</main>
                        <footer>푸터</footer>
                    </div>
                </ChakraProvider>
            </body>
        </html>
    );
}
