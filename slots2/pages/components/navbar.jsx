import React from 'react';
import Link from 'next/link';
import Avatar from './avatar';

const Navbar = () => {

    return (
        <div className="title">
            <Link href="/"><a>Home</a></Link>&nbsp;
            <Link href="/posts"><a>Posts</a></Link>&nbsp;
            <Link href="/dashboard"><a>Dashboard</a></Link>&nbsp;
            <Link href="/api/user"><a>API User data</a></Link>&nbsp;
            <Avatar />&nbsp;
        </div>
    )
}

export default Navbar;
