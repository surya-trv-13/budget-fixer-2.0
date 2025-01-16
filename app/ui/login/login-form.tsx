"use client";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	password: z.string().min(8, {
		message: "Password should be 8 character or more",
	}),
});

export default function LoginForm() {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		const res = await signIn("credentials", {
			email: values?.username,
			password: values?.password,
			redirect: false,
		});
		if (res?.error) {
			console.log("Error Occurred", res?.error)
		}
		if (res?.ok) {
			console.log("Login Successfully", JSON.stringify(res))
			return router.push("/");
		}
	}

	return (
		<div className="rounded-lg shadow-lg p-5 m-5 bg-slate-600 w-[100%] md:w-[40%] mt-[12%] md:mt-0 space-y-2">
			<h1 className="text-cyan-100 text-3xl font-thin pb-8">Login</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white">Username</FormLabel>
								<FormControl>
									<Input placeholder="Enter Username" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white">Password</FormLabel>
								<FormControl>
									<Input type="Password" placeholder="Enter Password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="hover:bg-slate-400 hover:text-black transition-colors">
						Submit
					</Button>
				</form>
			</Form>
			<Separator className="w-[95%] h-[1px] bg-gray-500 self-center justify-self-center" />
			<div className="flex items-center mx-auto justify-center">
				<p className="text-white pr-5">Don&#39;t have an account ?</p>
				<Link
					href="/register"
					className="items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
				>
					<span>Register</span>
				</Link>
			</div>
		</div>
	);
}
