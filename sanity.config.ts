import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import project from './sanity/schemas/project-schemas'
import { visionTool } from '@sanity/vision'
import schema from './sanity/schemas'

const config = defineConfig({
  projectId: '7vu5mgrc',
  dataset: 'production',
  title: 'Blog Personal Cris',
  apiVersion: '2024-04-03',
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: { types: schema },
})

export default config
