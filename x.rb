# // Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

# /*
# --------------------- Problem ----------------------
# write a function that outputs a diamond when given an odd integer
# as the examples below show you will use spaces and * to create a diamond
# ------------ **Explicit Requirements** -------------
# - Inputs: an odd integer
# - Output: a diamond to the console

# -  Rules:
#   - the integer being passed in will always be odd
#   - no spaces are required after * row is output
#   - the number being passed in also refers to the amount of rows being output
# ------------ **Implicit Requirements** -------------
# - the spaces will be used as padding to the the * in the right position
# ------------- **Clarifying Questions** -------------
# -Bad Inputs:
# -Edge Cases: uniqueness of numbers, length of the array, possible NaN, Infinity
# - will i have to deal with bad inputs of any kind?
# ------------ Examples/Test Cases/Edge's ------------
# -  Visual Reference: given 
# ------------------ Data Structure ------------------
# going to be working with strings and sttring methods the entire time
# this is due to the repeat fucntino and the ability of strings to be
# easily concatenated
# -------------------- Algorithm ---------------------
# - create the spaces number by dividing n by 2 and getting the floor set to magic number
# - then set star subtracter to magic nubmer 2
# - then set n to amoutn of start to be subtracted
#   - this will show how many stars to create with the repeat function
#   - this will always subtract the n number
# - create a loop where it stops at >= 0 
#   - inside set a resulting string to an empty string
#   - use the repeat function to add spaces by the counter i to res string
#   - then use repeat to add stars with star create
#   - then log this string to the console where it repeats again
  
# - then do the process in reverse but i will come back to this in a minute for proof of concept first
#               **** helper functions ****
# **bottom half**
# - pass in starRow
# - pass in spaces
# - subtract starRow by 2
# - create for loop and set iterator to 1
# - do same thing as previous function 
# ---------------------- Notes -----------------------
# so i have an integer being passed in that represents the rows needing to be output
# also one i create the diamond going forward i need to do the same thing backwards excpet ommiting
# the largest row created
# there is also no space on the first row of the first example
# it almost seems like the spaces follow the number passed in divided by half and then sent to the floor
# in order to get the appropriate spaces
# also the stars seems to follow a pattern of every odd number from 1 to n

# now all i really need to do is reverse the logic, though i need to be carefull about
# what to do with the star row number which is now 9/3 maybe i should make a helper function and subtract 2 first
# also starting for loop at 1 for spaces. ok
# */

# function diamond(n) {
#   let spaces = Math.floor(n / 2);
#   const STAR_MATH = 2;
#   let starRow = 1;
#   for (let i = spaces; i >= 0; i--) {
#     let res = '';
#     res += "*".repeat(starRow).padStart(i, " ");
#     starRow += STAR_MATH;
#     console.log(res);
#   }
#   bottomHalf(spaces, starRow)
# }

# function bottomHalf(spaces, starRow) {
#   const STAR_MATH = 2;
#   starRow = starRow - 4
#   for (let i = 1; i <= spaces; i++) {
#     let res = '';
#     res += "*".repeat(starRow).padStart(spaces, ' ');
#     starRow -= STAR_MATH;
#     console.log(res);
#   }
# }

# The current solution builds a solid diamond—refactor it to build a hollow diamond.

# diamond(1);
# // logs
# // *
  
#   diamond(3);
# // logs
# //  *
# // ***
# //  *
   
#    diamond(9);
# // logs
#     // *
#    // ***
#   // *****
#  // *******
# // *********
# //  *******
# //   *****
# //    ***
# //     *

p " Algorithm/Testing ".center(52, '-')