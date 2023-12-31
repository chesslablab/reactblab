const SvgWhiteKing = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="100%" height="100%" {...props}>
    <g
      style={{
        fill: "none",
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
        d="M22.5 11.63V6M20 8h5"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinejoin: "miter",
        }}
      />
      <path
        d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
        style={{
          fill: "#fff",
          stroke: "#000",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
        }}
      />
      <path
        d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"
        style={{
          fill: "#fff",
          stroke: "#000",
        }}
      />
      <path
        d="M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0"
        style={{
          fill: "none",
          stroke: "#000",
        }}
      />
    </g>
  </svg>
);

export default SvgWhiteKing;
