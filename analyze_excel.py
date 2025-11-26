import pandas as pd

try:
    pd.set_option('display.max_columns', None)
    pd.set_option('display.width', 1000)
    df = pd.read_excel('d:/Project/convocation-status Dashboard/Convocation25.xlsx')
    print("Columns:")
    for col in df.columns:
        print(f"'{col}'")
    print("\nFirst 3 rows:")
    print(df.head(3).to_string())
except Exception as e:
    print(f"Error reading excel: {e}")
