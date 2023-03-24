import Image from "next/image";
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '@/common/components/elements/nav';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="body_wrapper">
      <Nav />
    </div>
  );
}
