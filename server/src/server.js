const express=require('express');
const http=require('http')
const app=require('./app')
const { loadPlanetsData }=require('./models/planets-model')

const server=http.createServer(app);
const startServer=async()=>{
    await loadPlanetsData();
    
}
const PORT=process.env.PORT || 8000
server.listen(PORT,()=>{
    console.log(`listening in port ${PORT}`)
})
startServer()