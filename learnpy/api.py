# std ={
#     "a":{"name":"nahi pata"},
#     "b":{"name":"nahi batunga"},
# }
# print(len(std))

# student = dict(name="Anurag", age=21, city="mumbai")
# print(student)

# from collections import defaultdict
# student = defaultdict(int)
# student["marks"] = 10
# student["age"] = 1

# print(student["marks"])
# print(student["age"])

# student = {"name": "Amit", "age": 21, "city": "Mumbai"}
# print(student)

# print(student["name"])    # Amit
# print(student.get("age")) # 21

# print(student.get("gender"))

# student["age"] = 22
# student.update({"city":"pune"})
# print(student)

# student['gender']="Male"
# print(student)

# del student['city']
# print(student)

# age = student.pop('age')
# print(age)
# print(student)

# student.popitem()
# print(student)  # {'name': 'Amit'}


# print(student.keys())  # dict_keys(['name'])
# print(student.values())  # dict_values(['Amit'])
# print(student.items())  # dict_items([('name', 'Amit')])
# print("name" in student)  # True
# print("city" in student)  # False
# student.clear()
# print(student)  # {}


# student = {"name": "Amit", "age": 21}
# copy_student = student.copy()
# print(copy_student)  # {'name': 'Amit', 'age': 21}


# square = {x: x*x for x in range(1,6)}
# print(square)



# for x in "Anurag":
#  print(x)

# a="Anurag"
# print(len(a))

# txt = "The best things in life are free!"
# if "free" in txt:
#   print("Yes, 'free' is present.")


# txt = "the anurg is good boy"
# if "boys" not in txt:
#     print("yes, boy' in the text")


# def myFucntion():
#     return False
# if myFucntion():
#     print("Yes")
# else:
#     print("No")


# Integer
# x = 10
# # Float
# y = 3.14
# # String
# name = "Amit"
# # Boolean
# is_active = True
# # List (mutable)
# numbers = [1, 2, 3, 4]
# # Tuple (immutable)
# coordinates = (10, 20)
# # Dictionary  (mutable)
# student = {"name": "Amit", "age": 21}
# print(type(student))
# # Set (unique values)
# unique_numbers = {1, 2, 3, 4, 4}  
# print(type(unique_numbers))



# name = input("enter name")
# age = int(input("enter your age"))

# print("Hello", name , "your age is", age)

# a = 10
# b = 3
# print(a + b)  # Addition
# print(a - b)  # Subtraction
# print(a * b)  # Multiplication
# print(a / b)  # Division
# print(a % b)  # Modulus
# print(a ** b)  # Exponentiation
# print(a // b)  # Floor Division

# print(a == b)  # Equal
# print(a != b)  # Not equal
# print(a > b)   # Greater than
# print(a < b)   # Less than


# age = int(input("Enter your age: "))
# if age>= 18:
#     print("Youe are eligible")
# elif age == 17:
#     print("wait for one more year")
# else:
#     print("you are not eligible to vote")


# for i in range(1,6):
#     print("Number:", i)

# count = 1
# while count <= 5:
#     print('count', count)
#     count += 1

# for i in range(10):
#     if i == 5:
#         break
#     print(i)
    
# for i in range(10):
#     if  i == 5:
#         continue
#     print(i)

# sum = 0
# for i in range(1, 10):
#     sum += i
# print(f"sum of nnumbers: {sum}")


# even_num = []
# for num in range(1,21):
#     if num % 2 == 0:
#         even_num.append(num)
# print(f"even numbers from 1 to 20: {even_num}")


# sum_num = sum(range(1,10))
# print(f"sum of 10 number: {sum_num}")

# even_num = [num for num in range(1,11) 
#             if num % 2 == 0]
# print(f"even number is: {even_num}")


# def greet(name):
#     return f"hello, {name}"
# print(greet('Anurag'))



# sums = lambda a,b : a+b 
# result = sums(2,2)
# print(f"sums:{result}")

# def add_num(a,b):
#     add =lambda x,y: x+y
#     return add(a,b)
# result= add_num(2,3)
# print(f"sum: {result}")


# cube = lambda x:x**3
# result = cube(3)
# print(f"cube using lambda: {result}")

# def cube(x):
#     return x ** 3
# result = cube(3)
# print(f"cube using lambda: {result}")


# fruits = ['Apple',"banana", "mango"]
# fruits.append("orange")
# fruits.remove("banana")
# print(fruits)

# num = (1,2,3)
# print(num[0])

# student = {"name":"Anurag","age":21}
# print(student["name"])

# unique_numbers = {1,2,3,4,4}
# print(unique_numbers)

# a = ['a', 'b']
# a.append('c')
# a.remove('c')
# print(a)


# my_dict = {"name":"anurag"}
# my_dict.update({"age":30})
# print(my_dict)

# my_dict = {"name":"anurag"}
# my_dict.setdefault("age",30)
# print(my_dict)


# try:
#     x = int(input("Enter a number: "))
#     print(10/x)
# except ZeroDivisionError:
#     print('Can`t divide by zero')
# except ValueError:
#     print("Invalid input! please enter a number")


# def get_int():
#     try:
#         num = int(input("Enter an integer"))
#     except ValueError:
#         return "Error: Invalid input"
#     return num
# print(get_int())



