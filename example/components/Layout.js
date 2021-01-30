import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <main className="flex justify-center text-3xl font-bold mt-40">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
