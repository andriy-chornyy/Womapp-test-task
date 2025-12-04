import "./infosection.scss";

export const Infosection = () => {
  return (
    <section className="info-section">
      <h2 className="subtitle">Acceptance Criteria (AC)</h2>

      <p>
        We want to evaluate your attention to UI details, component structure,
        and CSS skills. We are not testing complex global state management here.
      </p>

      <ol className="main-list">
        <li className="list-section">
          Layout & Responsiveness
          <ul>
            <li>
              <p>
                Design Compliance: Implement the Header and the main content
                block (text) strictly according to the design.
              </p>
            </li>

            <li>
              <p>
                Adaptability: The layout must be fully responsive. It should
                look perfect on mobile (320px+) and desktop without horizontal
                scrolling or broken elements.
              </p>
            </li>

            <li>
              <p>
                Header: visually implement the header structure. Note: You do
                NOT need to implement the functional opening/closing logic of
                the burger menu (the drawer/modal). Just the visual icon and its
                positioning.
              </p>
            </li>
          </ul>
        </li>

        <li className="list-section">
          <h3>Interactions & Animations</h3>

          <ul>
            <li>
              <p>Theme Switcher Component:</p>

              <ul className="details-list">
                <li>
                  <p>Implement the custom UI for the Theme Switcher.</p>
                </li>
                <li>
                  <p>
                    Requirement: The switcher must be interactive and feature a
                    smooth animation when toggled.
                  </p>
                </li>
                <li>
                  <p>
                    Clarification: You do not need (But if you want, feel free
                    to do it) to implement the actual global color change for
                    the whole page (Dark/Light mode logic). We only want to see
                    a perfectly working, animated Switcher component.
                  </p>
                </li>
              </ul>
            </li>

            <li>
              <p>
                States: All buttons and links must have hover and active states
                as specified in the design.
              </p>
            </li>
          </ul>
        </li>

        <li className="list-section">
          <h3>Technical Stack</h3>

          <ul>
            <li>
              <p>Core: React, TypeScript.</p>
            </li>

            <li>
              <p>
                Styling: Your preferred modern approach (CSS Modules, SCSS,
                Styled Components, or Tailwind).
              </p>
            </li>

            <li>
              <p>Quality: Clean component structure and readable code.</p>
            </li>
          </ul>
        </li>
      </ol>
    </section>
  );
};
