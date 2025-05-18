import chromium from 'chrome-aws-lambda'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  let browser = null

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless
    })

    const page = await browser.newPage()

    // Remplace bien l’URL par l’URL publique (même si c’est celle de Vercel)
    await page.goto('https://bro-world-space.com/resume?data=eyJuIjoiIiwiZCI6IiIsImkiOiIiLCJmIjoiIiwidCI6IiIsImlnIjoiIiwiZ2giOiIiLCJ0ZyI6IiIsImwiOiIiLCJlIjoiIiwidyI6IiIsInkiOiIiLCJscyI6W119', {
      waitUntil: 'networkidle0'
    })

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true
    })

    await browser.close()

    return new Response(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"'
      }
    })
  } catch (error) {
    console.error('PDF export failed:', error)
    if (browser) await browser.close()
    return new Response('Failed to generate PDF', { status: 500 })
  }
})
