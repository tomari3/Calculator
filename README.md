# Calculator project.

    This project takes me to the end of The Odin Project's 'Foundations' series.
    It will show my ability to code computational functions, handle events,
    show thought process, document my code and style the project.

    # Problem
    Make computational functions to interact with user inputs as operands.
    Visualize the process to the user. Keep record of past calculation and
    the ability to delete them. Track Error and display them accordantly,
    do not break on error.

    # Obstacle possibilities
    1. Parentheses function of inclosing two operand
    separate from the others.
    ?. Before researching I assume this can be solved if the input
    will be saved as variable and sent to execution as is by the JS, letting the compiler
    do the hard work.



    # Plan
    1. Set and check all compute functions
        -- functions --
        Add
        Subtract
        Multiply
        Divide
        Percentage
        Parenthesis
        Factorial
        Power*2
        Power*3
        Power*num
        power of power
        Root
        Pie
        Dot (float)
        Equal
        Backspace
        AC
        etc.

    2. Set numbers
    3. Set input/output area
    4. mouse & keyboard functionality
    5. take input and make calculation
    6. return output as main and input as secondary
    7. TEST!

    # Pseudo

take number [0]
log on display
show on display
log on beforeOperand

- log on upperDisplay

take char[1]
if another number
add to display as string
add to beforeOperand as string (1 + 1 = 11)
repeat

take operand
if any operand == onDisplay[-1] - return

- else -
  set last operator used.
  log to display
  show on display
  set afterOperand to zero
  if includes other operand
  log to display
  show on display
  set before operand to sum
  set after operand to 0
  set last operator used
  return

take number when last is operation
log on display
show on display
log on afterOperand
log currentSum of before and after
log currentSum to upperDisplay
show on upperDisplay

get equal
get sum
set sum to onDisplay
set onDisplay to upper display
show onDisplay show upper display
set before to sum
set after to 0;

(mainOpsDoc[i].textContent != "/" || mainOpsDoc[i].textContent != "\*")
