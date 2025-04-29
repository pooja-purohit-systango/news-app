export default function ArchiveLayout({ archive, latest }: any) {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">News Archive</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Archive Section */}
          <section className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-gray-50 dark:bg-gray-900">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">Archive</h2>
            {archive}
          </section>
  
          {/* Latest Section */}
          <section className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-gray-50 dark:bg-gray-900">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">Latest News</h2>
            {latest}
          </section>
        </div>
      </div>
    );
  }
  