import DashboardSummary from "../ui/dashboard/dashboard-summary";
import Header from "../ui/header";

export default async function Page() {
	return (
		<div className="bg-gray-600 w-[100vw] h-[100vh] relative">
			<Header />
			<DashboardSummary />
		</div>
	);
}
