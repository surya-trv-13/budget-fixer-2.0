import BudgetFixerLogo from "./budget-fixer-logo";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Header (){
    const session = await getServerSession(authOptions);
    return (
        <div className="flex justify-between top-0 bg-transparent pl-4 max-w-100 max-h-24 min-h-12">
            <BudgetFixerLogo />
            <div className="max-w-auto px-5 bg-orange-400 rounded-b-lg top-0 leading-4 max-h-5 md:block lg:block hidden">
                <p className="text-cyan-50">TRV-13</p>
            </div>
            <div className="min-w-64 md:block lg:block hidden">{session?.user?.name}</div>
        </div>
    )
}