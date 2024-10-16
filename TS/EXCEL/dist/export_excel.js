"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyComponent = void 0;
var XLSX = require("xlsx");
var MyComponent = /** @class */ (function () {
    function MyComponent() {
    }
    MyComponent.prototype.export_process_tb = function () {
        // Simulated data
        var data = [
            { 'a': 'head1', 'b': 'head1', 'c': 'head3', 'd': 10, 'e': 20 },
            { 'a': 'row1-col1', 'b': 'row1-col2', 'c': 'row1-col3', 'd': 30, 'e': 40 },
            { 'a': 'row2-col1', 'b': 'row2-col2', 'c': 'row2-col3', 'd': 50, 'e': 60 },
            { 'a': 'row3-col1', 'b': 'row3-col2', 'c': 'row3-col3', 'd': 70, 'e': 80 },
            { 'a': 'row4-col1', 'b': 'row4-col2', 'c': 'row4-col3', 'd': 90, 'e': 100 }
        ];
        var customHeaders = ['Column 1', 'Column 2', 'Column 3', 'Value D', 'Value E']; // Define your headers
        // Map the data to the appropriate structure for headers
        var jsonData = data.map(function (x) {
            return {
                column1: x.a, // Map field 'a' to column1
                column2: x.b, // Map field 'b' to column2
                column3: x.c, // Map field 'c' to column3
                valueD: x.d, // Map field 'd' to valueD
                valueE: x.e // Map field 'e' to valueE
            };
        });
        var f_name = 'example.xlsx'; // Define file name
        this.export_excel(jsonData, customHeaders, f_name); // Call export function
    };
    MyComponent.prototype.export_excel = function (jsonData, customHeaders, f_name) {
        // Convert JSON data to worksheet
        var ws = XLSX.utils.json_to_sheet(jsonData);
        // Modify headers if necessary
        customHeaders.forEach(function (header, i) {
            ws[XLSX.utils.encode_cell({ r: 0, c: i })] = { v: header, t: 's' };
        });
        // Calculate maximum width for each column
        var colWidths = jsonData.reduce(function (widths, row) {
            Object.keys(row).forEach(function (key, i) {
                var value = row[key] ? row[key].toString() : '';
                widths[i] = Math.max(widths[i] || key.length, value.length);
            });
            return widths;
        }, []);
        // Set worksheet column widths
        ws['!cols'] = colWidths.map(function (w) { return ({ wch: w }); });
        // Create a new workbook
        var wb = XLSX.utils.book_new();
        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        // Write the workbook to a file
        XLSX.writeFile(wb, f_name);
    };
    return MyComponent;
}());
exports.MyComponent = MyComponent;
