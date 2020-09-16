export type TextRichType = {
  bold?: boolean
  underline?: boolean
  text: string
}

export type FeatureEventType = {
  speakers?: {
    name: string
  }[]
  eventImage?: {
    handle: string
    width: number
    height: number
  }
  meetupLink?: string
  eventDate: string
  name: {
    raw?: {
      children?: {
        type: 'paragraph'
        children?: TextRichType[]
      }
    }
  }
  sponsorInfo: {
    raw?: {
      children?: {
        type: 'paragraph'
        children?: TextRichType[]
      }
    }
  }
  schedule: {
    timeSections: {
      author: string
      title: string
      eventDateTime: string
      description: {
        raw?: {
          type: 'paragraph'
          children?: TextRichType[]
        }
      }
    }[]
  }
}
