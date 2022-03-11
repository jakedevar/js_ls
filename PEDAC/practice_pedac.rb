=begin
========================
imagine there is a sequence of consecutive even integers beggening with 2.
these integers are grouped in rows, and the first row containing one integer the second two integers and so on.

given an integer representing the number of a particular row, return an integer representing the sum of all the integers in that row
------------------------
**Explicit Requirements**
------------------------
-   Rules:
    - sequence of even integers
    - sequence begins with two
    - integers are consecutive
    - sequence is grouped into rows
    - each row is incrementaly larger than the last: 1int, 2int, 3int
    - Row 'number' equals the number of elements in the row
-  Inputs: a single integer represeting row number
    - identifies a 'row', which is a subset of a sequence of integers
-  Output: a single integer
    - an integer represting the sum of row
-  Visual Reference: 2, 4, 6, 8, 10, 12
2
4, 6
8, 10, 12
14, 16, 18, 20
------------------------
**Clarifying Questions:**
------------------------
1. if thw second row is row 4 would that make the third row start at 8?
2. so there is no odd numbers in the test cases at ?? does it just start at 2 or do you mean it will got to three on row three
3.
------------------------
**Implicit Requirements:**
------------------------
**Mental Model:**
------------------------
Examples / Test Cases / Edge Cases
----------------------------------
**Examples:**
copy pasta
[2] => 2
[4, 6] => 10
[8, 10, 12] => 30
[14, 16, 18, 20] => 68
--------------
Data Structure
--------------
- Overall structure representing a sequence as a whole
- Individual rows within overall structure
- Individual rows in a set order in context of sequence
- Individual rows contain integers
- Can assume that integers are in a set order in the context of the sequence

[
    [2],
    [4, 6],
    [8, 10, 12],
    [14, 16, 18, 20]
]
--------------
Algorithm
--------------
- A logical sequence of steps for acomplishing a task or an objective
    - closly linked to data structers
    - The steps required to structure the data to produce the desired output
- Stay abstract / high-level
    - avoid implementation detail
    - don't worry about efficiency for now

1. create an empty 'rows; array to contain all of the rows
2. create a 'row' array and add it to the overall 'rows' array
    a. do this...
    b. do that...
3. repeat step 2 until all the necessary rows have been created
    - All rows have been created whne the length of the 'rows' array is equal to the input
4. sum the final row
5. return the sum

*problem: Create a Row*

Rules:
- Row is an array
- Arrays contain integers
- Integers are consecutive even numbers
- Integers in each row are apart of an overall larger sequence
- Rows are of different lengths
-  Input: the information needed to create the output
    -  The starting integer
    - Length of the row
- Output: the row itself: '[8, 10, 12]'

Examples:
start: 2, length: 1 --> [2]
start: 4, length: 2 --> [4, 6]
start: 8, length: 3 --> [8, 10, 12]

Data structures:
- An array of integers

Algorithm:
1. create an empty row to contain the integers
2. Add the starting integer
3. increment the starting integer by 2
4. repeat steps 2 & 3 until the array has reached the correct length
5. return the 'row' array

**Helper Methods??**

Code
- Translating solution algorithm to code
- Think about algorithm in context of programming language
    - Language features and constraints
    - Characteristics of data structures
    - Built in funcitons / mehtods
    - Syntax and coding patterns
- Create test cases
- Code with intent
----
=end

def sum_even_number_row(row_number)
  row = []
  start_integer = 2
  (1..row_number).each do |current_row_number|
    row << create_row(start_integer, current_row_number)
    start_integer = row.last.last + 2
  end
  row[-1].sum
end

# 1. create an empty 'rows; array to contain all of the rows
# 2. create a 'row' array and add it to the overall 'rows' array
#     a. do this...
#     b. do that...
# 3. repeat step 2 until all the necessary rows have been created
#     - All rows have been created whne the length of the 'rows' array is equal to the input
# 4. sum the final row
# 5. return the sum

# Calculating the start integer:
# Rule: First integer of row == last integer of preceding row + 2
# Algorithm:
#  - get the last row of the rows array row
#  - Get last integer of that row
#  - add 2 to the integer

def create_row(start_integer, row_length)
  row = []
  current_integer = start_integer
  loop do
    row << current_integer
    current_integer += 2
    break if row.length == row_length
  end
  row
end

# 1. create an empty row to contain the integers
# 2. Add the starting integer
# 3. increment the starting integer by 2
# 4. repeat steps 2 & 3 until the array has reached the correct length
# 5. return the 'row' array

# Start the loop
#   - Add the start integer to the row
#   - Increment the start integer by 2
#   - Break out of the loop if length of row equals row length
#

p sum_even_number_row(1) == 2
p sum_even_number_row(2) == 10
p sum_even_number_row(4) == 68

# start: 2, length: 1 --> [2]
# start: 4, length: 2 --> [4, 6]
# start: 8, length: 3 --> [8, 10, 12]

# p create_row(2, 1) == [2]
# p create_row(4, 2) == [4, 6]
# p create_row(8, 3) == [8, 10, 12]

# final thoughts
# don't think of pedac as a linear process. see it more as something that you come back to at multiples times throughut the expereince
# switch from implementation mode to abstract problem solving mode when necessary
# don't try to problem solve at the code level!!!!!! talking to you jake tee hee love ya bud
