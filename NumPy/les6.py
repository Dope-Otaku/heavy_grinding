# aggregate functions: summarize data and typically return a single value

import numpy as np



sc = np.array([[1, 2, 3, 4, 5],
               [6, 7, 11, 9, 10]])

print(np.sum(sc))
print(np.min(sc))
print(np.argmin(sc))
print(np.max(sc))
print(np.argmax(sc, axis=1))
print(np.std(sc))
print(np.mean(sc))
print(np.var(sc))