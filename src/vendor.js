/*
 This file contains rwferences to the vendor libraries
 we are using in this project.This is used by webpack
 in the production build ony.A seprate bundle for the vendor
  code is useful since its unlikely to change as often
  as the application code.So all the libaries we references here 
  will be written to vendor.js so they can be 
  cached until one of them change.So basically,this avoids
  customers having to download a huge JS file anytime a line
  of code changes.They only have to download vandor.js when
  a vendor library changes when should be less frequent.
  Any files that arent referenced here will be bundled into
  main.js for the production build.
 */

 /*eslint-disable no-unused-vars*/

 import fetch from 'whatwg-fetch';