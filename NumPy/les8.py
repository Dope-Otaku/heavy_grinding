#random numbers

import numpy as np

# rng = np.random.default_rng()
rng = np.random.default_rng(seed=1) #if you want the first and last value to be same

val = rng.integers(low=0, high=100, size=(3,2))

print(val)