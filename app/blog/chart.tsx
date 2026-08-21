"use client";

import { useId, useState } from "react";

export type TrendPoint = { label: string; value: number };

const VIEW_W = 640;
const VIEW_H = 280;
const PAD_LEFT = 40;
const PAD_RIGHT = 16;
const PAD_TOP = 32;
const PAD_BOTTOM = 30;
const GRID_VALUES = [0, 50, 100];

export function TrendChart({
  title,
  unit = "",
  data: dataProp,
  caption,
}: {
  title: string;
  unit?: string;
  data: TrendPoint[] | string;
  caption?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const gradientId = useId();
  const data: TrendPoint[] = typeof dataProp === "string" ? JSON.parse(dataProp) : dataProp;

  const plotW = VIEW_W - PAD_LEFT - PAD_RIGHT;
  const plotH = VIEW_H - PAD_TOP - PAD_BOTTOM;

  const xAt = (index: number) =>
    data.length === 1 ? PAD_LEFT + plotW / 2 : PAD_LEFT + (plotW * index) / (data.length - 1);
  const yAt = (value: number) => PAD_TOP + plotH * (1 - value / 100);

  const points = data.map((point, index) => ({ ...point, x: xAt(index), y: yAt(point.value) }));
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const areaPath = `${linePath} L${points[points.length - 1].x},${PAD_TOP + plotH} L${points[0].x},${PAD_TOP + plotH} Z`;

  const handlePointerMove = (event: React.PointerEvent<SVGRectElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const scaleX = VIEW_W / rect.width;
    const localX = (event.clientX - rect.left) * scaleX;
    let nearest = 0;
    let nearestDist = Infinity;
    points.forEach((p, i) => {
      const dist = Math.abs(p.x - localX);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = i;
      }
    });
    setActiveIndex(nearest);
  };

  const active = activeIndex !== null ? points[activeIndex] : null;
  const first = points[0];
  const last = points[points.length - 1];

  return (
    <figure className="trend-chart">
      <figcaption className="trend-chart-title">{title}</figcaption>

      <div className="trend-chart-canvas">
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} role="img" aria-label={title}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--green)" stopOpacity="0.16" />
              <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {GRID_VALUES.map((value) => (
            <g key={value}>
              <line
                x1={PAD_LEFT}
                x2={VIEW_W - PAD_RIGHT}
                y1={yAt(value)}
                y2={yAt(value)}
                stroke="var(--line)"
                strokeWidth={1}
              />
              <text x={PAD_LEFT - 10} y={yAt(value)} textAnchor="end" dominantBaseline="middle" className="trend-chart-axis-label">
                {value}
                {unit}
              </text>
            </g>
          ))}

          <path d={areaPath} fill={`url(#${gradientId})`} />
          <path d={linePath} fill="none" stroke="var(--green-dark)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

          {points.map((p, i) => (
            <text key={p.label} x={p.x} y={VIEW_H - 8} textAnchor="middle" className="trend-chart-axis-label">
              {i === 0 || i === points.length - 1 || points.length <= 6 ? p.label : ""}
            </text>
          ))}

          <text x={first.x} y={first.y - 12} textAnchor="start" className="trend-chart-value-label">
            {first.value}
            {unit}
          </text>
          <text x={last.x} y={last.y - 12} textAnchor="end" className="trend-chart-value-label">
            {last.value}
            {unit}
          </text>

          {points.map((p, i) => (
            <circle
              key={p.label}
              cx={p.x}
              cy={p.y}
              r={activeIndex === i ? 5 : 4}
              fill="var(--green-dark)"
              stroke="var(--surface, #fff)"
              strokeWidth={2}
            />
          ))}

          {active && (
            <line x1={active.x} x2={active.x} y1={PAD_TOP} y2={PAD_TOP + plotH} stroke="var(--green-dark)" strokeWidth={1} strokeDasharray="3 3" />
          )}

          <rect
            x={PAD_LEFT}
            y={PAD_TOP}
            width={plotW}
            height={plotH}
            fill="transparent"
            onPointerMove={handlePointerMove}
            onPointerLeave={() => setActiveIndex(null)}
            tabIndex={0}
            onFocus={() => setActiveIndex(0)}
            onBlur={() => setActiveIndex(null)}
            onKeyDown={(event) => {
              if (activeIndex === null) return;
              if (event.key === "ArrowRight") setActiveIndex(Math.min(activeIndex + 1, points.length - 1));
              if (event.key === "ArrowLeft") setActiveIndex(Math.max(activeIndex - 1, 0));
            }}
            aria-label={`${title}，使用左右鍵瀏覽數值`}
          />
        </svg>

        {active && activeIndex !== 0 && activeIndex !== points.length - 1 && (
          <div
            className="trend-chart-tooltip"
            style={{ left: `${(active.x / VIEW_W) * 100}%`, top: `${(active.y / VIEW_H) * 100}%` }}
          >
            <strong>
              {active.value}
              {unit}
            </strong>
            <span>{active.label}</span>
          </div>
        )}
      </div>

      {caption && <p className="trend-chart-caption">{caption}</p>}

      <ul className="sr-only">
        {data.map((point) => (
          <li key={point.label}>
            {point.label}：{point.value}
            {unit}
          </li>
        ))}
      </ul>
    </figure>
  );
}
