# L-71 Implementation Notes

## Files Created (Source Content Complete)

### Core Content Files ✓
1. **architecture.json** - Chapter metadata, learning objectives, skill builder reference
2. **student/day1.md** - Complete Day 1 content with all sections
3. **student/day2.md** - Complete Day 2 Learning Lab with 4 activities
4. **student/skill-builder.json** - Estate Planning Starter Checklist configuration
5. **teacher/guide-day1.md** - Comprehensive Day 1 facilitation guide
6. **teacher/guide-day2.md** - Comprehensive Day 2 facilitation guide
7. **assets/assets.md** - Asset specifications for all 5 HTML tools
8. **README.md** - Complete chapter documentation

### Activity JSON Files ✓
1. **activities/activity-1-will-vs-no-will.json** - Complete scenario data
2. **activities/activity-2-trust-comparison.json** - Complete situation analyses
3. **activities/activity-3-poa-healthcare-directive.json** - Complete planning frameworks
4. **activities/activity-4-beneficiary-audit.json** - Complete case studies and checklists

## Files Requiring HTML Implementation

### Student HTML Files (Follow L-70 Pattern Exactly)
These files should follow the structure in L-70/student/day1.html and day2.html:

#### 1. student/day1.html
**Structure Template from L-70:**
- HTML boilerplate with Tailwind CSS
- Header with {{STATE_NAME}} integration
- Learning objectives section
- Collapsible sections for each major topic:
  - Introduction/Hook
  - Key Concepts with expandable cards
  - Deeper Exploration sections (collapsible)
  - Real-World Examples
  - Interactive Skill Builder section
  - Reflection prompts
  - Summary
- Footer
- JavaScript for interactivity (collapsible sections, skill builder)

**L-71 Specific Content:**
- Topics: Wills, Trusts, Beneficiaries, Probate, POA, Healthcare Directives, Guardianship
- Interactive skill builder: Estate Planning Starter Checklist
- State variable: {{STATE_NAME}} in header and content
- Collapsible sections for each document type

#### 2. student/day2.html
**Structure Template from L-70:**
- HTML boilerplate with Tailwind CSS
- Header with {{STATE_NAME}}
- Day 1 recap banner
- Learning Lab objectives
- Progress tracker (4 activities)
- Four activity sections with interactive elements:
  - Activity 1: Will vs. No Will Simulation
  - Activity 2: Trust Comparison Tool
  - Activity 3: POA & Healthcare Directive Builder
  - Activity 4: Beneficiary Designation Audit
- Final reflection section
- Summary
- Footer
- JavaScript for all interactive activities

**L-71 Specific Implementation:**
- Load activity data from JSON files
- Interactive simulators for each activity
- Calculation engines for cost comparisons
- Form builders for personal planning
- Results display and analysis

### Interactive HTML Downloads (Follow L-70 Downloads Pattern)

#### 1. assets/downloads/Estate_Planning_Starter_Checklist.html
**Purpose:** Standalone skill builder matching skill-builder.json
**Features:**
- Life stage assessment dropdown
- Current document status checkboxes
- Priority ranking system
- Action plan with timeline inputs
- Cost estimation calculator
- Printable results
- {{STATE_NAME}} integration

#### 2. assets/downloads/Will_vs_No_Will_Simulator.html
**Purpose:** Interactive scenario comparison tool
**Features:**
- Three scenario selector (tabs or dropdown)
- Side-by-side comparison: With Will | Without Will
- Asset distribution flowcharts
- Cost calculator (probate, legal fees, timeline)
- Family impact analysis
- Printable comparison reports

#### 3. assets/downloads/Trust_Comparison_Tool.html
**Purpose:** Trust necessity and type analyzer
**Features:**
- Four situation selector
- Probate cost estimator
- Trust setup cost calculator
- Cost-benefit analysis chart
- Trust type recommendations
- Decision tree visualization
- Printable analysis

#### 4. assets/downloads/Beneficiary_Designation_Audit.html
**Purpose:** Beneficiary review and mistake identifier
**Features:**
- Case study selector (4 cases)
- Mistake identification tool
- Personal beneficiary inventory form
- Life event trigger checklist
- Update planner
- Best practices guide
- Printable audit report

### Slide Deck JSON

#### slide-deck-templates/slide-content/L-71.json
**Structure Template from L-69:**
- Metadata section with chapter info, state variables
- 20 slides following JSON schema:
  - Slide 1: Title slide
  - Slide 2: Hook (relatable scenario)
  - Slide 3: Learning objectives
  - Slides 4-6: Key vocabulary (wills, trusts, beneficiaries, probate, POA, healthcare directives)
  - Slides 7-10: Document deep-dives with examples
  - Slides 11-13: Common mistakes and scenarios
  - Slide 14: Foundation First principle (start at 18)
  - Slides 15-17: Case studies (Chen family, Marcus intestacy, Maya crisis)
  - Slide 18: Discussion prompts
  - Slide 19: Key takeaways
  - Slide 20: Skill builder activity introduction

