 const launches= new Map();

 let latestFlightNumber=100
 const launch={
    flightNumber: 100,
    mission:'Kepler Exploration X',
    rocket:'Explorer IS1',
    launchDate:new Date('December 27, 2030'),
    target:'Kepler-442 b',
    customers :['ZTM','NASA'],
    upcoming:true,
    success:true,
 };
 launches.set(launch.flightNumber,launch)
 
 const getAllLaunches=()=>{
   return Array.from(launches.values())
 }
 const AddNewLaunch=(launch)=>{
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success:true,
      upcoming:true,
      customers :['ZTM','NASA'],
    flightNumber: latestFlightNumber
  }))
 }
 const existsLaunchWithId =(launchId)=>{
  return launches.has(launchId)
 }
 const abortLaunchById=(launchId)=>{
 const aborted= launches.get(launchId)
  aborted.upcoming=false
  aborted.success=false 
  return aborted
}
 module.exports={
   getAllLaunches,AddNewLaunch,existsLaunchWithId,abortLaunchById
}