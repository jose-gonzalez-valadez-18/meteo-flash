import { svg } from "lit";

export const icons = {
  search: svg`
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10.5 4a6.5 6.5 0 0 1 5.17 10.45l4.44 4.44-1.42 1.42-4.44-4.44A6.5 6.5 0 1 1 10.5 4Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/>
    </svg>
  `,
  cityHeart: svg`
    <svg
  viewBox="6 14 56 46"
  width="1em"
  height="1em"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <g
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- Base -->
    <path d="M8 52H40" />

    <!-- Edificio izquierdo -->
    <path d="M12 52V32L24 28V52" />
    <path d="M16 38H20" />
    <path d="M16 44H20" />

    <!-- Edificio central -->
    <path d="M26 52V18H42V36" />
    <path d="M30 24H34" />
    <path d="M30 32H34" />
    <path d="M30 40H34" />
    <path d="M38 24H38.1" />
    <path d="M38 32H38.1" />

    <!-- Edificio derecho -->
    <path d="M42 34V28H54V34" />
    <path d="M42 34H50" />

    <!-- Corazón -->
    <path
      d="M50 56
         L42 48
         C38 44 40 39 44 39
         C47 39 49 41 50 43
         C51 41 53 39 56 39
         C60 39 62 44 58 48
         Z"
    />
  </g>
</svg>
  `,
  sun: svg`
  <svg
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <!-- Centro -->
      <circle cx="32" cy="32" r="10" />

      <!-- Rayos -->
      <path d="M32 6V16" />
      <path d="M32 48V58" />

      <path d="M6 32H16" />
      <path d="M48 32H58" />

      <path d="M14 14L21 21" />
      <path d="M43 43L50 50" />

      <path d="M14 50L21 43" />
      <path d="M43 21L50 14" />
    </g>
  </svg>
`,
  sunCloud: svg`
  <svg
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- Sol -->
    <g
      stroke="currentColor"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    >
      <circle cx="24" cy="24" r="8" />

      <!-- Rayos -->
      <path d="M24 8V14" />
      <path d="M24 34V40" />

      <path d="M8 24H14" />
      <path d="M34 24H40" />

      <path d="M13 13L17 17" />
      <path d="M31 31L35 35" />

      <path d="M13 35L17 31" />
      <path d="M31 17L35 13" />
    </g>

    <!-- Nube -->
    <path
      d="M22 46
         H46
         C51 46 54 43 54 39
         C54 35 51 32 47 32
         C46 27 42 24 37 24
         C32 24 28 27 27 32
         C22 32 18 35 18 39
         C18 43 21 46 26 46"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`,
  cloud: svg`
  <svg
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M18 46
         H46
         C52 46 56 42 56 37
         C56 32 52 28 47 28
         C46 22 41 18 35 18
         C29 18 24 22 23 28
         C17 28 12 32 12 37
         C12 42 16 46 22 46"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`,
cloudRain: svg`
  <svg
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- Nube -->
    <path
      d="M18 40
         H46
         C52 40 56 36 56 31
         C56 26 52 22 47 22
         C46 16 41 12 35 12
         C29 12 24 16 23 22
         C17 22 12 26 12 31
         C12 36 16 40 22 40"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <!-- Lluvia -->
    <g
      stroke="currentColor"
      stroke-width="3.5"
      stroke-linecap="round"
    >
      <path d="M24 46L20 56" />
      <path d="M36 46L32 56" />
      <path d="M48 46L44 56" />
    </g>
  </svg>
`,
cloudThunderRain: svg`
  <svg
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- Nube -->
    <path
      d="M18 40
         H46
         C52 40 56 36 56 31
         C56 26 52 22 47 22
         C46 16 41 12 35 12
         C29 12 24 16 23 22
         C17 22 12 26 12 31
         C12 36 16 40 22 40"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <!-- Rayo -->
    <path
      d="M34 42
         L28 54
         H34
         L30 64
         L44 48
         H36
         L40 42
         Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />

    <!-- Gotas -->
    <g
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
    >
      <path d="M18 46L15 54" />
      <path d="M50 46L47 54" />
    </g>
  </svg>
`,
};
