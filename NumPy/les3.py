import numpy as np

zone = np.array([
    [[1,2,3],[4,5,6]],
    [[7,8,9],[10,11,12]],
    [[13,14,15],[16,17,18]]
    ])
# slicing array[start:end:step]


print(zone[0][0:, 0:2]) #1, 2, 4, 5
print(zone[2][0:, 1:]) #14, 15, 17, 18
