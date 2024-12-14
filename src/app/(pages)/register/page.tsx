"use client"

import FormButton from "@/app/components/form/FormButton"
import FormInput from "@/app/components/form/FormInput"
import Title from "@/app/components/title/Title"
import { authFirebase, dbFirebase } from "@/app/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {  ref, set } from "firebase/database"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const handleRegister = (event: any) => {
    event.preventDefault()
    const fullName = event.target.fullName.value
    const email = event.target.email.value
    const password = event.target.password.value
    const auth = authFirebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Đăng ký thành công")
        const user = userCredential.user
        const userId = user.uid
        set(ref(dbFirebase, "users/" + userId), {
          fullName: fullName,
          email: email,
        })
        .then(()=>{
          router.push("/")
        })
      })
      .catch((error) => {
        console.error("Error adding user data to database:", error);
      })
  }
  return (
    <>
      <div className="w-[500px] mx-auto">
        <div className="text-center">
          <Title text="Đăng Ký Tài Khoản" />
        </div>
        <form action="" onSubmit={handleRegister}>
          <FormInput
            label="Họ Tên"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Ví dụ: Le Van A"
            required={true}
          />
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
          <FormButton title="Đăng Ký" />
        </form>
      </div>
    </>
  )
}
