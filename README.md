# @ngui/common

Angular5+ UI common directives, functions, services

[![npm](https://img.shields.io/npm/dt/@ngui/common.svg)](https://www.npmjs.com/package/@ngui/common) 
[![npm](https://img.shields.io/npm/v/@ngui/common.svg)](https://www.npmjs.com/package/@ngui/common)
[![npm](https://img.shields.io/npm/l/@ngui/common.svg)](https://www.npmjs.com/package/@ngui/common)

## Demo 
- [InviewModule]()  
- [ListModule]()   
- [UtilsModule]()   

## Install

1. install @ngui/common

```
$ npm install @ngui/common --save
```

2. import NguiCommonModule to your AppModule  

```
import { InViewModule } from '@ngui/common';

@NgModule({
  imports: [BrowserModule, FormsModule, InViewModule],
  declarations: [AppComponent],
  providers: [HTTP_PROVIDERS],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

## Use it in your code  

```
<input auto-complete [(ngModel)]="myData" [source]="mySource" />
```

## Modules

### InViewModule
Handles lazy loading of Angular components
- Utilize HTML5 IntersectionObserver 
- For IE11, please add polyfill for this module
  `<script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>`
- Provides `ngui-in-view` and `ngui-in-view-loading` components

### UtilsModules
Collection of basic utility function
- computedStyle(el, name)
- outerHeight(el)
- outerWidth(el)

### ListModule

Handles list elements with highlight and keyboard/mouse interaction
- Provides `ngui-list` component
