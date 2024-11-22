import { Separator } from "@radix-ui/react-separator";
import Header from "../ui/header";
import Image from "next/image";
import RegisterForm from "../ui/register/register-form";

export default async function Page() {
	return (
		<div className="bg-gray-900 w-[100vw] h-[100vh] relative">
			<Header />
			<div className="flex items-center h-[90%]">
				<RegisterForm />
				<Separator className="hidden md:block w-[1px] h-[90%] bg-gray-700" />
				<div className="hidden md:flex justify-center w-[55%]">
					<Image
						src="/illustrations/signUpIllustartion.png"
						alt={""}
						width={500}
						height={500}
						className="self-center"
					/>
				</div>
			</div>
		</div>
	);
}
