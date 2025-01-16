"use client";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
	const { status, data } = useSession();
	// const session = await getServerSession(authOptions);
	// const router = useRouter();

	const showAction = () => {
		console.log("status:" + status);
		if (status === "unauthenticated") {
			redirect("/login");
		} else if (status === "authenticated") {
			// if (session) {
			// 	console.log("session:", session);
			// }
			console.log(JSON.stringify(data));
			redirect("/dashboard");
		}
	};

	return showAction();
}
