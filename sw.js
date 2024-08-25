/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/Deferred.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/Deferred.js ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkboxError: () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheMatchIgnoreParams: () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheNames: () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canConstructResponseFromBodyStream: () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQuotaErrorCallbacks: () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFriendlyURL: () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in globalThis)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/timeout.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/timeout.js ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/waitUntil.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/waitUntil.js ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitUntil: () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js ***!
  \****************************************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/copyResponse.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/copyResponse.js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyResponse: () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messageGenerator.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageGenerator: () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messages.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/messages/messages.js ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messages: () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotaErrorCallbacks: () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheController.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheController.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheFallbackPlugin: () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheRoute.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheRoute.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheRoute: () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheStrategy.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheStrategy: () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_types.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_types.js ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js ***!
  \****************************************************************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addPlugins.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addPlugins.js ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlugins: () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addRoute.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addRoute.js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRoute: () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupOutdatedCaches: () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHandlerBoundToURL: () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKeyForURL: () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.js ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/matchPrecache.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/matchPrecache.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchPrecache: () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precache.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precache.js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precache: () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precacheAndRoute.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precacheAndRoute.js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precacheAndRoute: () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheCacheKeyPlugin: () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheInstallReportPlugin: () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/createCacheKey.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKey: () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteOutdatedCaches: () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateURLVariations: () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreatePrecacheController: () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printCleanupDetails: () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printInstallDetails: () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeIgnoredSearchParams: () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/RegExpRoute.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/RegExpRoute.js ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRoute: () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Route.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Route.js ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Route: () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Router.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Router.js ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js ***!
  \****************************************************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/registerRoute.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/registerRoute.js ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRoute: () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/constants.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/constants.js ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMethod: () => (/* binding */ defaultMethod),
