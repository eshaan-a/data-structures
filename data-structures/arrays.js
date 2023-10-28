/* Regular Arrays */

// Array creation
// Create an empty array with the []
const arr1 = [];

// Create an empty array with the new keyword
const arr2 = new Array(); // []

// Create an array with values using []
const arr3 = [1, 2, 'string', { color: 'red' }];

// Create an array with empty values using the new keyword
const arr4 = new Array(5); // [empty, empty, empty, empty, empty]

// Insert a value at index 2
arr4[2] = 'string'; // [empty, empty, 'string', empty, empty]

// Passing a string instead of a number will put that value in the array
const arr5 = new Array('5'); // ['5']

// Passing multiple values will be put in the array
const arr6 = new Array(5, 'cat'); // [5, 'cat']

// Array insertion
// Add a value at the front of the array with the unshift method
arr6.unshift('dog'); // ['dog', 5, 'cat']

// Add a value to the end of the array
arr6.push(4); // ['dog', 5, 'cat', 4]

// Add a value at a given index
arr6.splice(1, 0, 'red'); // ['dog', 'red', 5, 'cat', 4]

// Delete values
// Delete the first value of the array
arr6.shift(); // [ 'red', 5, 'cat', 4]

// Delete the last value of the array
arr6.pop(); // ['red', 5, 'cat']

// Delete a value at a given index
arr6.splice(1, 2); // ['red']

/* Typed Arrays */
// Int8Array => each item is an 8 bit (1 byte) signed integer. These arrays can represent both negative and positive numbers (-128 to 127).
const int8Array1 = new Int8Array(); // []
const int8Array2 = new Int8Array(5); // [0, 0, 0, 0, 0]
int8Array2[0] = 2; // [2, 0, 0, 0, 0]
int8Array2[1] = -250; // [2, 6, 0, 0, 0]
const bytesPerElement = int8Array2.BYTES_PER_ELEMENT; // 1

// Uint8Array => each item is an 8 bit (1 byte) unsigned integer. These arrays can only represent positive numbers (0 to 255)
const uint8Array1 = new Uint8Array(); // []
const uint8Array2 = new Uint8Array(5); // [0, 0, 0, 0, 0]
uint8Array2[0] = -250; // [6, 0, 0, 0, 0]
uint8Array2[1] = 5; // [6, 5, 0, 0, 0]
uint8Array2[2] = 312; // [6, 5, 56, 0, 0]
const bytesPerElement2 = uint8Array2.BYTES_PER_ELEMENT; // 1

// Uint8ClampedArray => represents an array of 8-bit unsigned integers. The difference between Uint8ClampedArray and other typed arrays like Uint8Array is that the values stored in a Uint8ClampedArray are clamped to the range of 0 to 255.
// When we try to set a value in a Uint8ClampedArray that is outside the range of 0 to 255, the value is clamped to either 0 or 255, depending on whether it is below or above the valid range. This means that if we try to set a negative value in a Uint8ClampedArray, it will be clamped to 0, and if we try to set a value greater than 255, it will be clamped to 255.
const uint8ClampedArray1 = new Uint8ClampedArray(); // []
const uint8ClampedArray2 = new Uint8ClampedArray(3); // [0, 0, 0]
uint8ClampedArray2[0] = -5; // [0, 0, 0]
uint8ClampedArray2[0] = 280; // [255, 0, 0]
const bytesPerElement3 = uint8ClampedArray2.BYTES_PER_ELEMENT; // 1

// Int16Array
// Represents an array of 16-bit signed integers. This means that each element in the array takes up 2 bytes of memory and can store integer values between -32,768 and 32,767.
const int16Array1 = new Int16Array(); // []
const int16Array2 = new Int16Array(3); // [0, 0, 0]
int16Array2[0] = 20; // [20, 0, 0]
const bytesPerElement4 = int16Array2.BYTES_PER_ELEMENT; // 2

// Uint16Array
// Represents an array of 16-bit unsigned integers. This means that each element in the array takes up 2 bytes of memory and can store integer values between 0 and 65,535.
const uint16Array1 = new Uint16Array(); // []
const uint16Array2 = new Uint16Array(3); // [0, 0, 0]
uint16Array2[0] = 24; // [24, 0, 0]
uint16Array2[1] = -10; // [24, 65526, 0]
const bytesPerElement5 = uint16Array2.BYTES_PER_ELEMENT; // 2

// Int32Array
// Represents an array of 32-bit signed integers. This means that each element in the array takes up 4 bytes of memory and can store integer values between -2,147,483,648 and 2,147,483,647.
const int32Array1 = new Int32Array(); // []
const int32Array2 = new Int32Array(3); // [0, 0, 0]
int32Array2[0] = 50; // [50, 0, 0]
const bytesPerElement6 = int32Array2.BYTES_PER_ELEMENT; // 4

// Uint32Array
// Represents an array of 32-bit unsigned integers. This means that each element in the array takes up 4 bytes of memory and can store integer values between 0 and 4,294,967,295.
const uint32Array1 = new Uint32Array(); // []
const uint32Array2 = new Uint32Array(3); // [0, 0, 0]
uint32Array2[0] = 50; // [50, 0, 0]
uint32Array2[1] = -10; // [50, 4294967286, 0]
const bytesPerElement7 = uint32Array2.BYTES_PER_ELEMENT; // 4

// Float32Array
// Represents an array of 32-bit floating-point numbers. This means that each element in the array takes up 4 bytes of memory and can store floating-point values with up to 7 significant digits.
const float32Array1 = new Float32Array(); // []
const float32Array2 = new Float32Array(3); // [0, 0, 0]
float32Array2[0] = 2.5; // [2.5, 0, 0]
float32Array2[1] = -1.5; // [2.5, -1.5, 0]
const bytesPerElement8 = float32Array2.BYTES_PER_ELEMENT; // 4

// Float64Array
// Represents an array of 64-bit floating-point numbers. This means that each element in the array takes up 8 bytes of memory and can store floating-point values with up to 15 significant digits.
const float64Array1 = new Float64Array(); // []
const float64Array2 = new Float64Array(3); // [0, 0, 0]
float64Array2[0] = 2.588; // [2.588, 0, 0]
float64Array2[1] = -1.591; // [2.588, -1.591, 0]
const bytesPerElement9 = float64Array2.BYTES_PER_ELEMENT; // 8

// BigInt64Array
// Represents an array of 64-bit signed integers. However, unlike other typed arrays, BigInt64Array is designed to handle integers larger than 2^53 - 1
const bigInt64Array1 = new BigInt64Array(); // []
const bigInt64Array2 = new BigInt64Array(3); // [0n, 0n, 0n]
bigInt64Array2[0] = 2334567n; // [2334567n, 0n, 0n]
const bytesPerElement10 = bigInt64Array2.BYTES_PER_ELEMENT; // 8

// BigUInt64Array
// Represents an array of 64-bit unsigned integers. It is similar to the BigInt64Array in that it is designed to handle integers larger than 2^53 - 1, but it represents only non-negative integers.
const bigUInt64Array1 = new BigUint64Array(); // []
const bigUInt64Array2 = new BigUint64Array(3); // [0n, 0n, 0n]
bigUInt64Array2[0] = 2334567n; // [2334567n, 0n, 0n]
const bytesPerElement11 = bigUInt64Array2.BYTES_PER_ELEMENT; // 8
