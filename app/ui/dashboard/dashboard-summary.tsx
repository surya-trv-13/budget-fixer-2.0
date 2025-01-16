import SummaryCard from "./summary-card";

export default function DashboardSummary() {
	return (
		<div>
			<div className="mx-auto px-6 lg:max-w-8xl lg:px-8">
				<div className="mt-5 grid gap-4 sm:mt-6 md:grid-cols-2 lg:grid-cols-4">
					<div className="relative">
						<div className="relative flex h-[150px] flex-col overflow-hidden bg-gray-800 rounded-[calc(theme(borderRadius.lg)+1px)]">
							<SummaryCard />
						</div>
					</div>
					<div className="relative">
						<div className="relative flex h-[150px] flex-col overflow-hidden bg-gray-800 rounded-[calc(theme(borderRadius.lg)+1px)]">
							Spent
						</div>
					</div>
					<div className="relative">
						<div className="relative flex h-[150px] flex-col overflow-hidden bg-gray-800 rounded-[calc(theme(borderRadius.lg)+1px)]">
							Remaining Balance
						</div>
					</div>
					<div className="relative">
						<div className="relative flex h-[150px] flex-col overflow-hidden bg-gray-800 rounded-[calc(theme(borderRadius.lg)+1px)]">
							Invested Amount
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
