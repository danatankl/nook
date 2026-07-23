import type { Nook } from "@/data/nooks";

export function NookIllustration({ palette }: Pick<Nook, "palette">) {
  return (
    <div className={`nook-art nook-art-${palette}`} aria-hidden="true">
      <div className="sun-shape" />
      <div className="window-shape"><span /></div>
      <div className="shelf-shape"><i /><i /><i /></div>
      <div className="furniture-shape"><span /></div>
      <div className="lamp-shape"><i /></div>
      <div className="plant-shape"><i /><i /><i /></div>
    </div>
  );
}

