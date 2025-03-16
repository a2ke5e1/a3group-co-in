type FeaturedVideo = {
  videoId: string;
};

export default function FeaturedVideo({ videoId }: FeaturedVideo) {
  return (
    <iframe
      className="aspect-video rounded-2xl border-0 outline-0"
      src={`https://www.youtube.com/embed/${videoId}`}
      name="Yearly Progress - New Upcoming Widgets"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
