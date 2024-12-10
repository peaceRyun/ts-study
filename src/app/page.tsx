'use client';

import Hello, { Counter, Hello2 } from '@/components/Hello';
import ListTail from '@/components/list/ListTail';
import { Button, Checkbox } from '@chakra-ui/react';

export default function Home() {
    return (
        <>
            <ListTail />
            <Hello name='겨울' age={2} />
            <Hello2 name='가을' role='막내' />
            <Counter />
            <Button>안녕하세요</Button>
            <Checkbox>Accept terms</Checkbox>
        </>
    );
}
