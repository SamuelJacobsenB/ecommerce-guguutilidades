import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';
import './BackToHome.css';

const BackToHome = ({ className }: { className?: string }) => {
  return (
    <Link href={'/home'} className={`link_arrow_back ${className}`}>
      <IoChevronBack className="arrow_back" />
    </Link>
  );
};

export default BackToHome;
