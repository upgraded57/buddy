import icon from "@/lib/icons";
import image from "@/lib/images";

export default function PotentialMembers() {
  const members = [
    {
      image: image.member_1,
      name: "Wanda Parker",
      hashtag: "@ashking1234",
      rating: "10.3%",
    },
    {
      image: image.member_2,
      name: "Terry Brown",
      hashtag: "@ashking1234",
      rating: "9.8%",
    },
    {
      image: image.member_3,
      name: "Lucas Holmes",
      hashtag: "@ashking1234",
      rating: "6.5%",
    },
    {
      image: image.member_4,
      name: "Janice Miller",
      hashtag: "@ashking1234",
      rating: "8.6%",
    },
    {
      image: image.member_5,
      name: "Terry Brown",
      hashtag: "@ashking1234",
      rating: "9.8%",
    },
  ];
  return (
    <div>
      <h3>Potential Members</h3>
      <div className="grid grid-cols-5 gap-2 mt-5">
        {members.map((member, idx) => (
          <div
            className="w-full rounded-xl border-[1px] border-stroke-clr py-3 px-[18px] text-center"
            key={idx}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-10 mx-auto"
            />
            <p className="font-[700] text-black-clr mt-2">{member.name}</p>
            <p className="text-xs text-light-clr">{member.hashtag}</p>
            <span className="flex gap-2 items-end justify-center">
              <span className="flex">
                <img src={icon.analytics_member} alt="" className="flex" />
              </span>
              <p className="font-[700] mt-2 leading-none">{member.rating}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
