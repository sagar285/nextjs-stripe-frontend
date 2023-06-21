import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
  <main className={styles.main}>
    <div>
    <Image className={styles.img}  src="/vercel.svg" width={100} height={50}/>
    <button className={styles.button}>Buy This image</button>
    </div>
  </main>
  )
}
