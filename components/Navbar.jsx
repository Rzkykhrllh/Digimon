import Link from "next/link"

function Navbar() {
  return (
    <div className="container flex justify-center gap-x-5 bg-[#FFE84A] py-2 outline-[#52C2FF] outline outline-4">
      <Link href="/">Home</Link>
      <Link href="/all">All page</Link>
      <Link href="/fetch">Fetch Page</Link>
      {/* <Image src="/koromon.jpg" alt="me" width="64" height="64" /> */}
    </div>
  )
}

export default Navbar