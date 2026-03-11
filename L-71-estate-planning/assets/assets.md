# Asset Specifications for L-71: Introduction to Estate Planning

## Overview
This chapter includes 5 HTML assets for the skill builder and Day 2 activities.

---

## Day 1 Skill Builder

### 1. Estate Planning Starter Checklist
- **Purpose:** Primary skill builder for assessing current estate planning needs and creating action plan
- **Format:** Interactive checklist and planning tool
- **HTML File:** Estate_Planning_Starter_Checklist.html
- **Features:**
  - Life stage assessment (single, relationship, married, parent)
  - Current status documentation for all key documents
  - Priority ranking based on situation
  - Action plan with timeline
  - Cost estimation for different planning approaches
  - Document storage planning
  - State-specific considerations for {{STATE_NAME}}

---

## Day 2 Activity Assets

### 2. Will vs. No Will Simulator
- **Purpose:** Interactive comparison showing outcomes of dying with versus without a will
- **Format:** Scenario-based simulator with side-by-side comparisons
- **HTML File:** Will_vs_No_Will_Simulator.html
- **Supports Activity:** Activity 1 - Will vs. No Will Simulation (15 minutes)
- **Features:**
  - Three scenarios (single person, married with kids, divorced parent)
  - Dual-path visualization (with will vs. intestate)
  - Cost calculator (probate, legal fees, delays)
  - Asset distribution flowcharts
  - Timeline comparison
  - Family impact analysis
  - {{STATE_NAME}} intestacy law application

### 3. Trust Comparison Tool
- **Purpose:** Evaluate when trusts are appropriate and compare trust types
- **Format:** Interactive decision tool with cost-benefit analysis
- **HTML File:** Trust_Comparison_Tool.html
- **Supports Activity:** Activity 2 - Trust Comparison Tool (15 minutes)
- **Features:**
  - Four family situation analyses
  - Probate cost estimation
  - Trust setup cost vs. probate savings calculator
  - Trust type selector (revocable, testamentary, irrevocable, special purpose)
  - Complexity assessment
  - Recommendation engine
  - Cost-benefit comparison charts
  - {{STATE_NAME}} probate cost data

### 4. Power of Attorney & Healthcare Directive Builder
- **Purpose:** Create personal plan for incapacity protection documents
- **Format:** Interactive planning worksheet and decision framework
- **HTML File:** POA_Healthcare_Directive_Builder.html
- **Supports Activity:** Activity 3 - Power of Attorney & Healthcare Directive Builder (10 minutes)
- **Features:**
  - Healthcare proxy selection criteria
  - Treatment preference documentation
  - Financial POA agent selection tool
  - Scope of authority selector
  - Successor agent planning
  - Scenario comparison (with vs. without documents)
  - Conversation guide for agents
  - Document storage planning
  - {{STATE_NAME}} specific forms and resources

### 5. Beneficiary Designation Audit Tool
- **Purpose:** Review and correct beneficiary designation mistakes
- **Format:** Interactive audit tool with case studies and recommendations
- **HTML File:** Beneficiary_Designation_Audit.html
- **Supports Activity:** Activity 4 - Beneficiary Designation Audit (15 minutes)
- **Features:**
  - Four case study analyses (common mistakes)
  - Account type identifier (retirement, insurance, POD/TOD)
  - Primary and contingent beneficiary planner
  - Life event trigger checklist
  - Coordination checker (beneficiaries vs. will)
  - Update reminder system
  - Best practices guide
  - Trust vs. direct beneficiary calculator
  - {{STATE_NAME}} specific beneficiary rules

---

## Asset File Inventory
- Estate_Planning_Starter_Checklist.html - PRIMARY SKILL BUILDER
- Will_vs_No_Will_Simulator.html - Activity 1
- Trust_Comparison_Tool.html - Activity 2
- POA_Healthcare_Directive_Builder.html - Activity 3
- Beneficiary_Designation_Audit.html - Activity 4

---

## State Variable Integration

All tools integrate these state-specific variables:
- **{{STATE_NAME}}**: Displayed in headers and state-specific guidance

Example usage:
- "Based on {{STATE_NAME}} intestacy laws..."
- "{{STATE_NAME}} probate costs typically range from..."
- "{{STATE_NAME}} recognizes these healthcare directive forms..."
- Estate tax considerations use generic guidance: "Some states have estate or inheritance taxes that affect estates over $5-13 million"

---

## Technical Notes

**Accessibility:**
- All tools designed for keyboard navigation
- Screen reader compatible
- High contrast mode support
- Clear labels and instructions

**Data Privacy:**
- No student data transmitted or stored
- All calculations performed client-side
- Printable results for personal records

**Browser Compatibility:**
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile responsive design
- Progressive enhancement approach

**Integration:**
- Tools can be embedded in LMS
- Standalone HTML files for download
- Print-friendly output options
- Portfolio export capability
