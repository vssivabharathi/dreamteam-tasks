### Practice Questions and Answers: Chapter 15

1. **What do you pass to the PyPDF2.PdfFileReader() function instead of a string value of the PDF filename?**  
   **Answer:** A **File object** returned from `open()`.

2. **What modes do the File objects for PdfFileReader() and PdfFileWriter() need to be opened in?**  
   **Answer:** **Read-binary (`'rb'`)** for PdfFileReader() and **write-binary (`'wb'`)** for PdfFileWriter().

3. **How do you acquire a Page object for page 5 from a PdfFileReader object?**  
   **Answer:** Call `getPage(4)` on the PdfFileReader object, as pages are zero-indexed.

4. **What PdfFileReader variable stores the number of pages in the PDF document?**  
   **Answer:** The **`numPages`** variable.

5. **If a PdfFileReader object’s PDF is encrypted with the password `swordfish`, what must you do before you can obtain Page objects from it?**  
   **Answer:** Call the **`decrypt('swordfish')`** method on the PdfFileReader object.

6. **What methods do you use to rotate a page?**  
   **Answer:** The **`rotateClockwise()`** and **`rotateCounterClockwise()`** methods. Pass the degrees to rotate as an integer argument.

7. **What method returns a Document object for a file named `demo.docx`?**  
   **Answer:** `docx.Document('demo.docx')`

8. **What is the difference between a Paragraph object and a Run object?**  
   **Answer:**  
   - A **Paragraph object** represents a paragraph in the document, which starts on a new line and can contain multiple runs.  
   - A **Run object** represents a contiguous sequence of characters within a paragraph.

9. **How do you obtain a list of Paragraph objects for a Document object that’s stored in a variable named `doc`?**  
   **Answer:** Use the **`doc.paragraphs`** attribute.

10. **What type of object has `bold`, `underline`, `italic`, `strike`, and `outline` variables?**  
   **Answer:** A **Run object**.

11. **What is the difference between setting the `bold` variable to `True`, `False`, or `None`?**  
   **Answer:**  
   - **`True`**: Forces the text to be bolded, ignoring the style settings.  
   - **`False`**: Forces the text to not be bolded, ignoring the style settings.  
   - **`None`**: Text follows the bold setting of the applied style.

12. **How do you create a Document object for a new Word document?**  
   **Answer:** Call the `docx.Document()` function.

13. **How do you add a paragraph with the text `'Hello, there!'` to a Document object stored in a variable named `doc`?**  
   **Answer:** Call `doc.add_paragraph('Hello, there!')`.

14. **What integers represent the levels of headings available in Word documents?**  
   **Answer:** The integers **0, 1, 2, 3, and 4**.