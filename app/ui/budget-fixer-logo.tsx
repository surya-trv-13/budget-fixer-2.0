import Image from "next/image";

export default function BudgetFixerLogo() {
	return (
		<div className="flex flex-row leading-none items-center text-gray-200">
            <h1 className="uppercase text-slate-200 font-semibold text-2xl xs:text-sm mr-2 self-end">Budget </h1>
			<Image
				src="/profit.png"
				width={30}
				height={30}
				alt="Budget Fixed Logo"
			/>
			<h1 className="uppercase text-slate-200 font-semibold text-2xl ml-2 self-end">Fixer 2.0</h1>
		</div>
	);
}
