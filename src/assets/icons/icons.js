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
};
