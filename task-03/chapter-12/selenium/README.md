### **Selenium Web Scraping Script**

Here this python script automates the browser actions using the Selenium Library. It navigates to a website and searches for a specific HTML element by its class name.

---

#### **Libraries Used**
- **`selenium`**: To control the web browser programmatically.
- **`selenium.webdriver.common.by`**: To locate elements on a webpage by different properties.

---

#### **How It Works**
1. **Initialize the WebDriver**:  
   - The script initializes a Chrome WebDriver instance to interact with the Chrome browser.

2. **Navigate to the URL**:  
   - The browser is directed to the URL `https://inventwithpython.com`.

3. **Search for an Element**:  
   - Searches for an HTML element with the class name `cover-thumb` using the `find_element` method and the `By.CLASS_NAME` selector.

4. **Error Handling**:  
   - If the element is found, the script prints its tag name.  
   - If the element is not found, it prints an error message.

---

#### **Usage**
1. Install Selenium:  
   ```bash~ubuntu24.04
   pip install selenium
   ```

2. Download the Chrome WebDriver:  
   - Ensure compatibility with your Chrome browser version.  
   - Add the WebDriver to your system's PATH.

3. Save the script in a `.py` file and run it:  
   ```bash~ubuntu24.04
   python selenium_script.py
   ```
---


#### **Definition**
- **WebDriver**: A tool provided by Selenium to automate browser actions.  
- **`By.CLASS_NAME`**: A method to locate elements using their `class` attribute in the HTML.  

---
