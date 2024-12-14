import FormButton from "@/app/components/form/FormButton";
import FormInput from "@/app/components/form/FormInput";
import Title from "@/app/components/title/Title";

export default function LoginPage() {
  return (
    <>
      <div className="w-[500px] mx-auto">
        <div className="text-center">
          <Title text="Đăng Nhập Tài Khoản" />
        </div>
        <form action="">
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
