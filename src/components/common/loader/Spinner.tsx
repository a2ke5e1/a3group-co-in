/* ---------------------------------------------
 * Spinner
 * -------------------------------------------- */
export const Spinner = () => (
  <span className="ant-spin-dot">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 50 50"
      role="presentation"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="currentColor"
        strokeWidth="4"
        opacity="0.3"
        fill="none"
      />
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="90 125"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </span>
);
