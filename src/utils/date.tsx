export type FormattedDate = {
  datetime: string
  isNew: boolean
}

export const formatDate = (d: Date, now: Date): FormattedDate => {
  return {
    datetime: d.toLocaleString(),
    isNew: true,
  }
}
