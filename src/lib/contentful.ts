import contentful from 'contentful'
import type { EntryFieldTypes } from 'contentful/dist/types'

export interface InsightSkeleton {
  contentTypeId: 'insight'
  fields: {
    name: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
})
