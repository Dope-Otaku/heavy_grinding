import pandas as pd


data = {
    "name": ["Souvik", "Punet", "Piks", "Rids", "eshs", "shritss", "taniyaa"],
    "age": [1,2,3,4,5,6,7],
    "job": [None, None, None, None, None, None, None]
}

df = pd.DataFrame(data)
print(df.loc[df["name"]=="taniyaa"])
print(df.iloc[3,1])
# print(df)