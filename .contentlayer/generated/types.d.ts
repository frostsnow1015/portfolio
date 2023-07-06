// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Blog = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Blog'
  title: string
  date: string
  cover: string
  thumbnail?: string | undefined
  description?: string | undefined
  legacyID?: string | undefined
  published: boolean
  tags?: string[] | undefined
  readTime?: ReadTime | undefined
  cover_image?: string | undefined
  /** Markdown file body */
  body: Markdown
  readTime: nested
  id: string
}

export type Project = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Project'
  title: string
  description: string
  published?: boolean | undefined
  highlight?: boolean | undefined
  featured?: boolean | undefined
  sznmApps?: boolean | undefined
  stacks?: string[] | undefined
  date?: string | undefined
  projectLink?: string | undefined
  repoLink?: string | undefined
  appStoreLink?: string | undefined
  playStoreLink?: string | undefined
  icon?: string | undefined
  thumbnail?: string | undefined
  thumbnailDark?: string | undefined
  projectType?: string | undefined
  /** Markdown file body */
  body: Markdown
  id: string
}

export type Snippet = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Snippet'
  title: string
  description: string
  published?: boolean | undefined
  date?: string | undefined
  stacks?: string[] | undefined
  /** Markdown file body */
  body: Markdown
  id: string
}  

/** Nested types */
export type ReadTime = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'ReadTime'
  text: string
  minutes: number
  time: number
  words: number

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Blog | Project | Snippet
export type DocumentTypeNames = 'Blog' | 'Project' | 'Snippet'

export type NestedTypes = ReadTime
export type NestedTypeNames = 'ReadTime'

export type DataExports = {
  allDocuments: DocumentTypes[]
  allBlogs: Blog[]
  allProjects: Project[]
  allSnippets: Snippet[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Blog: Blog
  Project: Project
  Snippet: Snippet
}

export type NestedTypeMap = {
  ReadTime: ReadTime
}

 