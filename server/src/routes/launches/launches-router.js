const express=require('express')
const { httpGetAllLaunches,httpAddLaunch,httpAbortLaunch }=require('./launches-controller')
const launchRouter=express.Router();

launchRouter.get('/',httpGetAllLaunches);
launchRouter.post('/',httpAddLaunch);
launchRouter.delete('/:id',httpAbortLaunch)
module.exports=launchRouter;