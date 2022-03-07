import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Navbar() {
  const router = useRouter();

  const [currentRoute, setcurrentRoute] = useState(router.pathname);

  useEffect(() => {
    console.log(currentRoute);
  }, [currentRoute]);

  const menuItem = [
    { name: "Home", url: "/" },
    { name: "All Page", url: "/all" },
    { name: "Fetch Page", url: "/fetch" },
  ];

  return (
    <div className=" flex justify-center gap-x-5 bg-[#262D3A] py-3 text-white  z-10 text-lg shadow-md">
      {menuItem.map((item, idx) => (
        <Link href={item.url} key={idx}>
          <a
            className={
              item.url == currentRoute
                ? "text-purple-600 "
                : "" + "hover:text-gray-400"
            }
          >
            {item.name}
          </a>
        </Link>
      ))}
      {/* <Image src="/koromon.jpg" alt="me" width="64" height="64" /> */}
    </div>
  );
}

export default Navbar;
