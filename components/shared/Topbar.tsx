
import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
import { SignedIn } from "@clerk/nextjs"
function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28}/>
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="block md:hidden">
        <SignedIn></SignedIn>
      </div>
    </nav>
  )
}

export default Topbar