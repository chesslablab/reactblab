const SvgWhiteRook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="100%" height="100%" {...props}>
    <g
      style={{
        opacity: 1,
        fill: "#fff",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
        cursor: "grab",
      }}
    >
      <path
        d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"
        style={{
          strokeLinecap: "butt",
        }}
      />
      <path d="m34 14-3 3H14l-3-3" />
      <path
        d="M31 17v12.5H14V17"
        style={{
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
      />
      <path d="m31 29.5 1.5 2.5h-20l1.5-2.5" />
      <path
        d="M11 14h23"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinejoin: "miter",
        }}
      />
    </g>
  </svg>
);

export default SvgWhiteRook;
