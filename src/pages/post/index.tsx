import { NextPage } from 'next'
import { useState, useCallback } from 'react'
import { Editor } from '@/components/editor'
import { SiteHeader } from '@/components/site-header'
import styles from './index.module.css'
import { Button } from '@/components/button'

const PostPage: NextPage = () => {
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')

  const handleChangeSubject = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setSubject(ev.target.value)
    },
    [],
  )

  return (
    <>
      <SiteHeader />
      <div className={styles.editContent}>
        <input
          className={styles.subject}
          type="text"
          placeholder="タイとる"
          value={subject}
          onChange={handleChangeSubject}
        />
        <Editor
          className={styles.editor}
          placeholder="本文を書く"
          value={content}
          onEdit={setContent}
        />
      </div>
      <footer className={styles.footer}>
        <Button className={styles.submitButton}>投稿する</Button>
      </footer>
    </>
  )
}
export default PostPage
