import React from 'react';

interface Item {
    id: number;
    title: string;
}

const mockData: Item[] = [
    { id: 1, title: 'new1' },
    { id: 2, title: 'new2' },
    { id: 3, title: 'new3' },
];

const ListTail = () => {
    return (
        <div>
            <ul>
                {mockData.map((item: Item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListTail;
