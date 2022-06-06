This repo demonstrates a relatively simple nx workspace with one react app and one react lib.  In this workspace, the app works as expected, but unit tests associated with the lib will not run.  I believe this is because we are using an npm package that was created with only esmodules.  In this example, the particlar package we're using is `ky`.

To clarify, I am not attempting to use esmodules as the target for my library's tests.  Instead, I am attempting to use an npm package that was created in such a way that it only includes esmodules formatted js.  This git is a minimal repro.  I chose to use pnpm just because that's what I'm using and I thought it could be related.

Below is a transcript of commands run against this repo on my local dev environment.

```
➜ nx run-many --target=build --all

 >  NX   Running global Nx CLI with PNPM may have issues.

   Prefer to use "pnpm" (https://pnpm.io/cli/exec) to execute commands in this workspace.
    TIP  create a shortcut such as: doskey pnx=pnpm nx -- $*
   


    √  nx run mylib:build  [existing outputs match the cache, left as is]
    √  nx run myapp:build:production (12s)

 ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— 

 >  NX   Successfully ran target build for 2 projects (12s)

   Nx read the output from the cache instead of running the command for 1 out of 2 tasks.
 
 C:\Repos\nx-jest-ky :: main ↑1  ~1                                                                           |  18.2.0 |  100  | 17:40:16  
➜
```

```
➜ nx serve

 >  NX   Running global Nx CLI with PNPM may have issues.

   Prefer to use "pnpm" (https://pnpm.io/cli/exec) to execute commands in this workspace.
    TIP  create a shortcut such as: doskey pnx=pnpm nx -- $*
   


> nx run myapp:serve:development

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:4200/, http://[::1]:4200/
<i> [webpack-dev-server] 404s will fallback to '/index.html'

>  NX  Web Development Server is listening at http://localhost:4200/

Entrypoint main [big] 1.83 MiB (2.14 MiB) = runtime.js 50.8 KiB vendor.js 1.71 MiB main.js 66.2 KiB 3 auxiliary assets
Entrypoint polyfills [big] 762 KiB (941 KiB) = runtime.js 50.8 KiB polyfills.js 711 KiB 2 auxiliary assets
chunk (runtime: runtime) main.js (main) 54.4 KiB [initial] [rendered]
chunk (runtime: runtime) polyfills.js (polyfills) 663 KiB [initial] [rendered]
chunk (runtime: runtime) runtime.js (runtime) 34.1 KiB [entry] [rendered]
chunk (runtime: runtime) vendor.js (vendor) (id hint: vendor) 1.66 MiB [initial] [rendered] split chunk (cache group: vendor) (name: vendor)
webpack compiled successfully (5802ad889e12c40d)
Issues checking in progress...
No issues found.
```

```
➜ nx run-many --target=test --all 

 >  NX   Running global Nx CLI with PNPM may have issues.

   Prefer to use "pnpm" (https://pnpm.io/cli/exec) to execute commands in this workspace.
    TIP  create a shortcut such as: doskey pnx=pnpm nx -- $*
   



    ×  nx run mylib:test
 FAIL   mylib  libs/mylib/src/lib/Mylib.spec.tsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.       

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    C:\Repos\nx-jest-ky\node_modules\.pnpm\ky@0.30.0\node_modules\ky\distribution\index.js:2
    import { Ky } from './core/Ky.js';
    ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      1 | import styled from '@emotion/styled';
    > 2 | import ky from "ky";
        | ^
      3 | import React from 'react';
      4 |
      5 | /* eslint-disable-next-line */

      at Runtime.createScriptFromCode (../../node_modules/.pnpm/jest-runtime@27.5.1/node_modules/jest-runtime/build/index.js:1728:14)
      at Object.<anonymous> (src/lib/Mylib.tsx:2:1)

Test Suites: 1 failed, 1 total                                                                                                                    
Tests:       0 total                                                                                                                              
Snapshots:   0 total
Time:        5.094 s
Ran all test suites.


    ×  nx run myapp:test
 FAIL   myapp  apps/myapp/src/app/app.spec.tsx
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.       

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    C:\Repos\nx-jest-ky\node_modules\.pnpm\ky@0.30.0\node_modules\ky\distribution\index.js:2
    import { Ky } from './core/Ky.js';
    ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      1 | import styled from '@emotion/styled';
    > 2 | import ky from "ky";
        | ^
      3 | import React from 'react';
      4 |
      5 | /* eslint-disable-next-line */

      at Runtime.createScriptFromCode (../../node_modules/.pnpm/jest-runtime@27.5.1/node_modules/jest-runtime/build/index.js:1728:14)
      at Object.<anonymous> (../../libs/mylib/src/lib/Mylib.tsx:2:1)

Test Suites: 1 failed, 1 total                                                                                                                    
Tests:       0 total                                                                                                                              
Snapshots:   0 total
Time:        5.167 s
Ran all test suites.

                                                                                                                                                  
 ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— 
                                                                                                                                                  
 >  NX   Ran target test for 2 projects (10s)                                                                                                     
                                                                                                                                                  
    √    0/2 succeeded [0 read from cache]                                                                                                        
                                                                                                                                                  
    ×    2/2 targets failed, including the following:                                                                                             
         - nx run mylib:test
         - nx run myapp:test

 C:\Repos\nx-jest-ky :: main ↑1  ~1                                                                           |  18.2.0 |  100  | 17:41:12  
➜
```