/* harmony export */   validMethods: () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreateDefaultRouter: () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/normalizeHandler.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeHandler: () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@https+++registry.npmmirror.com+workbox-routing+-+workbox-routing-7.1.0.tgz/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/Strategy.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/Strategy.js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategy: () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/StrategyHandler.js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/StrategyHandler.js ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyHandler: () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@https+++registry.npmmirror.com+workbox-core+-+workbox-core-7.1.0.tgz/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/_version.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@https+++registry.npmmirror.com+workbox-strategies+-+workbox-strategies-7.1.0.tgz/node_modules/workbox-strategies/_version.js ***!
  \****************************************************************************************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.mjs":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.mjs ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@docusaurus+plugin-pwa@https+++registry.npmmirror.com+@docusaurus+plugin-pwa+-+plugin-pwa-3.5_ufucn6c22jw6zuvperqdwtewvi/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \***************************************************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/.pnpm/workbox-precaching@https+++registry.npmmirror.com+workbox-precaching+-+workbox-precaching-7.1.0.tgz/node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"e9b3bff315f073e50d17bd8d78491aaf","url":"404.html"},{"revision":"8e64e4273817c45ccd2ac0e894823d89","url":"advance/bot/framework/index.html"},{"revision":"a1f58f5f3c9375a14bfbb90bda75557d","url":"advance/bot/general/index.html"},{"revision":"17b2fd98bde032c969bd5c08cf45270a","url":"advance/bot/index.html"},{"revision":"c04ea2b7edf59d3db8c8fd6b4f056847","url":"advance/domain-application-and-dns-resolution/index.html"},{"revision":"578a244e47c2991d2b50851b0ece26d9","url":"advance/index.html"},{"revision":"5b3839d48a4015fd4ed01b08302b43e7","url":"advance/Linux/backup/index.html"},{"revision":"464e2ae9c0b1c9c4f17988a60aea66ca","url":"advance/Linux/Connect-to-server/index.html"},{"revision":"23b2c66176e97a55791c078ff043c158","url":"advance/Linux/frp/index.html"},{"revision":"4389df874110c725d989eeb530f9e64e","url":"advance/Linux/keep-running/index.html"},{"revision":"89c57d6f757aabf4bc9be845827b035f","url":"advance/Linux/start/index.html"},{"revision":"87dbd3a707617ed8193c05a0faae64aa","url":"advance/open-website/index.html"},{"revision":"25bd9a5f552d3279a2d63f30d26af97f","url":"assets/css/styles.e4e4ba86.css"},{"revision":"b7bc0e9f75bd42df307c4785859af900","url":"assets/js/005c270b.27930f9d.js"},{"revision":"a30e69a436bccfab124158d4d7a262bc","url":"assets/js/013c8c14.ce98a4f4.js"},{"revision":"e34e6872bc79c8b209307217616129c1","url":"assets/js/026f291b.83e76614.js"},{"revision":"2d0bcded39a071421cd1b5026e716b9e","url":"assets/js/0272dc73.e9d974c2.js"},{"revision":"be666f74f27c683a54cfec806b5f87fc","url":"assets/js/035cfa77.02f3a519.js"},{"revision":"d81e24dbf981e3b61228c1d7a192e719","url":"assets/js/03b205ee.9a0cb1aa.js"},{"revision":"abdd5918268981cd00186958f09b68db","url":"assets/js/043fa146.892bcda6.js"},{"revision":"78583273de2d53d12b6af28b80267a3d","url":"assets/js/044f41a1.34affc3d.js"},{"revision":"8213f73759e8ac04caf75e0e6a00a9c7","url":"assets/js/0492d44d.82936e1f.js"},{"revision":"14c8c15aea46614243d1ca6f76429cad","url":"assets/js/04f5c692.359c2adb.js"},{"revision":"e704641360a7a73156c7ebb251604c89","url":"assets/js/052366f7.48ebddaf.js"},{"revision":"de7466bf4d31c13451953e40b7861e22","url":"assets/js/05278f71.10c91c18.js"},{"revision":"363065a03c6a23b15b8bc78664e0758d","url":"assets/js/053e2f33.eb17d5b5.js"},{"revision":"7aab8ef7efca614cb1e215ac57663a68","url":"assets/js/06b0ed59.9c6bf3b8.js"},{"revision":"1c563b5a74e6e99268e2eb00ebcb5b85","url":"assets/js/083acdf9.04663a14.js"},{"revision":"2f973de32015b5231af31f820ee36ea7","url":"assets/js/083ebe2e.8d0806fb.js"},{"revision":"ae14b2a592a74ecf1d9663b0dc0f1126","url":"assets/js/08e7f72a.c3dacf99.js"},{"revision":"59a6b0d6fd621607a778846d3a0027be","url":"assets/js/09156d2e.ef85c5c2.js"},{"revision":"36b322667464415b55d867c3b4fc2856","url":"assets/js/094a7dd6.bc3d6898.js"},{"revision":"4c07bd8d14d4effb7caee464de012496","url":"assets/js/09714880.6fd358eb.js"},{"revision":"31e820de87176532071fb32b10d9e774","url":"assets/js/0a17cf6d.f1c27e89.js"},{"revision":"e84692682ac1bf74a57a8b85306567ea","url":"assets/js/0ac0b3b7.aa42b090.js"},{"revision":"aeb7adcae31863c17c8d4320c3ec6862","url":"assets/js/0bcb5d9e.37833c21.js"},{"revision":"bc20a9322beb94464379897ec0bfc026","url":"assets/js/0c7f12b6.66d9114d.js"},{"revision":"3e72116581cbac7e188d535fad919657","url":"assets/js/0e384e19.f27aa812.js"},{"revision":"aa4406590fb1163776a28ec1e6b624a4","url":"assets/js/0ec7bf36.065f494a.js"},{"revision":"8e5adfa9e6dd32e5a7097127f68ec34e","url":"assets/js/0efa0f03.f03f8446.js"},{"revision":"355d4f7df22cf3c7e6a2d473b8dcaf97","url":"assets/js/0fc807d9.5a1bed95.js"},{"revision":"a13a78349f9beed8e52102eb94aaab88","url":"assets/js/11f90be3.ebcd24b9.js"},{"revision":"c264dfcacf7af4bd6e0165c7a92d8142","url":"assets/js/1210f0b1.a46cae88.js"},{"revision":"ff5c31e001557029608892145e086ce6","url":"assets/js/144520df.026399eb.js"},{"revision":"17ca70d3092f7a28ebd3944341c9fe9d","url":"assets/js/14eb3368.1b3a40dc.js"},{"revision":"272dce730295ce43416aaeba7ecd03d4","url":"assets/js/1537.c5a762c0.js"},{"revision":"ded3c33dfe87387872878aee7e45da57","url":"assets/js/15daf372.a62be94c.js"},{"revision":"26c97bd772ea7061f2f48a22eedab85e","url":"assets/js/15e4e3ed.9de78071.js"},{"revision":"2deb9bbce1817df4b12e4fc15d5172b6","url":"assets/js/1760.e90d3aca.js"},{"revision":"88670c57d3d175894d3f201d377c6490","url":"assets/js/17896441.8433a9a7.js"},{"revision":"0d3d8622cbea1478682e94efa91dc43d","url":"assets/js/180bc163.6c54d550.js"},{"revision":"08d19f56d67188a119398b454416e143","url":"assets/js/1856fe2a.11140d04.js"},{"revision":"0ef05e9a633c99901587ec6457df80f9","url":"assets/js/185d6330.2045dcf8.js"},{"revision":"e688f8cc238225bd274152789a088639","url":"assets/js/188.d81dc71f.js"},{"revision":"a6822f642076347b6f00dfed33063d98","url":"assets/js/18b67442.27aa7eb2.js"},{"revision":"82907470693f497b5f3d4fc83bd7e8d1","url":"assets/js/18bca995.c14a9042.js"},{"revision":"58c55df0151f5dd0b32f811035054da1","url":"assets/js/192.bd2ea5ef.js"},{"revision":"d934b4b68a98537065af62e337e407e0","url":"assets/js/193a055b.0a1ba764.js"},{"revision":"fdf1a9a12f6e7e83e1a08dd28cf466ef","url":"assets/js/198ea2e3.2d635024.js"},{"revision":"5c25221054c1784588ca0728bb004219","url":"assets/js/19cf8050.f7732f83.js"},{"revision":"31fdaf098ca6c5023f6120b36c9cff5e","url":"assets/js/1a4e3797.e7dafb65.js"},{"revision":"b7d16b351e0eae7994df870c9cb91483","url":"assets/js/1c42be93.3a554f6a.js"},{"revision":"219e58758f956727996f74d53cf0a9b1","url":"assets/js/1c6846f9.cae2be82.js"},{"revision":"9967576af2f039ff4b80536bbd651489","url":"assets/js/1cf75b4f.d37ec8ee.js"},{"revision":"4cf7f98df6cf57c644a86c45bb8bf57a","url":"assets/js/1d1b9adf.caaeca5e.js"},{"revision":"94d213cfcf38a907f73467a3cd39ee54","url":"assets/js/1d42ad15.6229d5a6.js"},{"revision":"bd09a72bd5cdff06c77cc3f52819a9e1","url":"assets/js/1dfd2628.54b39321.js"},{"revision":"476ea2c96fd03d942b4933616bc4e82f","url":"assets/js/1e0a547c.f3d5ecee.js"},{"revision":"60a92610403966d5aaf38cb83ff45a56","url":"assets/js/1e47cbc1.ee642306.js"},{"revision":"c04aec28f4797c62037ab6585432286b","url":"assets/js/1edb7625.a568f8a9.js"},{"revision":"93387458031d9c0da48c82a570e99db7","url":"assets/js/1ee6f0d4.67636065.js"},{"revision":"951be35e80d397ff13d8716dbe75d85e","url":"assets/js/1efacac9.60142e47.js"},{"revision":"ba924625c8f7235e18bc9e6b2da24834","url":"assets/js/1f81f646.8f7b730a.js"},{"revision":"9a6d945ced4e537ddb9bf0ed78b0f17b","url":"assets/js/20215aa7.87d2bbc5.js"},{"revision":"2469ec8eb7303ceb7c131164ad1e2b05","url":"assets/js/20547864.779fb1a4.js"},{"revision":"84695144f65cc553c3c526e8570df7a7","url":"assets/js/20d69604.188958ac.js"},{"revision":"e87f6bedbf1dde07fdff13dfd49a2d72","url":"assets/js/21c534b6.7952096c.js"},{"revision":"79e5998763c839557c731bdecac27b33","url":"assets/js/225.7a67a60a.js"},{"revision":"ef47a031ad07552bf834d5348fbf9bf6","url":"assets/js/2423.fd094983.js"},{"revision":"3430a0a053211ec3bee559bb8ef03b6f","url":"assets/js/244418a2.45c1bccb.js"},{"revision":"a38d0ea490c6258f93b1caaef8295e5d","url":"assets/js/24a68a77.2ce11990.js"},{"revision":"aa098c2d86e1cfedabc67458696ba2fd","url":"assets/js/24d8f7d7.8fd7dd68.js"},{"revision":"51a55801950e22bed375cb02981b47ad","url":"assets/js/254a43c9.19229152.js"},{"revision":"6c8e4594b69897f213ed55a82eb4db75","url":"assets/js/264.30bc98d3.js"},{"revision":"f7ca411b373470cc075a7d1decb058f8","url":"assets/js/2867c0df.6826d1da.js"},{"revision":"c238cf3d2388582e773030b2271a7eca","url":"assets/js/289.827ef2c5.js"},{"revision":"df6bce385dc242ec583bbe90febe761a","url":"assets/js/2a71d676.20fe1c07.js"},{"revision":"7ed6b0d8056a099c38c5208d320a761f","url":"assets/js/2b4e0304.ce24e8c2.js"},{"revision":"dd0c5f5187f672838c25cf788c044647","url":"assets/js/2b9de2c0.4bec22d8.js"},{"revision":"203983676cf4603fc9774cd748ea4363","url":"assets/js/2d386ab7.23b8aa11.js"},{"revision":"1d96f32c0731ca7b9b1eb0ffae2e1bce","url":"assets/js/2e938706.bde3099b.js"},{"revision":"db8bdcee99a0d532a2de9cbc64ce2777","url":"assets/js/2f39a0af.a2136a6a.js"},{"revision":"99aaeed4be1edea4a04bd98a6afce902","url":"assets/js/2f8ede37.5e85627d.js"},{"revision":"7a09eead6c0d9b93c64e93d3aace5b55","url":"assets/js/304.ac7707c7.js"},{"revision":"af5f4694af2e537d07899babe37c8630","url":"assets/js/312f6c84.d0029a6b.js"},{"revision":"30b4e065d3f379f8ec10ba08deb3f6bb","url":"assets/js/316.df55a7a9.js"},{"revision":"70c2130fc4d378271fccf8526b3a5849","url":"assets/js/31735ebe.3b2129e2.js"},{"revision":"e5f8f6ecc057d804b07a6144c170883b","url":"assets/js/33261842.7657856b.js"},{"revision":"3b525de5afef1913f1c1b88be7b5dd5a","url":"assets/js/3373.191ecb58.js"},{"revision":"56edb4f3a86f6c56ece1a3597935feb0","url":"assets/js/343bb2fa.d6503b88.js"},{"revision":"9ff8bd39afab35c61843f5aea3d43c12","url":"assets/js/3488027e.0be8ed69.js"},{"revision":"e0dfcbc89a81e9b405124497489b578d","url":"assets/js/349d9c34.872e83b9.js"},{"revision":"083105cf026f8c5ee74d85057aa7e609","url":"assets/js/359195cb.ae5bae0e.js"},{"revision":"f495622b811cc5137742e44ac0e7d9e0","url":"assets/js/35d30f29.8ee2cce9.js"},{"revision":"56887339331e71194208c9687ce5534e","url":"assets/js/3636.ab3720db.js"},{"revision":"2a7603e532e2eab9818150082d7c3cd6","url":"assets/js/36c75202.eccdcacd.js"},{"revision":"3597c7c709bdb52977547d4fab890c78","url":"assets/js/373.e4bcc5f6.js"},{"revision":"951252aeb8ae0040594c08ce16cd8fbd","url":"assets/js/3747.b5340f88.js"},{"revision":"55b4d10d4f12570d6187637dba0f7b60","url":"assets/js/3749f972.120a45e6.js"},{"revision":"c056ee20a564c59b443c176c00ca5bb5","url":"assets/js/3868.49019453.js"},{"revision":"09d680f4bbc5ffd15553b6c4959e96ed","url":"assets/js/38b0474b.f8b2e223.js"},{"revision":"460e8b4406825411191bad37020eee01","url":"assets/js/38b71911.f4245cfc.js"},{"revision":"a84ca7d03136ebcc2997af12844c141f","url":"assets/js/399101db.265208fa.js"},{"revision":"b0a478c4db2a0d0f6bbe74774fb3b60d","url":"assets/js/3a42456f.6c187b5a.js"},{"revision":"e555a2b817963fe9b06b9cb7e197845f","url":"assets/js/3b850624.873c5b1c.js"},{"revision":"d26d0fba4283fcedcc4c499ae8e4d6b1","url":"assets/js/3b8970d0.c200a262.js"},{"revision":"6c39488512adf55cb2780db9b39f210a","url":"assets/js/3bb1ea30.e111a0e3.js"},{"revision":"5cba8ebced9f31dec3c7d4a932932826","url":"assets/js/3bd1ba02.dc01ba51.js"},{"revision":"71daae3116e0c68d49d8659fd71e44f1","url":"assets/js/3c5393f3.71b5279e.js"},{"revision":"5ea2e479b03c26be8f37013df4830e2c","url":"assets/js/3cd38fda.d30a8835.js"},{"revision":"d6ac70273e713b464ef105e39652ad77","url":"assets/js/3cd65ff0.cab49ddd.js"},{"revision":"3e71d519655ad4531bff8f6d38ab59bc","url":"assets/js/3d7f94ff.51559359.js"},{"revision":"250c43ef4193d67e8f0d9f2fbe73e89d","url":"assets/js/3dd749a7.be0cdfdd.js"},{"revision":"a6f1e20b49067e97444283365beb65f2","url":"assets/js/3ef38818.775c1efd.js"},{"revision":"383c6306a9b567d296c81ff45c8476a8","url":"assets/js/3fbeb9b5.58444a29.js"},{"revision":"688cb9b8627601c023eaf909fc29d82e","url":"assets/js/411.c2ae933f.js"},{"revision":"22cf9feb7203786d810fe365c6c29bac","url":"assets/js/41c0ace0.59a97690.js"},{"revision":"bc291358ac6bee42a1fab164adb42ff7","url":"assets/js/423.fe93ccac.js"},{"revision":"097bbe63fbb6230a1e1f1c605f8a8739","url":"assets/js/425e3dd1.659d3e7b.js"},{"revision":"efc28cffff7ded5c603507790e9138cd","url":"assets/js/4305.699fbca3.js"},{"revision":"889e4f7657022a3dd3f8238b22f076e8","url":"assets/js/4307.f556133c.js"},{"revision":"e9d0a1d6eb829105104717e5268b2622","url":"assets/js/431266e7.71ca7351.js"},{"revision":"dff8a751618a020cabe35eda83cb8395","url":"assets/js/445c22af.b55b7de4.js"},{"revision":"c46db2032a6bf9fca32feb338d6bd40f","url":"assets/js/44975943.8754e751.js"},{"revision":"0a3795ddc9120645afc691b198b4a53c","url":"assets/js/45cd711d.51ebff5c.js"},{"revision":"40a5cb4ab60accfac0df7aa637c493fa","url":"assets/js/4695.cb4978da.js"},{"revision":"bd5908ca5c7b3d2ca5f0c7bfe6cbee65","url":"assets/js/46bf3d5b.a914725e.js"},{"revision":"441087e93a70cbbb19b30ec7d86f195b","url":"assets/js/47.73c909c1.js"},{"revision":"c171eee33f0834c2a088c117843f46e0","url":"assets/js/4838deb2.dc196cdd.js"},{"revision":"6d0582498eb60f9b76c4d01597a634e6","url":"assets/js/4900.4a85eb3e.js"},{"revision":"6fb6b078dab7d12c96abec123f05314c","url":"assets/js/49aec60f.a89864fc.js"},{"revision":"635d8641de82cee89ec3731d990aad02","url":"assets/js/4beb5b8c.fbcbf5fa.js"},{"revision":"8f3ae8565f9796a5e4f51bbbfdf30fb7","url":"assets/js/4c7ea6db.b334c712.js"},{"revision":"f3ffcfa0ece6b93c4589c4336a4c5d1e","url":"assets/js/4cdf84ef.a30cb4ff.js"},{"revision":"a7c50b4c83166c5811f53264c7f1f9c5","url":"assets/js/4d27c60c.65d55a21.js"},{"revision":"615ecb8cc35dffe5fbb4af43307e7b7f","url":"assets/js/4f644c0b.348d19d7.js"},{"revision":"f9a8e096d903fa01d0b300d3b22e6b23","url":"assets/js/4f8bb2fd.7a35b156.js"},{"revision":"4f7a3972ee83066c02fce4e0393ece5b","url":"assets/js/5008.ff0573b4.js"},{"revision":"a97d0da557019f936f18282046fc5023","url":"assets/js/5047.21185203.js"},{"revision":"bb9fb1f1eb76bc4f6d79ef43f1bbfcfa","url":"assets/js/50b793dd.0d05f03a.js"},{"revision":"a32f81919f1d177ffa3b7b91b13559e9","url":"assets/js/5117.01105d5d.js"},{"revision":"81813644be3f7485211e1b21a67625d3","url":"assets/js/51ebfdb4.d2ba2026.js"},{"revision":"e0780a882770bfbd262f4fd92412a7b1","url":"assets/js/522fd580.ad4d3814.js"},{"revision":"c92214c40860ff74c7ba2538936a4bd1","url":"assets/js/5289.e3079c7b.js"},{"revision":"fd2e356c655ef2b1d8eaf77313096cef","url":"assets/js/537.1cbfea41.js"},{"revision":"c9b45313643ad8b2d8b5ed78bab5eeaf","url":"assets/js/541d5637.f4c65498.js"},{"revision":"bac09c63ce715e44b6aeed25873a14d9","url":"assets/js/54a35160.1c61b2fd.js"},{"revision":"36c30b6eb2a74c3f01b48d68c4d0fa7d","url":"assets/js/5571.39f6adb1.js"},{"revision":"515d79509ee085cfb4318a139262ec1a","url":"assets/js/55aaead0.1ee34e97.js"},{"revision":"d436f45843aec58cfc8245d580ed01cf","url":"assets/js/5606.231f2c50.js"},{"revision":"46cde886c800f4242d9fe79bf7a991ba","url":"assets/js/563b5c65.cbd7a030.js"},{"revision":"b731d0fab1bc05958db84db5a5aa4897","url":"assets/js/57ecc2b7.307cbde1.js"},{"revision":"251439a155eab1e6a98628aadeaf1f94","url":"assets/js/5834.82c62804.js"},{"revision":"46b78b6a6919aa97f652c3ca53692fe7","url":"assets/js/584.ac6b39cc.js"},{"revision":"fa33c6be037b2e675dcc282585640739","url":"assets/js/588dd44d.653bfcb6.js"},{"revision":"c42c79a6a0b28b539403dbfb0d10f328","url":"assets/js/58fa4e48.fb001e3f.js"},{"revision":"0d507a80392691b7135660c612b9f0dd","url":"assets/js/594bb6c0.b3907b78.js"},{"revision":"502df5fd75e93e336f9921971de2b691","url":"assets/js/5a5e1dd9.21928673.js"},{"revision":"b9ee1f2a1c1d195a4089ac0567f00b72","url":"assets/js/5b3491ef.75bbb11d.js"},{"revision":"c419bf90522f378f20e1c7ef28f78bf8","url":"assets/js/5cdb4525.c6dddd52.js"},{"revision":"47f900a10abfda7c086d3e83818fae49","url":"assets/js/5e6d1f8b.934cc0c9.js"},{"revision":"f9ae90e26740999e8971989e8ba4236b","url":"assets/js/5e95c892.f99d74de.js"},{"revision":"aa97e3f3292306b1fec95699138273a6","url":"assets/js/5e9c3b6a.93242d85.js"},{"revision":"68473e3e80992f987e0c9d0b92a4fe21","url":"assets/js/602bb363.fd408ba1.js"},{"revision":"4546372d4cdc8a18b2442a4930f84be6","url":"assets/js/61aaacfc.ee9824f2.js"},{"revision":"93bf132f3e970dc29f500652dba951cd","url":"assets/js/6228.62ee8f75.js"},{"revision":"5b24c9cce868af1a0ae59ba4ebf62435","url":"assets/js/626.a9e6927c.js"},{"revision":"79b41ec7703bc12dc2d09a3a233ac19f","url":"assets/js/6304.d9ae89f9.js"},{"revision":"e1b33af707afdaab4bd8aa22d5356aaa","url":"assets/js/6316.c9bb9321.js"},{"revision":"755fe1a4e54524dfb235775179bd0e8a","url":"assets/js/635cb825.8ae4e3de.js"},{"revision":"1f6ab7b93e9c82fc52c3e8fa528c7b48","url":"assets/js/638.744ee2f0.js"},{"revision":"e613179f9b3f5e4c10954877d22ceda5","url":"assets/js/6415f59a.c6b46e09.js"},{"revision":"9a0cb0aa765affa884c483f0c671e8ce","url":"assets/js/64614d1a.b87227b3.js"},{"revision":"c54008fef145dcf42151b59aa25a44d6","url":"assets/js/6475d366.c9e5544e.js"},{"revision":"41f6037d16a4e9e3ae29d7e0d16db0cf","url":"assets/js/6557cf1a.96a44d53.js"},{"revision":"17a53e197a585e3588aa8a88460157b2","url":"assets/js/6577a0df.1cd70111.js"},{"revision":"9064ae22067bcb49cc7ad6e2bbbf2b03","url":"assets/js/65bc360d.a4d61c87.js"},{"revision":"5e619047ba1d0d1ed58bdfbb9ac1e917","url":"assets/js/6638.b0b04cfa.js"},{"revision":"a7a6d5010f36151371fb264efa5d5251","url":"assets/js/6762.1f5e3817.js"},{"revision":"920cb27b3f3ea0b312b2104a83a1892e","url":"assets/js/6775.cba7a5b4.js"},{"revision":"ee615f44f417fb2f41fcb3fb42b46b95","url":"assets/js/681b7af4.36968c9f.js"},{"revision":"913d95d61a691f13a5a27f58d89a376d","url":"assets/js/69df999c.0cbcf1ea.js"},{"revision":"7e6a8a957d20f9a18d227ad06e63d61b","url":"assets/js/6ad9afaa.34dd7909.js"},{"revision":"c4f8c56dc466b6de5ae0286a1b12adad","url":"assets/js/6b902128.21b9f067.js"},{"revision":"3986c3647887e503c98ad4b5b4cc933e","url":"assets/js/6cd9d647.c594a619.js"},{"revision":"c2a7bb04d3b0b77a4a7f043f6ff8003a","url":"assets/js/6d6bd066.49f7814a.js"},{"revision":"a9bed8e73a852a7cf67f3c416fb823a9","url":"assets/js/6e3d6b93.81f292a0.js"},{"revision":"ccdc5c1c4f849d826d25233db16f3341","url":"assets/js/6e889b7a.12aa5861.js"},{"revision":"5ba7fcb31adaa13ff38ad6a80af318bd","url":"assets/js/6f2b2af5.c983ec39.js"},{"revision":"a6d347e9646e5d23447291e83d2db9fd","url":"assets/js/6fedb7a3.e8aa1dd3.js"},{"revision":"db54673973b0ee155e30c764a5e24e87","url":"assets/js/70321d34.67854963.js"},{"revision":"df3307288575627d1439d1c002e076f2","url":"assets/js/7188.9be0b533.js"},{"revision":"f46670eff76bd7dbc9b4f87dc1c2360d","url":"assets/js/7192.8fd9f9bb.js"},{"revision":"336fe7a9b93ba5f8777da941d02e2914","url":"assets/js/71bd92ad.9c75a30e.js"},{"revision":"3d4b2aade19552d0dbbeb73d46de8bb3","url":"assets/js/71c41cca.090cdd3a.js"},{"revision":"af9232e3b979cc73facc6cca2014df67","url":"assets/js/72b3e7dc.16075257.js"},{"revision":"67a13a2dc3055b3a02fd68700b68b708","url":"assets/js/72fea898.c22e3ec4.js"},{"revision":"4d7c9bc6be56a0717c2a30004dc78bef","url":"assets/js/73c38494.c1114e14.js"},{"revision":"f9afd34ea99b81d70619a8c5df8b210c","url":"assets/js/73f32b8b.61b77f49.js"},{"revision":"bb22db09ca9f40698657eee0bb8906d5","url":"assets/js/7411.d34a42cb.js"},{"revision":"f75602253625051f47af6a2818bce4d8","url":"assets/js/747.bc1878ba.js"},{"revision":"f0c1e81b728085db02663cbdc0ee817d","url":"assets/js/7515.fb042b69.js"},{"revision":"7c926f5358d78e32168b445782d0f5e0","url":"assets/js/754296bb.8c63f57b.js"},{"revision":"f68a75df0507ae96f6dc7b4e7c604d02","url":"assets/js/7584.855762aa.js"},{"revision":"8ded373bd1db433c76d7b7b89dabd368","url":"assets/js/7585.21c79de9.js"},{"revision":"a846d1d50e09b97422103e18774c8eb1","url":"assets/js/760.98e67eab.js"},{"revision":"54a94da4bf8e9f11c9519afb3e2aa539","url":"assets/js/762.220e4ca4.js"},{"revision":"a4abfeaf696bbe4fd882c66561015d51","url":"assets/js/775.a4b47dfe.js"},{"revision":"cb3bdf51292c36c8f5e23b224acfc5a9","url":"assets/js/790b642d.72ca4e1b.js"},{"revision":"288f52f99cc213c9a17fb83022d8f781","url":"assets/js/7970.170ddeb0.js"},{"revision":"9644a9d7d74ddfb70b512ac37c069a4e","url":"assets/js/7998.a2e4d5f3.js"},{"revision":"ad40e202a81412e983ee313c6abfb793","url":"assets/js/79ee951b.c616be7f.js"},{"revision":"6ced36d922fa63603fa2ee27f8c28441","url":"assets/js/7c328fb0.fd262c79.js"},{"revision":"b58c0d34b1a001b2484df1c68ec96974","url":"assets/js/7e75dadf.b1047d55.js"},{"revision":"c82cd1fcd982aca2db366d6b0cfd6bf4","url":"assets/js/805.bb1da7b6.js"},{"revision":"d0f2164ebf234154cd7e38439923673a","url":"assets/js/80f373f2.706d1718.js"},{"revision":"07a3cc4ba42d545ef1e1ee146639e157","url":"assets/js/817191e9.7187bba6.js"},{"revision":"f56ec6537a458e80bf7747d32fb3acde","url":"assets/js/81e8afad.ecf87a34.js"},{"revision":"a6c70e1d189cc6f8d2c911a1eb3c798a","url":"assets/js/8225.e7b15e8f.js"},{"revision":"b7ef2774b1919c986d74189170db6afa","url":"assets/js/824c452b.586c59e2.js"},{"revision":"cef43c12a7470e6bd6baba25d866b18d","url":"assets/js/82c03827.e47ccafb.js"},{"revision":"8a43cb79f3e0c41a2d12fbec0125f664","url":"assets/js/83236138.568dcac9.js"},{"revision":"cd3d30bdaf88fa453d3d7d4494a154c8","url":"assets/js/83fa3eff.8abdbcfc.js"},{"revision":"8dc46a8d8abfa9448ef3e677c6a04a80","url":"assets/js/853.6812ef3e.js"},{"revision":"d638a4cce2d603ebf9c5302ecac4817e","url":"assets/js/854b257e.e2b81d9e.js"},{"revision":"29d3c673ab9055fa795f557b9b25f656","url":"assets/js/85ccb835.15e8142a.js"},{"revision":"517e2e633c8b3ce6a4ff509e8868f7e0","url":"assets/js/86170a86.07644e48.js"},{"revision":"3a4d168c9ef456cdcfdbf4f909669fb3","url":"assets/js/868.4d467bc6.js"},{"revision":"af5a2da55694d5eddd047f0e66c47de9","url":"assets/js/86d633e5.2c591101.js"},{"revision":"f450a0b31c25f8325f620fee1e345f07","url":"assets/js/87531641.090a1d2d.js"},{"revision":"b7b8efcf2c1ae0ea34d91b69742dc075","url":"assets/js/877129a0.3d1f670e.js"},{"revision":"6b11f1c58d0e683a76157c68c829872b","url":"assets/js/87d5db97.40cbc01f.js"},{"revision":"2159f9f34828189596afdf00ac028b6d","url":"assets/js/8805.3225cd25.js"},{"revision":"91986cb146aebc85a326f441f4a6a2c6","url":"assets/js/883b3acd.e407527b.js"},{"revision":"bca398eac431d53bffac077e1f1311ed","url":"assets/js/8853.7a84ba1d.js"},{"revision":"de48e4b4c2593d9f52df615d63ed7f9a","url":"assets/js/888a5ebe.15f28193.js"},{"revision":"f63c1c360d6113a916113c389004cd9a","url":"assets/js/893c6fee.9244e5f3.js"},{"revision":"33d942dc1781b05644a2d4ad39b5aefa","url":"assets/js/8a578643.7a612d22.js"},{"revision":"bd0dc918eab4ad81f6e829110e788a61","url":"assets/js/8b23f58f.d08f1e01.js"},{"revision":"95da7e7a24b66a060d6a960fbeae2211","url":"assets/js/8bdaa531.35e46b01.js"},{"revision":"802edb0c0449de91bf1c03f56086e376","url":"assets/js/8ca7e4b3.ed205154.js"},{"revision":"10c1281c88408be9dbe4839f7ed8fb8c","url":"assets/js/8e0be0d1.c3e52826.js"},{"revision":"53193f70fb89d55b04a0774af0745082","url":"assets/js/8e6a4e74.bb49924a.js"},{"revision":"44bf6cf36f0f469ba17f50b2bbef2a3b","url":"assets/js/9039.0c411ce9.js"},{"revision":"8968bd6eed0d649759c5d28e17717f46","url":"assets/js/9197ae7a.fe31322a.js"},{"revision":"fe0f71a18a550cb0ec1a45346a42bf5a","url":"assets/js/9229f78d.148bac4e.js"},{"revision":"0fd76ce1b6458d564fabff84b14a0428","url":"assets/js/932.6ad772e7.js"},{"revision":"026e1cec003a50e9841f371b36e031a7","url":"assets/js/932.9d69cd03.js"},{"revision":"c849ee038ee58c0f66f8e74114d236af","url":"assets/js/93456434.1fa6681f.js"},{"revision":"14539cdeafe534777260d57b8ab70076","url":"assets/js/959b8896.c61834c4.js"},{"revision":"b06b08cfde867cddfbe7d6fbd1c64e99","url":"assets/js/95bcd1dc.76d79117.js"},{"revision":"0191e1c4c1be066fe263a765e0d62644","url":"assets/js/95d63b84.b8de10ad.js"},{"revision":"d65f4d77d2dea15d14b99a48b68b1998","url":"assets/js/9861953a.2a5e9852.js"},{"revision":"ede1d0683c09b97b80eb1187c3142789","url":"assets/js/9951fe7d.1b69ed69.js"},{"revision":"8b1edb066a88340ffa8d20a206a97f32","url":"assets/js/998.e1b259e9.js"},{"revision":"ed05bffcaad09ac102f395dea3dcef9c","url":"assets/js/9ac34ba0.a2bef781.js"},{"revision":"3d7d0e86f7bcece07609bdc48dad49f0","url":"assets/js/9b8d311d.285cc04f.js"},{"revision":"3e020eccb88fceab8140f36e3b52e6f2","url":"assets/js/9c2278b2.f32b9312.js"},{"revision":"82e2e3718c299bb800c542dc6511bcb4","url":"assets/js/9cd2fc0a.e6911e14.js"},{"revision":"7b41e8961b5f88d4a98eabff58b64470","url":"assets/js/9d4488d1.e30723b8.js"},{"revision":"01be2f7d65a20b1f064dfdb7f3678e9a","url":"assets/js/9fdc340b.7af2d5d2.js"},{"revision":"a325f6d2c7d055cc572833b7c34633fb","url":"assets/js/a1e55d50.f38ded31.js"},{"revision":"7c1d91d2adf6d64fc58ee0e3cfe04dce","url":"assets/js/a21e984c.ffcf08e8.js"},{"revision":"7e77758e125612b7439cb728770d4965","url":"assets/js/a2ca8fe8.d8e89f5a.js"},{"revision":"83d2a55e44c05a913885b2c52ae53d6b","url":"assets/js/a2d5f767.8eb3bf25.js"},{"revision":"e3c2317d9843e6b2b90de908c5f53a9b","url":"assets/js/a2fb89b8.29d78a6e.js"},{"revision":"12826f93bd2f5eb21432722aca46bc1a","url":"assets/js/a305e2ac.0d7588db.js"},{"revision":"3ab52641a43e33285868acc564511f1b","url":"assets/js/a4c78573.efad8319.js"},{"revision":"84aa54213e3e354e39171a96d07d1034","url":"assets/js/a4e7ef95.6180003b.js"},{"revision":"c52013d51b5182bff9978553a4a6ccf8","url":"assets/js/a62eaa10.e9ee930a.js"},{"revision":"676017e04f908fc412828ea04d4423fa","url":"assets/js/a6eaa2fe.026d85d2.js"},{"revision":"37ecafaa9a3f57eb4930de7f9f8c1fa8","url":"assets/js/a7062d46.660f51a1.js"},{"revision":"dc9845f7de45ef97887f03d91a263ddd","url":"assets/js/a7456010.b547c8ef.js"},{"revision":"d8fc36ae745d6a3bcaa8673f064ddba1","url":"assets/js/a757a55c.299ff942.js"},{"revision":"b387462dcc39cde041beb2d6b976cdab","url":"assets/js/a78b3ba0.1a283d52.js"},{"revision":"4a0a2054df71b457cfc7d961b87bdb94","url":"assets/js/a7bd4aaa.91a2aee1.js"},{"revision":"00f685f029e5263aa803dbbc272c19e7","url":"assets/js/a7ddcfcb.03e225fd.js"},{"revision":"e7199eb6dfcbad55070506c95fd7472b","url":"assets/js/a8bdbcd5.cafd5a4b.js"},{"revision":"5134c3ab2fe5842b5e39033649ee1a6b","url":"assets/js/a94703ab.b05c2422.js"},{"revision":"74c3938eed4ca1dd86020d1210cd54b4","url":"assets/js/a9c868b9.c1a103c5.js"},{"revision":"34c5ea0160c1955de8b280a1fce8ab60","url":"assets/js/a9f9a930.e2ade6b4.js"},{"revision":"9be4e1063e8a5bd0ca8991b99014b5e5","url":"assets/js/aa276556.a87941c2.js"},{"revision":"5fe9e1b8b74db92145b25e80cd620c4a","url":"assets/js/aa7b0feb.cf33c7a5.js"},{"revision":"3b59c7dbf14214a2c97e06921ec9385a","url":"assets/js/aa81450f.9237a65e.js"},{"revision":"4fb1a22ba86ba22dfd600c464ee3c452","url":"assets/js/aba21aa0.6ca42716.js"},{"revision":"b6985466dfc45a81cb4ebea36a5aac7b","url":"assets/js/ac61b989.5ce7fdf9.js"},{"revision":"44e16fb6cfb9c56d3f67ea848249336b","url":"assets/js/add4bb7a.b46e152e.js"},{"revision":"5da37ced796fe8ef7e24e1623f4a586e","url":"assets/js/aeb124bd.3de743db.js"},{"revision":"62ad3ded9d5ffbfaf690161120114a53","url":"assets/js/af70a4d6.2b00557b.js"},{"revision":"ca83767b49a970d3397163d4e33b29ca","url":"assets/js/b1153a34.ddb59bc4.js"},{"revision":"9cf99b09caad317709b56fa46ac33b05","url":"assets/js/b158dc01.0d937afc.js"},{"revision":"85df4841000f50911c0350d65d75e4e0","url":"assets/js/b21946ae.f35d5925.js"},{"revision":"57fd217c6cc8955e6771b51378dc4870","url":"assets/js/b222cacf.b6804857.js"},{"revision":"d798755d85a5e06b2f29657860f873e4","url":"assets/js/b24d385c.f8b9d5df.js"},{"revision":"7fbf81163bd97827c2cb652d547838f2","url":"assets/js/b496f3e3.315bc54d.js"},{"revision":"1859e6224a119a6fed9f9b6b1cc928ae","url":"assets/js/b5210edf.f390e13c.js"},{"revision":"f155cec306a5f61c5c104adc33039fe2","url":"assets/js/b5eeabfa.3c98e5bd.js"},{"revision":"9dbdf4b5a5695335da9ef16282c8fad0","url":"assets/js/b60da6d7.5e2a3c2c.js"},{"revision":"34a6b64fcf2fc87ad9e67c312a97f2d8","url":"assets/js/b60de388.782494c7.js"},{"revision":"5729e2b931f81c130f7c4f66a40534b6","url":"assets/js/b6386ec9.648b38a1.js"},{"revision":"f2d2d50434c5453828b542d69b9df46f","url":"assets/js/b6438b6d.28a71cff.js"},{"revision":"b374688a4c017fba4d184d80146e4e90","url":"assets/js/b78eb33d.0a3cb430.js"},{"revision":"0d7c20fa59c028ecb8d7c52d7adca49e","url":"assets/js/b7bb49c4.45c1899f.js"},{"revision":"d8b83bd2a7d4aa5056a1e1e98aee8470","url":"assets/js/b90963c6.53226c5e.js"},{"revision":"a118959ecf06464697288a82a09ceae1","url":"assets/js/bcc35f8a.6db0fd7b.js"},{"revision":"9f0120d809eae398709c67167e3c8522","url":"assets/js/bd760347.a266da97.js"},{"revision":"5c768e99d4a47d07c23b6d3d22320a76","url":"assets/js/becf8c88.43253f02.js"},{"revision":"ab04fafd6976893765ff102a4d0ecf72","url":"assets/js/bf3ddb91.ff07937c.js"},{"revision":"433053a8731c7445d0d5f0fff1d3ea1b","url":"assets/js/c0dca479.8ba434d6.js"},{"revision":"6e1f4071853bbf0c814e145826283805","url":"assets/js/c10e86aa.be5d13ee.js"},{"revision":"52fd9427a3e5de2746048dc9dff29e49","url":"assets/js/c141421f.18373995.js"},{"revision":"59b8b90cba326d05d439c36968363ff0","url":"assets/js/c156da02.89c972b9.js"},{"revision":"33bcdfefb47e7cdfcc910743e68f193b","url":"assets/js/c4dcc6dd.e4fc47b0.js"},{"revision":"df5e3ac7ad78db517593301029a4b808","url":"assets/js/c4f5d8e4.ff5b7cbf.js"},{"revision":"8427c8afbeb93980f8258d0a82ca5493","url":"assets/js/c5f4348b.b7f1a472.js"},{"revision":"7fb56261fb3b54168ecfd6ae2afaf541","url":"assets/js/c72cf9c7.eb5b5db8.js"},{"revision":"946354533e199b0b9cf884b706df61c8","url":"assets/js/c737e1a5.12f47cd7.js"},{"revision":"0fec9ea1574adf4c3ea42d5086df81ae","url":"assets/js/c78ecae9.37fedfdb.js"},{"revision":"0cfdbaee6502e53707d34aed8b510261","url":"assets/js/c8018499.01e5ebf8.js"},{"revision":"2302cb521c326228e739fbcbee5a75dc","url":"assets/js/c84a9914.c4bbafbd.js"},{"revision":"9f0f7a40bed6d0e3ec0f57a116512e5f","url":"assets/js/c8a93e67.f773252c.js"},{"revision":"3493171bb7fe2928b5f2edfdf0e5f033","url":"assets/js/c9947f43.be91ebcc.js"},{"revision":"a1e008903c6a2b8187fd5b9bc4739ba4","url":"assets/js/c9a1eaa2.3dcb7a1c.js"},{"revision":"273012ad7bbbb8ad9a5a79f52b6a026d","url":"assets/js/c9ae34fa.bdc72722.js"},{"revision":"b395037a57245ba6220645ecf181abd1","url":"assets/js/ca8a1b2c.de55429c.js"},{"revision":"3800700ef6451896ead1b307bfd832b4","url":"assets/js/cc2fcaab.89f1bfff.js"},{"revision":"4aa35462358a7a4560f2f51faded79dd","url":"assets/js/ccdb3c45.fb8ad634.js"},{"revision":"e36eb0cc0813010c0b4258d122f328bd","url":"assets/js/cdc590f8.a21df4bb.js"},{"revision":"5364ddf05640bf1a4bb4628490e507a3","url":"assets/js/ce7e7ba1.5528d0c5.js"},{"revision":"288faf23dbc67eceb7dc45724e8353ee","url":"assets/js/cedf0e63.c6bae853.js"},{"revision":"e433529b8534a3e952eca6c8a85afcab","url":"assets/js/cfc0d51c.2dc0c1f3.js"},{"revision":"c047befd570eb3601ec51e0dd2761646","url":"assets/js/d00b9fd9.e13ea00f.js"},{"revision":"221cdbb6ed256e91ad32c3690bb3d912","url":"assets/js/d07a3d34.e08d64bc.js"},{"revision":"c89d6205706308be4720536d2b0489e5","url":"assets/js/d0ab59b0.8a2acc77.js"},{"revision":"481f69cac78c764de6053f09dca5a94d","url":"assets/js/d26b0f2c.d8db6166.js"},{"revision":"c1374576ec1c598360bf5fece4b96292","url":"assets/js/d2a9048d.ba804775.js"},{"revision":"2aed72f03038c46672bffdb76119f21f","url":"assets/js/d2ba5076.a623c56e.js"},{"revision":"e2395e2151c15ce89c974e6be7260c33","url":"assets/js/d3585a2b.0bee008b.js"},{"revision":"65b8afa7278d8b4635100c3484305c88","url":"assets/js/d45ccebc.011d9008.js"},{"revision":"19918a531960517fc2855a721234d257","url":"assets/js/d494a195.0bf175ac.js"},{"revision":"4342dc266b5a1c60a42bc148267418f0","url":"assets/js/d63ab801.58fe9274.js"},{"revision":"0808964e524d4735f6d5e8dbbb1e172a","url":"assets/js/d89bf822.383b7ebe.js"},{"revision":"355ead40519c3d46478bdf02b583efe1","url":"assets/js/d9cff955.848dbe7c.js"},{"revision":"a6f9aee3cbe1cf3ed9f51c442012c327","url":"assets/js/d9fe55b2.dc521395.js"},{"revision":"179ee40d64b8f06de0bd40b46b347586","url":"assets/js/da4fe776.a6c94c4a.js"},{"revision":"112bad154367925886c42e10b9adf812","url":"assets/js/db6afc29.0dcda6fd.js"},{"revision":"db963b9260ffce9ecd69608b30583c03","url":"assets/js/dc030738.734baccf.js"},{"revision":"5c39e6faaaf71ca9b8213130ea7e8386","url":"assets/js/dc109391.8a4183a8.js"},{"revision":"584469917bb330b89b817bc7f99747ed","url":"assets/js/dd1fbe6a.8aff933d.js"},{"revision":"85bb67370495dd692c6a57ad809bdf03","url":"assets/js/df2a4a59.1703c395.js"},{"revision":"a8e897324aa821cb890728d9ccb24122","url":"assets/js/dffb9609.4dcdff21.js"},{"revision":"86233958464c04f0048c475997b8a2f4","url":"assets/js/e10e131a.dfd738a7.js"},{"revision":"57499282cef8648c18aa5706f32dba1a","url":"assets/js/e17e6af5.9fd2a9f7.js"},{"revision":"d80e3a3649dad3ba35b748b342903ad4","url":"assets/js/e1a53158.d973d1e3.js"},{"revision":"99461f1799fa3b4735fa327228a86bac","url":"assets/js/e39d40ed.97a09bac.js"},{"revision":"d9ea0bb2882177798a9c6eeba2b51dfc","url":"assets/js/e3b728f4.283413e9.js"},{"revision":"c6ca6d090c5df8aa6974f3f64eca2b88","url":"assets/js/e3cb94e1.d4c5e1b8.js"},{"revision":"e8c2cee6d5a9014e5eb6717ab5ae1803","url":"assets/js/e47fd75f.9aa90534.js"},{"revision":"9f43a522837b266c333eeb71769ffef7","url":"assets/js/e48b3322.e00298ed.js"},{"revision":"684d4192e004d34a9ef5a681414b236a","url":"assets/js/e4e92f42.85f5df03.js"},{"revision":"fe3028cc76590b0fb25818ff38a549dc","url":"assets/js/e5f7cd7b.4dadc77e.js"},{"revision":"f9ed86d5e4891969ad2e29c3d845d8fb","url":"assets/js/e6501e5b.08916f03.js"},{"revision":"e9571662fc05cc4c450ae948b8fea3c2","url":"assets/js/e682932b.09ac1e7e.js"},{"revision":"f5428daca44162702a75924d268a3dce","url":"assets/js/e6b53073.6f6be862.js"},{"revision":"8b63923e3963604015e99834d2ea7578","url":"assets/js/e76d69e4.921b4ed8.js"},{"revision":"b8cd2dada7809702dbec846916d678ac","url":"assets/js/e8d5b74b.b98dc309.js"},{"revision":"1489bd4b8ce9917d4449ae5de44e0c17","url":"assets/js/e8dd6634.76985def.js"},{"revision":"a05c949bf6681938b15f5594a3eb34df","url":"assets/js/eade58ca.8586ad49.js"},{"revision":"ef45862686bb17301aac5045d4ebe4d6","url":"assets/js/ed38b210.f69dd716.js"},{"revision":"d6c78d26dbef5f6694384301a8976ed2","url":"assets/js/eda49e41.de91ab75.js"},{"revision":"d9c52e5de5d222b627e1920a047dfc24","url":"assets/js/ee84ef31.cfad3871.js"},{"revision":"be76a0d992406c478f50066987caba01","url":"assets/js/ef72e420.29912a5f.js"},{"revision":"aeeac975ceea5cf81bc551653be8aacf","url":"assets/js/f36074be.b2819ebe.js"},{"revision":"16bda9930d932a36b1682374f0b43ddf","url":"assets/js/f3937ce2.9c1ffa4b.js"},{"revision":"ebd0560de700b34d221929695f19c45a","url":"assets/js/f44068e7.a4b1082b.js"},{"revision":"ec4857d6034a2c525bef1acf58270507","url":"assets/js/f4e5f89b.c435a51d.js"},{"revision":"19722f469024d3d6dcdd47bc9b68ca3e","url":"assets/js/f58ceb15.344a34ad.js"},{"revision":"3f9e38844c1e9c96c127e8cf40df8b15","url":"assets/js/f6420a7d.ab25639d.js"},{"revision":"2a536219246396a6178eb606b53b172a","url":"assets/js/f7e672b1.4566d486.js"},{"revision":"f32108c192d68a9e19b9aa619d022bb8","url":"assets/js/f83b6261.7b18c9ec.js"},{"revision":"8f959f7235435aafb16477da6fb5cd28","url":"assets/js/fa9e7027.13a5e52f.js"},{"revision":"c11c794f0333fc60584cb4f69d435a20","url":"assets/js/fb274994.4798fc9b.js"},{"revision":"890fafe5153bfc693515562ef0492f9a","url":"assets/js/fb57057e.9442c856.js"},{"revision":"cce5c81dcfaee2de0a91cebe660676f2","url":"assets/js/fbcb1a27.336ee4c0.js"},{"revision":"520c19dd23c7c2e446702358fb44b435","url":"assets/js/fc419e9c.c1e43472.js"},{"revision":"e4a3d6019649206948ffd766af02a6a2","url":"assets/js/fcaab584.498937ad.js"},{"revision":"f785537b7f131f4f2fa02e3adf5fc663","url":"assets/js/fe5e75f3.bde87f7d.js"},{"revision":"cf50524a6f1ad82a3636c67339807e75","url":"assets/js/main.89cfaf07.js"},{"revision":"bf9fa6c3b79bdf9c092e396074107a9c","url":"assets/js/runtime~main.2710564d.js"},{"revision":"7973de3a638578f577b9cd238386b15e","url":"basic/index.html"},{"revision":"a9c11b5df1a926b9b99938bf352aa5f2","url":"Bedrock/bds-core/index.html"},{"revision":"52e9bf4d39105ddcba499aece9f3eea2","url":"Bedrock/bds-core/preparation/index.html"},{"revision":"c1ec039dd4dd7c1b1e58792dd1c6a47b","url":"Bedrock/bds-core/preparation/text-editor/index.html"},{"revision":"ce99256ac9d5226a826eac4c6db88a7b","url":"Bedrock/bds-core/preparation/vcruntime/index.html"},{"revision":"f402e05ff2f42b55c1c719731092547b","url":"Bedrock/bds-core/preparation/websites/index.html"},{"revision":"a843146dc65527e5beda7b77d2972d4a","url":"Bedrock/bds-core/process/index.html"},{"revision":"4a459e4cd4ab23bcaf2154467a1c5bee","url":"Bedrock/bds-core/process/LeviLamina/index.html"},{"revision":"d7cef878b90bda340589b99eac8abd1c","url":"Bedrock/bds-core/process/LeviLamina/legacy-script-engine/index.html"},{"revision":"1795f0605b77b2b8c36f8430ee204145","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install/index.html"},{"revision":"9791c56a207aa6abcb4d3a0d61f0b77d","url":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins/index.html"},{"revision":"51e3afadcecddde1f8bde83d5013308e","url":"Bedrock/bds-core/process/LiteLoaderBDS/index.html"},{"revision":"7af512c68bed75a406ead8885d417701","url":"Bedrock/bds-core/process/LiteLoaderBDS/install/index.html"},{"revision":"f13aeca383fff3cdddbbc5310633d37e","url":"Bedrock/bds-core/process/LiteLoaderBDS/plugins/index.html"},{"revision":"b2e0e564d192b24e4d4671247fbe6768","url":"Bedrock/bds-core/process/plugins/how-to-load-plugins/index.html"},{"revision":"b8b81ad4b01541cbdfd1c829ac40b1a9","url":"Bedrock/bds-core/process/plugins/index.html"},{"revision":"72f16302a29fde1f8cbd681e5600afe2","url":"Bedrock/bds-core/process/plugins/plugins-loader-choose/index.html"},{"revision":"c77c9da002ca51a47ab9b328aaf50a07","url":"Bedrock/bds-core/start/basic/index.html"},{"revision":"692f8b0d053ac50153115660c4d08c93","url":"Bedrock/bds-core/start/basic/server-file-structure/index.html"},{"revision":"2264c4d04a7522de9671432c397f71be","url":"Bedrock/bds-core/start/index.html"},{"revision":"a2838fdc33155ec89e339a3fcc421f77","url":"Bedrock/intro/index.html"},{"revision":"1ae5ebfdb3d2f0cdb416cda5b1652786","url":"Bedrock/nukkit-core/index.html"},{"revision":"7a64db07b18a8e3a28a6f9d5d0d1d2ab","url":"Bedrock/nukkit-core/preparation/index.html"},{"revision":"85f862e72331578141ba6799fb9863a3","url":"Bedrock/nukkit-core/preparation/todo/index.html"},{"revision":"aa1097276c270f5b21d827b6bc4df9ea","url":"Bedrock/pnx-core/index.html"},{"revision":"094fcd33c8921210424c3e5147f3a55a","url":"Bedrock/pnx-core/preparation/index.html"},{"revision":"786d8edcb847952aaa26538e1f4f9c1a","url":"Bedrock/pnx-core/preparation/todo/index.html"},{"revision":"77ad35390c5a9ea82d4d25ac2d9b084c","url":"Bedrock/super-basic/index.html"},{"revision":"8d240b16f76cf00ba7a3db15a90e09a1","url":"Bedrock/super-basic/protocol-version-number/index.html"},{"revision":"c4d11bc5779fdb0b2240d44d2480ee03","url":"Bedrock/super-basic/server-core-choose/index.html"},{"revision":"9232e22982c679baf93a078fa67ad94b","url":"Bedrock/super-basic/server-type/index.html"},{"revision":"f0ab2f802daf8b5971c68d4a55e85fe8","url":"Bedrock/super-basic/version/index.html"},{"revision":"2f04c450c26150524910a8f7888ae909","url":"contribution/index.html"},{"revision":"a7594dc119d7a79396207545c430377b","url":"contribution/todos/index.html"},{"revision":"ec0a7462eec7c664c8bac93b78b17ae8","url":"contribution/writing-specification/blank/index.html"},{"revision":"bcfff7329763ef13aaac00790e7fc0e6","url":"contribution/writing-specification/documentation-system/index.html"},{"revision":"015153436eca40eac9f64baddf3615a2","url":"contribution/writing-specification/numerical-value/index.html"},{"revision":"ac8c7db734168bce47d93522cfd6e60a","url":"contribution/writing-specification/paragraph/index.html"},{"revision":"b747bd963c470fa15acadca42d9dc1c3","url":"contribution/writing-specification/punctuation-marks/index.html"},{"revision":"00d78e97883d5bf798cc75d7c6745d3c","url":"contribution/writing-specification/reference/index.html"},{"revision":"4ff8e86d0e3ce78b8e15293e3cd0bca9","url":"contribution/writing-specification/text/index.html"},{"revision":"7a2f4e62d7fc7549865e2406ab895e04","url":"contribution/writing-specification/title/index.html"},{"revision":"70664dbcfdf0f8c4b7e9f484a39a4720","url":"contribution/writing/index.html"},{"revision":"43f00260799eaf9c793c89b5c81b4732","url":"database/backup/index.html"},{"revision":"130e9257798e97f90a1b9670b2eacc12","url":"database/configure/index.html"},{"revision":"9d2a599e8c5ae34a9e3bc5a61e6730d1","url":"database/index.html"},{"revision":"7f07730ef991754ccb91d9ed3a70d7e9","url":"database/install/index.html"},{"revision":"31b6323dffd1d32b48fdf36018b68292","url":"database/manage/index.html"},{"revision":"4a08af4ea5a0eec86345fc4dd7eaeef3","url":"database/uninstall/index.html"},{"revision":"5c81a4d6f670fd3294c0f3d492f0fd4a","url":"deploy/index.html"},{"revision":"6d55e5dfaca00051669d0283613c84da","url":"index.html"},{"revision":"1e876d4fe5487f7b12645c1606ef3656","url":"intro/index.html"},{"revision":"7996a6226b74d5657bf434baa2c7741e","url":"Java/advance/apply-for-a-domain-name/index.html"},{"revision":"b46aa500cfafd530ce87e3dd9da55b42","url":"Java/advance/bot/index.html"},{"revision":"50ccd7b023a33d09c7521ba10533bbb6","url":"Java/advance/chinese-username/index.html"},{"revision":"b4496bae42c66e2d8a50eb49191e0393","url":"Java/advance/cross-server/build-up/BungeeCord/build-up/index.html"},{"revision":"d1bbb52b7b9660b0c2259aff2d9ad2bf","url":"Java/advance/cross-server/build-up/BungeeCord/config.yml/index.html"},{"revision":"007ffae926c22195080bb5cc9f33d061","url":"Java/advance/cross-server/build-up/Velocity/build-up/index.html"},{"revision":"52c64e22aad3f4a6666ab92d5d0035d1","url":"Java/advance/cross-server/build-up/Velocity/velocity.toml/index.html"},{"revision":"bc52266422376719d7e13b34eebcbe07","url":"Java/advance/cross-server/command/BungeeCord/index.html"},{"revision":"0dd4ae6628019b232d303e870b92cbe5","url":"Java/advance/cross-server/command/Velocity/index.html"},{"revision":"9805fb1ec74e39171c2ec4b98ab28352","url":"Java/advance/cross-server/hide-the-real-IP/index.html"},{"revision":"272b93c5b6d86a788ac5a66162666fda","url":"Java/advance/cross-server/join-server/index.html"},{"revision":"7943c5aaa56f3af21b4d44889fda1d6e","url":"Java/advance/cross-server/plugin/BC&WF/index.html"},{"revision":"1c0bedfbabe85f732c878fef9bb8a235","url":"Java/advance/cross-server/plugin/velocity/index.html"},{"revision":"6715312b54c180fdc74f978f11efc452","url":"Java/advance/cross-server/precautions/index.html"},{"revision":"e035b675028142049bfcf4f63756a772","url":"Java/advance/cross-server/server-core-choose/index.html"},{"revision":"9b3ad59b58bb8717992fee00e1bb39bf","url":"Java/advance/database/index.html"},{"revision":"b7dfa63b00c622adcf539ad351e079b5","url":"Java/advance/folia/index.html"},{"revision":"de13ff7b2094b3f747058df6c3540392","url":"Java/advance/format-code/index.html"},{"revision":"526f16652fb489e14dda418f91a3dfab","url":"Java/advance/index.html"},{"revision":"03836ee3ced516539d732e340946c248","url":"Java/advance/kether/basic/index.html"},{"revision":"577e2f5d1a621143553375a5c8fa75ca","url":"Java/advance/kether/idk/index.html"},{"revision":"489dd95096702d4f5372c883ec0aafe8","url":"Java/advance/kether/if/index.html"},{"revision":"75ae0b4a72056c77c6c2a4de2ef79040","url":"Java/Advance/kether/index.html"},{"revision":"10041d10f5e1c47475804458aee79b2a","url":"Java/advance/kether/math/index.html"},{"revision":"a29f9b3307153c3cde2e5b7db1cdd722","url":"Java/advance/kether/preparation/index.html"},{"revision":"785b3efcb4a14043276b1fee75ae7952","url":"Java/advance/kether/variable/index.html"},{"revision":"b8ac706586eed27120dd5530ce06d8ce","url":"Java/advance/Linux/index.html"},{"revision":"ac9c09d7ecb01dc270bdf99e3ead3f26","url":"Java/advance/loginchoices/index.html"},{"revision":"a8ad0135ed20c7d8e48b8d8299420837","url":"Java/advance/MiniMessage/index.html"},{"revision":"7d32717ed558babb62270a815a7cc93c","url":"Java/advance/Resource-pack-distribution/index.html"},{"revision":"0b25a1182f192ec423cba6cccbdadc5b","url":"Java/advance/Skript/AdvancedTutorials/index.html"},{"revision":"dfa6df7cad0ba3700e72620ff0b71126","url":"Java/advance/Skript/BasicTutorials/index.html"},{"revision":"b6115b8ab3f13f10f8b91876499ecf75","url":"Java/advance/YAML/extention/index.html"},{"revision":"df0e6d42f3f42072a41e6966db33be03","url":"Java/advance/YAML/foundation/index.html"},{"revision":"53e308346c39e842cfbcf7a3da12d9f1","url":"Java/anticheat/index.html"},{"revision":"d1a6886a217557040aa9dcbafe1d6241","url":"Java/AntiGrief/index.html"},{"revision":"6110156ffc3f466da28c9e40ef614642","url":"Java/basic/index.html"},{"revision":"fe838bb12df330010f8b46057251fbd6","url":"Java/build/index.html"},{"revision":"8715afc5beead35085a5315e97d4939d","url":"Java/bungeecord/index.html"},{"revision":"7e4d7fc246e28512c5a472b632e2352d","url":"Java/category/geyser/index.html"},{"revision":"357b961cba872c290a06561033c069d8","url":"Java/category/placeholderapi/index.html"},{"revision":"1b6266477dd5aba56ad8037a12eae52f","url":"Java/category/入门/index.html"},{"revision":"6ff2345dc207a44df8935d555211869f","url":"Java/category/进阶/index.html"},{"revision":"dcc7767bca4230e0175a49a4f2be0303","url":"Java/chat/index.html"},{"revision":"122874f36258aec1d76003cf326586cd","url":"Java/command/index.html"},{"revision":"4d0f996244cd4c37c5efec63985bc0a9","url":"Java/cross-server/index.html"},{"revision":"84b8d6468a463fab53054ddedc3c9674","url":"Java/cross-server/plugin/index.html"},{"revision":"7b0a31e0d6dfba4f6e2e374285252d85","url":"Java/Essentials/index.html"},{"revision":"1c18d38b17438746fba51f1deb7b2563","url":"Java/Front-Plugin/index.html"},{"revision":"0ab73757fcecf504a1e0fee06a2fa4bc","url":"Java/game/index.html"},{"revision":"dc796be78532d6d1e7b1d9e60157ba55","url":"Java/Geyser/Upgrade/index.html"},{"revision":"2004ec7276e26a96610ff33f3907f459","url":"Java/intro/index.html"},{"revision":"50272579b1ad9eae7263d4b38b512481","url":"Java/maintenance/Java/index.html"},{"revision":"5293e1eab7f076c6382c30730a96f522","url":"Java/ManageTool/index.html"},{"revision":"b3723637c1c9490728daa65fae06f821","url":"Java/optimize/index.html"},{"revision":"6816cfc234b02abaf9691ce113468e31","url":"Java/optimize/jvm/common/index.html"},{"revision":"ba3d4b082b99e61880443205ab97faad","url":"Java/optimize/jvm/dragonwell/index.html"},{"revision":"a7519554bca1709100faf1abcbafcd35","url":"Java/optimize/jvm/dragonwell8/index.html"},{"revision":"a94e6f78260b678d41058e4ba00356c2","url":"Java/optimize/jvm/graalvm/index.html"},{"revision":"873a77670e899a0a2ca71b6c0874b174","url":"Java/optimize/jvm/index.html"},{"revision":"9489836123447ecc9575aa616b4341c6","url":"Java/optimize/jvm/openj9/index.html"},{"revision":"45435b28dc631ea07019714d82d21ccd","url":"Java/optimize/jvm/zing/index.html"},{"revision":"03f99f5f357e3b5adf4450ea8779c058","url":"Java/OtherPlugin/index.html"},{"revision":"38fb71060fc5a59d8d4f4eec6cb004c3","url":"Java/permission/index.html"},{"revision":"d8d91135a2b6b5b4b184f8ee1e96a7da","url":"Java/plugin/index.html"},{"revision":"be964ce6f81f2b8501f2ca6eb012e64a","url":"Java/PluginMagagement/index.html"},{"revision":"83dcc60b286905b3618a1f5d5fe90460","url":"Java/plugins/other/Skript/index.html"},{"revision":"ff51e6e1fe25147e8aa01fb46a976f40","url":"Java/Plugins/OtherPlugin/Holograms/index.html"},{"revision":"7ca35872ec51a3e467436f9e41db7aa2","url":"Java/Plugins/OtherPlugin/Login/index.html"},{"revision":"6bfea011a8722b860a50cd700bee88f4","url":"Java/Plugins/OtherPlugin/Menu/index.html"},{"revision":"1f789bc99bb05ae48c7128513b66a2e5","url":"Java/Plugins/OtherPlugin/MOTD/index.html"},{"revision":"4af9da003a46547420ac0f11719fad42","url":"Java/Plugins/OtherPlugin/NPC/index.html"},{"revision":"2c391a5d8ac0e079f04b40d805403111","url":"Java/Plugins/OtherPlugin/protection/index.html"},{"revision":"b86961a2ecdf9bec66a1464053be3048","url":"Java/Plugins/OtherPlugin/Tab&Scoreboard/index.html"},{"revision":"cb586b3e2f351d3d3699fccb6b02a7c8","url":"Java/Plugins/OtherPlugin/Via/index.html"},{"revision":"42845cd40b42ad0be713efb91f856809","url":"Java/Plugins/Worldmanagement/index.html"},{"revision":"b598ac109eb923dfb802330f1d0c03bc","url":"Java/preparation/choose-and-download-and-install-java/index.html"},{"revision":"39a89b912af30c0ca4ae1242880d31bd","url":"Java/preparation/dumb-script-using/index.html"},{"revision":"a2fd2c269727088c1fa252f24c6c1bdd","url":"Java/preparation/index.html"},{"revision":"a53ad4e80f3694247d025aaf8aec5e6f","url":"Java/preparation/text-editor/index.html"},{"revision":"48e7e61cb4807d5680ff3ae6fcb92ff9","url":"Java/preparation/websites/index.html"},{"revision":"a537dc9608f29ba9debffa654f1bce0a","url":"Java/process/index.html"},{"revision":"a9b42fcd69c0df9c63aa3cd0e95f70b4","url":"Java/process/maintenance/anticheat/anticheatplugins/index.html"},{"revision":"e75cfe8670fc331d14ad5834a0f14972","url":"Java/process/maintenance/anticheat/antixray/index.html"},{"revision":"0d060cc8206a220c89d9ef6b3f1662f3","url":"Java/process/maintenance/anticheat/rng/index.html"},{"revision":"75bde7e2aed994172026b729a68efc55","url":"Java/process/maintenance/backup/index.html"},{"revision":"93a8818088d3db73d9718b5733c8205a","url":"Java/process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"3150966f782eea53a5c9e5611123255c","url":"Java/process/maintenance/optimize/ask-for-help/index.html"},{"revision":"127d2f458ae838d11540e98de5e11acf","url":"Java/process/maintenance/optimize/go/index.html"},{"revision":"58ad77d1453efd3eb41a4afe569193fa","url":"Java/process/maintenance/optimize/optimized-plugin/index.html"},{"revision":"3b39ba9929b0b974f526b83d4621278b","url":"Java/process/maintenance/optimize/performance-analysis/index.html"},{"revision":"10275c1f972ccb269eb591852a34af72","url":"Java/process/maintenance/optimize/storage-space-optimization/index.html"},{"revision":"91b089351457b4c2d2cf2810d0a5ba1e","url":"Java/process/mobile-player/Geyser/introduction/FAQ/index.html"},{"revision":"9fce7564c6c896180520c6a4a5e6f2b9","url":"Java/process/mobile-player/Geyser/introduction/install/index.html"},{"revision":"b5afc20ef40b7ebe2655c15394b8559d","url":"Java/process/mobile-player/Geyser/introduction/overview/index.html"},{"revision":"645150d4d2bbb156bae55a74bf67fbf0","url":"Java/process/mobile-player/Geyser/Upgrade/Custom-item-model-map/index.html"},{"revision":"4f5ff2cc4aed55bde31e917bc737131c","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/compatible/index.html"},{"revision":"c36c7ce17bc1e0197c33f7453af05626","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix/index.html"},{"revision":"beb62e8b53c21ad01c34cc3e0e542fb0","url":"Java/process/mobile-player/Geyser/Upgrade/Extended/More/index.html"},{"revision":"ed72b2d3f783e632505c24a25fbd4463","url":"Java/process/mobile-player/Geyser/Upgrade/Font-image-conversion/index.html"},{"revision":"5854f0cbc76a4addd7c5bd8f8512435e","url":"Java/process/mobile-player/Geyser/Upgrade/Geyser-skull/index.html"},{"revision":"1ed3b12292fb229d240aca8ba30d0374","url":"Java/process/mobile-player/Geyser/Upgrade/GeyserMEG4-supports/index.html"},{"revision":"fcfcc79c88a0c664977c49886d1b6d14","url":"Java/process/mobile-player/Geyser/Upgrade/Menu/index.html"},{"revision":"2bbfd37b8fe40852c07006546a65cdcc","url":"Java/process/mobile-player/Geyser/Upgrade/Slimefun/index.html"},{"revision":"f5d5ea06032a3c1d104cf02099559524","url":"Java/process/mobile-player/index.html"},{"revision":"7eb443ee5115c97f03a86b681f494039","url":"Java/process/mobile-player/Pojav_Android/index.html"},{"revision":"6a911c30e6e73ef3f45cab7ffae5cf82","url":"Java/process/mobile-player/Pojav_iOS/index.html"},{"revision":"98162b4ebd9cc548b529ccedd8b2b2f3","url":"Java/process/plugin/config/index.html"},{"revision":"cf25931e6f2ed1265267489492d608d6","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ChangeOutput/index.html"},{"revision":"4fca872f3b23afc098dc0b810946de51","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CheckItem/index.html"},{"revision":"e65c8b547a2400141973ce00df66033e","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/CommonUsage/index.html"},{"revision":"1580d84fb359ad547c4d7b93d25d8c1a","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/JavaScript/index.html"},{"revision":"de0a6c040eb2a426a10efe9cb8bdad6f","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Math/index.html"},{"revision":"ca6b3f89849eb7edf73b9c283272a2ec","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/outline/index.html"},{"revision":"6868d595bef61bb5b9c9ab21f9065290","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/ParseOther/index.html"},{"revision":"e0c2a4ce9a377d60505b486b420de864","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Progress/index.html"},{"revision":"1efc6d5cf0ed40ce9bb0803e6d2dbd22","url":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/String/index.html"},{"revision":"3c50c1926e7c2b66ee04b6ffa175e7e2","url":"Java/process/plugin/Front-Plugin/PlayerPoints/index.html"},{"revision":"fe912e8f69479143bedfa7f0919d84bd","url":"Java/process/plugin/Front-Plugin/ProtocolLib/index.html"},{"revision":"8c7c5c2738ba0ab47731c9d21a79fea0","url":"Java/process/plugin/Front-Plugin/vault/index.html"},{"revision":"c565f37859ed7a9d850412e6dbeb21af","url":"Java/process/plugin/Front-Plugin/XConomy/index.html"},{"revision":"c7066f6b1332334b8fba8e580a6663af","url":"Java/process/plugin/game/Nova/index.html"},{"revision":"47909abe5ff564bb2dc27a3668a2b9e6","url":"Java/process/plugin/game/Slimefun/AutoUpdate/index.html"},{"revision":"9e30d426774cf977b98d0e0902d68fdf","url":"Java/process/plugin/game/Slimefun/ResourcePackForSlimefun/index.html"},{"revision":"e3ba7c57c7c4e37520363e092b00eb0a","url":"Java/process/plugin/game/Slimefun/WhatLag/index.html"},{"revision":"878003700328a563d94d8d393214ff6a","url":"Java/process/plugin/ManageTool/AntiGrief/CoreProtect/index.html"},{"revision":"3332c3ae8b2e54823936623eecf11559","url":"Java/process/plugin/ManageTool/AntiGrief/InvSee++/index.html"},{"revision":"d8eaf475003ece5e9e1a76410a7e9533","url":"Java/process/plugin/ManageTool/AntiGrief/PrismRefracted/index.html"},{"revision":"08e197011414ad2285e8e72f3730759d","url":"Java/process/plugin/ManageTool/BasicPlugins/CMI/index.html"},{"revision":"10d6e5f820486c1d799337feeb66d8d5","url":"Java/process/plugin/ManageTool/BasicPlugins/delete/index.html"},{"revision":"bbfb4b4f9787eec21c05a63921110318","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml/index.html"},{"revision":"d03c00bb27f69e7f558647e96a5a6673","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/ConfigTips/index.html"},{"revision":"b34466a460c77df59c27dfaa2f6e84e1","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/index.html"},{"revision":"95fbe580cb38d91f67e5362844e3e41d","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/kit/index.html"},{"revision":"f290cf3db3ea0524f8f95415b057ab39","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/PapiSupport/index.html"},{"revision":"0b819164df5901b4d168592b915062cf","url":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/warp/index.html"},{"revision":"8222b058dd13d40e8e393d2dc6e0b465","url":"Java/process/plugin/ManageTool/chat/Carbon/index.html"},{"revision":"18e59d672018da09d4af01475721624c","url":"Java/process/plugin/ManageTool/chat/HuskChat/index.html"},{"revision":"b360382e24c9f04826498b75fb767a08","url":"Java/process/plugin/ManageTool/chat/TrChat/index.html"},{"revision":"052f02c2992b67877918a5498eff60cb","url":"Java/process/plugin/ManageTool/Permission/Command/index.html"},{"revision":"1ddcdd001676d05791cfd07f86ef4601","url":"Java/process/plugin/ManageTool/Permission/Group/index.html"},{"revision":"7fc6e58fc1e5c23446d3e9315485497e","url":"Java/process/plugin/ManageTool/Permission/meta/index.html"},{"revision":"9cbd5db9577a64b157619a31bbed1e2c","url":"Java/process/plugin/ManageTool/Permission/Tips/index.html"},{"revision":"040ad23c308b24a5b62d27075d535f94","url":"Java/process/plugin/ManageTool/Permission/WhatIsPermission/index.html"},{"revision":"26ffc27b737698ea504d5f775aa7f151","url":"Java/process/plugin/ManageTool/PluginManagement/Plugin Portal/index.html"},{"revision":"9c6c2d6cc22832317a8a0cfb356484d5","url":"Java/process/plugin/ManageTool/PluginManagement/PlugManX/index.html"},{"revision":"e80af3c7a87780bc3709d5663a22c9c2","url":"Java/process/plugin/ManageTool/PluginManagement/ServerUtils/index.html"},{"revision":"8eeb8635d64921374cbea1e41680da59","url":"Java/process/plugin/ManageTool/PluginManagement/Yum/index.html"},{"revision":"8245de49cf0fa090c49d38ac0f9ec841","url":"Java/process/plugin/ManageTool/ResourcePackManagement/ItemsAdder/index.html"},{"revision":"4de81f78666b587c839f601c11b9ba0c","url":"Java/process/plugin/ManageTool/ResourcePackManagement/Oraxen/index.html"},{"revision":"eecf2923586ec207cccf3b90d2ef881b","url":"Java/process/plugin/other/Holograms/DecentHolograms/index.html"},{"revision":"2e76d882adfb74c44dd5b34c7f905908","url":"Java/process/plugin/other/Holograms/HolographicDisplays/index.html"},{"revision":"a6b812652e8fef90e6c8136547ea0dd3","url":"Java/process/plugin/other/Login/Authme/index.html"},{"revision":"e90032164e98a9b775c7d4251c143389","url":"Java/process/plugin/other/Login/CatSeedLogin/index.html"},{"revision":"3242a706700d192fbae5f6297bec2ed9","url":"Java/process/plugin/other/Login/LibreLogin/index.html"},{"revision":"3089fadae6fa8e49be0a00dc63446772","url":"Java/process/plugin/other/Login/LimboAuth/index.html"},{"revision":"11e2d0e3704740b2a93a0bfc15f3d8d5","url":"Java/process/plugin/other/Menu/ChestCommands/index.html"},{"revision":"aea6531e81e43426b3d83273c852c228","url":"Java/process/plugin/other/Menu/DeluxeMenus/index.html"},{"revision":"a1c9f249632b3f86e66db1d885ac8a12","url":"Java/process/plugin/other/Menu/Invero/index.html"},{"revision":"5a8da3b55000edf39be2195d09dbe484","url":"Java/process/plugin/other/Menu/TrMenu/index.html"},{"revision":"b22aa865e9c1514d1c3f0c32868293b6","url":"Java/process/plugin/other/MOTD/MiniMOTD/index.html"},{"revision":"ba47a5488e31794eacc13e4624c0f6e7","url":"Java/process/plugin/other/npc/Adyeshach/index.html"},{"revision":"e7f10d2641f415014c3b3ec30049db92","url":"Java/process/plugin/other/npc/citizens/index.html"},{"revision":"c974486c0d6cb1170add7f93cb19e733","url":"Java/process/plugin/other/npc/ZNPCs/index.html"},{"revision":"c631b1de87bafcc9d19a81f789889fe7","url":"Java/process/plugin/other/SkinsRestorer/index.html"},{"revision":"025ecedb5e8993a741cfe84f701f0197","url":"Java/process/plugin/other/TAB&Scoreboard/TAB/index.html"},{"revision":"7d87ed841a7eb5336db1b3da033dd970","url":"Java/process/plugin/other/Via/MoreforVia/index.html"},{"revision":"ea696b744ed348a884b11ca5d1bcf98a","url":"Java/process/plugin/other/Via/ViaBackwards/index.html"},{"revision":"e9613000d8fbd4ee5503af58ac321b70","url":"Java/process/plugin/other/Via/ViaRewind/index.html"},{"revision":"6e90da2f0957db13f6957181045b47ba","url":"Java/process/plugin/other/Via/ViaVersion/index.html"},{"revision":"6d513e2a508e31d9418903aa65bd3533","url":"Java/process/plugin/plugin-abbreviation/index.html"},{"revision":"7cbc21b931392d334bd5848340e638f5","url":"Java/process/plugin/plugin-select/index.html"},{"revision":"6c3d405dc37cd875fbfc890018ea835c","url":"Java/process/plugin/plugin-signature-file/index.html"},{"revision":"bfd2db136fc864ce8e1bd7b47ebd09c1","url":"Java/process/plugin/protection/ASkyBlock/index.html"},{"revision":"78cfbb45671b0a081837bf8333e45767","url":"Java/process/plugin/protection/BentoBox/index.html"},{"revision":"b055108aad9f24d17edf12b56b31cd91","url":"Java/process/plugin/protection/GriefDefender/index.html"},{"revision":"2df41a3f005e098fbca020e13f78373d","url":"Java/process/plugin/protection/PlotSquared/index.html"},{"revision":"55daf29fa7de419da8bb3369ac4fcd44","url":"Java/process/plugin/protection/Residence/index.html"},{"revision":"9b124801bab4cf805ebc5cdf3614006e","url":"Java/process/plugin/protection/Towny/index.html"},{"revision":"ee3cc9e0d86e3a999b05945bddabf321","url":"Java/process/plugin/WorldManagement/Multiverse/index.html"},{"revision":"cdf36721bfd8b15e2cae216af2a8c68c","url":"Java/process/plugin/WorldManagement/NoBuildPlus/index.html"},{"revision":"97d376836ba5c28f888f5c41bd07b91c","url":"Java/process/plugin/WorldManagement/WorldGuard/index.html"},{"revision":"5581e18727efe785374b4e84bbc2e239","url":"Java/ResourcePackManagement/index.html"},{"revision":"d2eb6374afd6cc1f05037907a94b006f","url":"Java/services/index.html"},{"revision":"09a8b74743b7f75f0cce34dafe6af2d3","url":"Java/Slimefun/index.html"},{"revision":"0a874bc84c9980d6b27305c8ed7a634e","url":"Java/start/ask-for-help/index.html"},{"revision":"76a56fbfe7b265f625bd1406edbd7be1","url":"Java/start/basic/relationship-between-servers/index.html"},{"revision":"11809a7ee2433e7c12c59b71352147d3","url":"Java/start/basic/server-file-structure/index.html"},{"revision":"beebb60d425f6f113c44cfc1561d4cd7","url":"Java/start/basic/server-management-command/index.html"},{"revision":"dd3aa9c94ce97287bd9e0d5bb895dbda","url":"Java/start/basic/what-is-caton/index.html"},{"revision":"7503064a15a0b4af66d6ab9e4e3ac81e","url":"Java/start/basic/what-is-datapack/index.html"},{"revision":"4cffc555c2ffae68b78886c266da0f84","url":"Java/start/basic/what-is-log/index.html"},{"revision":"63d7ae6ef396c6a5641cf2d5396889de","url":"Java/start/basic/what-is-mod/index.html"},{"revision":"769ccb53414e2e3b09e5ff3cac4dc546","url":"Java/start/basic/what-is-permission/index.html"},{"revision":"5a32419fbf94424e651043a3a51b22af","url":"Java/start/basic/what-is-plugin/index.html"},{"revision":"fa472a33dd8bc0fee4010bf66fb3a2d5","url":"Java/start/basic/what-is-server/index.html"},{"revision":"84644e6a9357730e65a9f282bf69c31d","url":"Java/start/basic/what-is-startup-script/index.html"},{"revision":"6004102f4635155ff3a177bd881dc07e","url":"Java/start/basic/what-is-world/index.html"},{"revision":"d8bebc0305e75de53a6e7c1065b906bc","url":"Java/start/config-server/index.html"},{"revision":"3d78c4da7fdad4f0b8ca2e3dad598ccf","url":"Java/start/connect-to-server/index.html"},{"revision":"3b4f8354f10c3d5ead10edf58476abf8","url":"Java/start/deploy/index.html"},{"revision":"52aedc58ad53febc031025817ea68b05","url":"Java/start/index.html"},{"revision":"79d90b40520cf2d59c739a61ca6e4666","url":"Java/start/install-server/index.html"},{"revision":"bc0c143629f994cd4c96a5d51bcc00f0","url":"Java/start/launch-server/index.html"},{"revision":"645f6dca8d55e7131acb89d10c3de194","url":"Java/start/server-core-choose/index.html"},{"revision":"f7ec4c5ae7ae4838cb3d6bd73d99bc38","url":"Java/Sundry/YAML/index.html"},{"revision":"08c5961b14247497a0e6f055ed91065c","url":"Java/velocity/index.html"},{"revision":"475c10646d5900ae08c16ac488b5afa2","url":"love/index.html"},{"revision":"9256022ae82467a2865e5b499c3c4bbd","url":"maintenance/index.html"},{"revision":"20ba5d90e17cdbf3b5769b680c896976","url":"manifest.json"},{"revision":"37ee7329be4e3755c4cd6a3181abd625","url":"preparation/choose-and-download-and-install-java/index.html"},{"revision":"9ee732802f91d03d780ec5b46cbf7f34","url":"preparation/dumb-script-using/index.html"},{"revision":"68cfbdbd793876375e56c92ad6f2ef90","url":"preparation/index.html"},{"revision":"d4cc0cc6815c0d311633a447cfdd0cc1","url":"preparation/text-editor/index.html"},{"revision":"c72c06e7984cba56ae2bd56797f38db1","url":"process/create-art-assets/index.html"},{"revision":"0660b6093990e3d03948eb685bbf0cd9","url":"process/dashboard/index.html"},{"revision":"a47250fac914bf8ff43b2b055def522e","url":"process/deploy/apply-for-public-ip-address/index.html"},{"revision":"5c3ddab614658678bb114df5604d9e91","url":"process/deploy/connect-to-the-cloud/index.html"},{"revision":"8501846244ffac18833936f14afd563f","url":"process/deploy/intranet-penetration/index.html"},{"revision":"c02967c112d806d8f7b1ac6171ecf1b0","url":"process/deploy/optional-mode/index.html"},{"revision":"0bbea32385d5dc43df610453f0a9c035","url":"process/deploy/purchase-server/index.html"},{"revision":"cb4af2f802c9f3669e074b15ef4595a6","url":"process/index.html"},{"revision":"78630949fce1ecf495dcceb750da2716","url":"process/maintenance/how-to-defend-against-cyber-attacks/index.html"},{"revision":"8ca5562926d478eb088aa511bfbba527","url":"process/maintenance/how-to-prevent-crash-server/index.html"},{"revision":"34f86ccce71d173cf4b6d5804b133884","url":"process/maintenance/how-to-troubleshoot-problematic-plugins/index.html"},{"revision":"0d83811a6062e02cd3e1070247e2fc2a","url":"reading-guide/index.html"},{"revision":"38b25dd6c7802713b1026e2fc6f73936","url":"search/index.html"},{"revision":"b4ff5ec0f1759c50ceb2a527e8e3296d","url":"services/index.html"},{"revision":"3197df87d7f78446ede419a75fc72e69","url":"start/ask-for-help/index.html"},{"revision":"eb6d805190e156c90f1996504e18c77b","url":"start/basic/what-is-caton/index.html"},{"revision":"f7aaf4590f7ab03720d40ef1f8d8e365","url":"start/basic/what-is-log/index.html"},{"revision":"f24f40e6cc7b2a925705725dbae689d2","url":"start/basic/what-is-messy-code/index.html"},{"revision":"e586c12dc0e0abf9394e4b74cc3f957e","url":"start/basic/what-is-permission/index.html"},{"revision":"c15f7dffbf3ff1fd3c30299386a2495e","url":"start/basic/what-is-plugin/index.html"},{"revision":"ae9e75237f35fdbeffd04a3176520b8c","url":"start/basic/what-is-server/index.html"},{"revision":"1dedcf696c0a37515097b962f29354d2","url":"start/basic/what-is-startup-script/index.html"},{"revision":"04698cf8f134c1fdb41290221e912c47","url":"start/index.html"},{"revision":"c089dd5990f176c5af055f77d6cf6761","url":"Sundry/Advance/Linux/index.html"},{"revision":"e123876ac39c7d0dc88f3dd3d30d4a02","url":"Sundry/Advance/management/index.html"},{"revision":"1b68f35e56b9887759eb704c81ea3cd8","url":"Sundry/Advance/management/player-management/announcement/index.html"},{"revision":"abebf8ab61ddfb721dc92b81d8a702da","url":"Sundry/Advance/management/player-management/audit/index.html"},{"revision":"c8ac9a0c44dfbda5ee078c615c35bb7a","url":"Sundry/Advance/management/player-management/chunkbase/index.html"},{"revision":"302e8e8734e0d892a5f54cd4910a1e25","url":"Sundry/Advance/management/player-management/feedback/index.html"},{"revision":"90fd448a620df47d7e397bf946d3cbd0","url":"Sundry/Advance/management/player-management/index.html"},{"revision":"0cc96147eba405ab8340fb58a4c5b03e","url":"Sundry/Advance/management/player-management/platform/index.html"},{"revision":"70574330d19c17b5e0cb2cef16a87c68","url":"Sundry/Advance/management/player-management/rules/index.html"},{"revision":"493f974ebeaa21d3af5031dcffaf433b","url":"Sundry/Advance/management/player-management/whitelist/index.html"},{"revision":"23927954af2c711b5ab99a543eb2b065","url":"Sundry/Advance/management/player-management/wiki/index.html"},{"revision":"07a7865454e51774c4661514462e6d29","url":"assets/images/1-1846bb2d6987f91ce0abda9a2b4a51fa.png"},{"revision":"0a67d3b9333147a517be0d4af14ebb82","url":"assets/images/1-2e62989985c08bcd180078a0d5b4fbcf.png"},{"revision":"174c3fea4ab3278fa8e01d22533f9411","url":"assets/images/1-a0342c5a0bf3fc10f4734d8d09b489dd.png"},{"revision":"86c5e83930f02b6935d0ce129b10bad9","url":"assets/images/1-b10918e2b657a13c2797ef0745290e3e.png"},{"revision":"6c381a35edab21b69923713eb6920763","url":"assets/images/1-b124bda2da0ff91a4af4ef110ede8fae.png"},{"revision":"b7b82e793beec31da65ecc351ee3a335","url":"assets/images/1-d56247aedc7faaa038f5b26091117500.png"},{"revision":"cd83ded938157f2a8407ae9dd28d6734","url":"assets/images/1-d6e606a130b8d40ff256fbea8afe5375.png"},{"revision":"fa8cdccb67132aca896ade0758310771","url":"assets/images/1-daf76eddacdb25edc4d3e1862e24a46d.png"},{"revision":"8121f5a3381bb3117f34623182d3d218","url":"assets/images/1-e934cbb0bdc06146f2a39b25c7b62e17.png"},{"revision":"37821108b9531622f5789150ebc8bfbd","url":"assets/images/10-17df0c425165d8659e9ea883857858ca.png"},{"revision":"054dcebaf6a0b57fd0b0b45bd1564839","url":"assets/images/11-463f187972b0a5ee3a7b8b0b94e0f492.png"},{"revision":"661fc2fedbb9c3eaf6a5f50b5961b0b3","url":"assets/images/12-5146760b6cac245ec6371d636e57c0df.png"},{"revision":"75980f53a65dc1e4d42df21876cd2cf3","url":"assets/images/13-2f3db9e58a5d8406b8e462cf75d58b82.png"},{"revision":"468c8928d307118f1ac3494584707add","url":"assets/images/14-ae189bb3f1b20890250e537efd3e5a8d.png"},{"revision":"392efd48daefa0157a4594feff4c89cc","url":"assets/images/15-fbd0ec4b5c5c4ba6efacc66725a7c684.png"},{"revision":"f59c7edbde735856012411c76b7552db","url":"assets/images/16-d1ca2334feebaaeb010ddac4a459bf79.png"},{"revision":"521671bc3532bc97b3c226e86adf66f2","url":"assets/images/17-400bf8fd80df4009ab91235160f5c6f6.png"},{"revision":"e672d34982cddde821bc248fe7e06da7","url":"assets/images/18-fcf29f01840856988636322a077e49bf.png"},{"revision":"79b6acf33b35b2413051217bf10b6944","url":"assets/images/19-9dcdf263619e41a9e1d1b44bb9cdcbae.png"},{"revision":"8f056027094dfdbd60ce9139a8597842","url":"assets/images/2-00c6bd614ac79fbbc228e05972ac782b.png"},{"revision":"4dbfd7509d9e3e9b4ed5ed2276ec5826","url":"assets/images/2-2bf042e5ab3d3b4724c8b904ded82dbb.png"},{"revision":"bdfa8586889d5890d77d73211935ca9c","url":"assets/images/2-43da033ded868a5e2a2125401c01f2ca.png"},{"revision":"456de747c7f9f6f9ede607aa2ae701d8","url":"assets/images/2-5c1198ad3695e3666fe111dcd0a1fa7d.png"},{"revision":"c66afe87c217b378b0f414a6cc434a22","url":"assets/images/2-813d98ab21962d9e5bb584c064c66881.png"},{"revision":"b6cd5e2a927accfcc2ac5b74409eede5","url":"assets/images/2-b98b96ae0228f80bfe2e0f4fe0b4a2a8.png"},{"revision":"47cc8cf3238330218c19c5673656c9ac","url":"assets/images/2-e22da7bf1f79a2ff112f80f58b130c40.png"},{"revision":"45d769700a4c7e92e6a430489ffa7cc9","url":"assets/images/2-e34184d6627af8f147de0778e586ee6b.png"},{"revision":"0c64424e78a84c828be3a70782895906","url":"assets/images/2-efbab13fa8831201ef80ecec3301f543.png"},{"revision":"e9b62a7e43d5cfe6cfdd97a38d161e4b","url":"assets/images/20-84283116b360b86728c489c3345e9175.png"},{"revision":"f790f7c9f0eebdc6fa4c7f42ad6af3ad","url":"assets/images/21-dba5369b3f2fc72fc6e64a8a18faa689.png"},{"revision":"f57bc5c72d288695b58b9cf281f9d3b3","url":"assets/images/22-fad6843bd88cd16e932ba7619846a87f.png"},{"revision":"208810db7f9b824a70792e7ccfd6d5e6","url":"assets/images/23-8374b7742c58c540b7afa0273fa58007.png"},{"revision":"afa4dd34f462d61820b4746cc25435a8","url":"assets/images/24-50540bdd461cd7eb6d80691d48d88af8.png"},{"revision":"2eac5aa724787ba952c10dc76b7ba92e","url":"assets/images/25-717c47cd3c8607af481294ae0d4194e6.png"},{"revision":"3e4a7cb17984a8f1dcd3f16237f8c03d","url":"assets/images/26-ff758fd476811a4125ec6bf73e7359b1.png"},{"revision":"2337a0325b27cb6fd114de3aecbed44b","url":"assets/images/28-a2fea5dc68ac3785a96b0ffc6586136c.png"},{"revision":"ee8a8ebb15bbeca38eac9acd18efa98b","url":"assets/images/3-15dcc12fb9aa937115b599a7a388f56e.png"},{"revision":"7e99ba01ea1810bf18fc14db270c7a7f","url":"assets/images/3-1c1ab8388ae65c7d2513d331514bd5c1.png"},{"revision":"ac780f8024f13e26d454af4843c349b2","url":"assets/images/3-378b94ca43168344c14a0ede1808d116.png"},{"revision":"0e63a0359d6cacd7a91eaf77c80e5588","url":"assets/images/3-7b1b4a8b6ea191b0c5ade2bc05fb9f12.png"},{"revision":"a9bc1b5ff137e198ede7a8cda14e02a5","url":"assets/images/3-8308961c5f057b1d6af5eb4d4a38805d.png"},{"revision":"264b1092948bd4716dfd249d42bc2536","url":"assets/images/3-9d3664bad33be61791e41971d4c485e4.png"},{"revision":"b49d1fe7576bb445671fe2729c8e7f82","url":"assets/images/3-c7b080191740001cdf13291906a2295a.png"},{"revision":"08e525f1b378d56bbc4ef6f06a6f6403","url":"assets/images/31-3e6aff6b46b3aff8268dd8d261f77e38.png"},{"revision":"7badb67533428d4cff14e465bd59e422","url":"assets/images/32-f6ab47663a435e7bba6dc07d86e9fdb3.png"},{"revision":"6bd9662b0847b96483d65c61973c737c","url":"assets/images/33-5d979aa94eb9a662caea8cfd6825fbe5.png"},{"revision":"777d2796df766abfff005eff6df65157","url":"assets/images/34-e26b876481b9f433798550f51c8e6ed6.png"},{"revision":"c3b614ad435a5116f1abf09a73cc8b10","url":"assets/images/35-4e3b04344ec27d7a7f4bd98214bbc3b3.png"},{"revision":"6dc9058f6e0aabf6243492905f89ccf2","url":"assets/images/36-79ca3e3a1a8cb35fd91e3a9761d2a64d.png"},{"revision":"e9072dcd2393d649e2218c9c400f00e4","url":"assets/images/38-a68d2fc60bcc5ffbd0cf07207b21234d.png"},{"revision":"5f7feda092ba43b2b512f05173a7dde3","url":"assets/images/39-c610ea2061ae8c0eca775db062e582fc.png"},{"revision":"ecc37b05c91568af0bca2e5a5f0c710b","url":"assets/images/4-39a541cc709eecadfeff71db8d670b32.png"},{"revision":"c4fce5eff1d81b6140c4e6fcc07e849f","url":"assets/images/4-b17a0efb6c1887e326d9dd8692d74507.png"},{"revision":"9027d9585580ae9aa6e0a6b18a31ada3","url":"assets/images/4-b8cd44d251fce63b8af9885b4300ce4d.png"},{"revision":"d02ff0822b6be56d7cf72ee4cc8ac580","url":"assets/images/4-ea05864b4935ba4e65428cbce6e75bef.png"},{"revision":"62010278f7b6226745b677c1107c40a4","url":"assets/images/40-17f86ebaf310ab5070e3b34820234b24.png"},{"revision":"4ed3bfc0361b566bb9172502abdcf2fa","url":"assets/images/41-5ef9d1bfce9ddf6154bbba7e456b5a4c.png"},{"revision":"92eac9f936328115a39ee4020a034e66","url":"assets/images/5-64cd617428e7a1eea06fa93e33afe799.png"},{"revision":"5b0479370bf7cbdb0d12292ca7153d12","url":"assets/images/5-ad436380e014f6c6cfbedcdf09ab6d04.png"},{"revision":"53f55559ed36baf71ffda5f59e81ad22","url":"assets/images/6-9345a05b6def2999956fd5f5565662cc.png"},{"revision":"dffc21d76f4534c994cc2579abcbfec7","url":"assets/images/6-da6bec542850260ab00c7302000ad61a.png"},{"revision":"22124e129bc03e33854847c043733a6f","url":"assets/images/6-ebe61b8191282de04efbefb1e6fcf2a9.png"},{"revision":"935db2bd60e3af5bc4a8ddb113f3f7f8","url":"assets/images/7-40366a87a0c0b9d0801b7b0abda2268d.png"},{"revision":"d2846f0960bc6cd381234a3853fc8c92","url":"assets/images/7-b48f63493fc19f8ef9edb6b1d62522cf.png"},{"revision":"e1d9145747e276d6d84f14c6c017230a","url":"assets/images/7-cbff8b6ae946f2bf2f40ab388a798000.png"},{"revision":"09dc436fe51143761a8cca4e4c0200a6","url":"assets/images/8-7f06aff07435414af944cfb8fcef555c.png"},{"revision":"51c589f19ef4825561e7bc1ed0d0a2f5","url":"assets/images/8-d67bf9f96ec95963e0041167071b0297.png"},{"revision":"354b04796d31e478b3bde4416937244b","url":"assets/images/8-d9c594cff389f4310beb77750049dcc1.png"},{"revision":"59d97715e6c31d6877a3c45d3ded034a","url":"assets/images/9-e43f10f45a5ffda6ff45f809d45e8796.png"},{"revision":"0f251c1b457b29a471bb16d4dff44c69","url":"assets/images/antixray-mode1-1-7b6055992ef970efa7e033dd7daccf33.png"},{"revision":"3eafae947020dbce9b4c423bab10d853","url":"assets/images/antixray-nerher-mode1-2429041141df7b34cc2a2d4bf8272cdf.png"},{"revision":"868e0e1d708ebde0a37b45e9047c313a","url":"assets/images/bedrock-core-running-98b3e34dcbc9d27cb7cbc6ad239e55a5.png"},{"revision":"d9687f370bef5ff03cc9b3a507578dbc","url":"assets/images/checkitem-5bd3a6092eae0e99ed88ec205fc22194.png"},{"revision":"92360f2759d96116e90191ac2be58b1e","url":"assets/images/CIMM1-725ee96078a9581ff069d576cfec1ec5.jpg"},{"revision":"db546deff7eb5cfcc06e7d9ea3faef12","url":"assets/images/CIMM2-b936997f39e8e9ac9feeabae2abb8a3d.jpg"},{"revision":"c81c014f0361c313de14b71045da25df","url":"assets/images/CIMM3-608e4004a24234bf9bf728cf2bbd7a8a.jpg"},{"revision":"462f96c95e414cd114f8091677f217ae","url":"assets/images/CIMM4-ec0cebaa32ce77479f9fe72d074a0cd3.jpg"},{"revision":"8cb4e4765f1bcce851d2f13f78313f6a","url":"assets/images/command-89eafc160fb45fdd492b7fff9f116210.png"},{"revision":"b57c06a118f7531d9711ae9da70fd24a","url":"assets/images/cpu-36e23841a836c35af7275fd0def8dd33.jpg"},{"revision":"d31e01aec945c4b51f738d3cb0fefaa3","url":"assets/images/editor-e6680bc4644f94df939ea97743f9f812.png"},{"revision":"bd3b8f869e6dc7593e15b6d1ed7b789d","url":"assets/images/Geyser4-167ba070f31a4fc3e844bdf7139a7183.png"},{"revision":"43f9304c2f854824bde84b2d0b8e6637","url":"assets/images/Geyser5-d98c90c4a8bd14870849648eb0be20a4.png"},{"revision":"a51d354e5e8f200a92162b224a8da4f3","url":"assets/images/HbuilderX展示-16f469a4634d2efaee1a7c8f59c04466.png"},{"revision":"3b1d8a9b309d95b23118aeba8e3c11fd","url":"assets/images/hd已经归档-32ce5c9acf4b4435747a2b5c8fbe8ad9.png"},{"revision":"b0803f5ce3ac249aa40aa5bf2cbd176d","url":"assets/images/holo-17fbaba17592bd059688f650f500a48f.png"},{"revision":"66e5555d95f88ce4570cb3e5275638ab","url":"assets/images/if_2-9615792ddb097fc1344938fc12e61017.png"},{"revision":"ca8e77fd823e1816c9cb94147e504a19","url":"assets/images/if_3-36aa17b42e4eeaba28fb94100a5706dc.png"},{"revision":"8c3f5a4c4addfacad8c90c7e08caf8a6","url":"assets/images/kit_1-b48d88d861473465c02a54c7525be1b8.png"},{"revision":"fdaeeabae4366c2662025ce347e0d677","url":"assets/images/kit_3-2b42a0cac9a94db85a0d670d901df9f2.png"},{"revision":"06d6b9e1d668c0099f96e48ac8b047e5","url":"assets/images/kit_4-070fa992bcf1f72cc6580117eef48adb.png"},{"revision":"5354b451646d4c50e6411b1ad94fc4bc","url":"assets/images/levilamina-is-coming-0ec7471ed0145b7c011540983a5e7ae9.png"},{"revision":"d26fbf69f7a8affd1821930808ebe86a","url":"assets/images/levilamina-will-archived-347f871915afa5ba5ca5bf9a46450be7.png"},{"revision":"c4e45d8824ff55d06bd140b03b954dfb","url":"assets/images/lezi_wiki-15a28608022b9c64d1a319852b2d5de3.png"},{"revision":"f54e0ee94397c8f91451bdba132a030b","url":"assets/images/macOS_terminal-f90865fd5bb3791d09224092269b5e91.png"},{"revision":"513601148dd8310ab824432955791718","url":"assets/images/mcping-fd412d7682ac81a36ecbc72a04e14498.png"},{"revision":"dc5b00ad0cee34587c06987fe922428f","url":"assets/images/mcsm-818f420303a83291b81c81050a6f8088.png"},{"revision":"dbf0e10aa25ddb6abc2513e66e7da2f4","url":"assets/images/memory_1-2d0d0881c511dc8a7153b22039727ccb.png"},{"revision":"89bfe016a782fb6f14b97755fefd0331","url":"assets/images/memory_10-30217b9990965544cf5997f697191923.png"},{"revision":"08a298d9ce7db8fcaf44ba09d4ea9711","url":"assets/images/memory_3-cfa60df8d3778df64e7fb71d7b50c7c0.png"},{"revision":"f8d4a11de940a0c685f19a5564c5ad8c","url":"assets/images/memory_5-eb06b011374bbdebb24b45437883cd4f.png"},{"revision":"2de783667006346347041af990465381","url":"assets/images/memory_6-943d756069562b6f03851f820f89f548.png"},{"revision":"d11b71525c375dcd25df7cb7e99b64b8","url":"assets/images/memory_7-cfb5e75acf7f81b1c102e3612fa2e57a.png"},{"revision":"df6ce5a1ceda01114d0e6d9e3ca0afb9","url":"assets/images/memory_8-a38412c9ade579f6868e951125b8860d.png"},{"revision":"1469be74485c3d78cab31ed50c22e487","url":"assets/images/Minecraft_Formatting-a39b19a2e95eba09c60924196264b1ff.gif"},{"revision":"6d48a7efaedc5384f2b50947820c4e12","url":"assets/images/motd-6c6fb864b75d37c6ca1b8b02b5f608a3.png"},{"revision":"fe3648241511b5032954e4017ea8dcb9","url":"assets/images/nogui-0ee2248f2c7f613ac38bfa24497bd4fe.jpg"},{"revision":"98e75d885398725c2973b2c18faa3440","url":"assets/images/Npp展示-96d3618f4156f62cc5821aeb44fadf87.png"},{"revision":"5b7b22958648b66ebc65959e2ade5615","url":"assets/images/nukkit-core-running-74f6e64403faa936210cd386ac70e670.png"},{"revision":"9f354726daed130838cf693a128cc938","url":"assets/images/N减减展示-a6d505ac0ac10f4edb689668a1008e65.png"},{"revision":"93a3978dabcec68c2a31cabe83b744c3","url":"assets/images/on-b31e61a01e4652e5c7505063251327d9.png"},{"revision":"4138f97a89e1993f043e5f214ce722b2","url":"assets/images/Oracle-1-ec98bbeaf862e6959b5be928a9827443.png"},{"revision":"569f99ba677cbe894e7391cedf229cf1","url":"assets/images/Oracle-2-1ca3b3f0acad3bfb94923ea77699e470.png"},{"revision":"484e7b8ce72bca52afa34ded3260b444","url":"assets/images/Oracle-3-9342ab4ea7c086713df9b03fe40befcd.png"},{"revision":"747780787402f7f32d0855badbd59fda","url":"assets/images/Oracle-4-a45dcbbfddfcfd7f165c31f3fcbd7add.png"},{"revision":"7e65063ad6e4c0b1d185c54eb0f10e19","url":"assets/images/Oracle-5-d8820c75a67b6a3e6738c91eb935d982.png"},{"revision":"753e6541480390baa8d62945f0920d6f","url":"assets/images/paste-1-9baea0f6bf0d4c17e3f27e3a193ee19a.png"},{"revision":"2fbcc5ae09c0d4b097b3d27e87006436","url":"assets/images/paste-2-3eb65e07be5d11eacf95241f9005c388.png"},{"revision":"fd3e28ebc0b5742d516c5e746cf4baca","url":"assets/images/plugin.yml-ad3bb5bed455941c5cc0266eed11e6cd.png"},{"revision":"fba3e95b412a0a6f2d6bfd943842bea7","url":"assets/images/pocketminemp-core-running-3983cbd4c21af5d3202370355b0475db.png"},{"revision":"713b2a6628e22bbd0e0cdd379868a1b6","url":"assets/images/postyizhan-2e52a378933fa09b6c5ccba477d9d32a.png"},{"revision":"a4a6a297f809c3ae188a33f501e9e461","url":"assets/images/powernukkitx-core-rip-0b595c8c9dda4523f165d6b98f81bcf4.png"},{"revision":"f9f3adaa0749dd6d306f8e5431f8531c","url":"assets/images/powernukkitx-core-running-ca731602c2682274ba201e5640747156.png"},{"revision":"5f78631374c2caf5228752aaa84d5d85","url":"assets/images/QuerySubclasses-36e0604aca5aa19817fabdd00bd7804e.png"},{"revision":"f37603583a2726719baa0f143bdf815e","url":"assets/images/remove-item-67efae84299fd59454c08874d5c277f0.png"},{"revision":"e4ddc4cb6626331baefa9924d6206b61","url":"assets/images/SearchEvent-12d6553a6dfe58cdeb111e5af74237da.png"},{"revision":"e90b6e289c3fddedb1632b2a2ad72239","url":"assets/images/SearchMethods-1969dbd6f0f626d0ad54f59f48220300.png"},{"revision":"92dd8a02ca867a1516713de3e1ff398c","url":"assets/images/SkriptBasic1-9d4d853989a755a7fb8f3d8729bf3a58.png"},{"revision":"e5758ede6b96a631429a9b340449e497","url":"assets/images/spark_start-5c058b2ddafcc11007b1a720434a5fb7.png"},{"revision":"251027961b3f0e216c32a64a3ae8df53","url":"assets/images/spark_stop-6d40099a94854b2c7fb37f0c93c5bcb1.png"},{"revision":"d6e49c48cd74d44fbc71ce8ccb6ac17a","url":"assets/images/spigotmc-10bfd08cd29ec096f270cf8d8bf3cd8a.png"},{"revision":"1899b5e794bd3a0718ee18808faabbe6","url":"assets/images/Spigot搜索-31107185cb6639c2dedc42e7d5888751.png"},{"revision":"7acbef80cf49bfc583887ed395d1fd36","url":"assets/images/sublime展示-364bd2ba9bc88785ef1070c2111d5d75.png"},{"revision":"d701e3f7ae2fec19dfdf5843764baf58","url":"assets/images/termux_screenshot-f9c83ca2dffadc48ff9e4fa59f138544.jpg"},{"revision":"1325bb58c6b70726b6c067b0fb6be558","url":"assets/images/title-0039bbc7cfd09ffd77ce7ed729f5cdec.png"},{"revision":"1754f6b107dceb083ae285d18ebbce61","url":"assets/images/trm一定要看wiki呐-6f3eb17f10ff27494d6d82342d4060ed.jpg"},{"revision":"6292362a13f12dd56f4933d1b5c72af4","url":"assets/images/troll-icon-d4807065bef98787cedf3ebec9462180.jpg"},{"revision":"4c363353500c094347d2b37143eb239b","url":"assets/images/trollstone_i-4fb4d7cc825a688d3ec632d02ad5c65f.png"},{"revision":"8abbe4abd78e8045cacff399bb7b5f2e","url":"assets/images/trollstone_v-fd4e177ffdf2486808a9d1b6deab9b80.png"},{"revision":"4f1035b032022939f94ede6064d18911","url":"assets/images/type_1-4a2ba93b95c37c44773b1fb11817373c.png"},{"revision":"8991c5981e7c34b571f4d31f5d714c5f","url":"assets/images/var_3-532a3855856c01a401421dd32c7a44e1.png"},{"revision":"6f1656a6cd4b62661aa8c2ef877c0053","url":"assets/images/var_4-d512cd1650b8195cd19da607e1c2bae2.png"},{"revision":"1cb33245228b9159e183586c02d34445","url":"assets/images/var_5-63e9616868cd341d6164a1536cd99939.png"},{"revision":"c53bcf71766a778e79736cf7e72d31c9","url":"assets/images/var_6-34329bdc67847e260996cbfaa652d5a4.png"},{"revision":"f9fe077ea3d177f8647424d0c2a800ae","url":"assets/images/var_7-878e1011f24b9beee3e611878efe2c25.png"},{"revision":"dde81455f10bcf88cc2b1a210b85f024","url":"assets/images/VersionChoose-82039b28e929fae40de9e9b7fe4a1606.png"},{"revision":"220d092e173abed896276ec091a56240","url":"assets/images/vscode保存和自动保存-3928990c55c74f1c004fa25311053a68.png"},{"revision":"a7098136d4a0efddb9cf183a39ab481c","url":"assets/images/vul-tell_color-2dd46afeb2076cf2dc090b553cd4e74b.png"},{"revision":"fef66518ca1c6763d6574ff7510c1f3f","url":"assets/images/vul-tell_name-c8517e7683eb99dbe93e92c1066c79c7.png"},{"revision":"3ade8fadb04dcd5a1d99857d5ea67eb7","url":"assets/images/vul-tell_papiNoInline-eba02c7db779ddd7228c7f7afae94e2a.png"},{"revision":"5df9a990a0bf519746a9744d7400432e","url":"assets/images/vul-tell_papiWithInline-418cbc3a44a5f5279ba5b9918a200248.png"},{"revision":"a82f5a8ab1847d88fe4500f7dc7cb496","url":"assets/images/vul-tell_papiWithJoin-dc76106911c225daf39d1decf266a7cc.png"},{"revision":"f5288300c46aa6c544b69ef5b6b325c1","url":"assets/images/vul-tell-67d4d9b90608f69993c27af0fd942d79.png"},{"revision":"eb8b64b719fb9f1f28b6bd68c5c9b155","url":"assets/images/web-tell-90b83fdc6f88453c1c7dda00a920a4e8.png"},{"revision":"d94200c31209aa334a51499bef672c33","url":"assets/images/wiki背诵-ebe8f7ab2075e313d801e96fcee2ac37.jpg"},{"revision":"2d08d87759828183301cc42f736f1c36","url":"assets/images/WindTerm-a6c90b279d68879aa4026a51bea75f76.png"},{"revision":"c3a69ce3f9cf46ca4793c0379afa28d5","url":"assets/images/不要截图这个啊-db5374adf7a2baa07ab700fa614cf3d2.png"},{"revision":"c0a2f68fe50f978c9805ff0d6420e022","url":"assets/images/以薄面表现vs以体素表现-dc3416358aab6882217d4c06507161eb.jpg"},{"revision":"7febc56335701229a47bc8407df42a5d","url":"assets/images/保持一致的比例vs拉伸变形的比例-18f0e9ad316b00a8bd7a24633f9ecba8.jpg"},{"revision":"529538bd4a29cdbfb9de27baa0581efe","url":"assets/images/历史版本-bukkit-1-882c1e456abe0e7d4c0c56d33e7af617.png"},{"revision":"314fcf8a8b04f9b3b5018e2e8a0de246","url":"assets/images/历史版本-bukkit-2-bcc6d99035d3d51101d1ccc6bc5a2073.png"},{"revision":"5d0253e6c797f9ee3c2f8fe06ffceabd","url":"assets/images/历史版本-bukkit-3-62f23621f167870b0a7b6ff9fdb89e1c.png"},{"revision":"88078e87dc9cb6ed0242f93aaba0d5f2","url":"assets/images/历史版本-GitHub-1-3142fe235112c0771a304ad421e8175b.png"},{"revision":"e5fe0059d39d512bf56762a89e798770","url":"assets/images/历史版本-GitHub-2-3349e6408431285330006eecbdad97d2.png"},{"revision":"58421bb5ffd30bb309b8904411e15c77","url":"assets/images/历史版本-GitHub-3-cc09ccbc40dce9886198fed36e7b33ee.png"},{"revision":"ef09265c93749bcd5a4683c4ffdbe4b9","url":"assets/images/历史版本-modrinth-cf7befd3d4889d5991b690e690304f6b.png"},{"revision":"9c12729f6dab5a1a905c5fee4ab075f2","url":"assets/images/历史版本-spigotmc-0c2e75883dcbaaf0c07e332210591c15.png"},{"revision":"8a303428e0f7a88766aa922c02338f38","url":"assets/images/变量下载失败-006b8555ef520a352caf5fb3e5197336.png"},{"revision":"cabc763c099d46f589231f0b40033ee7","url":"assets/images/同类插件评分选择-a8e4a34db126bcd148cd70ab3d72a4d7.png"},{"revision":"1b6486d4ddcc6a0cd598ecea1d2fe81a","url":"assets/images/啥是TAB-5ce2d5a0e5b4dfae3a6feaf4536dbe01.png"},{"revision":"56756e4b489f3d031d0a5bd455fb4adb","url":"assets/images/啥是计分板-e9abdc754f6bc9b6ee63021c5798097b.png"},{"revision":"9c75868b965d4ea4b565bef53f96e71e","url":"assets/images/均衡的细节分布vs失衡的细节分布-bc6b9624f7780de8f9dcabf5ce98f56e.jpg"},{"revision":"acde0d13e3f5eb6583128955fd2fd763","url":"assets/images/如何使用Mclogs-1-dd41c1cbd8b0b9ca57ab3ac783d4c95f.png"},{"revision":"7fd6c73e72803df66ffd05c60f660418","url":"assets/images/如何使用Mclogs-2-12232a4b1659f13cbf0ce7c0deb15cfc.png"},{"revision":"66f37717a0733fe8fb4e84539d0fe3e1","url":"assets/images/子图标写动作-e0b8ee46515ec175f9af8e2af3d7a8a0.png"},{"revision":"c076060311ae1f0c408c39fa3d996ba6","url":"assets/images/实体纹理-ae4e8a461aa6f131cb99b36b44686227.jpg"},{"revision":"a96df8ec1c051381e439f415f3a52849","url":"assets/images/常见的HSV调节面板-5c63f894999d0c16580c2cfb12deefe0.jpg"},{"revision":"675ee258e810d755af673d96a7c39f55","url":"assets/images/括号-fb798daef18af021566d0c924b14da6e.png"},{"revision":"ce58c30b7fcee895055cf2d9c859e108","url":"assets/images/插件列表-3d9f4974d0e421d2a1b20ac275bcfa39.png"},{"revision":"99af732dde64eb21cb40b8e05b72962a","url":"assets/images/教育版的Agentvs原版的铁傀儡-3d5124a7aead5d46d6632500a08b2f6e.jpg"},{"revision":"eea3832afadfac8f7469001c9c939208","url":"assets/images/文件资源管理器-447090aefab404872bcb0a63fa21bbc4.jpg"},{"revision":"299008f0f4de79f4586302c8bd690ab2","url":"assets/images/方块纹理-7fd5ed08bee30b4a7409c0fe632a5c67.jpg"},{"revision":"3641d1263e69e9763210e25185be0b0f","url":"assets/images/旋转元素vs用阶梯状表现-d451418f274e98d679986de284289107.jpg"},{"revision":"0efcbf36d93b8f48e77ca183f61cfeed","url":"assets/images/查看语言-crowdin-78338419aa15237ce3fb84780da78506.png"},{"revision":"6263ca5bdb96df11f0a4c3550d7e7c93","url":"assets/images/查看语言-spigotmc-4fb5afe7b0c51936af29f7becc5cc96a.png"},{"revision":"f10105b8dee81f2e1beccd03d222b569","url":"assets/images/查看语言-拆开jar-da42621c5dcfbc68a22cf964326452e7.png"},{"revision":"6b3725da0d7048a4e586370e0813f7e6","url":"assets/images/沉闷的蜜脾vs鲜艳诱人的蜜脾-c4707988daffb59a15db8a82ce23d275.jpg"},{"revision":"256641b2bd6850b0fa99d9a8802f4fc2","url":"assets/images/灵魂画师教开群组服-702af6cdd0434e69fa2041ae02ebe779.png"},{"revision":"3e9827de41d242987d052a81e7c0e181","url":"assets/images/物品纹理-0518b9cd192ef0d72e62d3f40bfb80a6.jpg"},{"revision":"460977cf9a1e785b4edb69cfe51ef391","url":"assets/images/白点-4abe6568fa774c4254806000f99a490a.png"},{"revision":"f5ef1c7972c2604ae2eecfa54674f506","url":"assets/images/直线与曲线中的锯齿表现-cefd942ab4cb1c73d1217996fa141c89.jpg"},{"revision":"a14bdf5fc75d3f1d77ffc89d0c4786b8","url":"assets/images/箱形UV贴图-13aa848f6a247d66585ca2c1005bc8e9.jpg"},{"revision":"a8ad35d2aa828408bdc12b5743f3522f","url":"assets/images/经典老图-1-e434216bf53f82bff2ee723d1f655c15.jpg"},{"revision":"c81156146f8b4edb1639a08fcd23e52f","url":"assets/images/经典老图-2-143660e23d465123b6ad45e0e4db140f.jpg"},{"revision":"a4005227fc68b5e5f6037f7d897433cd","url":"assets/images/经典老图-3-c36446d5e95e490c85f7a05a39c4feba.jpg"},{"revision":"431c8c97a158d51c0cb38a74b7d7a8a9","url":"assets/images/翼龙面板-d9394ef1b57f410a120fd61309e141f9.png"},{"revision":"d115505df4d52aed3ab4113829b65ffe","url":"assets/images/自动UV-e828289da28f02c074615a6e0b54cb62.jpg"},{"revision":"f9063563cf64a78d35dce78bff2b6378","url":"assets/images/识别纹理-287ebbb6d2027c28936aa023ccca251b.jpg"},{"revision":"18d34f25131609a5c0c4e799a2e18d31","url":"img/book.png"},{"revision":"12d21fbdbd4b9abf88a9c9e0ebd38e08","url":"img/crafting-table.svg"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"fd6c16ea01029110522837dc78070b05","url":"img/favicon.ico"},{"revision":"a8ed07986c54991d1f94fe2041b19478","url":"img/furnace.svg"},{"revision":"14f8a675bdfd906587fe3ba2cb7a99a1","url":"img/grass.svg"},{"revision":"b226a8e6d12214cc275d3e77f7403e9c","url":"img/logo.svg"},{"revision":"39f28bd96fb74cffc6b9f31db8f79009","url":"img/nitwikit-banner.png"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

/******/ })()
;
//# sourceMappingURL=sw.js.map