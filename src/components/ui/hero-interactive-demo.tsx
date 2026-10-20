"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Code2, Sparkles, Box, Check, Copy } from "lucide-react";
import { site } from "@/data/site";

export function HeroInteractiveDemo() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [wireframe, setWireframe] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const codeSnippet = `// Quicy.tsx — Frontend & 3D Engineer
const Portfolio = () => {
  const { viewport } = useThree();
  const [shaderMode, setShaderMode] = useState(true);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} />
      <InteractiveMesh wireframe={${wireframe}} />
    </Canvas>
  );
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-88 lg:max-w-none transition-transform duration-300 ease-out"
    >
      {/* Ambient glow behind widget */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-accent/20 blur-3xl opacity-60 transition-opacity duration-500"
      />

      {/* Main Container - Linear clean single-border glass style */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d0e]/90 shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        {/* Window Bar */}
        <div className="flex h-10 items-center justify-between border-b border-white/6 bg-white/2 px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-2 font-mono text-[10px] text-text-faint tracking-wider">
              {activeTab === "preview" ? "quicy.canvas" : "quicy.tsx"}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-white/4 p-0.5 rounded-lg border border-white/6">
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-medium transition-all ${
                activeTab === "preview"
                  ? "bg-accent text-white shadow-sm"
                  : "text-text-muted hover:text-white"
              }`}
            >
              <Box size={11} />
              <span>Preview</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-medium transition-all ${
                activeTab === "code"
                  ? "bg-accent text-white shadow-sm"
                  : "text-text-muted hover:text-white"
              }`}
            >
              <Code2 size={11} />
              <span>Code</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Preview Canvas */}
        {activeTab === "preview" ? (
          <div className="relative p-5">
            {/* 3D Isometric Viewport Container */}
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-linear-to-b from-white/2 to-transparent perspective-midrange">
              {/* Background Ray Grid */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(94,106,210,0.12)_0%,transparent_70%)]"
              />

              {/* Interactive 3D Cube Card */}
              <div
                style={{
                  transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
                  transformStyle: "preserve-3d",
                }}
                className="relative h-44 w-44 transition-transform duration-100 ease-out flex items-center justify-center"
              >
                {/* 3D Wireframe Rings */}
                <div
                  className={`absolute inset-0 rounded-full border transition-all duration-300 ${
                    wireframe
                      ? "border-accent/80 scale-105 shadow-[0_0_20px_var(--color-accent)] animate-spin"
                      : "border-white/10"
                  }`}
                  style={{ animationDuration: "12s" }}
                />
                <div
                  className="absolute inset-4 rounded-full border border-dashed border-accent/40 animate-spin"
                  style={{
                    animationDuration: "20s",
                    animationDirection: "reverse",
                  }}
                />

                {/* Center Core: Portrait & Glow */}
                <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(94,106,210,0.3)]">
                  <Image
                    src="/images/avatar_portfolio.jpg"
                    alt={`${site.name} avatar`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#08090a]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-white/90 uppercase tracking-widest">
                    {site.initials} | Dev
                  </span>
                </div>
              </div>

              {/* Live Overlay Metrics */}
              <div className="absolute top-3 left-3 flex flex-col gap-1 font-mono text-[10px] text-text-faint">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  60.0 FPS
                </span>
                <span>LATENCY: 4ms</span>
              </div>

              <div className="absolute top-3 right-3 font-mono text-[9px] text-text-faint bg-white/4 border border-white/6 px-2 py-0.5 rounded">
                Three.js + R3F
              </div>
            </div>

            {/* Interactive Control Toggles */}
            <div className="mt-4 flex items-center justify-between border-t border-white/6 pt-3 text-xs">
              <span className="text-text-muted text-[11px]">
                Hover or tilt to rotate in 3D
              </span>
              <button
                type="button"
                onClick={() => setWireframe(!wireframe)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-mono transition-all ${
                  wireframe
                    ? "border-accent bg-accent/15 text-accent-text"
                    : "border-white/10 bg-white/3 text-text-muted hover:text-white"
                }`}
              >
                <Sparkles size={11} />
                <span>Wireframe: {wireframe ? "ON" : "OFF"}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Tab 2: Syntax Highlighted Code */
          <div className="relative p-5">
            <pre className="overflow-x-auto rounded-xl bg-black/40 p-4 font-mono text-xs leading-relaxed text-text-muted">
              <code>
                <span className="text-accent-text">
                  | Quicy.tsx — Creative Frontend
                </span>
                {"\n"}
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">Portfolio</span> = () =&gt;{" "}
                {"{"}
                {"\n  "}
                <span className="text-purple-400">const</span> {"{"} viewport{" "}
                {"}"} = <span className="text-yellow-300">useThree</span>();
                {"\n  "}
                <span className="text-purple-400">const</span> [shader] ={" "}
                <span className="text-yellow-300">useState</span>(
                <span className="text-emerald-400">true</span>);
                {"\n\n  "}
                <span className="text-purple-400">return</span> ({"\n    "}
                <span className="text-blue-400">&lt;Canvas</span> fov=
                <span className="text-orange-300">&#123;60&#125;</span>
                <span className="text-blue-400">&gt;</span>
                {"\n      "}
                <span className="text-blue-400">&lt;ambientLight</span>{" "}
                intensity=
                <span className="text-orange-300">&#123;0.4&#125;</span>{" "}
                <span className="text-blue-400">/&gt;</span>
                {"\n      "}
                <span className="text-blue-400">&lt;InteractiveMesh</span>{" "}
                wireframe=
                <span className="text-orange-300">
                  &#123;{wireframe ? "true" : "false"}&#125;
                </span>{" "}
                <span className="text-blue-400">/&gt;</span>
                {"\n    "}
                <span className="text-blue-400">&lt;/Canvas&gt;</span>
                {"\n  "});
                {"\n"}
                {"}"};
              </code>
            </pre>

            <div className="mt-4 flex items-center justify-between border-t border-white/6 pt-3">
              <span className="font-mono text-[10px] text-text-faint">
                TypeScript + React 19
              </span>
              <button
                type="button"
                onClick={copyCode}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/3 px-2.5 py-1 font-mono text-[11px] text-text-muted hover:text-white transition-colors"
              >
                {copied ? (
                  <Check size={11} className="text-emerald-400" />
                ) : (
                  <Copy size={11} />
                )}
                <span>{copied ? "Copied" : "Copy Snippet"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
