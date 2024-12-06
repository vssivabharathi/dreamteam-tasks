# Questions and Answers

### 1. **What are some features Excel spreadsheets have that CSV spreadsheets don’t?**
- Excel files can contain multiple sheets, cell formatting (bold, colors, etc.), and macros.
- They support advanced features like formulas, pivot tables, and charts.
- Excel files can also include images, comments, and other objects, unlike CSV files, which are plain text.

---

### 2. **What do you pass to `csv.reader()` and `csv.writer()` to create reader and writer objects?**
- Pass a **file object** created using Python's `open()` function to both `csv.reader()` and `csv.writer()`.

---

### 3. **What modes do File objects for reader and writer objects need to be opened in?**
- **For `csv.reader()`:** Open the file in `'r'` mode (read).
- **For `csv.writer()`:** Open the file in `'w'` mode (write).

---

### 4. **What method takes a list argument and writes it to a CSV file?**
- The `writerow()` method of the `csv.writer` object.

---

### 5. **What do the `delimiter` and `lineterminator` keyword arguments do?**
- **`delimiter`:** Specifies the character used to separate fields in the CSV file (default is a comma `,`).
- **`lineterminator`:** Specifies the character(s) used to terminate lines in the CSV file (default is `\r\n`).

---

### 6. **What function takes a string of JSON data and returns a Python data structure?**
- The `json.loads()` function.

---

### 7. **What function takes a Python data structure and returns a string of JSON data?**
- The `json.dumps()` function.
