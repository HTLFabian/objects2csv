# objects2csv

A simple, small library to convert JavaScript objects into a csv string.

[![npm version](https://badge.fury.io/js/objects2csv.svg)](https://badge.fury.io/js/objects2csv)

## Features
- Small (less than ~5kB unpacked)
- Uses modern JavaScript (ES7)
- Automatic field detection
- Default value for missing fields
- Custom & automatic quotation (can be disabled)
- Custom csv separator, line separator and escape sequence
- Excludable fields

## Installation

```sh
npm install objects2csv
```

## Usage

```js
const convert = require('objects2csv');

const data = [
    {type: "car", model: "BMW", year: 2019, maxPassengers: 5, doors: 5},
    {type: "car", model: "VW", year: 2003, doors: 3},
    {type: "bus", model: "Mercedes", year: 2019, maxPassengers: 50},
]

const csv = convert(data);

console.log(csv);
```

This will use the default values for all options. In order to customize the generated csv, the following options exist:

```js
// These options represent the default values
const options = {
    header: true, // If false, the header won't be included in the converted string
    unavailable: " ", // If the value does not exist, this is the string that will be used instead
    separator: ";", // This is the sequence that will be used as a separator (between each value)
    quote: "\"", // This is the sequence that will be used to quote the values, for example: "myValue"
    escape: "\\", // This is the sequence that will be used to escape a sequence in the value, if it is equal to the quote, for example: "And then he said \"Hello\""
    lineSeparator: "\n", // This is the sequence that will be used at the end of a line (after each object)
    excludeKeys: [] // If you don't want a field to be in the final csv string, exclude it here. For example the ccnumber and cvv field: ["ccnumber", "cvv"]
}
```

Usage of the custom options:

```js
const csv = convert(data, { excludeKeys: ["maxPassengers", "doors"], quote: "" });
```