import { Separator } from "@/components/ui/separator";
import SummaryCard from "./summary-card";

export default function DashboardInfo() {
    return <div className="h-[10%] md:h-[8%] px-8">
        <div className="justify-center md:float-right flex h-[90%]">
            <SummaryCard title="Salary" amount={128000}/>
            <Separator className="w-[1px] h-[90%] bg-gray-400" />
            <SummaryCard title="Spent" amount={50000}/>
            <Separator className="w-[1px] h-[90%] bg-gray-400" />
            <SummaryCard title="Remaining" amount={78000} />
            
        </div>
        <Separator className="float-right bg-slate-400"/>
        
    </div>
}