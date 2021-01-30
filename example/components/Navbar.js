import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-3">
      <ul className="flex justify-center">
        <li className="mx-10">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
