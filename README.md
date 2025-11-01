# GETSTAC Assesssment

## Overview
This is a responsive dashboard built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It includes a sidebar that turns into a hamburger menu on mobile, a main dashboard area with summary cards, a search and filter section, and a data table. The whole setup is designed with a **mobile-first approach** — it looks clean on big screens and stays usable on small ones. 

## Note
As I am aware of the slight delay caused by a technical issue, I rather focused on the most important parts of the design trying my best to meet up to the deadline. 

The website works perfect on mobile phones and as well desktop. 

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/dashboard-project.git
cd assessment
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the app
```bash
npm run dev
# or
yarn dev
```

Then open your browser and visit [http://localhost:3000](http://localhost:3000).

---

## Project Structure
```
public
src/
app/
 (auth)/
   signin/
    page.tsx
components/
  ui/
    ├─ button.tsx
    ├─ card.tsx
    ├─ input.tsx

  ├─ AreaChartExample.tsx
  ├─ DashboardOverview.tsx
  ├─ DashboardTrending.tsx
  ├─ LocationActivities.tsx
  ├─ Modal.tsx
  ├─ 
lib/
  └─ data/
      └─ mockData.ts
 utils.ts
pages/
  └─ index.tsx

 globals.css
 package.json
 { other next and ts files installed by default}
```

---

## Responsive Design Notes
- The layout is built **mobile-first**, so everything scales up naturally.
- The **sidebar** collapses into a hamburger menu on smaller screens.
- **Buttons and filters** stack vertically on mobile for easier tapping.
- **Tables and charts** scroll horizontally when needed — no broken layouts.

---

## Design Decisions & Tradeoffs
- I used **Tailwind CSS** to keep styling consistent and responsive without writing a ton of CSS files.  
- **Recharts** was added for charts — it’s simple and flexible enough for most dashboard needs.  
- The **hamburger toggle** adds a little complexity with state management, but it’s worth it for mobile usability.  
- Keeping things inline with Tailwind classes made development faster but can make the JSX a bit long.  
- I focused on **clean layout and UX** over flashy visuals — readability and responsiveness came first.

---

## Future Improvements
Here are a few things I’d like to add or refine later:
- Save the sidebar’s open/close state between pages.  
- Add accessibility roles and keyboard navigation.  
- Include a dark mode toggle.  
- Hook the dashboard up to real data instead of mock content.
