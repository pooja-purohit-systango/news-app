import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <div >
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">News Archive by Year</h1>
        <nav>
          <ul className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <li key={link}>
                <Link
                  href={`/archive/${link}`}
                  className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
