export function GradientMesh() {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-mesh-gradient" />
  
        <div className="animate-drift-a absolute -left-20 -top-20 h-[26rem] w-[26rem] rounded-full bg-signal/10 blur-[110px]" />
  
        <div className="animate-drift-b absolute -right-24 top-10 h-[24rem] w-[24rem] rounded-full bg-ice/10 blur-[110px]" />
  
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>
    )
  }