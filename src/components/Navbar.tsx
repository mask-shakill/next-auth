import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-5 shadow-sm'>
            <h1 className='text-xl font-bold'>Next Auth</h1>
            <ul className='flex items-center gap-x-5'>
                <Link href={'/'}>Home</Link>
                <Link href={'/dashboard'}>Dashboard</Link>
                <Link href={'/private'}>Private</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/contact'}>Contact</Link>

            </ul>
            <div className='flex  items-center gap-x-5 pr-5'>
            <button>login</button>
            <button>signup</button>
            </div>
        </div>
    );
};

export default Navbar;