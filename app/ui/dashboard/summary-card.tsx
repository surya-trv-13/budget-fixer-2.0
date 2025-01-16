import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function SummaryCard() {
	
	return (
		<Card className="rounded-none h-full bg-transparent border-none md:px-6 pb-4 shadow-none">
			<CardHeader className="p-1 md:px-2 text-gray-400">
				<CardTitle>Salary</CardTitle>
			</CardHeader>
			<CardContent className="text-cyan-50 p-2 pt-0">
				<p className="md:text-3xl">Rs. 8000</p>
			</CardContent>
		</Card>
	);
}
