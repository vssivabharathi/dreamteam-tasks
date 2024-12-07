# Questions and Answers

### 1. **What is the Unix epoch?**
The Unix epoch is the point where time starts for Unix systems: **January 1, 1970, 00:00:00 UTC**. It is used as a reference point for time calculations.

---

### 2. **What function returns the number of seconds since the Unix epoch?**
The `time.time()` function returns the number of seconds since the Unix epoch as a float.

---

### 3. **How can you pause your program for exactly 5 seconds?**
Use the `time.sleep()` function, passing `5` as an argument:
```python
time.sleep(5)

---

### 4. **What does the round() function return?**
The Round function rounds a float poin number to the nearest integer or to a specific number of decimal place.
For eg:
``` python

round(3.14159,2)# 3.14 
round (3.6) # 4
```
for this output will be 3.14

### 5. **What is the dioffernece between a datatime object and a timedelta object?**
- `datatime` object represents a specific point in time (gg: time and date)
- `timedelta` object represent a during ot difference between two dates or times.

### 6. **Using the datetime module, what day of the week was January 7,2019?**
We need to use the `datetime.date()` method and he `weekday()` fucntion.

``` python
import datatime
date = datetime.date(2019,1,7)
day_of_week =date.weekday()
```
output: January 7, 2019, Monday

---

### 7.**Say you have a function named spam(). How can you call this function and run the code inside it in a separate thread?**
`threading` modules to run the `spam()` fucntion in a seperate thread:

``` python
import threading
thread = threading.Thread(target=spam)
thread.start()
```
### 8. **What should you do to avoid concurrency issues with multiple threads?**
thread lock to prvent threads form interfering with each other when accessing shared resource.
`threading.Lock()` object:

``` python
lock = threading.Lock()
lock.acquire()
try:

finally:
    lock.release()
```