import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";

export default function SearchPage() {
  const data: any = [
    {
        image: "/image-1.png",
        title: "Cô Phòng",
        singer: "Hồ Quang Hiếu, Huỳnh Văn",
        time: "4:32",
    },
    {
        image: "/image-1.png",
        title: "Cô Phòng",
        singer: "Hồ Quang Hiếu, Huỳnh Văn",
        time: "4:32",
    },
    {
        image: "/image-1.png",
        title: "Cô Phòng",
        singer: "Hồ Quang Hiếu, Huỳnh Văn",
        time: "4:32",
    },
    {
        image: "/image-1.png",
        title: "Cô Phòng",
        singer: "Hồ Quang Hiếu, Huỳnh Văn",
        time: "4:32",
    },
    {
        image: "/image-1.png",
        title: "Cô Phòng",
        singer: "Hồ Quang Hiếu, Huỳnh Văn",
        time: "4:32",
    },
    {
        image: "/image-1.png",
        title: "Cô Phòng",
        singer: "Hồ Quang Hiếu, Huỳnh Văn",
        time: "4:32",
    }
];

  return (
    <>
      <Title text="Bài Hát Yêu Thích"/>

      <SongList2 data={data}/>
    </>
  );
}