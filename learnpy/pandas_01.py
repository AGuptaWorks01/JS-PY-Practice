import pandas as pd

# mydataset = {
#     'Cars':["a","b"],
#     "Passing":[2,4]
# }
# myvar = pd.DataFrame(mydataset)
# print(myvar)


# a = [1,7,2]
# myvar = pd.Series(a, index = ["x","y","z"])
# print(myvar)
# print(myvar["y"])

# calories = {"day1": 420, "day2": 380, "day3": 390}
# myvar = pd.Series(calories, index=["day1", "day2"])
# print(myvar)

# df = pd.read_csv('D:\Anurag\JS\learnpy\data.csv')
# print(df.to_string())
# print(pd.options.display.max_rows)


# pd.options.display.max_rows = 9999
# df = pd.read_csv('D:\Anurag\JS\learnpy\data.csv')
# print(df)

# df = pd.read_json('learnpy\data1.json')
# print(df.to_string())


# data = {
#   "Duration":{
#     "0":60,
#     "1":60,
#     "2":60,
#     "3":45,
#     "4":45,
#     "5":60
#   },
#   "Pulse":{
#     "0":110,
#     "1":117,
#     "2":103,
#     "3":109,
#     "4":117,
#     "5":102
#   },
#   "Maxpulse":{
#     "0":130,
#     "1":145,
#     "2":135,
#     "3":175,
#     "4":148,
#     "5":127
#   },
#   "Calories":{
#     "0":409,
#     "1":479,
#     "2":340,
#     "3":282,
#     "4":406,
#     "5":300
#   }
# }

# df = pd.DataFrame(data)

# print(df) 



df = pd.read_csv('D:\Anurag\JS\learnpy\data.csv')
# print(df.head())
# print(df.info())
# print(df.describe())

# new_df = df.dropna()
# print(new_df.to_string())

# x= df['Calories'].median()
# df['Calories'].fillna(x, inplace=True)
# print(df.to_string())


x = df['Calories'].mode()[0]
df["Calories"].fillna(x, inplace=True)
print(df.to_string())