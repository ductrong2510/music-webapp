'use client'

import FormButton from "@/app/components/form/FormButton"
import FormInput from "@/app/components/form/FormInput"
import Title from "@/app/components/title/Title"
import { authFirebase } from "@/app/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const handleLogin = (event: any) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    const auth = authFirebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        if(user){
          router.push("/")
        }
      })
      .catch((error) => {
        alert("Email hoặc mật khẩu không đúng!")
      })
  }

  return (
    <>
      <div className="w-[500px] mx-auto">
        <div className="text-center">
          <Title text="Đăng Nhập Tài Khoản" />
        </div>
        <form action="" onSubmit={handleLogin}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Ví dụ: levana@gmail.com"
            required={true}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder=""
            required={true}
          />
          <FormButton title="Đăng Nhập" />
        </form>
      </div>
    </>
  )
}
