from decimal import Decimal


data = {'T_AUART': [], 'T_AUFNR': [{'SIGN': 'I', 'OPTION': 'EQ', 'LOW': '211100406213', 'HIGH': ''}], 'T_GSTRP': [], 'T_MATNR': [], 'T_OUTPUT': [{'KNO': '000001', 'WERKS': 'SVI2', 'AUFNR': '211100406213', 'MATNR': 'AAE908-207010ALF', 'GAMNG': Decimal('420.000'), 'GMEIN': 'EA', 'GLTRP': '20241019', 'GLUZP': '000000', 'GSTRP': '20241011', 'GSUZP': '000000', 'TERKZ': '3', 'FHORI': '302', 'SICHZ': '003', 'FREIZ': '002', 'OBJNR': 'OR211100406213', 'ORD_STATUS': 'Created', 'STATUS': 'Order number 211100406213 saved'}], 'T_WERKS': []}     


print(data['T_OUTPUT'])

# Ensure 'T_OUTPUT' is a list and has at least one item
if data['T_OUTPUT'] and 'saved' in data['T_OUTPUT'][0]['STATUS']:
    print(data['T_OUTPUT'][0]['GSTRP'])
