/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { useRouter } from 'next/router';
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { signOut } from '../utils/auth';
import Logo from './Logo';

export default function NavBar() {
  const router = useRouter();

  // Function to check if a link is active
  const isActive = (path) => router.pathname === path;
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-transparent">
      <Container className="flex items-center justify-between pt-2 pb-3 mx-auto border-b">
        {/* Logo */}
        <Link passHref href="/">
          <Navbar.Brand className="flex items-center space-x-2 text-xl">
            <Logo size="small" />
            <h2 className="text-3xl">
              <span className="text-kitchen-gray-600">Kitchen</span>
              <span className="text-sea-green">Pal</span>
            </h2>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="border-0 focus:outline-none"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex mx-auto space-x-20 text-lg">
            <Link passHref href="/inventory">
              <Nav.Link
                className={`${
                  isActive('/inventory')
                    ? 'text-white'
                    : 'text-kitchen-gray-600 hover:text-white'
                }`}
              >
                Inventory
              </Nav.Link>
            </Link>
            <Link passHref href="/equipment">
              <Nav.Link
                className={`${
                  isActive('/equipment')
                    ? 'text-white'
                    : 'text-kitchen-gray-600 hover:text-white'
                }`}
              >
                Equipment
              </Nav.Link>
            </Link>
            <Link passHref href="/recipes">
              <Nav.Link
                className={`${
                  isActive('/recipes')
                    ? 'text-white'
                    : 'text-kitchen-gray-600 hover:text-white'
                } focus:text-kitchen-gray-600`}
              >
                Recipes
              </Nav.Link>
            </Link>
          </Nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-kitchen-gray-600">
            <MagnifyingGlassIcon className="w-6 stroke-2 hover:text-white" />
            <UserIconDropdown />
          </div>
        </Navbar.Collapse>
      </Container>
      <hr className="mt-2 border-gray-400" />
    </Navbar>
  );
}

const UserIconDropdown = () => {
  const router = useRouter();

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button>
          <UserIcon className="w-6 stroke-2 hover:text-white" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-48 p-0.5 mt-2 origin-top-right bg-white rounded-md shadow-lg z-999 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                type="button"
                onClick={() => {
                  router.push('/');
                  signOut();
                }}
                className={`${
                  active ? 'bg-gray-100' : ''
                } block py-2 px-4 text-sm text-gray-700 w-full text-left`}
              >
                Sign Out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
