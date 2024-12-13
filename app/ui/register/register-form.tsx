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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	email: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	password: z.string().min(8, {
		message: "Password should be 8 character or more",
	}),
    name: z.string().min(5, {
        message: "Name should be 5 character or more",
    }),
    confirmPassword: z.string().min(8, {
        message: "Confirm Password should be 8 character or more",
    })
}).superRefine(( {confirmPassword, password}, ctx) => {
    if (confirmPassword !== password) {
        return ctx.addIssue({
            code: 'custom',
            message: 'Passwords do not match',
            path: ['confirmPassword']
        })
    }
});

export default function RegisterForm() {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
            confirmPassword: "",
            name: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async(values: z.infer<typeof formSchema>) => {
		const r = await register({
			email: values?.["email"],
			password: values?.["password"],
			name: values?.["name"],
			image: "NA",
			phone: "",
			createdAt: new Date(),
			updatedAt: new Date(), 
		  });
		  form.reset();
		  if(!r?.error){
			return router.push("/login");
		  }
	}

	return (
		<div className="rounded-lg shadow-lg p-5 m-5 bg-slate-600 w-[100%] md:w-[40%] mt-[12%] md:mt-0 space-y-2">
			<h1 className="text-cyan-100 text-3xl font-thin pb-8">Register</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white">Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter Name" {...field} autoComplete="off"/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white">Email</FormLabel>
								<FormControl>
									<Input placeholder="Enter Email" {...field} autoComplete="off" />
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
									<Input type="Password" placeholder="Enter Password" {...field} autoComplete="off"/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

                    <FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-white">Confirm Password</FormLabel>
								<FormControl>
									<Input type="Password" placeholder="Re Enter Password" {...field} autoComplete="off"/>
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
				<p className="text-white pr-5">Already have an account ?</p>
				<Link
					href="/login"
					className="items-center gap-5 self-start rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
				>
					<span>Login</span>
				</Link>
			</div>
		</div>
	);
}
