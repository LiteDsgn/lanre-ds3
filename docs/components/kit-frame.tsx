/* The playable kit in a phone frame. lib/generate.mjs copies ui_kits/lanre-game and the files it loads into
   public/kit, so it runs here exactly as it does from the repo root, with no build. */
const KIT = '/kit/ui_kits/lanre-game/index.html';

export function KitFrame() {
  return (
    <figure className="not-prose my-8 flex flex-col items-center gap-3">
      <iframe
        src={KIT}
        title="Lanre playable kit"
        loading="lazy"
        style={{
          width: 390, maxWidth: '100%', height: 844, border: 0, borderRadius: 40, background: '#000',
          boxShadow: '0 0 0 10px #1f1b17, 0 0 0 12px #3a332c, 0 28px 56px rgb(0 0 0 / 0.28)',
        }}
      />
      <figcaption className="text-sm text-fd-muted-foreground">
        390 × 844 design frame · <a href={KIT} target="_blank" rel="noreferrer" className="font-medium text-fd-primary underline">Open full screen</a>
      </figcaption>
    </figure>
  );
}
