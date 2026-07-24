const nodes = [
  { label: "React", angle: -90, ring: 1, color: "#61DAFB" },
  { label: "Node.js", angle: 25, ring: 1, color: "#F97316" },
  { label: "Express", angle: 155, ring: 1, color: "#FFD166" },
  { label: "MongoDB", angle: 90, ring: 2, color: "#00ED64" },
  { label: "Tailwind", angle: -35, ring: 2, color: "#FF0000" },
  { label: "REST API", angle: 205, ring: 2, color: "#B388FF" },
];

function pointOnRing(angleDeg, radius, cx = 200, cy = 200) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

export default function StackGraph() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-auto"
      role="img"
      aria-label="Diagram representing the MERN technology stack"
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="200" r="120" fill="url(#coreGlow)" />

      
      <g data-hero-orbit style={{ transformOrigin: "200px 200px" }}>
        <circle
          cx="200"
          cy="200"
          r="172"
          fill="none"
          stroke="var(--color-hairline)"
          strokeWidth="1"
          strokeDasharray="1 10"
        />
        <circle cx="200" cy="28" r="2.5" fill="var(--color-mint)" />
      </g>

     
      <circle
        cx="200"
        cy="200"
        r="90"
        fill="none"
        stroke="var(--color-hairline-strong)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="var(--color-hairline)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />

   
      {nodes.map((node) => {
        const radius = node.ring === 1 ? 90 : 150;
        const p = pointOnRing(node.angle, radius);
        return (
          <line
            key={`line-${node.label}`}
            x1="200"
            y1="200"
            x2={p.x}
            y2={p.y}
            stroke="var(--color-hairline-strong)"
            strokeWidth="1"
          />
        );
      })}

=
      {nodes.map((node) => {
        const radius = node.ring === 1 ? 90 : 150;
        const p = pointOnRing(node.angle, radius);
        const isPrimary = node.ring === 1;
        return (
          <circle
            key={`node-${node.label}`}
            cx={p.x}
            cy={p.y}
            r={isPrimary ? 7 : 5.5}
            fill={node.color}
            stroke={isPrimary ? "none" : "var(--color-hairline-strong)"}
            strokeWidth="1.5"
          />
        );
      })}

      
      {nodes.map((node) => {
        const radius = node.ring === 1 ? 90 : 150;
        const labelRadius = radius + (node.ring === 1 ? 32 : 30);
        const p = pointOnRing(node.angle, labelRadius);
        return (
          <text
            key={`label-${node.label}`}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-ink"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.02em",
            }}
          >
            {node.label}
          </text>
        );
      })}

      
      <circle
        cx="200"
        cy="200"
        r="34"
        fill="var(--color-surface)"
        stroke="var(--color-hairline-strong)"
        strokeWidth="1.5"
      />
      <text
        x="200"
        y="196"
        textAnchor="middle"
        className="fill-ink"
        style={{ fontFamily: "var(--font-display)", fontSize: "13px" }}
      >
        MERN
      </text>
      <text
        x="200"
        y="212"
        textAnchor="middle"
        className="fill-ink-mute"
        style={{ fontFamily: "var(--font-mono)", fontSize: "8px", letterSpacing: "0.1em" }}
      >
        STACK
      </text>
    </svg>
  );
}
