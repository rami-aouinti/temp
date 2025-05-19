// server/api/generate-pdf.ts
import type { H3Event } from 'h3'
import { writeBody } from 'h3'
import { Buffer } from 'node:buffer'

export default defineEventHandler(async (event: H3Event) => {
  const browserlessUrl = 'https://chrome.browserless.io/pdf?token=2SLDbQ0ri722TE57ca2a36018a1f945008f636187b2f97cb4'

  const targetUrl = getQuery(event).url as string
  if (!targetUrl) {
    return { error: 'Missing ?url= parameter' }
  }

  const response = await fetch(browserlessUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: targetUrl,
      options: {
        format: 'A4',
        printBackground: true,
      },
    }),
  })

  if (!response.ok) {
    return { error: `Browserless failed: ${response.statusText}` }
  }

  const buffer = Buffer.from(await response.arrayBuffer())

  setHeader(event, 'Content-Type', 'application/pdf')
  setHeader(event, 'Content-Disposition', 'inline; filename="export.pdf"')
  return buffer
})
