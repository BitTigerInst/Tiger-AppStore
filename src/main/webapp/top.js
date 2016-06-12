(function(){
	  var homeApp = angular.module('top', []);
	  
	  homeApp.controller('appList',['$http','$window',function($http,$window){
		  this.appList = [];//jobs;
		  this.showApp =false;
		  
		  this.appToShow = null;
		  this.appToRecom = null;
		  
		  var container = this;
		  
		  var req = {
				  method: 'GET',
//				  url: "http://localhost:8080/AppStore_1_3/app/",
				  url: "http://localhost:8080/app/",
				  headers: {
				    'Content-Type': "application/json",
				    	'dataType': 'json'
				  }
				 };

		  $http(req).then(function(data) {
			  container.appList = data.data;
			  container.appsToShow = container.appList[0];
			  
			  console.log("receive array successfully");
		    });
		  
		  this.selectApp = function(app){ 
			  container.appToShow = app;
			  container.showApp =true;
			  console.log(JSON.stringify(app.top5AppsArray));
			  var request = {
					  method: 'POST',
//					  url: "http://localhost:8080/AppStore_1_3/app/getRecom/similarapp/",
					  url: "http://localhost:8080/app/getRecom/similarapp/",
					  data: app.top5AppsArray,
					  headers: {
						'Accept': 'application/json',
					    'Content-Type': "application/json",
					    'dataType': 'json'
					  }
					 };
			  $http(request).then(
					  function(data) {
						
						  if(data.data.length>0){
							  container.appsToRecom = data.data;
						  }else{
							  container.appsToRecom = [];
						  }
							  
						  console.log("receive array successfully");
					  },function(data){	    	  
						  alert("Note: no recommendation for this app");
					  }
			    );
//			  $http.get('http://localhost:8080/AppStore_1_3/app/getRecom/similarapp/')
//			  .success(function(data,status){
//				  console.log(JSON.stringify(data));
//			      })//end-$http.get:success
//			      .error(function(data){	    	  
//			    	  alert("Error Occurs"+JSON.stringify(data));
//			    	  })//end-$http.end:error
//			    ;//end-call back definitions
		  };//end-seleCate
		  
		  this.goBackToMain = function(){
			  container.showApp = false;
		  };
		  
	  }]);//end-Controller-initContainer
	  
	})();//end-function
