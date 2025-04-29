import Link from "next/link"
import Image from "next/image"
export default function NewsList({news} : any) {
    return (
        <>
           <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {news.map((newsItem :  any) => (
          <li key={newsItem.id} className="border border-black dark:border-white rounded overflow-hidden">
            <Link href={`/news/${newsItem.slug}`}>
                <Image
                  src={`/images/news/${newsItem.image}`}
                  alt={newsItem.title}
                  width={200}
                  height={150}
                  className="w-full h-auto"
                />
                <h2 className="text-xl font-semibold mt-2 px-4">{newsItem.title}</h2>
            </Link>
          </li>
        ))}
      </ul> 
        </>
    )
}