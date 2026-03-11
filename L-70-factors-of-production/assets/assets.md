# Asset Specifications for L-70: Factors of Production

## Overview
This chapter includes 6 HTML assets for the skill builder and Day 2 activities, plus comprehensive printable resources.

---

## Day 1 Skill Builder

### 1. The Business Builder
- **Purpose:** Primary skill builder for analyzing factor combinations
- **Format:** Interactive slider-based tool with chart visualization
- **HTML File:** The_Business_Builder.html (embedded in day1.html)
- **Functionality:** Students adjust Labor (Employees) and Capital (Robots) sliders to see impact on production output, operating costs, and efficiency ratio

---

## Day 2 Activity Assets

### 2. Factor Sorting Challenge
- **Purpose:** Classify 12 resources into the four factors of production through drag-and-drop
- **Format:** Interactive drag-and-drop interface
- **HTML File:** Factor_Sorting_Challenge.html (standalone in downloads/)
- **Activity JSON:** activities/activity-1-factor-sorting-challenge.json
- **Supports Activity:** Activity 1 - Factor Sorting Challenge
- **Duration:** 10 minutes
- **Resources:** Ocean fishing rights, factory robot, software developer, Elon Musk's vision, Texas crude oil, delivery truck, registered nurse, starting food truck, sunlight for solar, cash register, manager expertise, business risk
- **Learning Objective:** Correctly identify which resources belong to land, labor, capital, and entrepreneurship
- **Features:** Drag-and-drop interface, immediate feedback, color-coded correct/incorrect answers

### 3. Business Factor Analysis Tool
- **Purpose:** Select a business type and calculate factor payments and profitability
- **Format:** Interactive calculator with business scenarios
- **HTML File:** Business_Factor_Analysis.html (standalone in downloads/)
- **Activity JSON:** activities/activity-2-business-factor-analysis.json
- **Supports Activity:** Activity 2 - {{STATE_NAME}} Business Analysis
- **Duration:** 15 minutes
- **Business Types:** Coffee Shop, Tech Startup, Family Farm, Construction Company
- **Features:** Input factor costs (rent, wages, interest, other), calculate profit, visualize factor breakdown with pie chart, profit margin interpretation
- **Learning Objective:** Calculate factor payments and determine entrepreneurial profit or loss

### 4. Personal Factor Contribution Calculator
- **Purpose:** Calculate personal economic contribution through labor, human capital, and savings
- **Format:** Interactive calculator with progress visualization
- **HTML File:** Personal_Factor_Contribution_Calculator.html (standalone in downloads/)
- **Activity JSON:** activities/activity-3-personal-factor-contribution.json
- **Supports Activity:** Activity 3 - Personal Factor Contribution
- **Duration:** 15 minutes
- **Features:** Job/wage/hours input, human capital checkboxes with boost calculation (0-100%), savings interest calculator, projected income visualization with progress bar
- **Learning Objective:** Understand how personal education and savings contribute to the economy and earn income
- **Human Capital Boosts:** High school (0%), Some college (+15%), Associate's (+30%), Bachelor's (+50%), Certifications (+10%), Skills training (+5%)

### 5. Business Design Tool
- **Purpose:** Plan a business using all four factors of production
- **Format:** Interactive planning form with financial projection and viability scoring
- **HTML File:** Business_Design_Tool.html (standalone in downloads/)
- **Activity JSON:** activities/activity-4-design-your-business.json
- **Supports Activity:** Activity 4 - Design Your {{STATE_NAME}} Business
- **Duration:** 15 minutes
- **Sections:** Business concept, Land requirements, Labor requirements, Capital requirements, Entrepreneurship vision, Revenue model, Viability evaluation (0-100 score)
- **Features:** Step-by-step planning, automatic profit calculation, viability scoring with feedback, reflection questions
- **Learning Objective:** Apply all four factors to design a complete, viable business concept

---

## Supporting Materials

