### **PyPI Search Automation Script**
This python program used PyPI based quary which is passed via command-line arguments and opens the top result in your default web browser.

---

#### **Libraries Used**
- **`requests`**: To fetch the webpage content.
- **`sys`**: To handle command-line arguments.
- **`webbrowser`**: To open URLs in the default browser.
- **`bs4` (BeautifulSoup)**: To parse and extract HTML content.

---

#### **How It Works**
1. **Takes User Input**: 
   - Takes the input from the user in commmand line arguments
   - Those inputer are combained to form the PyPI search URL

2. **Fetches the Search Results**:
   - Sends a GET request to PyPI's search page.

3. **Parses the Webpage**:
   - Extracts package links using BeautifulSoup and the `package-snippet` CSS class.

4. **Opens Top Results**:
   - Opens the first 5 package pages in the default web browser.

---

#### **Usage**
1. Run the script from the terminal:
   ```bash~ubuntu_24.04(noble)
   python3 script_name.py search_term
   ```
   Replace `script_name.py` with your script's filename and `search_term` with the package you're searching for.

2. Example:
   ```bash~ubuntu_24.04(noble)
   python pypi_search.py requests
   ```
   This will search for "requests" on PyPI and open the top 5 results in the browser.

---

#### **Definition**
- **Parser**: A parser is a software program that breaks down input data into smaller parts so that other software can understand it
---



