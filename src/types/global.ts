export type Section = 'calendar' | 'books' | 'movies' | 'finance'|'logIn';

export interface TransactionType {
  id: number;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  category: string;
}

export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  priority: 'high' | 'medium' | 'low';
}

export interface Book {
  id: number;
  title: string;
  author?: string;
  progress: number;
  coverUrl?: string;
  startDate?: string;
  finishDate?: string;
  rating?: number;
  status: 'reading' | 'completed' | 'planned';
  note?: string;
}

export interface MovieType {
  id: number;
  title: string;
  director?: string;
  genre?: string;
  rating?: number;
  status: 'watched' | 'watching' | 'planned';
  posterUrl?: string;
  startDate?: string;
  finishDate?: string;
  note?: string;
}
