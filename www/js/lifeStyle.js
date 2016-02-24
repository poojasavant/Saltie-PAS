var app = angular.module('lifstyleControllers', []);
  //fixed code controller slider

app.controller('SliderCtrl', function($scope, $state, $ionicSlideBoxDelegate, $timeout, $rootScope, $log,$ionicGesture, $ionicPopup) {
	$rootScope.images=["family.jpg",
					  "family1.jpg",
					  "Friends.jpg",
					  "party.jpg",
					  "romantic.jpg",
					  "romantic1.jpg",
					  "seniors.jpg",
					  "singles.jpg",
					  "singles1.jpg",
					  "singles2.jpg"];
	$scope.liked=[];
	$rootScope.endOfSlides=false;
		  	
	$rootScope.curImgIndex=0;

	// $scope.likeButton = angular.element(document.querySelector('#like_button'));
	// $scope.dislikeButton = angular.element(document.querySelector('#dislike_button'));
	// likeButton.attr('ng-disabled',"false");
	// dislikeButton.attr('ng-disabled',"false");
			  
	$scope.img = {
		cur: 'img/lifestyle/'+$rootScope.images[$rootScope.curImgIndex]
	}; 

	$scope.swipeLeft=function()
	{
		console.log($rootScope.curImgIndex);
		$rootScope.images.splice($rootScope.curImgIndex,1);
		console.log($rootScope.curImgIndex);
		if($rootScope.images[$rootScope.curImgIndex]==null||$rootScope.images[$rootScope.curImgIndex]==undefined||$rootScope.images[0]==undefined)
		{
			console.log("liked"+$scope.liked);
			console.log( $rootScope.images);
			console.log("finished");
			$scope.img = {
				cur: 'img/lifestyle/end_of_image_list.jpg'
			};
			$rootScope.endOfSlides=true;
			// $scope.likeButton.attr('ng-disabled',"true");
			// alert($scope.likeButton.attr('ng-disabled'));
		}
		else{
			$scope.img = {
				cur: 'img/lifestyle/'+$rootScope.images[$rootScope.curImgIndex]
			}; 
		}
	}
	
	$scope.likeImg=function(name)
	{
		console.log($rootScope.curImgIndex);
		$scope.liked.push($rootScope.images[$rootScope.curImgIndex]);
		$rootScope.images.splice($rootScope.curImgIndex,1);
		if($rootScope.images[$rootScope.curImgIndex]==null||$rootScope.images[$rootScope.curImgIndex]==undefined)
		{
			console.log("liked:"+$scope.liked);
			console.log( $rootScope.images);
            
            $ionicPopup.show({
                title: 'Liked Images',
                subTitle: $scope.liked,
                buttons: [{
                    text: 'Done'
                }]
            }).then(function(res) {});
            
			console.log("finished");
			$scope.img = {
				cur: 'img/lifestyle/end_of_image_list.jpg'
			};
			$rootScope.endOfSlides=true;
			// $scope.likeButton.attr('ng-disabled',"true");
			// alert($scope.likeButton.attr('ng-disabled'));
		}
		else{
			$scope.img = {
				cur: 'img/lifestyle/'+$rootScope.images[$rootScope.curImgIndex]
			}; 
		}
				 
	}
		  
	$scope.dislikeImg=function()
	{
			 
		$rootScope.images.splice($rootScope.curImgIndex,1);
		if($rootScope.images[$rootScope.curImgIndex]==null||$rootScope.images[$rootScope.curImgIndex]==undefined)
		{
			console.log("liked:"+$scope.liked);
			console.log( $rootScope.images);
            
            $ionicPopup.show({
                title: 'Liked Images',
                subTitle: $scope.liked,
                buttons: [{
                    text: 'Done'
                }]
            }).then(function(res) {});
            
			console.log("finished");
			$scope.img = {
				cur: 'img/lifestyle/end_of_image_list.jpg'
			};
			$rootScope.endOfSlides=true;
			// $scope.likeButton.attr('ng-disabled',"true");
			// alert($scope.likeButton.attr('ng-disabled'));
		}
		else{
			$scope.img = {
				cur: 'img/lifestyle/'+$rootScope.images[$rootScope.curImgIndex]
			}; 
			  
		}
	}
    
    $rootScope.showLikedImg=function()
	{
        
        console.log("liked:"+$scope.liked);
        console.log( $rootScope.images);
$rootScope.images=[];
        $ionicPopup.show({
            title: 'Liked Images',
            subTitle: $scope.liked,
            buttons: [{
                text: 'Done'
            }]
        }).then(function(res) {});

        console.log("finished");
        $scope.img = {
            cur: 'img/lifestyle/end_of_image_list.jpg'
        };
        $rootScope.endOfSlides=true;
	}
	
	
	$scope.back=function()
	{
		
		
		
		$rootScope.images=["family.jpg",
					  "family1.jpg",
					  "Friends.jpg",
					  "party.jpg",
					  "romantic.jpg",
					  "romantic1.jpg",
					  "seniors.jpg",
					  "singles.jpg",
					  "singles1.jpg",
					  "singles2.jpg"];
	$scope.liked=[];
	$rootScope.endOfSlides=false;
		  	
	$rootScope.curImgIndex=0;

	// $scope.likeButton = angular.element(document.querySelector('#like_button'));
	// $scope.dislikeButton = angular.element(document.querySelector('#dislike_button'));
	// likeButton.attr('ng-disabled',"false");
	// dislikeButton.attr('ng-disabled',"false");
			  
	$scope.img = {
		cur: 'img/lifestyle/'+$rootScope.images[$rootScope.curImgIndex]
	}; 
		
		
	}
    
});
