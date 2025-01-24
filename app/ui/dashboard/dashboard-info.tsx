"use client"

import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import MonthPickerComponent from "@/components/ui/monthPicker";
import SummaryCard from "./summary-card";

export default function DashboardInfo() {
    const [firstPurposeDate, setFirstPurposeDate] = useState<Date>(new Date());
    const handleFirstPurposeSelect = (date: Date) => {
        setFirstPurposeDate(date);
        // Additional logic for the first purpose
        console.log('First purpose selected month:', date);
      };

    return <div className="h-[10%] md:h-[8%] px-8">
        <MonthPickerComponent selectedDate={firstPurposeDate}
          onMonthSelect={handleFirstPurposeSelect} label="Month"/>
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