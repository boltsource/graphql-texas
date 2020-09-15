export type TextRichType = {
  bold?: boolean
  underline?: boolean
  text: string
}

export type FeatureEventType = {
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
      title: string
      eventDateTime: string
      description: {
        raw?: {
          type: 'paragraph'
          children?: TextRichType[]
        }
      }
    }
  }
}
