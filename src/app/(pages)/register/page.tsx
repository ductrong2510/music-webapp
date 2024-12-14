import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/title/Title";

export default function LoginPage() {
  return (
    <>
      <div className="w-[500px] mx-auto">
        <div className="text-center">
          <Title text="Đăng Ký Tài Khoản" />
        </div>
        <form action="">
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
          <FormButton title="Đăng Nhập" />
        </form>
      </div>
    </>
  );
}
