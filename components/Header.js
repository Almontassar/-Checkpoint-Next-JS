import styles from '../styles/Header.module.css';

export default function Header() {
  return <header className={styles.header}>My Portfolio</header>;
}
import Image from 'next/image';

export default function Profile() {
  return (
    <Image
      src="/profile.jpg"
      alt="My Profile Picture"
      width={200}
      height={200}
    />
  );
}
