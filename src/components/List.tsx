import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface NewsItem {
    id: string;
    imageUrl: string;
    title: string;
    content?: string;
    date?: string;
}
interface ListTailProps {
    mockNews: NewsItem[];
}
const ListTail = ({ mockNews }: ListTailProps) => {
    return (
        <>
            <ul className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10'>
                {mockNews.map((news, index) => (
                    <li key={index}>
                        <Link href={`/news/${news.id}`}>
                            <Image
                                src={news.imageUrl}
                                alt={news.title}
                                width={800}
                                height={500}
                                className='w-full h-50 rounded-lg mb-4 aspect-video object-cover'
                            />
                            <strong className='block text-lg font-semibold mt-5'>{news.title}</strong>
                            {news.content && <p className='mt-1'>{news.content}</p>}
                            {news.date && <span className='text-sm text-gray-400'>{news.date}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
export default ListTail;
