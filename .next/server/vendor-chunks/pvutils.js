"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pvutils";
exports.ids = ["vendor-chunks/pvutils"];
exports.modules = {

/***/ "(rsc)/./node_modules/pvutils/build/utils.es.js":
/*!************************************************!*\
  !*** ./node_modules/pvutils/build/utils.es.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrayBufferToString: () => (/* binding */ arrayBufferToString),\n/* harmony export */   bufferToHexCodes: () => (/* binding */ bufferToHexCodes),\n/* harmony export */   checkBufferParams: () => (/* binding */ checkBufferParams),\n/* harmony export */   clearProps: () => (/* binding */ clearProps),\n/* harmony export */   fromBase64: () => (/* binding */ fromBase64),\n/* harmony export */   getParametersValue: () => (/* binding */ getParametersValue),\n/* harmony export */   getUTCDate: () => (/* binding */ getUTCDate),\n/* harmony export */   isEqualBuffer: () => (/* binding */ isEqualBuffer),\n/* harmony export */   nearestPowerOf2: () => (/* binding */ nearestPowerOf2),\n/* harmony export */   padNumber: () => (/* binding */ padNumber),\n/* harmony export */   stringToArrayBuffer: () => (/* binding */ stringToArrayBuffer),\n/* harmony export */   toBase64: () => (/* binding */ toBase64),\n/* harmony export */   utilConcatBuf: () => (/* binding */ utilConcatBuf),\n/* harmony export */   utilConcatView: () => (/* binding */ utilConcatView),\n/* harmony export */   utilDecodeTC: () => (/* binding */ utilDecodeTC),\n/* harmony export */   utilEncodeTC: () => (/* binding */ utilEncodeTC),\n/* harmony export */   utilFromBase: () => (/* binding */ utilFromBase),\n/* harmony export */   utilToBase: () => (/* binding */ utilToBase)\n/* harmony export */ });\n/*!\n Copyright (c) Peculiar Ventures, LLC\n*/\n\nfunction getUTCDate(date) {\r\n    return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));\r\n}\r\nfunction getParametersValue(parameters, name, defaultValue) {\r\n    var _a;\r\n    if ((parameters instanceof Object) === false) {\r\n        return defaultValue;\r\n    }\r\n    return (_a = parameters[name]) !== null && _a !== void 0 ? _a : defaultValue;\r\n}\r\nfunction bufferToHexCodes(inputBuffer, inputOffset = 0, inputLength = (inputBuffer.byteLength - inputOffset), insertSpace = false) {\r\n    let result = \"\";\r\n    for (const item of (new Uint8Array(inputBuffer, inputOffset, inputLength))) {\r\n        const str = item.toString(16).toUpperCase();\r\n        if (str.length === 1) {\r\n            result += \"0\";\r\n        }\r\n        result += str;\r\n        if (insertSpace) {\r\n            result += \" \";\r\n        }\r\n    }\r\n    return result.trim();\r\n}\r\nfunction checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {\r\n    if (!(inputBuffer instanceof ArrayBuffer)) {\r\n        baseBlock.error = \"Wrong parameter: inputBuffer must be \\\"ArrayBuffer\\\"\";\r\n        return false;\r\n    }\r\n    if (!inputBuffer.byteLength) {\r\n        baseBlock.error = \"Wrong parameter: inputBuffer has zero length\";\r\n        return false;\r\n    }\r\n    if (inputOffset < 0) {\r\n        baseBlock.error = \"Wrong parameter: inputOffset less than zero\";\r\n        return false;\r\n    }\r\n    if (inputLength < 0) {\r\n        baseBlock.error = \"Wrong parameter: inputLength less than zero\";\r\n        return false;\r\n    }\r\n    if ((inputBuffer.byteLength - inputOffset - inputLength) < 0) {\r\n        baseBlock.error = \"End of input reached before message was fully decoded (inconsistent offset and length values)\";\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\nfunction utilFromBase(inputBuffer, inputBase) {\r\n    let result = 0;\r\n    if (inputBuffer.length === 1) {\r\n        return inputBuffer[0];\r\n    }\r\n    for (let i = (inputBuffer.length - 1); i >= 0; i--) {\r\n        result += inputBuffer[(inputBuffer.length - 1) - i] * Math.pow(2, inputBase * i);\r\n    }\r\n    return result;\r\n}\r\nfunction utilToBase(value, base, reserved = (-1)) {\r\n    const internalReserved = reserved;\r\n    let internalValue = value;\r\n    let result = 0;\r\n    let biggest = Math.pow(2, base);\r\n    for (let i = 1; i < 8; i++) {\r\n        if (value < biggest) {\r\n            let retBuf;\r\n            if (internalReserved < 0) {\r\n                retBuf = new ArrayBuffer(i);\r\n                result = i;\r\n            }\r\n            else {\r\n                if (internalReserved < i) {\r\n                    return (new ArrayBuffer(0));\r\n                }\r\n                retBuf = new ArrayBuffer(internalReserved);\r\n                result = internalReserved;\r\n            }\r\n            const retView = new Uint8Array(retBuf);\r\n            for (let j = (i - 1); j >= 0; j--) {\r\n                const basis = Math.pow(2, j * base);\r\n                retView[result - j - 1] = Math.floor(internalValue / basis);\r\n                internalValue -= (retView[result - j - 1]) * basis;\r\n            }\r\n            return retBuf;\r\n        }\r\n        biggest *= Math.pow(2, base);\r\n    }\r\n    return new ArrayBuffer(0);\r\n}\r\nfunction utilConcatBuf(...buffers) {\r\n    let outputLength = 0;\r\n    let prevLength = 0;\r\n    for (const buffer of buffers) {\r\n        outputLength += buffer.byteLength;\r\n    }\r\n    const retBuf = new ArrayBuffer(outputLength);\r\n    const retView = new Uint8Array(retBuf);\r\n    for (const buffer of buffers) {\r\n        retView.set(new Uint8Array(buffer), prevLength);\r\n        prevLength += buffer.byteLength;\r\n    }\r\n    return retBuf;\r\n}\r\nfunction utilConcatView(...views) {\r\n    let outputLength = 0;\r\n    let prevLength = 0;\r\n    for (const view of views) {\r\n        outputLength += view.length;\r\n    }\r\n    const retBuf = new ArrayBuffer(outputLength);\r\n    const retView = new Uint8Array(retBuf);\r\n    for (const view of views) {\r\n        retView.set(view, prevLength);\r\n        prevLength += view.length;\r\n    }\r\n    return retView;\r\n}\r\nfunction utilDecodeTC() {\r\n    const buf = new Uint8Array(this.valueHex);\r\n    if (this.valueHex.byteLength >= 2) {\r\n        const condition1 = (buf[0] === 0xFF) && (buf[1] & 0x80);\r\n        const condition2 = (buf[0] === 0x00) && ((buf[1] & 0x80) === 0x00);\r\n        if (condition1 || condition2) {\r\n            this.warnings.push(\"Needlessly long format\");\r\n        }\r\n    }\r\n    const bigIntBuffer = new ArrayBuffer(this.valueHex.byteLength);\r\n    const bigIntView = new Uint8Array(bigIntBuffer);\r\n    for (let i = 0; i < this.valueHex.byteLength; i++) {\r\n        bigIntView[i] = 0;\r\n    }\r\n    bigIntView[0] = (buf[0] & 0x80);\r\n    const bigInt = utilFromBase(bigIntView, 8);\r\n    const smallIntBuffer = new ArrayBuffer(this.valueHex.byteLength);\r\n    const smallIntView = new Uint8Array(smallIntBuffer);\r\n    for (let j = 0; j < this.valueHex.byteLength; j++) {\r\n        smallIntView[j] = buf[j];\r\n    }\r\n    smallIntView[0] &= 0x7F;\r\n    const smallInt = utilFromBase(smallIntView, 8);\r\n    return (smallInt - bigInt);\r\n}\r\nfunction utilEncodeTC(value) {\r\n    const modValue = (value < 0) ? (value * (-1)) : value;\r\n    let bigInt = 128;\r\n    for (let i = 1; i < 8; i++) {\r\n        if (modValue <= bigInt) {\r\n            if (value < 0) {\r\n                const smallInt = bigInt - modValue;\r\n                const retBuf = utilToBase(smallInt, 8, i);\r\n                const retView = new Uint8Array(retBuf);\r\n                retView[0] |= 0x80;\r\n                return retBuf;\r\n            }\r\n            let retBuf = utilToBase(modValue, 8, i);\r\n            let retView = new Uint8Array(retBuf);\r\n            if (retView[0] & 0x80) {\r\n                const tempBuf = retBuf.slice(0);\r\n                const tempView = new Uint8Array(tempBuf);\r\n                retBuf = new ArrayBuffer(retBuf.byteLength + 1);\r\n                retView = new Uint8Array(retBuf);\r\n                for (let k = 0; k < tempBuf.byteLength; k++) {\r\n                    retView[k + 1] = tempView[k];\r\n                }\r\n                retView[0] = 0x00;\r\n            }\r\n            return retBuf;\r\n        }\r\n        bigInt *= Math.pow(2, 8);\r\n    }\r\n    return (new ArrayBuffer(0));\r\n}\r\nfunction isEqualBuffer(inputBuffer1, inputBuffer2) {\r\n    if (inputBuffer1.byteLength !== inputBuffer2.byteLength) {\r\n        return false;\r\n    }\r\n    const view1 = new Uint8Array(inputBuffer1);\r\n    const view2 = new Uint8Array(inputBuffer2);\r\n    for (let i = 0; i < view1.length; i++) {\r\n        if (view1[i] !== view2[i]) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nfunction padNumber(inputNumber, fullLength) {\r\n    const str = inputNumber.toString(10);\r\n    if (fullLength < str.length) {\r\n        return \"\";\r\n    }\r\n    const dif = fullLength - str.length;\r\n    const padding = new Array(dif);\r\n    for (let i = 0; i < dif; i++) {\r\n        padding[i] = \"0\";\r\n    }\r\n    const paddingString = padding.join(\"\");\r\n    return paddingString.concat(str);\r\n}\r\nconst base64Template = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";\r\nconst base64UrlTemplate = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=\";\r\nfunction toBase64(input, useUrlTemplate = false, skipPadding = false, skipLeadingZeros = false) {\r\n    let i = 0;\r\n    let flag1 = 0;\r\n    let flag2 = 0;\r\n    let output = \"\";\r\n    const template = (useUrlTemplate) ? base64UrlTemplate : base64Template;\r\n    if (skipLeadingZeros) {\r\n        let nonZeroPosition = 0;\r\n        for (let i = 0; i < input.length; i++) {\r\n            if (input.charCodeAt(i) !== 0) {\r\n                nonZeroPosition = i;\r\n                break;\r\n            }\r\n        }\r\n        input = input.slice(nonZeroPosition);\r\n    }\r\n    while (i < input.length) {\r\n        const chr1 = input.charCodeAt(i++);\r\n        if (i >= input.length) {\r\n            flag1 = 1;\r\n        }\r\n        const chr2 = input.charCodeAt(i++);\r\n        if (i >= input.length) {\r\n            flag2 = 1;\r\n        }\r\n        const chr3 = input.charCodeAt(i++);\r\n        const enc1 = chr1 >> 2;\r\n        const enc2 = ((chr1 & 0x03) << 4) | (chr2 >> 4);\r\n        let enc3 = ((chr2 & 0x0F) << 2) | (chr3 >> 6);\r\n        let enc4 = chr3 & 0x3F;\r\n        if (flag1 === 1) {\r\n            enc3 = enc4 = 64;\r\n        }\r\n        else {\r\n            if (flag2 === 1) {\r\n                enc4 = 64;\r\n            }\r\n        }\r\n        if (skipPadding) {\r\n            if (enc3 === 64) {\r\n                output += `${template.charAt(enc1)}${template.charAt(enc2)}`;\r\n            }\r\n            else {\r\n                if (enc4 === 64) {\r\n                    output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}`;\r\n                }\r\n                else {\r\n                    output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}${template.charAt(enc4)}`;\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}${template.charAt(enc4)}`;\r\n        }\r\n    }\r\n    return output;\r\n}\r\nfunction fromBase64(input, useUrlTemplate = false, cutTailZeros = false) {\r\n    const template = (useUrlTemplate) ? base64UrlTemplate : base64Template;\r\n    function indexOf(toSearch) {\r\n        for (let i = 0; i < 64; i++) {\r\n            if (template.charAt(i) === toSearch)\r\n                return i;\r\n        }\r\n        return 64;\r\n    }\r\n    function test(incoming) {\r\n        return ((incoming === 64) ? 0x00 : incoming);\r\n    }\r\n    let i = 0;\r\n    let output = \"\";\r\n    while (i < input.length) {\r\n        const enc1 = indexOf(input.charAt(i++));\r\n        const enc2 = (i >= input.length) ? 0x00 : indexOf(input.charAt(i++));\r\n        const enc3 = (i >= input.length) ? 0x00 : indexOf(input.charAt(i++));\r\n        const enc4 = (i >= input.length) ? 0x00 : indexOf(input.charAt(i++));\r\n        const chr1 = (test(enc1) << 2) | (test(enc2) >> 4);\r\n        const chr2 = ((test(enc2) & 0x0F) << 4) | (test(enc3) >> 2);\r\n        const chr3 = ((test(enc3) & 0x03) << 6) | test(enc4);\r\n        output += String.fromCharCode(chr1);\r\n        if (enc3 !== 64) {\r\n            output += String.fromCharCode(chr2);\r\n        }\r\n        if (enc4 !== 64) {\r\n            output += String.fromCharCode(chr3);\r\n        }\r\n    }\r\n    if (cutTailZeros) {\r\n        const outputLength = output.length;\r\n        let nonZeroStart = (-1);\r\n        for (let i = (outputLength - 1); i >= 0; i--) {\r\n            if (output.charCodeAt(i) !== 0) {\r\n                nonZeroStart = i;\r\n                break;\r\n            }\r\n        }\r\n        if (nonZeroStart !== (-1)) {\r\n            output = output.slice(0, nonZeroStart + 1);\r\n        }\r\n        else {\r\n            output = \"\";\r\n        }\r\n    }\r\n    return output;\r\n}\r\nfunction arrayBufferToString(buffer) {\r\n    let resultString = \"\";\r\n    const view = new Uint8Array(buffer);\r\n    for (const element of view) {\r\n        resultString += String.fromCharCode(element);\r\n    }\r\n    return resultString;\r\n}\r\nfunction stringToArrayBuffer(str) {\r\n    const stringLength = str.length;\r\n    const resultBuffer = new ArrayBuffer(stringLength);\r\n    const resultView = new Uint8Array(resultBuffer);\r\n    for (let i = 0; i < stringLength; i++) {\r\n        resultView[i] = str.charCodeAt(i);\r\n    }\r\n    return resultBuffer;\r\n}\r\nconst log2 = Math.log(2);\r\nfunction nearestPowerOf2(length) {\r\n    const base = (Math.log(length) / log2);\r\n    const floor = Math.floor(base);\r\n    const round = Math.round(base);\r\n    return ((floor === round) ? floor : round);\r\n}\r\nfunction clearProps(object, propsArray) {\r\n    for (const prop of propsArray) {\r\n        delete object[prop];\r\n    }\r\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcHZ1dGlscy9idWlsZC91dGlscy5lcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdCQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNCQUFzQixFQUFFLHNCQUFzQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCO0FBQ3ZHO0FBQ0E7QUFDQSxpQ0FBaUMsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXJpLXBhZGhhaS8uL25vZGVfbW9kdWxlcy9wdnV0aWxzL2J1aWxkL3V0aWxzLmVzLmpzPzc4OTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gQ29weXJpZ2h0IChjKSBQZWN1bGlhciBWZW50dXJlcywgTExDXG4qL1xuXG5mdW5jdGlvbiBnZXRVVENEYXRlKGRhdGUpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xyXG59XHJcbmZ1bmN0aW9uIGdldFBhcmFtZXRlcnNWYWx1ZShwYXJhbWV0ZXJzLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGlmICgocGFyYW1ldGVycyBpbnN0YW5jZW9mIE9iamVjdCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoX2EgPSBwYXJhbWV0ZXJzW25hbWVdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBkZWZhdWx0VmFsdWU7XHJcbn1cclxuZnVuY3Rpb24gYnVmZmVyVG9IZXhDb2RlcyhpbnB1dEJ1ZmZlciwgaW5wdXRPZmZzZXQgPSAwLCBpbnB1dExlbmd0aCA9IChpbnB1dEJ1ZmZlci5ieXRlTGVuZ3RoIC0gaW5wdXRPZmZzZXQpLCBpbnNlcnRTcGFjZSA9IGZhbHNlKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiAobmV3IFVpbnQ4QXJyYXkoaW5wdXRCdWZmZXIsIGlucHV0T2Zmc2V0LCBpbnB1dExlbmd0aCkpKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gaXRlbS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gXCIwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdCArPSBzdHI7XHJcbiAgICAgICAgaWYgKGluc2VydFNwYWNlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIiBcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0LnRyaW0oKTtcclxufVxyXG5mdW5jdGlvbiBjaGVja0J1ZmZlclBhcmFtcyhiYXNlQmxvY2ssIGlucHV0QnVmZmVyLCBpbnB1dE9mZnNldCwgaW5wdXRMZW5ndGgpIHtcclxuICAgIGlmICghKGlucHV0QnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XHJcbiAgICAgICAgYmFzZUJsb2NrLmVycm9yID0gXCJXcm9uZyBwYXJhbWV0ZXI6IGlucHV0QnVmZmVyIG11c3QgYmUgXFxcIkFycmF5QnVmZmVyXFxcIlwiO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICghaW5wdXRCdWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgIGJhc2VCbG9jay5lcnJvciA9IFwiV3JvbmcgcGFyYW1ldGVyOiBpbnB1dEJ1ZmZlciBoYXMgemVybyBsZW5ndGhcIjtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5wdXRPZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgYmFzZUJsb2NrLmVycm9yID0gXCJXcm9uZyBwYXJhbWV0ZXI6IGlucHV0T2Zmc2V0IGxlc3MgdGhhbiB6ZXJvXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlucHV0TGVuZ3RoIDwgMCkge1xyXG4gICAgICAgIGJhc2VCbG9jay5lcnJvciA9IFwiV3JvbmcgcGFyYW1ldGVyOiBpbnB1dExlbmd0aCBsZXNzIHRoYW4gemVyb1wiO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICgoaW5wdXRCdWZmZXIuYnl0ZUxlbmd0aCAtIGlucHV0T2Zmc2V0IC0gaW5wdXRMZW5ndGgpIDwgMCkge1xyXG4gICAgICAgIGJhc2VCbG9jay5lcnJvciA9IFwiRW5kIG9mIGlucHV0IHJlYWNoZWQgYmVmb3JlIG1lc3NhZ2Ugd2FzIGZ1bGx5IGRlY29kZWQgKGluY29uc2lzdGVudCBvZmZzZXQgYW5kIGxlbmd0aCB2YWx1ZXMpXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gdXRpbEZyb21CYXNlKGlucHV0QnVmZmVyLCBpbnB1dEJhc2UpIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgaWYgKGlucHV0QnVmZmVyLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBpbnB1dEJ1ZmZlclswXTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAoaW5wdXRCdWZmZXIubGVuZ3RoIC0gMSk7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGlucHV0QnVmZmVyWyhpbnB1dEJ1ZmZlci5sZW5ndGggLSAxKSAtIGldICogTWF0aC5wb3coMiwgaW5wdXRCYXNlICogaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIHV0aWxUb0Jhc2UodmFsdWUsIGJhc2UsIHJlc2VydmVkID0gKC0xKSkge1xyXG4gICAgY29uc3QgaW50ZXJuYWxSZXNlcnZlZCA9IHJlc2VydmVkO1xyXG4gICAgbGV0IGludGVybmFsVmFsdWUgPSB2YWx1ZTtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgbGV0IGJpZ2dlc3QgPSBNYXRoLnBvdygyLCBiYXNlKTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgYmlnZ2VzdCkge1xyXG4gICAgICAgICAgICBsZXQgcmV0QnVmO1xyXG4gICAgICAgICAgICBpZiAoaW50ZXJuYWxSZXNlcnZlZCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldEJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihpKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxSZXNlcnZlZCA8IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBBcnJheUJ1ZmZlcigwKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXRCdWYgPSBuZXcgQXJyYXlCdWZmZXIoaW50ZXJuYWxSZXNlcnZlZCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpbnRlcm5hbFJlc2VydmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJldFZpZXcgPSBuZXcgVWludDhBcnJheShyZXRCdWYpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gKGkgLSAxKTsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2lzID0gTWF0aC5wb3coMiwgaiAqIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0Vmlld1tyZXN1bHQgLSBqIC0gMV0gPSBNYXRoLmZsb29yKGludGVybmFsVmFsdWUgLyBiYXNpcyk7XHJcbiAgICAgICAgICAgICAgICBpbnRlcm5hbFZhbHVlIC09IChyZXRWaWV3W3Jlc3VsdCAtIGogLSAxXSkgKiBiYXNpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0QnVmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiaWdnZXN0ICo9IE1hdGgucG93KDIsIGJhc2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcclxufVxyXG5mdW5jdGlvbiB1dGlsQ29uY2F0QnVmKC4uLmJ1ZmZlcnMpIHtcclxuICAgIGxldCBvdXRwdXRMZW5ndGggPSAwO1xyXG4gICAgbGV0IHByZXZMZW5ndGggPSAwO1xyXG4gICAgZm9yIChjb25zdCBidWZmZXIgb2YgYnVmZmVycykge1xyXG4gICAgICAgIG91dHB1dExlbmd0aCArPSBidWZmZXIuYnl0ZUxlbmd0aDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJldEJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihvdXRwdXRMZW5ndGgpO1xyXG4gICAgY29uc3QgcmV0VmlldyA9IG5ldyBVaW50OEFycmF5KHJldEJ1Zik7XHJcbiAgICBmb3IgKGNvbnN0IGJ1ZmZlciBvZiBidWZmZXJzKSB7XHJcbiAgICAgICAgcmV0Vmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSwgcHJldkxlbmd0aCk7XHJcbiAgICAgICAgcHJldkxlbmd0aCArPSBidWZmZXIuYnl0ZUxlbmd0aDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXRCdWY7XHJcbn1cclxuZnVuY3Rpb24gdXRpbENvbmNhdFZpZXcoLi4udmlld3MpIHtcclxuICAgIGxldCBvdXRwdXRMZW5ndGggPSAwO1xyXG4gICAgbGV0IHByZXZMZW5ndGggPSAwO1xyXG4gICAgZm9yIChjb25zdCB2aWV3IG9mIHZpZXdzKSB7XHJcbiAgICAgICAgb3V0cHV0TGVuZ3RoICs9IHZpZXcubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmV0QnVmID0gbmV3IEFycmF5QnVmZmVyKG91dHB1dExlbmd0aCk7XHJcbiAgICBjb25zdCByZXRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkocmV0QnVmKTtcclxuICAgIGZvciAoY29uc3QgdmlldyBvZiB2aWV3cykge1xyXG4gICAgICAgIHJldFZpZXcuc2V0KHZpZXcsIHByZXZMZW5ndGgpO1xyXG4gICAgICAgIHByZXZMZW5ndGggKz0gdmlldy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0VmlldztcclxufVxyXG5mdW5jdGlvbiB1dGlsRGVjb2RlVEMoKSB7XHJcbiAgICBjb25zdCBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLnZhbHVlSGV4KTtcclxuICAgIGlmICh0aGlzLnZhbHVlSGV4LmJ5dGVMZW5ndGggPj0gMikge1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbjEgPSAoYnVmWzBdID09PSAweEZGKSAmJiAoYnVmWzFdICYgMHg4MCk7XHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uMiA9IChidWZbMF0gPT09IDB4MDApICYmICgoYnVmWzFdICYgMHg4MCkgPT09IDB4MDApO1xyXG4gICAgICAgIGlmIChjb25kaXRpb24xIHx8IGNvbmRpdGlvbjIpIHtcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5ncy5wdXNoKFwiTmVlZGxlc3NseSBsb25nIGZvcm1hdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBiaWdJbnRCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy52YWx1ZUhleC5ieXRlTGVuZ3RoKTtcclxuICAgIGNvbnN0IGJpZ0ludFZpZXcgPSBuZXcgVWludDhBcnJheShiaWdJbnRCdWZmZXIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlSGV4LmJ5dGVMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGJpZ0ludFZpZXdbaV0gPSAwO1xyXG4gICAgfVxyXG4gICAgYmlnSW50Vmlld1swXSA9IChidWZbMF0gJiAweDgwKTtcclxuICAgIGNvbnN0IGJpZ0ludCA9IHV0aWxGcm9tQmFzZShiaWdJbnRWaWV3LCA4KTtcclxuICAgIGNvbnN0IHNtYWxsSW50QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMudmFsdWVIZXguYnl0ZUxlbmd0aCk7XHJcbiAgICBjb25zdCBzbWFsbEludFZpZXcgPSBuZXcgVWludDhBcnJheShzbWFsbEludEJ1ZmZlcik7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudmFsdWVIZXguYnl0ZUxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgc21hbGxJbnRWaWV3W2pdID0gYnVmW2pdO1xyXG4gICAgfVxyXG4gICAgc21hbGxJbnRWaWV3WzBdICY9IDB4N0Y7XHJcbiAgICBjb25zdCBzbWFsbEludCA9IHV0aWxGcm9tQmFzZShzbWFsbEludFZpZXcsIDgpO1xyXG4gICAgcmV0dXJuIChzbWFsbEludCAtIGJpZ0ludCk7XHJcbn1cclxuZnVuY3Rpb24gdXRpbEVuY29kZVRDKHZhbHVlKSB7XHJcbiAgICBjb25zdCBtb2RWYWx1ZSA9ICh2YWx1ZSA8IDApID8gKHZhbHVlICogKC0xKSkgOiB2YWx1ZTtcclxuICAgIGxldCBiaWdJbnQgPSAxMjg7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgIGlmIChtb2RWYWx1ZSA8PSBiaWdJbnQpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc21hbGxJbnQgPSBiaWdJbnQgLSBtb2RWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldEJ1ZiA9IHV0aWxUb0Jhc2Uoc21hbGxJbnQsIDgsIGkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0VmlldyA9IG5ldyBVaW50OEFycmF5KHJldEJ1Zik7XHJcbiAgICAgICAgICAgICAgICByZXRWaWV3WzBdIHw9IDB4ODA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0QnVmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXRCdWYgPSB1dGlsVG9CYXNlKG1vZFZhbHVlLCA4LCBpKTtcclxuICAgICAgICAgICAgbGV0IHJldFZpZXcgPSBuZXcgVWludDhBcnJheShyZXRCdWYpO1xyXG4gICAgICAgICAgICBpZiAocmV0Vmlld1swXSAmIDB4ODApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBCdWYgPSByZXRCdWYuc2xpY2UoMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wVmlldyA9IG5ldyBVaW50OEFycmF5KHRlbXBCdWYpO1xyXG4gICAgICAgICAgICAgICAgcmV0QnVmID0gbmV3IEFycmF5QnVmZmVyKHJldEJ1Zi5ieXRlTGVuZ3RoICsgMSk7XHJcbiAgICAgICAgICAgICAgICByZXRWaWV3ID0gbmV3IFVpbnQ4QXJyYXkocmV0QnVmKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGVtcEJ1Zi5ieXRlTGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByZXRWaWV3W2sgKyAxXSA9IHRlbXBWaWV3W2tdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0Vmlld1swXSA9IDB4MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJldEJ1ZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmlnSW50ICo9IE1hdGgucG93KDIsIDgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChuZXcgQXJyYXlCdWZmZXIoMCkpO1xyXG59XHJcbmZ1bmN0aW9uIGlzRXF1YWxCdWZmZXIoaW5wdXRCdWZmZXIxLCBpbnB1dEJ1ZmZlcjIpIHtcclxuICAgIGlmIChpbnB1dEJ1ZmZlcjEuYnl0ZUxlbmd0aCAhPT0gaW5wdXRCdWZmZXIyLmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2aWV3MSA9IG5ldyBVaW50OEFycmF5KGlucHV0QnVmZmVyMSk7XHJcbiAgICBjb25zdCB2aWV3MiA9IG5ldyBVaW50OEFycmF5KGlucHV0QnVmZmVyMik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpZXcxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHZpZXcxW2ldICE9PSB2aWV3MltpXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gcGFkTnVtYmVyKGlucHV0TnVtYmVyLCBmdWxsTGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzdHIgPSBpbnB1dE51bWJlci50b1N0cmluZygxMCk7XHJcbiAgICBpZiAoZnVsbExlbmd0aCA8IHN0ci5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpZiA9IGZ1bGxMZW5ndGggLSBzdHIubGVuZ3RoO1xyXG4gICAgY29uc3QgcGFkZGluZyA9IG5ldyBBcnJheShkaWYpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWY7IGkrKykge1xyXG4gICAgICAgIHBhZGRpbmdbaV0gPSBcIjBcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhZGRpbmdTdHJpbmcgPSBwYWRkaW5nLmpvaW4oXCJcIik7XHJcbiAgICByZXR1cm4gcGFkZGluZ1N0cmluZy5jb25jYXQoc3RyKTtcclxufVxyXG5jb25zdCBiYXNlNjRUZW1wbGF0ZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcclxuY29uc3QgYmFzZTY0VXJsVGVtcGxhdGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LV89XCI7XHJcbmZ1bmN0aW9uIHRvQmFzZTY0KGlucHV0LCB1c2VVcmxUZW1wbGF0ZSA9IGZhbHNlLCBza2lwUGFkZGluZyA9IGZhbHNlLCBza2lwTGVhZGluZ1plcm9zID0gZmFsc2UpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGxldCBmbGFnMSA9IDA7XHJcbiAgICBsZXQgZmxhZzIgPSAwO1xyXG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9ICh1c2VVcmxUZW1wbGF0ZSkgPyBiYXNlNjRVcmxUZW1wbGF0ZSA6IGJhc2U2NFRlbXBsYXRlO1xyXG4gICAgaWYgKHNraXBMZWFkaW5nWmVyb3MpIHtcclxuICAgICAgICBsZXQgbm9uWmVyb1Bvc2l0aW9uID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KGkpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBub25aZXJvUG9zaXRpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5zbGljZShub25aZXJvUG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG4gICAgICAgIGlmIChpID49IGlucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmbGFnMSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNocjIgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcbiAgICAgICAgaWYgKGkgPj0gaW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZsYWcyID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2hyMyA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuICAgICAgICBjb25zdCBlbmMxID0gY2hyMSA+PiAyO1xyXG4gICAgICAgIGNvbnN0IGVuYzIgPSAoKGNocjEgJiAweDAzKSA8PCA0KSB8IChjaHIyID4+IDQpO1xyXG4gICAgICAgIGxldCBlbmMzID0gKChjaHIyICYgMHgwRikgPDwgMikgfCAoY2hyMyA+PiA2KTtcclxuICAgICAgICBsZXQgZW5jNCA9IGNocjMgJiAweDNGO1xyXG4gICAgICAgIGlmIChmbGFnMSA9PT0gMSkge1xyXG4gICAgICAgICAgICBlbmMzID0gZW5jNCA9IDY0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZsYWcyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBlbmM0ID0gNjQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNraXBQYWRkaW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChlbmMzID09PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IGAke3RlbXBsYXRlLmNoYXJBdChlbmMxKX0ke3RlbXBsYXRlLmNoYXJBdChlbmMyKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuYzQgPT09IDY0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IGAke3RlbXBsYXRlLmNoYXJBdChlbmMxKX0ke3RlbXBsYXRlLmNoYXJBdChlbmMyKX0ke3RlbXBsYXRlLmNoYXJBdChlbmMzKX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IGAke3RlbXBsYXRlLmNoYXJBdChlbmMxKX0ke3RlbXBsYXRlLmNoYXJBdChlbmMyKX0ke3RlbXBsYXRlLmNoYXJBdChlbmMzKX0ke3RlbXBsYXRlLmNoYXJBdChlbmM0KX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRwdXQgKz0gYCR7dGVtcGxhdGUuY2hhckF0KGVuYzEpfSR7dGVtcGxhdGUuY2hhckF0KGVuYzIpfSR7dGVtcGxhdGUuY2hhckF0KGVuYzMpfSR7dGVtcGxhdGUuY2hhckF0KGVuYzQpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5mdW5jdGlvbiBmcm9tQmFzZTY0KGlucHV0LCB1c2VVcmxUZW1wbGF0ZSA9IGZhbHNlLCBjdXRUYWlsWmVyb3MgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSAodXNlVXJsVGVtcGxhdGUpID8gYmFzZTY0VXJsVGVtcGxhdGUgOiBiYXNlNjRUZW1wbGF0ZTtcclxuICAgIGZ1bmN0aW9uIGluZGV4T2YodG9TZWFyY2gpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY0OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRlbXBsYXRlLmNoYXJBdChpKSA9PT0gdG9TZWFyY2gpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDY0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdGVzdChpbmNvbWluZykge1xyXG4gICAgICAgIHJldHVybiAoKGluY29taW5nID09PSA2NCkgPyAweDAwIDogaW5jb21pbmcpO1xyXG4gICAgfVxyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XHJcbiAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGVuYzEgPSBpbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuICAgICAgICBjb25zdCBlbmMyID0gKGkgPj0gaW5wdXQubGVuZ3RoKSA/IDB4MDAgOiBpbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuICAgICAgICBjb25zdCBlbmMzID0gKGkgPj0gaW5wdXQubGVuZ3RoKSA/IDB4MDAgOiBpbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuICAgICAgICBjb25zdCBlbmM0ID0gKGkgPj0gaW5wdXQubGVuZ3RoKSA/IDB4MDAgOiBpbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuICAgICAgICBjb25zdCBjaHIxID0gKHRlc3QoZW5jMSkgPDwgMikgfCAodGVzdChlbmMyKSA+PiA0KTtcclxuICAgICAgICBjb25zdCBjaHIyID0gKCh0ZXN0KGVuYzIpICYgMHgwRikgPDwgNCkgfCAodGVzdChlbmMzKSA+PiAyKTtcclxuICAgICAgICBjb25zdCBjaHIzID0gKCh0ZXN0KGVuYzMpICYgMHgwMykgPDwgNikgfCB0ZXN0KGVuYzQpO1xyXG4gICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjEpO1xyXG4gICAgICAgIGlmIChlbmMzICE9PSA2NCkge1xyXG4gICAgICAgICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVuYzQgIT09IDY0KSB7XHJcbiAgICAgICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjdXRUYWlsWmVyb3MpIHtcclxuICAgICAgICBjb25zdCBvdXRwdXRMZW5ndGggPSBvdXRwdXQubGVuZ3RoO1xyXG4gICAgICAgIGxldCBub25aZXJvU3RhcnQgPSAoLTEpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAob3V0cHV0TGVuZ3RoIC0gMSk7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmIChvdXRwdXQuY2hhckNvZGVBdChpKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbm9uWmVyb1N0YXJ0ID0gaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub25aZXJvU3RhcnQgIT09ICgtMSkpIHtcclxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnNsaWNlKDAsIG5vblplcm9TdGFydCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3V0cHV0ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcbmZ1bmN0aW9uIGFycmF5QnVmZmVyVG9TdHJpbmcoYnVmZmVyKSB7XHJcbiAgICBsZXQgcmVzdWx0U3RyaW5nID0gXCJcIjtcclxuICAgIGNvbnN0IHZpZXcgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHZpZXcpIHtcclxuICAgICAgICByZXN1bHRTdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShlbGVtZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRTdHJpbmc7XHJcbn1cclxuZnVuY3Rpb24gc3RyaW5nVG9BcnJheUJ1ZmZlcihzdHIpIHtcclxuICAgIGNvbnN0IHN0cmluZ0xlbmd0aCA9IHN0ci5sZW5ndGg7XHJcbiAgICBjb25zdCByZXN1bHRCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoc3RyaW5nTGVuZ3RoKTtcclxuICAgIGNvbnN0IHJlc3VsdFZpZXcgPSBuZXcgVWludDhBcnJheShyZXN1bHRCdWZmZXIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlc3VsdFZpZXdbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRCdWZmZXI7XHJcbn1cclxuY29uc3QgbG9nMiA9IE1hdGgubG9nKDIpO1xyXG5mdW5jdGlvbiBuZWFyZXN0UG93ZXJPZjIobGVuZ3RoKSB7XHJcbiAgICBjb25zdCBiYXNlID0gKE1hdGgubG9nKGxlbmd0aCkgLyBsb2cyKTtcclxuICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihiYXNlKTtcclxuICAgIGNvbnN0IHJvdW5kID0gTWF0aC5yb3VuZChiYXNlKTtcclxuICAgIHJldHVybiAoKGZsb29yID09PSByb3VuZCkgPyBmbG9vciA6IHJvdW5kKTtcclxufVxyXG5mdW5jdGlvbiBjbGVhclByb3BzKG9iamVjdCwgcHJvcHNBcnJheSkge1xyXG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHByb3BzQXJyYXkpIHtcclxuICAgICAgICBkZWxldGUgb2JqZWN0W3Byb3BdO1xyXG4gICAgfVxyXG59XG5cbmV4cG9ydCB7IGFycmF5QnVmZmVyVG9TdHJpbmcsIGJ1ZmZlclRvSGV4Q29kZXMsIGNoZWNrQnVmZmVyUGFyYW1zLCBjbGVhclByb3BzLCBmcm9tQmFzZTY0LCBnZXRQYXJhbWV0ZXJzVmFsdWUsIGdldFVUQ0RhdGUsIGlzRXF1YWxCdWZmZXIsIG5lYXJlc3RQb3dlck9mMiwgcGFkTnVtYmVyLCBzdHJpbmdUb0FycmF5QnVmZmVyLCB0b0Jhc2U2NCwgdXRpbENvbmNhdEJ1ZiwgdXRpbENvbmNhdFZpZXcsIHV0aWxEZWNvZGVUQywgdXRpbEVuY29kZVRDLCB1dGlsRnJvbUJhc2UsIHV0aWxUb0Jhc2UgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/pvutils/build/utils.es.js\n");

/***/ })

};
;