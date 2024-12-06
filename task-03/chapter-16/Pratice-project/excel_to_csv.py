import os, openpyxl, csv

for file in os.listdir('.'):
    if file.endswith('.xlsx'):
        wb = openpyxl.load_workbook(file)

        for sheet_name in wb.sheetnames:
            sheet = wb[sheet_name]
            name_splice = file[:-5]  
            csv_filename = f"{name_splice}_{sheet_name}.csv"

            with open(csv_filename, 'w', newline='') as csv_file:
                csv_writer = csv.writer(csv_file)

                
                for row_num in range(1, sheet.max_row + 1): 
                    row_data = [
                        sheet.cell(row=row_num, column=col_num).value
                        for col_num in range(1, sheet.max_column + 1)
                    ]
                    csv_writer.writerow(row_data)
