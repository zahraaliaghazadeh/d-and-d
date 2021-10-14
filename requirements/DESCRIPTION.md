### Description

I love playing D&D with my friends, and my favorite part is creating character sheets (my DM is notorious for killing us all off by level 3 or so). One major part of making character sheets is rolling the character's stats. Sadly, I have lost all my dice, so I'm asking for your help to make a dice roller for me to use!
Formal Inputs & Outputs
Input description

Your input will contain one string, where each input will be in the form of "NdM"; for example:

>3d6
>
>4d12
>
>1d10
>
>5d4

> e.g. rollDice('3d6');

If you've ever played D&D you probably recognize those, but for the rest of you, this is what those mean:

The first number is the number of dice to roll, the d just means "dice", it's just used to split up the two numbers, and the second number is how many sides the dice have. So the above example of "3d6" means "roll 3 6-sided dice". Also, just in case you didn't know, in D&D, not all the dice we roll are the normal cubes. A d6 is a cube, because it's a 6-sided die, but a d20 has twenty sides, so it looks a lot closer to a ball than a cube.

The first number, the number of dice to roll, can be any integer between 1 and 100, inclusive.

The second number, the number of sides of the dice, can be any integer between 2 and 100, inclusive.

### Output description

You should output the sum of all the rolls of that specified die, each on their own line. so if your input is "3d6", the output should look something like

>14

Just a single number, you rolled 3 6-sided dice, and they added up to 14.
