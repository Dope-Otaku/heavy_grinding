#broadcasting
'''
broadcasting allows numpy to perform operations on arrays with different shapes by virtually expanding dimensions so they 
match the larger array's shape

two criteria to check 

the dimensions have the same size
or
one of the dimensions has a size of 1

'''

import numpy as np

b1 = np.array([1, 2, 3, 4])
b2 = np.array([[1],[2],[3],[4]])

print(b1.shape, b2.shape)

print(b1 * b2)