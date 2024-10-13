import image from "@/lib/images";

export default function TrendingNews() {
  const news = [
    {
      title: "Russia & Ukraine War",
      summary: "Marketing is evolving. It's chang...",
      image: image.news_1,
    },
    {
      title: "Elon Musk bought Twitter",
      summary: "Twitter is the most useful social pl...",
      image: image.news_2,
    },
    {
      title: "Fuel Crisis Everywhere",
      summary: "Due to covid situation in 2020 the...",
      image: image.news_3,
    },
  ];

  return (
    <div>
      <h3 className="mb-4">Trending News</h3>
      {news.map((newsItem, idx) => (
        <div
          className="w-full p-3 rounded-xl border-[1px] border-stroke-clr mb-3 cursor-pointer transition-all hover:bg-grey-clr hover:shadow-xl hover:shadow-black/5"
          key={idx}
        >
          <div className="max-w-max flex items-center gap-2 overflow-hidden ">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="min-w-12 min-h-12 object-cover rounded-[8px] overflow-hidden"
            />
            <span>
              <p className="text-black-clr font-[800]">{newsItem.title}</p>
              <p className="text-[12px] text-light-clr">{newsItem.summary}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
