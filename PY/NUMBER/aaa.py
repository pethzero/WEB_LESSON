# Define the sequence of values
seq_no_values = [0, 1.1, 1.2, 1.9, 2.6, 2.7, 3.2, 3.4]

# Define a threshold for grouping close values (e.g., 0.5)
threshold = 0.5

# Initialize variables
group = []
current_group = []

# Iterate over the sorted sequence of values
for value in sorted(seq_no_values):
    if not current_group:
        current_group.append(value)
    else:
        # Check if the value is within the threshold of the last value in the current group
        if value - current_group[-1] <= threshold:
            current_group.append(value)
        else:
            # Take the first value of the current group as representative and start a new group
            group.append(current_group[0])
            current_group = [value]

# Append the last group if any
if current_group:
    group.append(current_group[0])

print("Filtered group:", group)
