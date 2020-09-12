import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Try Docker Node</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Try Docker <a href="https://hub.docker.com/_/node">Node</a>
        </h1>

        <p className={styles.description}>
          使用 Doker Node 镜像 Next.js 构建的简单 Web 应用示例
        </p>

        <div className={styles.grid}>

          <a href="https://www.docker.com/" target="_blank" className={styles.card}>
            <h3>Docker</h3>
            <p> Help developers and development teams build and ship apps.</p>
          </a>

          <a href="https://nodejs.org/" target="_blank" className={styles.card}>
            <h3>Node.js</h3>
            <p>A JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
          </a>

          <a href="https://reactjs.org/" target="_blank" className={styles.card}>
            <h3>React.js</h3>
            <p>A JavaScript library for building user interfaces.</p>
          </a>

          <a href="https://nextjs.org/" target="_blank" className={styles.card}>
            <h3>Next.js</h3>
            <p>The React Framework for Production.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/rzning"
          target="_blank"
        >
          Copyright © 2020 Rzning
        </a>
      </footer>
    </div>
  )
}
