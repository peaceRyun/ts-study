'use client';

import { AddIcon, ChevronDownIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { Menu as ChakraMenu, MenuButton, MenuList, MenuItem, Button, IconButton, Avatar } from '@chakra-ui/react';
import React from 'react';

const Menu = () => {
    return (
        <>
            <ChakraMenu>
                <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon />} variant='outline'>
                    <span className='sr-only'>전체 메뉴</span>
                </MenuButton>

                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <MenuList>
                    <MenuItem icon={<AddIcon />} command='⌘T'>
                        새로운 탭
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                        새 창
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                        탭 열고 닫기
                    </MenuItem>
                    <MenuItem icon={<EditIcon />} command='⌘O'>
                        파일 열기...
                    </MenuItem>
                </MenuList>
            </ChakraMenu>
        </>
    );
};

export default Menu;
