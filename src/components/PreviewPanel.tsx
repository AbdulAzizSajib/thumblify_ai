import { DownloadIcon, ImageIcon } from "lucide-react";
import type { AspectRatio, IThumbnail } from "../assets/assets";

function PreviewPanel({
  thumbnail,
  isLoading,
  aspectRatio,
}: {
  thumbnail: IThumbnail | null;
  isLoading: boolean;
  aspectRatio: AspectRatio;
}) {
  const aspectClasses = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  } as Record<AspectRatio, string>;

  const onDownload = () => {
    if (!thumbnail?.image_url) return;
    window.open(thumbnail.image_url, "_blank");
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]}`}>
        {/* LOADING state */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50">
            <div className="animate-spin rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            <div className="text-center">
              <p className="mt-4 text-white text-lg">Generating Thumbnail...</p>
              <p className="mt-1 text-xs text-zinc-400">
                This may take 10-20 seconds.
              </p>
            </div>
          </div>
        )}
        {/* THUMBNAIL preview    */}

        {thumbnail?.image_url && !isLoading && (
          <div className="group relative h-full w-full">
            <img
              className="h-full w-full object-cover"
              src={thumbnail?.image_url}
              alt="Thumbnail preview"
            />
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                onClick={onDownload}
                className="mb-6 flew items-center gap-2 rounded-md px-5 py-2.5 text-xs font-medium transition bg-white/30 ring-2 ring-white/40 backdrop-blur hover:scale-105 active:scale-95"
                type="button"
              >
                <DownloadIcon className="h-6 w-6 text-white" />
                Dowload Thumbnail
              </button>
            </div>
          </div>
        )}
        {/* empty state */}
        {!thumbnail?.image_url && !isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
            <div className="max-sm:hidden flex size-20 items-center justify-center rounded-full bg-white/10">
              <ImageIcon className="h-12 w-12 text-white" />
            </div>
            <div className="px-4 text-center">
              <p className="text-zinc-400">
                Generate your thumbnail to see a preview here.
              </p>
              <p className="text-zinc-400 mt-1">
                Fill in the form to get started.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreviewPanel;
