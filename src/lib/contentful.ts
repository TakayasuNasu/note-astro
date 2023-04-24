import contentful from 'contentful'
import type { EntryFieldTypes } from 'contentful/dist/types'
import type { AssetFields } from 'contentful'

export type SiteMetaSkeleton = {
  contentTypeId: 'siteMasta'
  fields: {
    name: EntryFieldTypes.Text
    data: EntryFieldTypes.Object<Array<{ [Key in string]: string }>>
  }
}

export interface InsightSkeleton {
  contentTypeId: 'insight'
  fields: {
    name: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    heroImage: AssetFields
    featured: EntryFieldTypes.Boolean
    primaryHeading: EntryFieldTypes.Text
    publishedDate: EntryFieldTypes.Date
  }
}

export interface Post {
  slug: string
  featured: boolean
  heroImage: { fields: AssetFields }
  primaryHeading: string
  publishedDate: `${number}-${number}-${number}T${number}:${number}:${number}Z`
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
})
