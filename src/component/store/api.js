import {createAction} from '@reduxjs/toolkit';
export const apiCallBegan=createAction("api/callBegan")
export const apiCallSuccess=createAction("api/callSuccess")
export const apiCallFail=createAction("api/callFail")