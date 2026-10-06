import numpy as np
import time as ts
import os

height, width = 20, 40

grid2d = np.random.randint(0, 2,size=(height,width))

while True:
    positions = [
    np.roll(grid2d, 1, axis=0), #up
    np.roll(grid2d, -1, axis=0), #down
    np.roll(grid2d, 1, axis=1), #left
    np.roll(grid2d, -1, axis=1), #right
    np.roll(np.roll(grid2d, 1, axis=0) ,1, axis=1), #tl_Diag
    np.roll(np.roll(grid2d, 1, axis=0) ,-1, axis=1), #tr_Diag
    np.roll(np.roll(grid2d, -1, axis=0) ,1, axis=1), #bl_Diag
    np.roll(np.roll(grid2d, -1, axis=0) ,-1, axis=1)   #br_Diag
    ]

    stacked_neighbors = np.array(positions)
    neighbors = np.sum(stacked_neighbors, axis=0)

    survivors = (grid2d==1) &((neighbors==2) | (neighbors==3))
    births = (grid2d==0) & (neighbors==3)
    next_generation = (survivors | births).astype(int) #changed to 0s and 1s otherwise it would should true and false for alive and dead

    grid2d = next_generation

    os.system('cls' if os.name == 'nt' else 'clear') # Clears the console
        
    for row in grid2d:
        print("".join("█" if cell == 1 else " " for cell in row))

    ts.sleep(0.1)
