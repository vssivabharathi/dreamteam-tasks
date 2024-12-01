# Practice Questions:

---

1. **What does the openpyxl.load_workbook() function return?**  
   **Answer**: It returns a **Workbook** object that represents the Excel file you are working with.

---

2. **What does the wb.sheetnames workbook attribute contain?**  
   **Answer**: It contains a list of all the sheet names in the workbook as strings.

---

3. **How would you retrieve the Worksheet object for a sheet named 'Sheet1'?**  
   **Answer**:  `wb['Sheet1']` this is used for retrive the Worksheet object for a sheet named 'Sheet1'.         

---

4. **How would you retrieve the Worksheet object for the workbook’s active sheet?**  
   **Answer**: we can get using this `wb.active`.

---

5. **How would you retrieve the value in the cell C5?**  
   **Answer**: Can use `sheet['C5'].value` to access the value in that cell.

---

6. **How would you set the value in the cell C5 to "Hello"?**  
   **Answer**: Simply use `sheet['C5'] = 'Hello'` to assign the value.

---

7. **How would you retrieve the cell’s row and column as integers?**  
   **Answer**: Can use `cell.row` and `cell.column` to get the row and column numbers.

---

8. **What do the sheet.max_column and sheet.max_row sheet attributes hold, and what is the data type of these attributes?**  
   **Answer**:  
   - `sheet.max_column` -> the highest column with data.  
   - `sheet.max_row` -> the highest row with data.  
   

---

9. **If you needed to get the integer index for column 'M', what function would you need to call?**  
   **Answer**: Can use `openpyxl.utils.column_index_from_string('M')` to get the integer integer for column 'M'.

---

10. **If you needed to get the string name for column 14, what function would you need to call?**  
    **Answer**: Can you `openpyxl.utils.get_column_letter(14)`.

---

11. **How can you retrieve a tuple of all the Cell objects from A1 to F1?**  
    **Answer**: Can use `sheet['A1':'F1']` to get a tuple of all those cells.

---

12. **How would you save the workbook to the filename example.xlsx?**  
    **Answer**: Can save it by calling `wb.save('example.xlsx')`.

---

13. **How do you set a formula in a cell?**  
    **Answer**: Assign the formula as a string to the cell, starting with an equals sign. For example, `sheet['B2'] = '=SUM(A1:A10)'`.

---

14. **If you want to retrieve the result of a cell’s formula instead of the cell’s formula itself, what must you do first?**  
    **Answer**: Load the workbook with `data_only=True`, like this:  
    `wb = openpyxl.load_workbook('example.xlsx', data_only=True)`.

---

15. **How would you set the height of row 5 to 100?**  
    **Answer**: Can use `sheet.row_dimensions[5].height = 100`.

---

16. **How would you hide column C?**  
    **Answer**: Can use `sheet.column_dimensions['C'].hidden = True`.

---

17. **What is a freeze pane?**  
    **Answer**: A freeze pane is a feature that keeps specific rows or columns visible while you scroll through the rest of the sheet.

---

18. **What five functions and methods do you have to call to create a bar chart?**  
    **Answer**:
    1. openpyxl.chart.Reference(),
    2. openpyxl.chart.Series(), 
    3. openpyxl.chart.BarChart(),
    4. chartObj.append(seriesObj),
    5. add_chart()

--- 

@sivabharathi