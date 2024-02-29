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

console.log('hello world')


//onclick event
function runFunc() {
  console.log("run button is clicked");
};

function emailFunc() {
  console.log("email button is clicked");
  document.getElementById("emailButtonID").style.color = 'blue';

  //send alert
  // alert("send email to Qiran");

  var emailDiv = document.createElement('div');

  emailDiv.innerHTML = String("&a href='mailto:aobertello@cbandg.com?&subject=CBG%20%20-%20Site Access Request Update for California Forever&body=Hi,%0D%0A Your site access request for the following APNs has been Updated%0D%0A0090-200-030 : Request Canceled%0D%0A0090-210-010 : Tenant Notified%0D%0A0090-220-170 : Tenant Notified' target='_blank'# Send Update to CBG : Angelo Obertello&/a#&br#&br#&a href='mailto:chemming@engeo.com?&subject=ENGEO%20%20-%20Site Access Request Update for California Forever&body=Hi,%0D%0A Your site access request for the following APNs has been Updated%0D%0A0042-010-070 : Tenant Approved%0D%0A0048-110-240 : Tenant Rejected%0D%0A0048-110-240 : Tenant Rejected%0D%0A0048-110-240 : Tenant Rejected' target='_blank'# Send Update to ENGEO : Chase Hemming&/a#&br#&br#&a href='mailto:arthur@sitelaburbanstudio.com?&subject=SITELAB/CMG%20%20-%20Site Access Request Update for California Forever&body=Hi,%0D%0A Your site access request for the following APNs has been Updated%0D%0A0042-100-150 : Tenant Notified%0D%0A0042-100-150 : Tenant Notified%0D%0A0042-100-140 : Tenant Notified%0D%0A0042-100-140 : Tenant Notified%0D%0A0048-100-390 : Delayed or Rejected Response Anticipated%0D%0A0048-100-390 : Delayed or Rejected Response Anticipated' target='_blank'# Send Update to SITELAB/CMG : Arthur Aperez Marseres&/a#&br#&br#&a href='mailto:RBrownsey@esassoc.com?&subject=ESA%20%20%20-%20Site Access Request Update for California Forever&body=Hi,%0D%0A Your site access request for the following APNs has been Updated%0D%0A0042-100-150 : Tenant Notified%0D%0A0042-100-150 : Tenant Notified%0D%0A0048-100-390 : Request Canceled%0D%0A0048-100-390 : Request Canceled%0D%0A0048-100-580 : Tenant Notified%0D%0A0177-100-050 : Delayed or Rejected Response Anticipated%0D%0A0177-100-050 : Delayed or Rejected Response Anticipated' target='_blank'# Send Update to ESA  : Rachel Brownsey&/a#&br#&br#&a href='mailto:Qliang@engeo.com?&subject=ENGEO%20%20-%20Site Access Request Update for California Forever&body=Hi,%0D%0A Your site access request for the following APNs has been Updated%0D%0A0042-010-150 : Tenant Approved%0D%0A0042-010-240 : Tenant Approved%0D%0A0042-010-280 : Tenant Approved%0D%0A0042-010-290 : Tenant Approved%0D%0A0042-010-360 : Tenant Approved%0D%0A0042-010-370 : Tenant Approved%0D%0A0042-010-560 : Tenant Approved%0D%0A0042-010-570 : Tenant Approved%0D%0A0042-010-590 : Tenant Approved' target='_blank'# Send Update to ENGEO : Qiran Liang&/a#&br#&br#")
      .replace(/&/g,"<")
      .replace(/#/g,">");

  // var domBody = document.getElementByTagName('body')[0];
  // domBody.appendChild('<br><>');    
  document.getElementsByTagName('body')[0].appendChild(document.createElement('br'))
  
  document.getElementsByTagName('body')[0].appendChild(emailDiv);


};

// document.getElementById("runButtonID").onclick = runFunc();



