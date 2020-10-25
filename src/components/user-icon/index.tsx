import styles from './index.module.css'

type Props = {
  src: string
}

export const UserIcon: React.FC<Props> = ({ src }) => {
  return <img src={src} alt="" className={styles.userIcon} />
}
