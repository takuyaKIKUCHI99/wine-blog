import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.twitterAccount}>
        <span>Maintained by</span>
        <a href='https://twitter.com/_takuyakikuchi' target='_blank' rel='noopener noreferrer'>
          <span>@_takuyakikuchi</span>
          <Image src='/twitter.svg' alt='Twitter Logo' width={16} height={16} />
        </a>
      </div>
    </footer>
  );
}
