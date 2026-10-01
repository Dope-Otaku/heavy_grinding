import numpy as np

#scalar artihmetic


numArray = np.array([1.3434,2.2323,3.222,4.34])

print(numArray + 1)
print(numArray - 1)
print(numArray * 2)
print(numArray ** 2)
print(numArray / 2)
print(numArray // 2)


# vector mathe-matrics functions


print(np.sqrt(numArray))
print(np.round(numArray))
print(np.floor(numArray))
print(np.ceil(numArray))


# element wise arithmetic

a1 = np.array([1,2,3])
a2 = np.array([4,5,6])

print(a1 + a2)
print(a1 - a2)
print(a1 * a2)
print(a1 / a2)
print(a1 // a2)
print(a1 ** a2)