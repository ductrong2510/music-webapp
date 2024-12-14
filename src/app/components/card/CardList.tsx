import CardItem from "./CardItem"

export default function CardList(props: any) {
  const { cardList = [] } = props

  return (
    <>
      <div className="grid grid-cols-5 gap-[20px]">
        {cardList.map((item: any, index: number) => (
          <CardItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </>
  )
}
