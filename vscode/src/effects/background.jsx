function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712]">

      {/* Purple Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Blue Glow */}
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Pink Glow */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* Grid */}
      <div
         className="absolute inset-0"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
  }}
      ></div>

    </div>
  );
}

export default Background;