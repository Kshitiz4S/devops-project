import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <header className="header">
            <Link href="/" className="logo">
                <Image src="/gallery.svg" alt="Logo" width="110" height="110" />
            </Link>
            <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/posts">Posts</Link>
            </nav>
        </header>
    );
}