export default function FormInput(props: any) {
  const {
    label = "",
    type = "text",
    name = "",
    id = "",
    placeholder = "",
    required = false,
  } = props

  return (
    <>
      <div className="mb-[15px]">
        {label && (
          <label
            htmlFor={id}
            className="block mb-[5px] font-[600] text-[14px] w-full"
          >
            <span className="text-white">{label}</span>
            <span className="text-red-600 ml-[5px]">*</span>
          </label>
        )}
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="block w-full p-[16px] rounded-[6px] font-[600] text-[14px] bg-white border-0 outline-0"
        />
      </div>
    </>
  )
}
