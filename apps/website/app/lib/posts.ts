import fs from 'node:fs'
import path from 'node:path'

interface Metadata {
  title: string
  publishedAt: string
}

interface BlogPost {
  metadata: Metadata
  slug: string
  content: string
}

function parseFrontmatter(fileContent: string): Omit<BlogPost, 'slug'> {
  // eslint-disable-next-line regexp/no-super-linear-backtracking
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  if (!match) {
    throw new Error('Frontmatter not found')
  }
  const frontMatterBlock = match[1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock.trim().split('\n')
  const metadata: Partial<Metadata> = {}

  for (const line of frontMatterLines) {
    const [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1')
    metadata[key.trim() as keyof Metadata] = value
  }

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string): Omit<BlogPost, 'slug'> {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string): BlogPost[] {
  const mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))
    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts(): BlogPost[] {
  // eslint-disable-next-line node/prefer-global/process
  return getMDXData(path.join(process.cwd(), 'content'))
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
