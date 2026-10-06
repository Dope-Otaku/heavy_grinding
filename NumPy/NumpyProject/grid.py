import numpy as np
import time as ts

height, width = 20, 40

grid2d = np.random.randint(0, 10,size=(height,width))
new_aer = np.array(grid2d)
print(new_aer.shape)
print(new_aer)