import React from 'react'
import { useRouter } from 'next/router'

import styles from './index.module.css'

export { SiteHeaderItem } from './item'

type Props = {
  left?: JSX.Element
  right?: JSX.Element
}

export const SiteHeader: React.FC<Props> = ({ left, right }) => {
  const router = useRouter()

  const handleClickLogo = React.useCallback(() => {
    router.push('/')
  }, [router])

  const leftElemennt = left ? (
    left
  ) : (
    <a onClick={handleClickLogo}>
      <div>すごいブログ</div>
    </a>
  )

  const rightElement = right ? (
    right
  ) : (
    <img src="/profile.png" className={styles.userIcon} />
  )
  return (
    <header className={styles.header}>
      <div className={styles.left}>{leftElemennt}</div>
      <div className={styles.right}>{rightElement}</div>
    </header>
  )
}
