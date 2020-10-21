import React from 'react'
import { useRouter } from 'next/router'
import styles from './index.module.css'
import { route } from 'next/dist/next-server/server/router'

export const SiteHeader: React.FC = () => {
  const router = useRouter()

  const handleClickLogo = React.useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <a onClick={handleClickLogo}>
          <div>すごいブロク</div>
        </a>
      </div>
      <div className={styles.right}>
        <img src="/profile.png" className={styles.userIcon} />
      </div>
    </header>
  )
}
