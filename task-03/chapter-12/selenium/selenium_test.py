from selenium import webdriver
from selenium.webdriver.common.by import By

# Initialize the Chrome WebDriver
browser = webdriver.Chrome()

# Navigate to the URL
browser.get('https://inventwithpython.com')

try:
    # Use find_element() with By.CLASS_NAME to find the element by its class name
    elem = browser.find_element(By.CLASS_NAME, 'cover-thumb')
    print('Found <%s> element with that class name!' % (elem.tag_name))
except:
    print("Was not able to find an element with that class name.")
