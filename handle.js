	var app = angular.module("myApp", ["xeditable"]);
	app.run(function(editableOptions) {
		editableOptions.theme = 'bs3'; 
	});
	app.controller('myCtrl',function($scope,$http)
	{	
		$http.get('json/data.json').success(function(response)
		{
			$scope.myData = response;
		});	
		$scope.AddSummary=function()
		{
				$scope.myData.SUMMARY.push({value:$scope.summary});
				$scope.showaddsum=false;
				$scope.summary="";
		
		};
		$scope.CanSummary=function()
		{
				$scope.showaddsum=false;
				$scope.summary="";
		
		};
		$scope.AddExp=function()
		{
				$scope.myData.EXPERIENCE.push({value:$scope.exp});
				$scope.showaddexp=false;
				$scope.exp="";
		
		};
		$scope.CanExp=function()
		{
				$scope.showaddexp=false;
				$scope.exp="";
		
		};
		$scope.AddPro=function()
		{
				$scope.myData.PROJECT.push({value:$scope.pro});
				$scope.showaddpro=false;
				$scope.pro="";
		
		};
		$scope.CanPro=function()
		{
				$scope.showaddpro=false;
				$scope.pro="";
		
		};
		$scope.AddSkil=function()
		{
				$scope.myData.SKILL.push({value:$scope.skil});
				$scope.showaddskil=false;
				$scope.skil="";
		
		};
		$scope.CanSkil=function()
		{
				$scope.showaddskil=false;
				$scope.skil="";
		
		};
		$scope.AddEdu=function()
		{
				$scope.myData.EDUCATION.push({value:$scope.edu});
				$scope.showaddedu=false;
				$scope.edu="";
		
		};
		$scope.CanEdu=function()
		{
				$scope.showaddedu=false;
				$scope.edu="";
		
		};
	});