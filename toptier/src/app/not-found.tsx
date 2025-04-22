import Link from "next/link";
import Logo from "@/components/Logo";
 
export default async function NotFound() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#0C0F11] text-white px-6 py-12">
      {/* Logo or Main Hero Image */}
      <div className="mb-8">
        <Logo />
      </div>

      {/* Welcome Text */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Page not found...
      </h1>
      <div className="flex">
        <Link href="/">
          <button 
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-300 mt-6">
            Return to Home
          </button>
        </Link>
      </div> 

    </main>
  );
}