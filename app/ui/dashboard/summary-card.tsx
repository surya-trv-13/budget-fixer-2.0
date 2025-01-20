import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function SummaryCard({
	title, 
	amount
} : {
	title: string;
	amount: number;
}) {
	
	return (
		<Card className="rounded-none h-full bg-transparent border-none md:px-6 pb-4 shadow-none">
			<CardHeader className="p-1 md:px-2 text-gray-400">
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className="text-cyan-50 p-2 pt-0">
				<p className={`md:text-3xl font-thin antialiased hover:subpixel-antialiased ${amount > 0 ? "text-green-400" : "text-red-500"}`}>&#8377; {amount}</p>
			</CardContent>
		</Card>
	);
}
