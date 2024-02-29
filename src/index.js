//These imports do NOT work...
// import Geoprocessor from "@arcgis/core/rest/geoprocessor";
// import JobInfo from "@arcgis/core/rest/support/JobInfo";
// import ParameterValue from "@arcgis/core/rest/support/ParameterValue";
// import GPMessage from "@arcgis/core/rest/support/GPMessage";

//TODO - import timeout funcs
// import NProgress from 'nprogress'

// NProgress.start()
// setTimeout(function () {
//   NProgress.set(0.4)
// }, 1000)

// setTimeout(function () {
//   NProgress.set(0.7)
// }, 2000)

// setTimeout(function () {
//   NProgress.done()
// }, 3000)


// console.log('hello world');

var htmlStr = '';
//onclick event

function runFunc () {
  //import Geoprocessor from "@arcgis/core/rest/geoprocessor";
  console.log("run button is clicked");

  //trigger GP service
  require(["esri/tasks/Geoprocessor","esri/rest/support/JobInfo"], (Geoprocessor, JobInfo) => {
    // console.log("before gp def");
    var gp = new Geoprocessor('https://mygis.engeo.com/server/rest/services/CAF_23777/siteacessemailto/GPServer/siteacessemailto/');

    //define the input parameters
    // var params = {
    //   "Input_Feature": "",
    // };
  
    //submit the gp service
    // console.log("before gp submission");

    gp.submitJob().then(function(jobInfo){
    // gp.execute().then(function(jobInfo){ //CANNOT use execute() since the GP service job itself is defined as submitJob() operation
      const jobid = jobInfo.jobId;
      console.log("job id: ", jobid);

      const status = jobInfo.jobStatus;
      console.log("job status:", status);

      const options = {
        interval: 3000,
        statusCallback: (j) => {
          console.log("Job Status: ", j.jobStatus);
        }
      };

      jobInfo.waitForJobCompletion(options).then(() => {
        jobInfo.fetchResultData('Send_Email').then(function(result){
          console.log("job result:", result.value);
          htmlStr = result.value;
          // window.open(outputFileUrl, "_blank");
        });
      });

    }).catch(function(e) {
      console.log("GP job failed", e);
    });
    console.log("GP service job submitted");
  });

};

//TODO - timeout does not work
      // setTimeout(function() {
      //   console.log("This message is displayed after a 5-second delay.");

      //   if (status === "esriJobSucceeded"){
      //     console.log("success, jobId:" + jobInfo.jobId);
      //     var results = gp.getResultData(jobInfo.jobId, "out_feature_class", onTaskResultComplete);
      //     console.log("past getResultsData");
      //     console.log(results);
      //   };

      // }, 5000);

      // if (status === "esriJobSucceeded"){
      
      // checkJobStatus(jobInfo.jobId);
      // console.log("checked GP job", jobInfo);

      // gp.getResultData(jobInfo, "Send_Email").then(function(result){
      //   document.getElementById("results").innerText = result.value;
      // });
      // const jobResult = jobInfo.fetchResultData();
      // console.log("job result: ", jobResult);



function emailFunc() {
  console.log("email button is clicked");
  document.getElementById("emailButtonID").style.color = 'blue';

  var emailDiv = document.createElement('div');

  if (htmlStr) {
    emailDiv.innerHTML = String(htmlStr);
  }

  document.getElementsByTagName('body')[0].appendChild(document.createElement('br'))
  document.getElementsByTagName('body')[0].appendChild(emailDiv);

};


