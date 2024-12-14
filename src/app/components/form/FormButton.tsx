export default function FormButton(props: any) {
  const { title = "" } = props

  return (
    <>
      <button
        type="submit"
        className="block w-full mt-[15px] bg-primary rounded-[6px] py-[14px] text-center font-[700] text-[16px] capitalize"
      >
        {title}
      </button>
    </>
  )
}
