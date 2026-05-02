import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-red-500">404</h1>

      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>

      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>

      <Link href="/" className="mt-6 primary-btn py-3 px-10">
        Go Back Home
      </Link>
    </div>
  );
}
