import pandas as pd


data = {
    "name": ["Souvik", "Punet", "Piks", "Rids", "eshs", "shritss", "taniyaa"],
    "age": [1,2,3,4,5,6,7],
    "job": [None, None, None, None, None, None, None]
}

df = pd.DataFrame(data, index=["p1","p2","p3","p4","p5","p6","p7"])
# print(df.loc[df["name"]=="taniyaa"])
# print(df.iloc[0:3,0])
# print(df)

#adding a row in data frame
new_row = pd.DataFrame([{"name":"shubh","age":8,"job":None}], index=["p8"])

new_df = pd.concat([df, new_row])
print(new_df)