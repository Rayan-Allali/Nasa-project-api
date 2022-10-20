const { getAllLaunches,AddNewLaunch,existsLaunchWithId,abortLaunchById }=require('../../models/launches.model')
const httpGetAllLaunches=(req,res)=>{
    res.status(200).json(
        getAllLaunches()
    )
}
const httpAddLaunch=(req,res)=>{
    const launch=req.body

    if(!launch.mission || !launch.launchDate || !launch.rocket || !launch.target){
        return res.status(400).json({
            error:'Missing require launch property'
        })
    }
    launch.launchDate= new Date(launch.launchDate)
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error:'invalid lauch Date'
        })
    }

    AddNewLaunch(launch)
    return res.status(201).json({
        launch
    })
}
const httpAbortLaunch=(req,res)=>{
    const launchId=req.params.id * 1;
if(!existsLaunchWithId(launchId)){
return res.status(404).json({
    error:'Launch not found',
})
}
const aborted =abortLaunchById(launchId)
    return res.status(200).json({aborted})
}
module.exports={
    httpGetAllLaunches,
    httpAddLaunch,httpAbortLaunch
}