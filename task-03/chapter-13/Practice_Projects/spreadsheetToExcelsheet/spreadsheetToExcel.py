import openpyxl

def toTextFiles(filename):

    wb = openpyxl.load_workbook(filename)
    sheet = wb.active
    count = 1 

    
    for col in sheet.iter_cols(values_only=True):  
        
        with open(f'text_{count}.txt', 'w') as file:
            for value in col:
                if value is not None:  
                    file.write(str(value) + '\n')  
        count += 1  # Increment file counter

if __name__ == "__main__":
    toTextFiles('workbook.xlsx')
