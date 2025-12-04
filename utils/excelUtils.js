import xlsx from "xlsx";


function readExcelData(filepath, sheetName)
{
    const workbook =xlsx.readFile(filepath);
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    return data;
}

module.exports = { readExcelData }