from datetime import datetime
from dateutil.relativedelta import relativedelta
import calendar

# Get current date (now)
now = datetime.now()

# Function to find the last day of a given month and year
def get_last_day_of_month(year, month):
    last_day = calendar.monthrange(year, month)[1]
    return datetime(year, month, last_day)

# Generate the last days for the current and previous 2 months
last_days = [get_last_day_of_month((now - relativedelta(months=i)).year, (now - relativedelta(months=i)).month) for i in range(3)]

# Print the result
for date in last_days:
    print(date.strftime("%d/%m/%Y"))
    
    
list_date = []

for date in last_days:
    list_date.append(date.strftime("%Y-%m-%d"))

print(list_date)