import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <nav className='nav-bar'>
        <ul>
            <li>How to play?</li>
          <Link href="/">
            <li>Memorize IT</li>
          </Link>
          <Link href='/random'>
            <li>Random</li>
          </Link>
          {/* <Link href='/addCards'>
            <li>Add cards</li>
          </Link> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header