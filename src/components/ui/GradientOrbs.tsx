"use client";

export default function GradientOrbs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Top-left orb */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #6378ff 0%, transparent 70%)",
          animation: "orbFloat1 12s ease-in-out infinite",
        }}
      />
      {/* Top-right orb */}
      <div
        className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)",
          animation: "orbFloat2 15s ease-in-out infinite",
        }}
      />
      {/* Bottom-center orb */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
          animation: "orbFloat3 18s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, 30px) scale(1.05); }
          66% { transform: translate(-20px, 50px) scale(0.95); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 40px) scale(1.08); }
          66% { transform: translate(30px, -20px) scale(0.97); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
