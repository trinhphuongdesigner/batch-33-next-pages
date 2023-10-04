// import Navbar from './navbar'
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <h1>Header</h1>

      <main>{children}</main>

      <h1>Footer</h1>
      {/* <Footer /> */}
    </>
  )
}