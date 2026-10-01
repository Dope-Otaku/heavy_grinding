import numpy as np

zone = np.array([
    [[1,2,3],[4,5,6]],
    [[7,8,9],[10,11,12]],
    [[13,14,15],[16,17,18]]
    ])
word = zone[1,1,0]

print(zone.ndim)
print(zone.shape)
print(type(word))
print(word)
