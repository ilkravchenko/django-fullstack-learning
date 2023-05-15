###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################

# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
#
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!

# There are a few things you will have to discover for yourself for this game!
# Here are some useful hints:

# Try to figure out what this code is doing and how it might be useful to you
import random
digits = list(range(10))
random.shuffle(digits)
correct_answer = digits[:3]
print(correct_answer)

# Another hint:
print("Welcome to guessing numbers Game!")
print("Computer generated 3 different numbers, try ro guess them.")

play = True

while play:
    guess = input("What is your guess? ")
    user_answer = [int(num) for num in guess]
    print(user_answer)
    print(correct_answer)
    
    if user_answer == correct_answer:
        print("Bingo!!!")
        play = False
    elif user_answer[0] == correct_answer[0] or user_answer[1] == correct_answer[1] or user_answer[2] == correct_answer[2]:
        print("Match: You've guessed a correct number in the correct position")
    elif user_answer[0] in correct_answer[1:] or user_answer[1] in correct_answer[0::2] or user_answer[2] in correct_answer[:2]:
        print("Close: You've guessed a correct number but in the wrong position")
    else:
        print("Nope: You haven't guess any of the numbers correctly")
    

# Think about how you will compare the input to the random number, what format
# should they be in? Maybe some sort of sequence? Watch the Lecture video for more hints!
