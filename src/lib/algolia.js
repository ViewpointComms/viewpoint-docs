import * as dotenv from 'dotenv'
dotenv.config()

import algoliasearch from 'algoliasearch'
const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_WRITE_API_KEY
)

// 1. Build a dataset
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import removeMd from "remove-markdown"

const filenames = fs.readdirSync(path.join('./src/content/docs/en/content/'))
const data = filenames.map((filename) => {
  try {
    const markdownWithMeta = fs.readFileSync('./src/content/docs/en/content/' + filename)
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
      objectID: frontmatter.title.toLowerCase().replace(/\s/g, '_'),
      title: frontmatter.title,
      content: removeMd(content).replace(/\n/g, ""),
    }
  } catch (e) {
    console.log(e.message)
  }
}).filter((item) => item !== null && item !== undefined) // filter out null and undefined items

// 2. Send the dataset in JSON format
client
  .initIndex('Viewpoint Documentation')
  .saveObjects(JSON.parse(JSON.stringify(data)))
  .then((res) => console.log(res))
  .catch((error) => console.error(error))
