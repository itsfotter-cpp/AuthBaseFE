import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'daysBetweenDates'
})
export class DaysBetweenDatesPipe implements PipeTransform {

  transform(dataInit: Date, dataEnd: Date): number {
    return this.daysBetweenDates(dataInit, dataEnd);
  }

  daysBetweenDates(startDate: Date, endDate: Date): number {
    // Make sure the start date is before the end date
    if (startDate > endDate) {
      const tempDate = startDate;
      startDate = endDate;
      endDate = tempDate;
    }

    // Clone the start date to avoid modifying the original date
    const currentDate = new Date(startDate);
    endDate = new Date(endDate);
  

    // Initialize a counter for weekdays
    let weekdayCount = 0;

    // Loop through each day between the start and end dates
    while (currentDate <= endDate) {
      // Check if the current day is a weekday (Monday to Friday)
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        weekdayCount++;
      }

      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return weekdayCount;
  }

  private calculateWeekends(startDate: Date, days: number): number {
    let weekends = 0;

    for (let i = 0; i < days; i++) {
      const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      const dayOfWeek = currentDate.getDay();

      // Check if the current day is a Saturday (6) or Sunday (0)
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekends++;
      }
    }

    return weekends;
  }

}
