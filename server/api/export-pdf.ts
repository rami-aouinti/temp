// server/api/export-pdf.ts
import puppeteer from 'puppeteer'

export default defineEventHandler(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const page = await browser.newPage()

  // ⚠️ Met ici l'URL accessible du frontend (localhost ou domaine en prod)
  await page.goto('http://localhost:3000/resume?data=eyJuIjoiIiwiZCI6IiIsImkiOiIiLCJmIjoiIiwidCI6IiIsImlnIjoiIiwiZ2giOiIiLCJ0ZyI6IiIsImwiOiIiLCJlIjoiIiwidyI6IiIsInkiOiIiLCJscyI6W119', {
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
})
