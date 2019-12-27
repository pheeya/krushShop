axios.get("https://shoppy.gg/api/v1/feedbacks?page=3", {headers:{'Access-Control-Allow-Origin': '*','Authorization':'E8FuwM7ztr1t2uxyRTQ5l0GkVkBMHVRGP45Sr87jgw9TmQwZ41'}})
.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})
