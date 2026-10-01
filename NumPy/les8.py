#random numbers

import numpy as np

rng = np.random.default_rng()
# rng = np.random.default_rng(seed=1) #if you want the first and last value to be same

val = rng.integers(low=0, high=100, size=(3,2))

print(val)


#float numbers

print(np.random.uniform(low=-1, high=1, size=(3, 2)))


#shuffling data in array

new = np.array([1, 2, 3, 4, 5])
# print(rng.shuffle(new))
print(rng.choice(new, size=(3,3)))
