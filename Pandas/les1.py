import pandas as pd

data = [1,2,["w"]]

series = pd.Series(data, index=["a", "b", "c"])

print(series.loc["c"])
print(series.iloc[0])