# def safe_division():
#     try:
#         num1 = int(input("Enter the numerator: "))
#         num2 = int(input("Enter the denominator: "))
#         result = num1 / num2
#     except ValueError:
#         return "Error: Invalid input. Please enter valid integers."
#     except ZeroDivisionError:
#         return "Error: Cannot divide by zero."
#     return result

# # Example usage
# print(safe_division())

# try:
#     file = open("data.txt", "r")
#     content = file.read()
# except FileNotFoundError:
#     print("File nahi mili!")
# finally:
#     print("Yeh message hamesha print hoga.")



# def is_palindrome(s):
#     return s == s[::-1]
# word = "madam"
# if is_palindrome(word):
#     print(f'"{word}" ek palindrome hai.')
# else:
#     print(f'"{word}" ek palindrome nahi hai.')


# def factorial(n):
#     if n == 0 or n == 1:
#         return 1
#     return n * factorial(n-1)
# num = 5
# print(f"{num}! = {factorial(num)}")


# def reverse_str(s):
#     return s[::-1]
# str="Anurag"
# print(reverse_str(str))


# numbers = [10,30,20, 99,33]
# print('Max:', max(numbers))
# print('Min:', min(numbers))


# def find_max_min(lst):
#     if not lst:
#         return None, None
#     max_val = min_val = lst[0]
#     for num in lst:
#         if num > max_val:
#             max_val = num
#         if num < min_val:
#             min_val = num
#     return max_val, min_val
# numbers = [10,30,20, 99,33]
# max_num, min_num =find_max_min(numbers)

# if max_num is None and min_num is None:
#    print("List is empty, no max or min value.")
# else:
#     print("Max:", max_num, "Min:", min_num)

# number = [1,2,3,4,5]
# print(number[::-1])

# number = [10,20,30,40]
# number.append(50)
# number.remove(20)
# print(number[2])
# print(number)


# t = (10,10,20,30)
# print(t)

# s = {1,2,3,4,5,5}
# s.add(7)
# print(s)


# s= "Anurag"
# print(s.upper())
# print(s[::-1])
# print(s.replace("Anurag","Gupta"))


# square =[x**2 for x in range(1,6)]
# print(square)

# square_dict = {x**2 for x in range(1,6)}
# print(square_dict)

# numbers = [5, 3, 8, 1, 2]
# print(sorted(numbers))  # Output: [1, 2, 3, 5, 8]


# def bubble_sort(arr):
#     n = len(arr)
#     for i in range(n):
#         for j in range(0,n-i-1):
#             if arr[j] > arr[j+1]:
#                 arr[j], arr[j+1] = arr[j+1], arr[j]
# numbers = [64, 34, 25, 12, 22, 11, 90]
# bubble_sort(numbers)
# print(numbers)


# def linear_search(arr, target):
#     for i in range(len(arr)):
#         if arr[i] ==  target:
#             return i
#     return -1
# numbers = [10,20,30,40,50]
# print(linear_search(numbers, 30))



# def binary_search(arr, target):
#     low, high = 0, len(arr) - 1
#     while low <= high:
#         mid = (low+high) // 2
#         if arr[mid] == target:
#             return mid
#         elif arr[mid] < target:
#             low = mid + 1
#         else:
#             high = mid - 1
#     return -1
# numbers = [10,20,30,40,50]
# print(binary_search(numbers, 40))



# class stack:
#     def __init__(self):
#         self.stack = []
#     def push(self, item):
#         self.stack.append(item)
#     def pop(self):
#         return self.stack.pop() if self.stack else "stack is empty"  
#     def peek(self):
#         return self.stack[-1] if self.stack else "stack is empty!"
# s = stack()
# s.push(10)
# s.push(20)
# print(s.pop())
# print(s.peek())


# from collections import deque
# q = deque()
# q.append(10)
# q.append(20)
# print(q.popleft())  # Output: 10


# def reverse_string(s):
#     return s[::-1]
# string="anurag"
# print(reverse_string(string))


# def find_min_min(lst):
#     max_val = min_val = lst[0]
#     for num in lst:
#         if num > max_val:
#             max_val = num
#         if num < min_val:
#             min_val = num
#     return max_val, min_val
# numbers = [10,203,30,40,1]
# max_val, min_val = find_min_min(numbers)
# print("Max:", max_val, "Min:",min_val)



# class Car:
#     wheels = 4
#     def __init__(self, brand, model):
#         self.brand = brand
#         self.model = model
#     def display_info(self):
#         print(f"car brand: {self.brand}, model:{self.model}, wheels: {self.wheels}")
# car1 = Car("Toyota", "Corolla")
# car2 = Car("Honda", "Civic")
# car1.display_info()
# car2.display_info()  




# class Animal:
#     def speak(self):
#         print("Animal speaks..")
# class Dog(Animal):
#     def bark(self):
#         print("Dog barks")
# dog = Dog()
# dog.speak()
# dog.bark()



# class Animal:
#     def speak(self):
#         print("Animal speak")
# class Mammal:
#     def have_hair(self):
#         print("Mammals have hair")
# class Dog(Animal, Mammal):
#     def brak(self):
#         print("Dog barks")
# dog = Dog()
# dog.speak()
# dog.have_hair()
# dog.brak()



class Animal:
    def speak(self):
        print("Animal speaks")
class Dog(Animal):
    def bark(self):
        print("Dog barks")
class Puppy(Dog):
    def play(self):
        print("Puppy Plays")
puppy = Puppy()
puppy.speak()
puppy.bark()
puppy.play()