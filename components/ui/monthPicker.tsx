"use client"

import * as React from "react"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { MonthPicker } from '@/components/shadcn-ui-monthpicker/src/components/ui/monthpicker';

interface MonthPickerComponentProps {
  selectedDate: Date;
  onMonthSelect: (date: Date) => void;
  label: string;
}

const MonthPickerComponent: React.FC<MonthPickerComponentProps> = ({ selectedDate, onMonthSelect, label }) => {
  const [calendarOpen, setCalendarOpen] = React.useState(false);
  return (
    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-[280px] justify-start text-left font-normal mb-2 bg-gray-800 text-white hover:bg-slate-600 hover:text-white',
            !selectedDate && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? format(selectedDate, 'MMMM, yyyy') : <span>{label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <MonthPicker onMonthSelect={(date) => {
          onMonthSelect(date);
          setCalendarOpen(false);
        }} selectedMonth={selectedDate} />
      </PopoverContent>
    </Popover>
  );
};

export default MonthPickerComponent;