### 6. Student Activity Packet
- **Purpose:** Printable version of all Day 2 activities for offline completion
- **Format:** Multi-page printable HTML
- **HTML File:** L-70_Student_Activity_Packet.html
- **Includes:**
  - Opening challenge (smartphone production)
  - Learning objectives
  - Core concepts table (4 factors + payments)
  - Activity 1: Factor Classification Exercise
  - Activity 2: Business Analysis Worksheet
  - Activity 3: Personal Contribution Worksheet
  - Activity 4: Business Design Template
  - Check Your Understanding questions

### 7. Teacher Guide
- **Purpose:** Comprehensive facilitation guide with answer keys and timing
- **Format:** Multi-page printable HTML
- **HTML File:** L-70_Teacher_Guide.html
- **Includes:**
  - Lesson overview and timing
  - Lesson flow (5-section breakdown)
  - Facilitation notes for each activity
  - Differentiation strategies (support and extension)
  - Answer key for all activities
  - Common misconceptions table

---

## Downloads Folder Resources

### Individual Activity Downloads:
1. **The_Business_Builder.html** - Standalone version of Day 1 skill builder
2. **Factor_Sorting_Challenge.html** - Standalone drag-and-drop activity
3. **Business_Factor_Analysis_Tool.html** - Standalone business calculator
4. **Personal_Factor_Contribution_Calculator.html** - Standalone personal calculator
5. **Business_Design_Framework.html** - Standalone business planning template

### Reference Materials:
6. **Factors_of_Production_Reference_Sheet.html** - Quick reference guide with all four factors, examples, and payments
7. **Factor_Payment_Worksheet.html** - Practice calculations for factor payments

---

## Asset File Inventory Status

### Primary Assets (in assets/ folder):
- L-70_Student_Activity_Packet.html - EXISTS ✅
- L-70_Teacher_Guide.html - EXISTS ✅
- assets.md - EXISTS ✅

### Downloads (in assets/downloads/ folder):
- Factor_Sorting_Challenge.html - EXISTS ✅
- Business_Factor_Analysis.html - EXISTS ✅
- Personal_Factor_Contribution_Calculator.html - EXISTS ✅
- Business_Design_Tool.html - EXISTS ✅
- Factors_of_Production_Reference_Sheet.html - EXISTS ✅
- Factor_Payment_Worksheet.html - EXISTS ✅

### Student Resources (in student/ folder):
- day1.md - EXISTS ✅ (Markdown version of Day 1 content)
- day2.md - EXISTS ✅ (Markdown version of Day 2 activities)
- day1.html - EXISTS ✅ (Original HTML version)
- day2.html - EXISTS ✅ (Original HTML version)

### Activities Metadata (in activities/ folder):
- activity-1-factor-sorting-challenge.json - EXISTS ✅
- activity-2-business-factor-analysis.json - EXISTS ✅
- activity-3-personal-factor-contribution.json - EXISTS ✅
- activity-4-design-your-business.json - EXISTS ✅

---

## Development Notes

**Embedded vs. Standalone:**
- Day 1 skill builder (Business Builder) is embedded in day1.html JavaScript
- Day 2 activities (sorting, business analysis, personal calc, business design) are embedded in day2.html JavaScript
- Downloads folder provides standalone versions for flexible deployment

**Interactive Features Required:**
- Drag-and-drop (HTML5 Drag and Drop API)
- Range sliders (HTML5 input type="range")
- Chart visualization (Chart.js for pie charts and bar charts)
- Form validation and calculation
- Progress tracking (checkboxes and visual progress bar)
- Real-time feedback (immediate calculation updates)

**Print Optimization:**
- Student Activity Packet formatted for US Letter (8.5" × 11")
- Teacher Guide formatted for US Letter with page breaks
- All forms include space for handwritten answers
- Tables and charts print clearly in black/white

**State Variable Integration:**
- All assets functional without state variables (Tier 3 agnostic)
- Optional {{STATE_NAME}}, {{STATE_MIN_WAGE}}, etc. enhance local relevance
- Default values provided when state variables unavailable
