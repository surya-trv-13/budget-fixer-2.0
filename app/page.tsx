"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
	const { status, data } = useSession();

	const showAction = () => {
		console.log("status:" + status);
		if (status === "unauthenticated") {
			redirect("/login");
		} else if (status === "authenticated") {
			console.log(JSON.stringify(data));
			redirect("/dashboard");
		}
	};

	return showAction();
}
