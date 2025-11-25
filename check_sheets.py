import pandas as pd

try:
    xl = pd.ExcelFile('d:/Project/convocation-status Dashboard/Convocation25.xlsx')
    print("Sheet names:", xl.sheet_names)
except Exception as e:
    print(f"Error reading excel: {e}")
