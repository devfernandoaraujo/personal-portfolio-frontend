import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Nav from '@/common/components/elements/nav';
import Services from '@/common/components/elements/services';
import About from '@/common/components/elements/about';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="body_wrapper">
      <Nav />
      <Services />
      <About />
    </div>
  );
}