#filtering
'''
filtering = refers to the process of selecting elements 
from an array that match a given condition
'''

import numpy as np

ages = np.array([[23, 55, 12, 78, 25],
                 [66, 34, 21, 16, 12]])

# thi smethod gives  1d output with filtering
print(ages[ages>18])

# we can also use logical expressions
print(ages[(ages >= 18)&(ages > 65)])
print(ages[(ages >= 18)|(ages > 65)])

#this method gives you original matrix structure
print(np.where(ages>18, ages, -1))