#!/usr/bin/env node

/**
 * PDF Generation Script for L-70: Factors of Production
 * Converts HTML files to PDFs using Puppeteer
 *
 * Since L-70 is Tier 3 (fully agnostic), no state variable replacement needed.
 */

import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const HTML_FILES = [
  // Main packets
  { input: 'assets/L-70_Student_Activity_Packet.html', output: 'assets/L-70_Student_Activity_Packet.pdf' },
  { input: 'assets/L-70_Teacher_Guide.html', output: 'assets/L-70_Teacher_Guide.pdf' },

  // Interactive tools (also get PDF versions)
  { input: 'assets/downloads/Factor_Sorting_Challenge.html', output: 'assets/Factor_Sorting_Challenge.pdf' },
  { input: 'assets/downloads/Business_Factor_Analysis.html', output: 'assets/Business_Factor_Analysis.pdf' },
  { input: 'assets/downloads/Personal_Factor_Contribution_Calculator.html', output: 'assets/Personal_Factor_Contribution_Calculator.pdf' },
  { input: 'assets/downloads/Business_Design_Tool.html', output: 'assets/Business_Design_Tool.pdf' },

  // Worksheets
  { input: 'assets/downloads/Factors_of_Production_Reference_Sheet.html', output: 'assets/Reference_Sheet.pdf' },
  { input: 'assets/downloads/Factor_Payment_Worksheet.html', output: 'assets/Supporting_Worksheet.pdf' },
];

async function generatePDF(inputPath, outputPath) {
  const fullInputPath = path.join(__dirname, inputPath);
  const fullOutputPath = path.join(__dirname, outputPath);

  if (!fs.existsSync(fullInputPath)) {
    console.error(`❌ File not found: ${inputPath}`);
    return false;
  }

  try {
    const htmlContent = fs.readFileSync(fullInputPath, 'utf8');

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Generate PDF with Letter size and margins
    await page.pdf({
      path: fullOutputPath,
      format: 'Letter',
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      },
      printBackground: true,
      preferCSSPageSize: false
    });

    await browser.close();

    const stats = fs.statSync(fullOutputPath);
    const sizeKB = (stats.size / 1024).toFixed(1);
    console.log(`✅ Generated: ${outputPath} (${sizeKB} KB)`);
    return true;

  } catch (error) {
    console.error(`❌ Error generating ${outputPath}:`, error.message);
    return false;
  }
}

async function generateAllPDFs() {
  console.log('🚀 Starting PDF generation for L-70: Factors of Production\n');

  let successCount = 0;
  let failCount = 0;

  for (const file of HTML_FILES) {
    const success = await generatePDF(file.input, file.output);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Success: ${successCount} PDFs generated`);
  if (failCount > 0) {
    console.log(`❌ Failed: ${failCount} PDFs`);
  }
  console.log('='.repeat(60));
}

// Run if executed directly
generateAllPDFs().catch(console.error);

export { generatePDF, generateAllPDFs };
