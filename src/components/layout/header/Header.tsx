import { Button, Flex, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Menu from './Menu';

const Header = () => {
    return (
        <header>
            <Flex className='container' align={'center'}>
                <h1>
                    <Link href='/'>logo</Link>
                </h1>
                <Spacer />
                <div>
                    <Button colorScheme='teal' variant='ghost'>
                        알림
                    </Button>
                    <Button colorScheme='teal' variant='ghost'>
                        검색
                    </Button>
                    <Menu />
                </div>
            </Flex>
        </header>
    );
};

export default Header;
