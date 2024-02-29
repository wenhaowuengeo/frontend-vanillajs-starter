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


      // if (status === "esriJobSucceeded"){
      //   console.log("success, jobId:" + jobInfo.jobId);
      //   var results = gp.getResultData(jobInfo.jobId, "out_feature_class", onTaskResultComplete);
      //   console.log("past getResultsData");
      //   console.log(results);
      // };

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

  //send alert
  // alert("send email to Qiran");

  var emailDiv = document.createElement('div');

  if (htmlStr) {
    emailDiv.innerHTML = String(htmlStr);
  }

  // emailDiv.innerHTML = String("&a href='mailto:aobertello@cbandg.com?&subject=CBG%20%20-%20Site Access Request Update for California Forever&body=Hi,%0D%0A Your site access request for the following APNs has been Updated%0D%0A0090-200-030 : Request Canceled%0D%0A0090-210-010 : Tenant Notified%0D%0A0090-220-170 : Tenant Notified' target='_blank'# Send Update to CBG : Angelo Obertello&/a#&br#&br#&a href='mailto:chemming@engeo.com?&subject=ENGEO%20%20-%20Site Access Request Update for California Forever&body=Hi,%0D%0A Your site access request for the following APNs has been Updated%0D%0A0042-010-070 : Tenant Approved%0D%0A0048-110-240 : Tenant Rejected%0D%0A0048-110-240 : Tenant Rejected%0D%0A0048-110-240 : Tenant Rejected' target='_blank'# Send Update to ENGEO : Chase Hemming&/a#&br#&br#&a href='mailto:arthur@sitelaburbanstudio.com?&subject=SITELAB/CMG%20%20-%20Site Access Request Update for California Forever&body=Hi,%0D%0A Your site access request for the following APNs has been Updated%0D%0A0042-100-150 : Tenant Notified%0D%0A0042-100-150 : Tenant Notified%0D%0A0042-100-140 : Tenant Notified%0D%0A0042-100-140 : Tenant Notified%0D%0A0048-100-390 : Delayed or Rejected Response Anticipated%0D%0A0048-100-390 : Delayed or Rejected Response Anticipated' target='_blank'# Send Update to SITELAB/CMG : Arthur Aperez Marseres&/a#&br#&br#&a href='mailto:RBrownsey@esassoc.com?&subject=ESA%20%20%20-%20Site Access Request Update for California Forever&body=Hi,%0D%0A Your site access request for the following APNs has been Updated%0D%0A0042-100-150 : Tenant Notified%0D%0A0042-100-150 : Tenant Notified%0D%0A0048-100-390 : Request Canceled%0D%0A0048-100-390 : Request Canceled%0D%0A0048-100-580 : Tenant Notified%0D%0A0177-100-050 : Delayed or Rejected Response Anticipated%0D%0A0177-100-050 : Delayed or Rejected Response Anticipated' target='_blank'# Send Update to ESA  : Rachel Brownsey&/a#&br#&br#&a href='mailto:Qliang@engeo.com?&subject=ENGEO%20%20-%20Site Access Request Update for California Forever&body=Hi,%0D%0A Your site access request for the following APNs has been Updated%0D%0A0042-010-150 : Tenant Approved%0D%0A0042-010-240 : Tenant Approved%0D%0A0042-010-280 : Tenant Approved%0D%0A0042-010-290 : Tenant Approved%0D%0A0042-010-360 : Tenant Approved%0D%0A0042-010-370 : Tenant Approved%0D%0A0042-010-560 : Tenant Approved%0D%0A0042-010-570 : Tenant Approved%0D%0A0042-010-590 : Tenant Approved' target='_blank'# Send Update to ENGEO : Qiran Liang&/a#&br#&br#")
  //     .replace(/&/g,"<")
  //     .replace(/#/g,">");

  // var domBody = document.getElementByTagName('body')[0];
  // domBody.appendChild('<br><>');    
  document.getElementsByTagName('body')[0].appendChild(document.createElement('br'))
  
  document.getElementsByTagName('body')[0].appendChild(emailDiv);


};

// document.getElementById("runButtonID").onclick = runFunc();



