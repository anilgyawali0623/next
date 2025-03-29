import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   <>
    <h1> welcome to my home</h1>
   <Link href='/about'>about</Link>
   <Link href='/service'>service</Link>

   </>
  );
}
