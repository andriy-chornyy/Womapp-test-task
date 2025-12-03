import { Header } from './components/Header';
import './global.scss';

export const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <h1 className='title'>
          Test Task: Mobile <br /> Header & Text Block
        </h1>

        <h2 className='subtitle'>Acceptance Criteria (AC)</h2>
        
        <p>We want to evaluate your attention to UI details, component structure, and CSS skills. We are not testing complex global state management here.
  1. Layout & Responsiveness
  Design Compliance: Implement the Header and the main content block (text) strictly according to the design.
  Adaptability: The layout must be fully responsive. It should look perfect on mobile (320px+) and desktop without horizontal scrolling or broken elements.
  Header: visually implement the header structure. Note: You do NOT need to implement the functional opening/closing logic of the burger menu (the drawer/modal). Just the visual icon and its positioning.
  2. Interactions & Animations
  Theme Switcher Component:
  Implement the custom UI for the Theme Switcher.
  Requirement: The switcher must be interactive and feature a smooth animation when toggled.
  Clarification: You do not need (But if you want, feel free to do it) to implement the actual global color change for the whole page (Dark/Light mode logic). We only want to see a perfectly working, animated Switcher component.
  States: All buttons and links must have hover and active states as specified in the design.
  3. Technical Stack
  Core: React, TypeScript.
  Styling: Your preferred modern approach (CSS Modules, SCSS, Styled Components, or Tailwind).
          Quality: Clean component structure and readable code.
        </p>
      </main>
    </div>
  )
}
