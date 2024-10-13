import icon from "@/lib/icons";

export default function TrendingPosts() {
  const posts = [
    {
      title: "8 Upcoming Influencer Marketing Trends and Benefits",
      summary:
        "Marketing is evolving. It's changing from a one-way street to a two-way conversa…",
      likes: 250,
      comments: 234,
      shares: 123,
    },
    {
      title: "How Influencer Marketing Affects Consumer Buying Behavior",
      summary:
        "As influencer marketing continues to grow, consumers have been turning to their…",
      likes: 250,
      comments: 234,
      shares: 123,
    },
  ];
  return (
    <div>
      <h3>Trending Posts</h3>
      <div className="grid grid-cols-2 gap-4 mt-5">
        {posts.map((post, idx) => (
          <div
            className="w-full rounded-xl border-[1px] border-stroke-clr p-4"
            key={idx}
          >
            <h4>{post.title}</h4>
            <p className="mt-2">{post.summary}</p>
            <div className="flex items-center gap-3 mt-5">
              <div className="flex gap-1 items-center bg-accent-light-clr py-1 px-2.5 rounded-full">
                <span>❤️</span>
                <p className="font-[700]">{post.likes}</p>
              </div>
              <div className="flex gap-1 items-center bg-accent-light-clr py-1 px-2.5 rounded-full">
                <span>
                  <img src={icon.comment} alt="" />
                </span>
                <p className="font-[700]">{post.comments}</p>
              </div>
              <div className="flex gap-1 items-center bg-accent-light-clr py-1 px-2.5 rounded-full">
                <span>
                  <img src={icon.share} alt="" />
                </span>
                <p className="font-[700]">{post.shares}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
