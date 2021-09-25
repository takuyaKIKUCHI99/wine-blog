import Image from 'next/image';
import styles from '@/styles/Home.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Maintained by
        <a href='https://twitter.com/_takuyakikuchi' target='_blank' rel='noopener noreferrer'>
          <span className={styles.twitterAccount}>@_takuyakikuchi</span>
          <Image src='/twitter.svg' alt='Twitter Logo' width={16} height={16} />
        </a>
      </span>
    </footer>
  );
}
