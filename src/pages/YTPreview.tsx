import { useSearchParams } from "react-router-dom";
import { yt_html } from "../assets/assets";

export default function YTPreview() {
  const [searchParams] = useSearchParams();
  const thumbnail_url = searchParams.get("thumbnail_url");
  const title = searchParams.get("title");

  const new_html = yt_html
    .replace("%%THUMBNAIL_URL%%", thumbnail_url || "")
    .replace("%%TITLE%%", title || "");
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center p-4">
      <iframe
        width="100%"
        height="100%"
        srcDoc={new_html}
        allowFullScreen
      ></iframe>

      {/*  */}
    </div>
  );
}
