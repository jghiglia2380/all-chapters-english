# HTML Asset Generation Instructions

## Overview
Generate missing HTML files for L-46 through L-69 based on the assets.md specifications in each chapter.

**Total chapters:** 24
**Estimated files to generate:** ~102

---

## How to Use These Instructions

Open multiple terminal windows with Claude Code and give each one a chapter range:

### Terminal 1: L-46 to L-52 (7 chapters, ~24 files)
```
Read /Users/justin/Library/Mobile Documents/com~apple~CloudDocs/Documents/pfl-academy/content-complete/HTML_GENERATION_INSTRUCTIONS.md and generate all missing HTML files for chapters L-46 through L-52.
```

### Terminal 2: L-53 to L-59 (7 chapters, ~32 files)
```
Read /Users/justin/Library/Mobile Documents/com~apple~CloudDocs/Documents/pfl-academy/content-complete/HTML_GENERATION_INSTRUCTIONS.md and generate all missing HTML files for chapters L-53 through L-59.
```

### Terminal 3: L-60 to L-64 (5 chapters, ~23 files)
```
Read /Users/justin/Library/Mobile Documents/com~apple~CloudDocs/Documents/pfl-academy/content-complete/HTML_GENERATION_INSTRUCTIONS.md and generate all missing HTML files for chapters L-60 through L-64.
```

### Terminal 4: L-65 to L-69 (5 chapters, ~23 files)
```
Read /Users/justin/Library/Mobile Documents/com~apple~CloudDocs/Documents/pfl-academy/content-complete/HTML_GENERATION_INSTRUCTIONS.md and generate all missing HTML files for chapters L-65 through L-69.
```

---

## Generation Process

**IMPORTANT: Generate ALL files listed in assets.md, overwriting any existing files. This ensures consistency across all assets.**

For each chapter in your assigned range:

### Step 1: Read the assets.md file
```
/Users/justin/Library/Mobile Documents/com~apple~CloudDocs/Documents/pfl-academy/content-complete/L-XX-chapter-name/assets/assets.md
```

The assets.md file contains:
- List of ALL HTML files to generate (overwrite existing)
- Purpose and format for each asset
- Which activity it supports

### Step 2: Read the Day 2 curriculum for context
```
/Users/justin/Library/Mobile Documents/com~apple~CloudDocs/Documents/pfl-academy/content-complete/L-XX-chapter-name/student/day2.md
```

This provides the actual activity instructions students see, which should inform the HTML content.

### Step 3: Generate each missing HTML file

Save to:
```
/Users/justin/Library/Mobile Documents/com~apple~CloudDocs/Documents/pfl-academy/content-complete/L-XX-chapter-name/assets/downloads/[Filename].html
```

---

## HTML Quality Standards

### Styling (PFL Academy Brand)
```css
:root {
    --primary: #6366f1;      /* Indigo */
    --secondary: #8b5cf6;    /* Purple */
    --success: #10b981;      /* Green */
    --warning: #f59e0b;      /* Orange */
    --danger: #ef4444;       /* Red */
    --info: #3b82f6;         /* Blue */
    --text: #1f2937;         /* Dark gray */
    --background: #ffffff;
    --surface: #f9fafb;
}

body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
}
```

### Structure Requirements
- Standalone HTML (embedded CSS/JS, no external dependencies)
- Print-friendly with @media print styles
- Mobile responsive
- WCAG 2.1 AA accessible
- 1-3 printed pages maximum per file

### State-Specific Placeholders
Use these placeholders for state-customization:
- `{{STATE_NAME}}` - State name
- `{{STATE_SALES_TAX}}` - Sales tax rate
- `{{STATE_REGISTRATION_INITIAL}}` - Initial registration fee
- `{{STATE_REGISTRATION_ANNUAL}}` - Annual registration fee
- `{{STATE_INSURANCE_AVG_TEEN}}` - Average teen insurance
- `{{STATE_GAS_PRICE_CURRENT}}` - Current gas price

### File Types

**Interactive Calculators/Simulators:**
- Real-time calculations
- Input validation
- Visual output (charts if appropriate)
- Printable results section

**Worksheets:**
- Clear sections with instructions
- Input fields or tables
- Space for written responses
- Numbered steps

**Reference Sheets:**
- Quick-scan format
- Tables and lists
- Key terms highlighted
- Single page when printed

---

## Chapter Directory Structure

```
content-complete/L-XX-chapter-name/
├── assets/
│   ├── assets.md          ← READ THIS for specifications
│   └── downloads/
│       ├── [existing].html
│       └── [generate].html ← SAVE NEW FILES HERE
├── student/
│   ├── day1.md
│   └── day2.md            ← READ THIS for activity context
└── teacher/
    ├── day1.md
    └── day2.md
```

---

## Verification Checklist

After generating files for a chapter:
- [ ] ALL files listed in assets.md are generated (overwrite existing)
- [ ] Files are in the correct downloads/ directory
- [ ] Each file is standalone (no external dependencies)
- [ ] Print preview shows 1-3 pages
- [ ] Interactive elements work correctly
- [ ] State placeholders used where appropriate
- [ ] Consistent with PFL Academy branding

---

## Chapter List with Topics

| Chapter | Topic | Est. Files to Generate |
|---------|-------|------------------------|
| L-46 | Automobile Finance | 1 |
| L-47 | Introduction to Investment Types | 5 |
| L-48 | Economic Systems | 3 |
| L-49 | Scarcity and Opportunity Cost | 4 |
| L-50 | Supply and Demand | 3 |
| L-51 | Market Structures | 3 |
| L-52 | Government and Economy | 5 |
| L-53 | Fiscal and Monetary Policy | 4 |
| L-54 | Inflation and Unemployment | 4 |
| L-55 | International Trade | 5 |
| L-56 | Financial Record Keeping | 5 |
| L-57 | Loan Applications | 4 |
| L-58 | Supply, Demand, Market Structures | 5 |
| L-59 | Local Tax Structures | 5 |
| L-60 | Financial Contracts | 5 |
| L-61 | Contract Evaluation | 5 |
| L-62 | Investment Portfolio Strategies | 5 |
| L-63 | Advanced Investment Concepts | 5 |
| L-64 | Risk and Return | 4 |
| L-65 | Portfolio Diversification | 4 |
| L-66 | Financial Markets | 5 |
| L-67 | Investment Technology | 5 |
| L-68 | Tax-Efficient Investing | 5 |
| L-69 | Alternative Investments | 5 |

---

## Notes

- Each activity should have its own dedicated HTML file
- Files should be focused and printable (not comprehensive reference guides)
- Let the Day 2 activity description guide the content scope
- Prioritize usability over comprehensiveness
- When in doubt, make it simpler and shorter
