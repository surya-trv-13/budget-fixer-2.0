import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function SummaryCard() {
	const session = await getServerSession(authOptions);
	return (
		<Card className="rounded-none h-full bg-transparent border-none">
			<CardHeader>
				<CardTitle>{session?.user?.email}</CardTitle>
				<CardDescription>{session?.user?.name}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
		</Card>
	);
}