**L-71 Specific Content:**
- Estate planning misconceptions
- Will vs. intestacy outcomes
- Trust vs. will comparison
- Beneficiary designation importance
- State variables: {{STATE_NAME}} in examples

## HTML Implementation Checklist

When implementing HTML files, ensure:

### Technical Requirements
- [ ] Follow L-70 HTML structure exactly
- [ ] Use Tailwind CSS via CDN
- [ ] Include Chart.js for visualizations
- [ ] Collapsible sections with smooth transitions
- [ ] Mobile responsive design
- [ ] Print-friendly styling
- [ ] Accessibility (keyboard navigation, ARIA labels)

### State Variable Integration
- [ ] {{STATE_NAME}} appears in header
- [ ] {{STATE_ESTATE_TAX}} used in relevant examples
- [ ] State-specific examples (intestacy, probate costs)
- [ ] No custom state variables created

### Content Integration
- [ ] Load data from JSON files for activities
- [ ] Interactive calculators for costs
- [ ] Form validation for user inputs
- [ ] Results summaries and visualizations
- [ ] Portfolio/printable export options

### Branding & Styling
- [ ] Purple/emerald header gradient
- [ ] Consistent color coding (green=success, red=warning, amber=land, blue=labor, etc.)
- [ ] Icon usage for visual clarity
- [ ] Card-based layouts for scenarios
- [ ] Interactive hover effects

## Slide Deck JSON Implementation

When creating L-71.json slide deck:

### Structure Requirements
- [ ] Follow L-69.json format exactly
- [ ] Metadata section with l_chapter, title, totalSlides
- [ ] hasStateVariables: false (uses only standard STATE_NAME)
- [ ] stateVariablesUsed: []

### Slide Types to Include
- [ ] type: "title" (opening slide)
- [ ] type: "hook" (engaging scenario)
- [ ] type: "content" with various layouts:
  - concept-full (definitions)
  - comparison-grid (will vs. intestacy, trust vs. no trust)
  - balanced-layout (document explanations with examples)
  - scenario-layout (case studies)
- [ ] type: "discussion" (reflection prompts)

### Content Themes
- [ ] Accessibility (estate planning for young adults, not just elderly)
- [ ] Protection focus (not morbid, but empowering)
- [ ] Real consequences (family conflict, unintended outcomes)
- [ ] Actionable steps (what to do now at age 17-18)
- [ ] State awareness ({{STATE_NAME}} laws matter)

## Quality Assurance Checklist

Before committing:

### Content Accuracy
- [ ] No overlap with L-68 tax content
- [ ] Legal accuracy (general education, not legal advice)
- [ ] Age-appropriate language and scenarios
- [ ] Correct terminology (will, trust, POA, healthcare directive, etc.)

### Completeness
- [ ] All 4 activities have complete JSON data
- [ ] All teacher guides include state customization notes
- [ ] README documents all files and structure
- [ ] Asset specifications list all 5 HTML tools

### State Variables
- [ ] Only STATE_NAME and STATE_ESTATE_TAX used
- [ ] No custom state variables created
- [ ] State variable usage is minimal and appropriate
- [ ] Generic national examples used where state data doesn't exist

### File Organization
- [ ] All files in correct directories
- [ ] Naming conventions followed (lowercase, hyphens)
- [ ] JSON files validated for syntax
- [ ] Markdown files properly formatted

## Next Steps for Full Implementation

1. **Create HTML files** following L-70 pattern
2. **Create slide deck JSON** following L-69 pattern
3. **Test all interactive elements** in HTML files
4. **Validate JSON** syntax in all .json files
5. **Review state variable** usage throughout
6. **Create downloadable PDFs** (if pipeline supports)
7. **Commit to repository** with proper message
8. **Push to remote** and verify

## Notes for Developers

### L-70 HTML Pattern Reference
- Collapsible sections use CSS classes: `.collapsible-content` and `.active`
- JavaScript toggles sections: `toggleSection(sectionId)`
- State variables replaced via template engine: `{{STATE_NAME}}`
- Interactive calculators use vanilla JavaScript (no frameworks)
- Charts use Chart.js library
- Forms use HTML5 validation

### L-69 Slide Deck Pattern Reference
- JSON schema strictly defined
- Each slide has: number, type, content, headerColor (optional)
- Layout types have specific data structures (layoutData)
- Notes field for teacher facilitation guidance
- State variables used sparingly in content

### Common Pitfalls to Avoid
- Don't create new state variables (use only STATE_NAME, STATE_ESTATE_TAX)
- Don't duplicate L-68 content (tax strategies belong there)
- Don't make HTML files too complex (follow L-70 simplicity)
- Don't forget mobile responsiveness
- Don't skip accessibility features
- Don't omit printable styling

---

**Status**: Source content complete; HTML implementation and slide deck creation pending
**Estimated Completion Time**: 6-8 hours for full HTML implementation + 2 hours for slide deck
**Priority**: HTML files (student experience) > Slide deck (teacher presentation)
