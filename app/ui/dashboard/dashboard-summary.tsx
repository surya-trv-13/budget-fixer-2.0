
export default function DashboardSummary() {
	return (
		<div className="h-[80%]">
			<div className="mx-auto px-6 lg:max-w-8xl lg:px-8 h-full">
				<div className="mt-5 grid gap-4 sm:mt-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 h-full">
					<div className="relative md:col-span-2 lg:col-span-3 row-span-2">
						<div className="relative flex h-full flex-col overflow-hidden bg-gray-800 rounded-[calc(theme(borderRadius.lg)+1px)]">
							
						</div>
					</div>
					<div className="relative">
						<div className="relative flex h-full flex-col overflow-hidden bg-gray-800 rounded-[calc(theme(borderRadius.lg)+1px)]">
							Spent
						</div>
					</div>
					<div className="relative">
						<div className="relative flex h-full flex-col overflow-hidden bg-gray-800 rounded-[calc(theme(borderRadius.lg)+1px)]">
							Remaining Balance
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
