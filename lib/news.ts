// Define the structure of a news item
interface NewsItem {
    id: string;
    slug: string;
    title: string;
    content: string;
    date: string; // ISO 8601 format (e.g., "2025-04-29")
    image: string;
  }
  
  // Import your dummy news data
  import { DUMMY_NEWS } from '@/dummy-news';
  
  // Function to retrieve all news items
  export function getAllNews(): NewsItem[] {
    return DUMMY_NEWS;
  }
  
  // Function to retrieve the latest three news items
  export function getLatestNews(): NewsItem[] {
    return DUMMY_NEWS.slice(0, 3);
  }
  
  // Function to retrieve all available years from the news items
  export function getAvailableNewsYears(): number[] {
    const years = DUMMY_NEWS.reduce((acc: Set<number>, news) => {
      const year = new Date(news.date).getFullYear();
      acc.add(year);
      return acc;
    }, new Set<number>());
  
    return Array.from(years).sort((a, b) => b - a);
  }
  
  // Function to retrieve all available months for a given year
  export function getAvailableNewsMonths(year: number): number[] {
    const months = DUMMY_NEWS.reduce((acc: Set<number>, news) => {
      const date = new Date(news.date);
      if (date.getFullYear() === year) {
        // getMonth() returns 0-based month, so add 1 for 1-based month
        acc.add(date.getMonth() + 1);
      }
      return acc;
    }, new Set<number>());
  
    return Array.from(months).sort((a, b) => b - a);
  }
  
  // Function to retrieve all news items for a specific year
  export function getNewsForYear(year: number): NewsItem[] {
    return DUMMY_NEWS.filter(
      (news) => new Date(news.date).getFullYear() === year
    );
  }
  
  // Function to retrieve all news items for a specific year and month
  export function getNewsForYearAndMonth(year: number, month: number): NewsItem[] {
    return DUMMY_NEWS.filter((news) => {
      const date = new Date(news.date);
      return date.getFullYear() === year && date.getMonth() + 1 === month;
    });
  }
  