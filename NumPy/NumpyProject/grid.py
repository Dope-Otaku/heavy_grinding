import numpy as np
import time as ts

height, width = 20, 40

grid2d = np.random.randint(0, 2,size=(height,width))

positions = [
    [np.roll(grid2d, 1, axis=0)], #up
    [np.roll(grid2d, -1, axis=0)], #down
    [np.roll(grid2d, 1, axis=1)], #left
    [np.roll(grid2d, -1, axis=1)], #right
    [np.roll(np.roll(grid2d, 1, axis=0) ,1, axis=1)], #tl_Diag
    [np.roll(np.roll(grid2d, 1, axis=0) ,-1, axis=1)], #tr_Diag
    [np.roll(np.roll(grid2d, -1, axis=0) ,1, axis=1)], #bl_Diag
    [np.roll(np.roll(grid2d, -1, axis=0) ,-1, axis=1)] #br_Diag
]

stacked_neighbors = np.array(positions)
neighbors = np.sum(stacked_neighbors, axis=0)


print(neighbors.shape)
print(neighbors)