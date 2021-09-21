# Description

This is repository showing problem in Electron with internals of TLS.

The script attempts to create HTTPS server using (what I believe are) valid SSL certificates.

The script works fine when run using node.js:

::

    $ node index.js
    It works!


However when I run electron I get following result:

::

    $ npx electron .
    App threw an error during load
    Error: error:1000012e:SSL routines:OPENSSL_internal:KEY_USAGE_BIT_INCORRECT
        at Object.createSecureContext (_tls_common.js:129:17)
        at Server.setSecureContext (_tls_wrap.js:1326:27)
        at Server (_tls_wrap.js:1181:8)
        at new Server (https.js:67:14)
        at Object.createServer (https.js:92:10)
        at Object.<anonymous> (/home/kowal/Projects/electron-ssl-problem/index.js:38:27)
        at Module._compile (internal/modules/cjs/loader.js:1083:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1113:10)
        at Module.load (internal/modules/cjs/loader.js:940:32)
        at Module._load (internal/modules/cjs/loader.js:781:14)
    A JavaScript error occurred in the main process
    Uncaught Exception:
    Error: error:1000012e:SSL routines:OPENSSL_internal:KEY_USAGE_BIT_INCORRECT
        at Object.createSecureContext (_tls_common.js:129:17)
        at Server.setSecureContext (_tls_wrap.js:1326:27)
        at Server (_tls_wrap.js:1181:8)
        at new Server (https.js:67:14)
        at Object.createServer (https.js:92:10)
        at Object.<anonymous> (/home/kowal/Projects/electron-ssl-problem/index.js:38:27)
        at Module._compile (internal/modules/cjs/loader.js:1083:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1113:10)
        at Module.load (internal/modules/cjs/loader.js:940:32)
        at Module._load (internal/modules/cjs/loader.js:781:14)
    [1323811:0921/135757.326899:ERROR:sandbox_linux.cc(374)] InitializeSandbox() called with multiple threads in process gpu-process.



## Setup details

To setup just clone repository and run `npm install`

I used node.js v14.16.1 installed from NVM.
