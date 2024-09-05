group_main = {
    ('a', 'x1'): {'some_key': 'some_value'},
    ('a', 'x2'): {'some_key': 'some_value'},
    ('a', 'x3'): {'some_key': 'some_value'},
    ('b', 'y1'): {'some_key': 'some_value'},
    ('b', 'y2'): {'some_key': 'some_value'},
    ('c', 'z1'): {'some_key': 'some_value'}
}

from collections import defaultdict

# Initialize a defaultdict to store grouped data
grouped_data = defaultdict(lambda: {'mat': [], 'record_count': 0})

# Iterate through each key-value pair in group_main
for (fg, mat), details in group_main.items():
    grouped_data[fg]['mat'].append(mat)
    grouped_data[fg]['record_count'] += 1

# Convert defaultdict to the desired list of dictionaries format
result = [{'fg': fg, 'mat': data['mat'], 'record_count': data['record_count']} for fg, data in grouped_data.items()]

print(result)
