type HttpsLink = `https://${string}`
type BlogLink = `/blog/${string}`

export interface Project {
  name: string
  description: string
  link: HttpsLink
  id: string
}

export interface Job {
  company: string
  title: string
  start: string
  end: string
  link: HttpsLink
  id: string
}

export interface Post {
  title: string
  description: string
  link: BlogLink
  id: string
}

export interface Link {
  name: string
  link: HttpsLink
}

export interface Album {
  id: string
  name: string
}
