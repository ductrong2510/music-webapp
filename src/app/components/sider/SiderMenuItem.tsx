import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SiderMenuItem(props: any) {
  const pathname = usePathname()
  return (
    <>
      <Link
        href={props.link}
        className={
          "flex items-center mb-[30px] hover:text-primary " +
          (props.link === pathname ? "text-primary" : "text-white") +
          (props.login == undefined || props.login == true ? " " : " hidden")
        }
      >
        <span className={"text-[22px] mr-[20px]"}>{props.icon}</span>
        <span className={"text-[16px] font-[700]"}>{props.title}</span>
      </Link>
    </>
  )
}
