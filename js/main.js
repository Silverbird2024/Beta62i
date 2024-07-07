var NeoApp=angular.module("NeoApp",["ngAnimate","ngRoute","ngSanitize","ngTouch","ui.bootstrap"],function($interpolateProvider){$interpolateProvider.startSymbol("[");$interpolateProvider.endSymbol("]");});NeoApp.config(["$routeProvider",function($routeProvider,$scope,$rootScope){$routeProvider.when("/Main",{templateUrl:"Main",controller:"Main_Ctrl"});$routeProvider.when("/About",{templateUrl:"About",controller:"About_Ctrl"});$routeProvider.when("/MainBounce",{templateUrl:"MainBounce",controller:"MainBounce_Ctrl"});$routeProvider.when("/EditHeaders",{templateUrl:"EditHeaders",controller:"EditHeaders_Ctrl"});$routeProvider.when("/Base",{templateUrl:"Base",controller:"Base_Ctrl"});$routeProvider.when("/SelectionM001",{templateUrl:"SelectionM001",controller:"SelectionM001_Ctrl"});$routeProvider.when("/SelectionM002",{templateUrl:"SelectionM002",controller:"SelectionM002_Ctrl"});$routeProvider.when("/SelectionM003",{templateUrl:"SelectionM003",controller:"SelectionM003_Ctrl"});$routeProvider.when("/SelectionM004",{templateUrl:"SelectionM004",controller:"SelectionM004_Ctrl"});$routeProvider.when("/SelectionM005",{templateUrl:"SelectionM005",controller:"SelectionM005_Ctrl"});$routeProvider.when("/SelectionM006",{templateUrl:"SelectionM006",controller:"SelectionM006_Ctrl"});$routeProvider.when("/SelectionM007",{templateUrl:"SelectionM007",controller:"SelectionM007_Ctrl"});$routeProvider.when("/SelectionM008",{templateUrl:"SelectionM008",controller:"SelectionM008_Ctrl"});$routeProvider.when("/SelectionM009",{templateUrl:"SelectionM009",controller:"SelectionM009_Ctrl"});$routeProvider.when("/SelectionM013",{templateUrl:"SelectionM013",controller:"SelectionM013_Ctrl"});$routeProvider.when("/SLAnalysis",{templateUrl:"SLAnalysis",controller:"SLAnalysis_Ctrl"});$routeProvider.when("/SL1",{templateUrl:"SL1",controller:"SL1_Ctrl"});$routeProvider.when("/SL2",{templateUrl:"SL2",controller:"SL2_Ctrl"});$routeProvider.when("/SL3",{templateUrl:"SL3",controller:"SL3_Ctrl"});$routeProvider.when("/SLAnalysis01",{templateUrl:"SLAnalysis01",controller:"SLAnalysis01_Ctrl"});$routeProvider.when("/SelectionM015",{templateUrl:"SelectionM015",controller:"SelectionM015_Ctrl"});$routeProvider.when("/ADHDAnalysis",{templateUrl:"ADHDAnalysis",controller:"ADHDAnalysis_Ctrl"});$routeProvider.when("/ADHDAnalysis001",{templateUrl:"ADHDAnalysis001",controller:"ADHDAnalysis001_Ctrl"});$routeProvider.when("/ADHDAnalysis001-q1",{templateUrl:"ADHDAnalysis001-q1",controller:"ADHDAnalysis001-q1_Ctrl"});$routeProvider.when("/ADHDAnalysis002-q1",{templateUrl:"ADHDAnalysis002-q1",controller:"ADHDAnalysis002-q1_Ctrl"});$routeProvider.when("/ADHDAnalysis002",{templateUrl:"ADHDAnalysis002",controller:"ADHDAnalysis002_Ctrl"});$routeProvider.when("/ADHDAnalysis003",{templateUrl:"ADHDAnalysis003",controller:"ADHDAnalysis003_Ctrl"});$routeProvider.when("/ADHDAnalysis004",{templateUrl:"ADHDAnalysis004",controller:"ADHDAnalysis004_Ctrl"});$routeProvider.when("/ADHDAnalysis005",{templateUrl:"ADHDAnalysis005",controller:"ADHDAnalysis005_Ctrl"});$routeProvider.when("/ADHDAnalysis006",{templateUrl:"ADHDAnalysis006",controller:"ADHDAnalysis006_Ctrl"});$routeProvider.when("/ADHDAnalysis007",{templateUrl:"ADHDAnalysis007",controller:"ADHDAnalysis007_Ctrl"});$routeProvider.when("/ADHDAnalysis008",{templateUrl:"ADHDAnalysis008",controller:"ADHDAnalysis008_Ctrl"});$routeProvider.when("/ADHDAnalysis009",{templateUrl:"ADHDAnalysis009",controller:"ADHDAnalysis009_Ctrl"});$routeProvider.when("/ADHDAnalysisScore",{templateUrl:"ADHDAnalysisScore",controller:"ADHDAnalysisScore_Ctrl"});$routeProvider.when("/SelectionM015x01",{templateUrl:"SelectionM015x01",controller:"SelectionM015x01_Ctrl"});$routeProvider.when("/SelectionM015x02",{templateUrl:"SelectionM015x02",controller:"SelectionM015x02_Ctrl"});$routeProvider.when("/SelectionM015x03",{templateUrl:"SelectionM015x03",controller:"SelectionM015x03_Ctrl"});$routeProvider.when("/SelectionM015x04",{templateUrl:"SelectionM015x04",controller:"SelectionM015x04_Ctrl"});$routeProvider.when("/SelectionM015x05",{templateUrl:"SelectionM015x05",controller:"SelectionM015x05_Ctrl"});$routeProvider.when("/SelectionM015x06",{templateUrl:"SelectionM015x06",controller:"SelectionM015x06_Ctrl"});$routeProvider.when("/SelectionM015x07",{templateUrl:"SelectionM015x07",controller:"SelectionM015x07_Ctrl"});$routeProvider.when("/SelectionM015x08",{templateUrl:"SelectionM015x08",controller:"SelectionM015x08_Ctrl"});$routeProvider.when("/SelectionM015x09",{templateUrl:"SelectionM015x09",controller:"SelectionM015x09_Ctrl"});$routeProvider.when("/SelectionM009x01",{templateUrl:"SelectionM009x01",controller:"SelectionM009x01_Ctrl"});$routeProvider.when("/SelectionM009x02",{templateUrl:"SelectionM009x02",controller:"SelectionM009x02_Ctrl"});$routeProvider.when("/SelectionM009x03",{templateUrl:"SelectionM009x03",controller:"SelectionM009x03_Ctrl"});$routeProvider.when("/SelectionM006x01",{templateUrl:"SelectionM006x01",controller:"SelectionM006x01_Ctrl"});$routeProvider.when("/SelectionM007x01",{templateUrl:"SelectionM007x01",controller:"SelectionM007x01_Ctrl"});$routeProvider.when("/SelectionM008x01",{templateUrl:"SelectionM008x01",controller:"SelectionM008x01_Ctrl"});$routeProvider.when("/SelectionM005x01",{templateUrl:"SelectionM005x01",controller:"SelectionM005x01_Ctrl"});$routeProvider.when("/SelectionM005x02",{templateUrl:"SelectionM005x02",controller:"SelectionM005x02_Ctrl"});$routeProvider.when("/SelectionM005x03",{templateUrl:"SelectionM005x03",controller:"SelectionM005x03_Ctrl"});$routeProvider.when("/SelectionM005x04",{templateUrl:"SelectionM005x04",controller:"SelectionM005x04_Ctrl"});$routeProvider.when("/SelectionM005x05",{templateUrl:"SelectionM005x05",controller:"SelectionM005x05_Ctrl"});$routeProvider.when("/SelectionM005x06",{templateUrl:"SelectionM005x06",controller:"SelectionM005x06_Ctrl"});$routeProvider.when("/SelectionM005x07",{templateUrl:"SelectionM005x07",controller:"SelectionM005x07_Ctrl"});$routeProvider.when("/SelectionM005x08",{templateUrl:"SelectionM005x08",controller:"SelectionM005x08_Ctrl"});$routeProvider.when("/SelectionM004x01",{templateUrl:"SelectionM004x01",controller:"SelectionM004x01_Ctrl"});$routeProvider.when("/SelectionM004x02",{templateUrl:"SelectionM004x02",controller:"SelectionM004x02_Ctrl"});$routeProvider.when("/SelectionM004x03",{templateUrl:"SelectionM004x03",controller:"SelectionM004x03_Ctrl"});$routeProvider.when("/SelectionM004x04",{templateUrl:"SelectionM004x04",controller:"SelectionM004x04_Ctrl"});$routeProvider.when("/SelectionM004x05",{templateUrl:"SelectionM004x05",controller:"SelectionM004x05_Ctrl"});$routeProvider.when("/SelectionM004x06",{templateUrl:"SelectionM004x06",controller:"SelectionM004x06_Ctrl"});$routeProvider.when("/SelectionM004x07",{templateUrl:"SelectionM004x07",controller:"SelectionM004x07_Ctrl"});$routeProvider.when("/SelectionM004x08",{templateUrl:"SelectionM004x08",controller:"SelectionM004x08_Ctrl"});$routeProvider.when("/SelectionM002x01",{templateUrl:"SelectionM002x01",controller:"SelectionM002x01_Ctrl"});$routeProvider.when("/SelectionM002x02",{templateUrl:"SelectionM002x02",controller:"SelectionM002x02_Ctrl"});$routeProvider.when("/SelectionM002x03",{templateUrl:"SelectionM002x03",controller:"SelectionM002x03_Ctrl"});$routeProvider.when("/SelectionM002x04",{templateUrl:"SelectionM002x04",controller:"SelectionM002x04_Ctrl"});$routeProvider.when("/SelectionM002x05",{templateUrl:"SelectionM002x05",controller:"SelectionM002x05_Ctrl"});$routeProvider.when("/SelectionM002x06",{templateUrl:"SelectionM002x06",controller:"SelectionM002x06_Ctrl"});$routeProvider.when("/SelectionM002x07",{templateUrl:"SelectionM002x07",controller:"SelectionM002x07_Ctrl"});$routeProvider.when("/SelectionM002x08",{templateUrl:"SelectionM002x08",controller:"SelectionM002x08_Ctrl"});$routeProvider.when("/SelectionM003x01",{templateUrl:"SelectionM003x01",controller:"SelectionM003x01_Ctrl"});$routeProvider.when("/SelectionM003x02",{templateUrl:"SelectionM003x02",controller:"SelectionM003x02_Ctrl"});$routeProvider.when("/SelectionM003x03",{templateUrl:"SelectionM003x03",controller:"SelectionM003x03_Ctrl"});$routeProvider.when("/SelectionM003x04",{templateUrl:"SelectionM003x04",controller:"SelectionM003x04_Ctrl"});$routeProvider.when("/SelectionM003x05",{templateUrl:"SelectionM003x05",controller:"SelectionM003x05_Ctrl"});$routeProvider.when("/SelectionM003x06",{templateUrl:"SelectionM003x06",controller:"SelectionM003x06_Ctrl"});$routeProvider.when("/SelectionM003x07",{templateUrl:"SelectionM003x07",controller:"SelectionM003x07_Ctrl"});$routeProvider.when("/SelectionM003x08",{templateUrl:"SelectionM003x08",controller:"SelectionM003x08_Ctrl"});$routeProvider.when("/SelectionM001x01",{templateUrl:"SelectionM001x01",controller:"SelectionM001x01_Ctrl"});$routeProvider.when("/SelectionM001x02",{templateUrl:"SelectionM001x02",controller:"SelectionM001x02_Ctrl"});$routeProvider.when("/SelectionM001x03",{templateUrl:"SelectionM001x03",controller:"SelectionM001x03_Ctrl"});$routeProvider.when("/SelectionM001x04",{templateUrl:"SelectionM001x04",controller:"SelectionM001x04_Ctrl"});$routeProvider.when("/SelectionM001x05",{templateUrl:"SelectionM001x05",controller:"SelectionM001x05_Ctrl"});$routeProvider.when("/SelectionM001x06",{templateUrl:"SelectionM001x06",controller:"SelectionM001x06_Ctrl"});$routeProvider.when("/SelectionM001x07",{templateUrl:"SelectionM001x07",controller:"SelectionM001x07_Ctrl"});$routeProvider.when("/SelectionM001x08",{templateUrl:"SelectionM001x08",controller:"SelectionM001x08_Ctrl"});$routeProvider.when("/BounceMain",{templateUrl:"BounceMain",controller:"BounceMain_Ctrl"});$routeProvider.when("/CustomWork",{templateUrl:"CustomWork",controller:"CustomWork_Ctrl"});$routeProvider.when("/CustomTime",{templateUrl:"CustomTime",controller:"CustomTime_Ctrl"});$routeProvider.when("/CustomAppDev",{templateUrl:"CustomAppDev",controller:"CustomAppDev_Ctrl"});$routeProvider.when("/SelectionM014",{templateUrl:"SelectionM014",controller:"SelectionM014_Ctrl"});$routeProvider.otherwise({redirectTo:"/Main"});}]);NeoApp.filter("checkmark",function(){return function(input){return input?"\u2713":"\u2718";};});NeoApp.filter("element",function(){return function(input,idx1,idx2){idx1=idx1||0;if(input&&input.constructor===Array){if(idx2){return input[idx1,idx2];}else{return input[idx1];};};return"";};});NeoApp.filter("string",function(){return function(input){if(input&&input.constructor===Array)return input.toString();if(input)return input;return"";};});NeoApp.filter("default",function(){return function(input,defValue){if(!input)return defValue;return input;};});NeoApp.filter("trustUrl",function($sce){return function(url){return $sce.trustAsResourceUrl(url);};});NeoApp.filter('bool',function(){return function(input,valueTrue,valueFalse){return input!==true?valueFalse:valueTrue;};});NeoApp.filter('splitLt',function(){return function(str,delimeter){var p=str.indexOf(delimeter);return(p>-1)?str.substring(0,p):str;};});NeoApp.filter('splitRt',function(){return function(str,delimeter){var p=str.indexOf(delimeter);return(p>-1)?str.substring(p+1):str;};});NeoApp.controller("NeoApp_CoreCtrl",function($scope,$rootScope,$location,$route,$modal,$window,$timeout,$interval,$http,$filter,$compile,$animate){$App=$rootScope;$App.$on("$locationChangeStart",function(event,newUrl,oldUrl){var newPg=newUrl.substr(newUrl.lastIndexOf("/")+1);var oldPg=oldUrl.substr(oldUrl.lastIndexOf("/")+1);if(newPg=="!"){event.preventDefault();};if(newPg=="Main"){$timeout($scope.Main_pageenter);};if(newPg=="About"){$timeout($scope.About_pageenter);};if(newPg=="MainBounce"){$timeout($scope.MainBounce_pageenter);};if(newPg=="Base"){$timeout($scope.Base_pageenter);};if(newPg=="SelectionM013"){$timeout($scope.SelectionM013_pageenter);};if(newPg=="SLAnalysis"){$timeout($scope.SLAnalysis_pageenter);};if(newPg=="SL1"){$timeout($scope.SL1_pageenter);};if(newPg=="SL2"){$timeout($scope.SL2_pageenter);};if(newPg=="SL3"){$timeout($scope.SL3_pageenter);};if(newPg=="SLAnalysis01"){$timeout($scope.SLAnalysis01_pageenter);};if(newPg=="SelectionM015"){$timeout($scope.SelectionM015_pageenter);};if(newPg=="ADHDAnalysis"){$timeout($scope.ADHDAnalysis_pageenter);};if(newPg=="ADHDAnalysis001"){$timeout($scope.ADHDAnalysis001_pageenter);};if(newPg=="ADHDAnalysis002"){$timeout($scope.ADHDAnalysis002_pageenter);};if(newPg=="ADHDAnalysis003"){$timeout($scope.ADHDAnalysis003_pageenter);};if(newPg=="ADHDAnalysis004"){$timeout($scope.ADHDAnalysis004_pageenter);};if(newPg=="ADHDAnalysis005"){$timeout($scope.ADHDAnalysis005_pageenter);};if(newPg=="ADHDAnalysis006"){$timeout($scope.ADHDAnalysis006_pageenter);};if(newPg=="ADHDAnalysis007"){$timeout($scope.ADHDAnalysis007_pageenter);};if(newPg=="ADHDAnalysis008"){$timeout($scope.ADHDAnalysis008_pageenter);};if(newPg=="ADHDAnalysis009"){$timeout($scope.ADHDAnalysis009_pageenter);};if(newPg=="ADHDAnalysisScore"){$timeout($scope.ADHDAnalysisScore_pageenter);};if(newPg=="SelectionM015x01"){$timeout($scope.SelectionM015x01_pageenter);};if(newPg=="SelectionM015x02"){$timeout($scope.SelectionM015x02_pageenter);};if(newPg=="SelectionM015x03"){$timeout($scope.SelectionM015x03_pageenter);};if(newPg=="SelectionM015x04"){$timeout($scope.SelectionM015x04_pageenter);};if(newPg=="SelectionM015x05"){$timeout($scope.SelectionM015x05_pageenter);};if(newPg=="SelectionM015x06"){$timeout($scope.SelectionM015x06_pageenter);};if(newPg=="SelectionM015x07"){$timeout($scope.SelectionM015x07_pageenter);};if(newPg=="SelectionM015x08"){$timeout($scope.SelectionM015x08_pageenter);};if(newPg=="SelectionM015x09"){$timeout($scope.SelectionM015x09_pageenter);};if(newPg=="SelectionM009x01"){$timeout($scope.SelectionM009x01_pageenter);};if(newPg=="SelectionM009x02"){$timeout($scope.SelectionM009x02_pageenter);};if(newPg=="SelectionM009x03"){$timeout($scope.SelectionM009x03_pageenter);};if(newPg=="SelectionM006x01"){$timeout($scope.SelectionM006x01_pageenter);};if(newPg=="SelectionM007x01"){$timeout($scope.SelectionM007x01_pageenter);};if(newPg=="SelectionM008x01"){$timeout($scope.SelectionM008x01_pageenter);};if(newPg=="SelectionM005x01"){$timeout($scope.SelectionM005x01_pageenter);};if(newPg=="SelectionM005x02"){$timeout($scope.SelectionM005x02_pageenter);};if(newPg=="SelectionM005x03"){$timeout($scope.SelectionM005x03_pageenter);};if(newPg=="SelectionM005x04"){$timeout($scope.SelectionM005x04_pageenter);};if(newPg=="SelectionM005x05"){$timeout($scope.SelectionM005x05_pageenter);};if(newPg=="SelectionM005x06"){$timeout($scope.SelectionM005x06_pageenter);};if(newPg=="SelectionM005x07"){$timeout($scope.SelectionM005x07_pageenter);};if(newPg=="SelectionM005x08"){$timeout($scope.SelectionM005x08_pageenter);};if(newPg=="SelectionM004x01"){$timeout($scope.SelectionM004x01_pageenter);};if(newPg=="SelectionM004x02"){$timeout($scope.SelectionM004x02_pageenter);};if(newPg=="SelectionM004x03"){$timeout($scope.SelectionM004x03_pageenter);};if(newPg=="SelectionM004x04"){$timeout($scope.SelectionM004x04_pageenter);};if(newPg=="SelectionM004x05"){$timeout($scope.SelectionM004x05_pageenter);};if(newPg=="SelectionM004x06"){$timeout($scope.SelectionM004x06_pageenter);};if(newPg=="SelectionM004x07"){$timeout($scope.SelectionM004x07_pageenter);};if(newPg=="SelectionM004x08"){$timeout($scope.SelectionM004x08_pageenter);};if(newPg=="SelectionM002x01"){$timeout($scope.SelectionM002x01_pageenter);};if(newPg=="SelectionM002x02"){$timeout($scope.SelectionM002x02_pageenter);};if(newPg=="SelectionM002x03"){$timeout($scope.SelectionM002x03_pageenter);};if(newPg=="SelectionM002x04"){$timeout($scope.SelectionM002x04_pageenter);};if(newPg=="SelectionM002x05"){$timeout($scope.SelectionM002x05_pageenter);};if(newPg=="SelectionM002x06"){$timeout($scope.SelectionM002x06_pageenter);};if(newPg=="SelectionM002x07"){$timeout($scope.SelectionM002x07_pageenter);};if(newPg=="SelectionM002x08"){$timeout($scope.SelectionM002x08_pageenter);};if(newPg=="SelectionM003x01"){$timeout($scope.SelectionM003x01_pageenter);};if(newPg=="SelectionM003x02"){$timeout($scope.SelectionM003x02_pageenter);};if(newPg=="SelectionM003x03"){$timeout($scope.SelectionM003x03_pageenter);};if(newPg=="SelectionM003x04"){$timeout($scope.SelectionM003x04_pageenter);};if(newPg=="SelectionM003x05"){$timeout($scope.SelectionM003x05_pageenter);};if(newPg=="SelectionM003x06"){$timeout($scope.SelectionM003x06_pageenter);};if(newPg=="SelectionM003x07"){$timeout($scope.SelectionM003x07_pageenter);};if(newPg=="SelectionM003x08"){$timeout($scope.SelectionM003x08_pageenter);};if(newPg=="SelectionM001x01"){$timeout($scope.SelectionM001x01_pageenter);};if(newPg=="SelectionM001x02"){$timeout($scope.SelectionM001x02_pageenter);};if(newPg=="SelectionM001x03"){$timeout($scope.SelectionM001x03_pageenter);};if(newPg=="SelectionM001x04"){$timeout($scope.SelectionM001x04_pageenter);};if(newPg=="SelectionM001x05"){$timeout($scope.SelectionM001x05_pageenter);};if(newPg=="SelectionM001x06"){$timeout($scope.SelectionM001x06_pageenter);};if(newPg=="SelectionM001x07"){$timeout($scope.SelectionM001x07_pageenter);};if(newPg=="SelectionM001x08"){$timeout($scope.SelectionM001x08_pageenter);};if(newPg=="BounceMain"){$timeout($scope.BounceMain_pageenter);};if(newPg=="CustomWork"){$timeout($scope.CustomWork_pageenter);};if(newPg=="CustomTime"){$timeout($scope.CustomTime_pageenter);};if(newPg=="CustomAppDev"){$timeout($scope.CustomAppDev_pageenter);};if(newPg=="SelectionM014"){$timeout($scope.SelectionM014_pageenter);};});
$scope.SetError=function(msg){throw msg;};$scope.Refresh=function(){$timeout(angular.noop);};$scope.AddFont=function(fontName,fontPath){neotempstyle=document.createElement("style");var position=fontPath.lastIndexOf("/");if(position!=-1){position++;}else{position=0;}var extPosition=fontPath.lastIndexOf(".");extPosition++;var extension=fontPath.substr(extPosition);if(extension=="ttf"){extension="truetype";}if(window.location.href.indexOf("file://")!=-1){neotempstyle.textContent='@font-face{font-family: "'+fontName+'";src: url("'+fontPath+'") format("'+extension+'");}';}else{fontPath=fontPath.substr(position);neotempstyle.textContent='@font-face{font-family: "'+fontName+'";src: url("./fonts/'+fontPath+'") format("'+extension+'");}';}document.head.append(neotempstyle);};$scope.GetOrientation=function(){if($window.orientation){if(Math.abs(window.orientation)===90){return"Landscape";}else{return"Portrait";}}else{if($window.innerWidth>=$window.innerHeight){return"Landscape";}else{return"Portrait";}}};$scope.GotoPageNum=function(pgNum){if(pgNum>0&&pgNum<=$App.NAB.PageList.length){if($App.NAB.PageEnterEffect[pgNum-1]){$App.NAB._pageEffect=" animate enter-"+$App.NAB.PageEnterEffect[pgNum-1]+" exit-"+($App.NAB.PageExitEffect[pgNum-1]||"fadeOut");}else{$App.NAB._pageEffect="";}$timeout(function(){$location.path('/'+$App.NAB.PageList[pgNum-1]);});}else{$scope.SetError('Invalid page.');}};$scope.GotoPage=function(pgId){$scope.GotoPageNum($App.NAB.PageList.indexOf(pgId)+1);};$scope.GotoFirstPage=function(){$scope.GotoPageNum(1);};$scope.GotoLastPage=function(){$scope.GotoPageNum($App.NAB.PageList.length);};$scope.GotoNextPage=function(){var pgNum=$App.NAB.PageNumber;if(pgNum<$App.NAB.PageList.length){$scope.GotoPageNum(pgNum+1);return true;}return false;};$scope.GotoPrevPage=function(){var pgNum=$App.NAB.PageNumber;if(pgNum>1){$scope.GotoPageNum(pgNum-1);return true;}return false;};function makeSVG(tag,attrs){var el=document.createElementNS('http://www.w3.org/2000/svg',tag);for(var k in attrs)el.setAttribute(k,attrs[k]);return el;};function addSvgNode(objId,svgNode){if(document.getElementById(objId).tagName=="svg"){document.getElementById(objId).appendChild(svgNode);}else{document.getElementById(objId).getElementsByTagName('svg')[0].appendChild(svgNode);}};$scope.DrawCircle=function DrawCircle(objId,svgName,cx,cy,circleRadio,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('circle',{'id':svgName,'VisualNEOWebName':svgName,'cx':cx,'cy':cy,'r':circleRadio,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawEllipse=function DrawEllipse(objId,svgName,cx,cy,rx,ry,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('ellipse',{'id':svgName,'VisualNEOWebName':svgName,'cx':cx,'cy':cy,'rx':rx,'ry':ry,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawRect=function DrawRect(objId,svgName,posx,posy,width,height,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('rect',{'id':svgName,'VisualNEOWebName':svgName,'x':posx,'y':posy,'width':width,'height':height,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPolygon=function DrawPolygon(objId,svgName,points,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('polygon',{'id':svgName,'VisualNEOWebName':svgName,'points':points,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPath=function DrawPath(objId,svgName,path,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('path',{'id':svgName,'VisualNEOWebName':svgName,'d':path,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPolyLine=function DrawPolyLine(objId,svgName,points,strokeColor,strokeWidth){$App[svgName]=makeSVG('polyline',{'id':svgName,'VisualNEOWebName':svgName,'points':points,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':'none'});addSvgNode(objId,$App[svgName]);};$scope.DrawLine=function DrawLine(objId,svgName,x1,y1,x2,y2,strokeColor,strokeWidth){$App[svgName]=makeSVG('line',{'id':svgName,'VisualNEOWebName':svgName,'x1':x1,'y1':y1,'x2':x2,'y2':y2,'stroke':strokeColor,'stroke-width':strokeWidth});addSvgNode(objId,$App[svgName]);};$scope.DrawImage=function DrawImage(objId,svgName,fileName,x,y,width,height){$App[svgName]=makeSVG('image',{'id':svgName,'VisualNEOWebName':svgName,'x':x,'y':y,'width':width,'height':height,'xlink:href':''});$App[svgName].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+fileName+"");addSvgNode(objId,$App[svgName]);};$scope.DrawText=function DrawText(objId,svgName,theText,posx,posy,fillColor,fontSize,fontFamily,angle){$App[svgName]=makeSVG('text',{'id':svgName,'VisualNEOWebName':svgName,'x':posx,'y':posy,'stroke-width':0,'fill':fillColor,'font-size':fontSize,'font-family':fontFamily,'transform':'rotate('+angle+' '+posx+' '+posy+')'});$App[svgName].textContent=theText;addSvgNode(objId,$App[svgName]);};$scope.DrawClear=function DrawClear(objId){var n=0;$("#"+objId).children().each(function(){if(n!=0){$(this).remove();}n++;});};$scope.OnMouseEvent=function(objId,eventName,subroutine){if(eventName=="contextmenu"){if($App.NAB[objId]){$App.NAB[objId].on(eventName,function(e){e.preventDefault();subroutine;return;});}$("#"+objId).on(eventName,function(e){e.preventDefault();subroutine;return;});}if($App.NAB[objId]){$App.NAB[objId].on(eventName,subroutine);return;}$("#"+objId).on(eventName,subroutine);};$scope.RemoveOnMouseEvent=function(objId,eventName){if($App.NAB[objId]){$App.NAB[objId].off(eventName);return;}$("#"+objId).off(eventName);};$scope.OnTouchEvent=function(objId,eventName,subroutine){if($App.NAB[objId]){$App.NAB[objId].on(eventName,subroutine);return;}$("#"+objId).on(eventName,subroutine);};$scope.RemoveOnTouchEvent=function(objId,eventName){if($App.NAB[objId]){$App.NAB[objId].off(eventName);return;}$("#"+objId).off(eventName);};$scope.ShowObject=function(objId,effect,speed){if($App.NAB[objId]){$App.NAB[objId].show(speed);return;}if(!effect||effect.toLowerCase()=='none'){$App.NAB[objId+'_effect']='';}else{if(speed)effect=effect+' speed-'+speed*50;$App.NAB[objId+'_effect']='animate enter-'+effect;}$timeout(function(){var name=objId+'_hidden';if($App.NAB[name])delete $App.NAB[name];});};$scope.HideObject=function(objId,effect,speed){if($App.NAB[objId]){$App.NAB[objId].hide(speed);return;}if(!effect||effect.toLowerCase()=='none'){$App.NAB[objId+'_effect']='';}else{if(speed)effect=effect+' speed-'+speed*50;$App.NAB[objId+'_effect']='animate exit-'+effect;}$timeout(function(){$App.NAB[objId+'_hidden']=true;});};$scope.DisableObject=function(objId,value){var name=objId+'_disabled';if(value){$App.NAB[name]=value;}else{if($App.NAB[name])delete $App.NAB[name];}};$scope.ClipObjectPolygon=function(objId,polygonId){var points=$("#"+polygonId).html();points=points.replace('<polygon vector-effect="non-scaling-stroke" points="',"");points=points.replace('"></polygon>','');coords=points.split(",");var puntos="";for(i=0;i<coords.length;i=i+2){if(i!=coords.length-2){puntos=puntos+coords[i]+"px "+coords[i+1]+"px,";}else{puntos=puntos+coords[i]+"px "+coords[i+1]+"px";}}$("#"+objId).css("clip-path","polygon("+puntos+")");};$scope.ClipObjectPath=function(objId,shape){if(shape=="circle"){$("#"+objId).css("clip-path","circle(50% at 50% 50%)");}else if(shape=="triangle"){$("#"+objId).css("clip-path","polygon(50% 0%, 0% 100%, 100% 100%)");}else if(shape=="rhombus"){$("#"+objId).css("clip-path","polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)");}else if(shape=="pentagon"){$("#"+objId).css("clip-path","polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)");}else{$("#"+objId).css("clip-path",shape);}};$scope.SetObjectStyle=function(objId,selector,value){if($App.NAB[objId]){$App.NAB[objId].css(selector,value);return;}if($App[objId]){$("#"+objId).css(selector,value);return;}var name=objId+'_style';if(!$App.NAB[name])$App.NAB[name]={};if(value&&value.length>0){$App.NAB[name][selector]=value;}else{if($App.NAB[name][selector])delete $App.NAB[name][selector];if(jQuery.isEmptyObject($App.NAB[name]))delete $App.NAB[name];}};$scope.ClearObjectStyles=function(objId){var name=objId+'_style';if($App.NAB[name])delete $App.NAB[name];};$scope.GetObjectInfo=function(objId,info){if($App.NAB[objId]){return $App.NAB[objId].css(info);}return $("#"+objId).css(info);};$scope.GetObjectXY=function(objId,xvar,yvar){var rect=document.getElementById($App.NAB.PageID).getBoundingClientRect();$App.PageLeft=rect.left;$App.PageTop=rect.top;var objeto=document.getElementById(objId).getBoundingClientRect();$App[xvar]=objeto.x-$App.PageLeft;$App[yvar]=objeto.y-$App.PageTop;};$scope.SetObjectHTML=function(objId,code){if($App.NAB[objId]){$App.NAB[objId].html(code);return;}var e=document.getElementById(objId);e.innerHTML=code;$compile(e)($scope);};$scope.GetObjectHTML=function(objId){if($App.NAB[objId]){return $App.NAB[objId].html();;}return document.getElementById(objId).innerHTML;};$scope.SetObjectAttribute=function(objId,AttrName,AttrValue){var element=$("#"+objId);if(AttrName==="src"){AttrName="ng-src";}var pendingChanges=$App.NAB['pendingChanges']||{};pendingChanges[objId]=pendingChanges[objId]||[];pendingChanges[objId].push({AttrName,AttrValue});$App.NAB['pendingChanges']=pendingChanges;$scope.applyPendingChanges();};$scope.applyPendingChanges=function(){var pendingChanges=$App.NAB['pendingChanges'];if(!pendingChanges||jQuery.isEmptyObject(pendingChanges)){return;}Object.keys(pendingChanges).forEach(function(objId){var element=$("#"+objId);if(element.length>0){pendingChanges[objId].forEach(function(change){element.attr(change.AttrName,change.AttrValue);$compile(element)($scope);});}});};$scope.GetObjectAttribute=function(objId,AttrName){if($App.NAB[objId]){return $App.NAB[objId].attr(AttrName);}return $("#"+objId).attr(AttrName);};$scope.SetObjectText=function(objId,code){if($App.NAB[objId]){$App.NAB[objId].text(code);return;}var e=document.getElementById(objId);e.innerText=code;$compile(e)($scope);};$scope.GetObjectText=function(objId){if($App.NAB[objId]){return $App.NAB[objId].text();}return document.getElementById(objId).innerText;};$scope.DuplicateObject=function(objId,objName,containerId){if($App.NAB[objName]){$App.NAB[objName].remove();delete $App.NAB[objName];}else{$("#"+objName).remove();delete $App.NAB[objName];}if($App.NAB[objId]){$App.NAB[objName]=$App.NAB[objId].clone().appendTo("#"+containerId);}else if($App[objId]){$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id","");}else{$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);}$App.NAB[objName].attr("VisualNEOWebName",objName);$App.NAB[objName].attr("ng-style","NAB."+objName+"_style");$App.NAB[objName].attr("ng-hide","NAB."+objName+"_hidden");$App.NAB[objName].attr("ng-disabled","NAB."+objName+"_disabled");var e=document.getElementById(containerId);$compile(e)($scope);};$scope.DuplicateObjectEx=function(objId,objName,containerId,objStyle){if($App.NAB[objName]){$App.NAB[objName].remove();delete $App.NAB[objName];}else{$("#"+objName).remove();delete $App.NAB[objName];}if($App.NAB[objId]){$App.NAB[objName]=$App.NAB[objId].clone().appendTo("#"+containerId);}else if($App[objId]){$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id","");}else{$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id",objName);$App.NAB[objName].atyle=document.getElementById(objId).style;}$App.NAB[objName].attr("VisualNEOWebName",objName);$App.NAB[objName].attr("ng-style","NAB."+objName+"_style");$App.NAB[objName].attr("ng-hide","NAB."+objName+"_hidden");$App.NAB[objName].attr("ng-disabled","NAB."+objName+"_disabled");$App.NAB[objName].attr("style",objStyle);var e=document.getElementById(containerId);$compile(e)($scope);};$scope.AnimateObjectCSS=function(objId,cssData,duration,delay,easing,callbackfn){if($App.NAB[objId]){$App.NAB[objId].delay(delay).animate(cssData,duration,easing,callbackfn);}else{$("#"+objId).delay(delay).animate(cssData,duration,easing,callbackfn);}};$scope.SetObjectCSS=function(objId,cssData){if($App.NAB[objId]){$App.NAB[objId].css(cssData);}else{$("#"+objId).css(cssData);}};$scope.CheckCollision=function(objId1,objId2){var x1=$("#"+objId1).offset().left;var y1=$("#"+objId1).offset().top;var h1=$("#"+objId1).outerHeight(true);var w1=$("#"+objId1).outerWidth(true);var b1=y1+h1;var r1=x1+w1;var x2=$("#"+objId2).offset().left;var y2=$("#"+objId2).offset().top;var h2=$("#"+objId2).outerHeight(true);var w2=$("#"+objId2).outerWidth(true);var b2=y2+h2;var r2=x2+w2;if(b1<y2||y1>b2||r1<x2||x1>r2){return false;}else{return true;}};$scope.CheckFullCollision=function(objId1,objId2){var r1=document.getElementById(rectone);var r2=document.getElementById(recttwo);var r1bb=r1.getBoundingClientRect();var r2bb=r2.getBoundingClientRect();var r1x=r1bb.x;var r1w=r1bb.width;var r1y=r1bb.y;var r1h=r1bb.height;var r2x=r2bb.x;var r2w=r2bb.width;var r2y=r2bb.y;var r2h=r2bb.height;if(r1x+1>=r2x&&r1y+1>=r2y&&r1x+r1w-1<=r2x+r2w&&r1y+r1h-1<=r2y+r2h){return true;}else{return false;}};function fixUnit(s){var t=s.toString();var parts=t.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);return(parts[2])?t:parts[1]+'px';}$scope.SetObjectBounds=function(objId,l,t,w,h){if($App.NAB[objId]){var e=$App.NAB[objId];}else{var e=document.getElementById(objId);}if(w){w=fixUnit(w);e.style.width=w;$scope.SetObjectStyle(objId,'width',w);};if(h){h=fixUnit(h);e.style.height=h;$scope.SetObjectStyle(objId,'height',h);};if(l){l=fixUnit(l);e.style.left=l;$scope.SetObjectStyle(objId,'left',l);};if(t){t=fixUnit(t);e.style.top=t;$scope.SetObjectStyle(objId,'top',t);};};$scope.MoveObject=function(objId,left,top){if($App.NAB[objId]){$App.NAB[objId].css("left",left);$App.NAB[objId].css("top",top);}else{$scope.SetObjectBounds(objId,left,top);}};$scope.ObjectToFront=function(objId){if($App.NAB[objId]){theParent=$App.NAB[objId].parent();$App.NAB[objId].detach().appendTo(theParent);}else{theParent=$("#"+objId).parent();$("#"+objId).detach().appendTo(theParent);}};$scope.ObjectToBack=function(objId){if($App.NAB[objId]){theParent=$App.NAB[objId].parent();$App.NAB[objId].detach().prependTo(theParent);}else if($("#"+objId).parent().prop("tagName")=="svg"){theParent=$("#"+objId).parent().children().first();$("#"+objId).detach().insertAfter(theParent);}else{theParent=$("#"+objId).parent();$("#"+objId).detach().prependTo(theParent);}};$scope.SizeObject=function(objId,width,height){if($App.NAB[objId]){w=fixUnit(width);h=fixUnit(height);$App.NAB[objId].css("width",w);$App.NAB[objId].css("height",h);}else{$scope.SetObjectBounds(objId,null,null,width,height);}};$scope.RotateObject=function(objId,deg){if($App.NAB[objId]){$App.NAB[objId].css("webkitTransform","rotate("+deg+"deg)");$App.NAB[objId].css("mozTransform","rotate("+deg+"deg)");$App.NAB[objId].css("msTransform","rotate("+deg+"deg)");$App.NAB[objId].css("oTransform","rotate("+deg+"deg)");$App.NAB[objId].css("transform","rotate("+deg+"deg)");}else{var e=document.getElementById(objId);e.style.webkitTransform='rotate('+deg+'deg)';e.style.mozTransform='rotate('+deg+'deg)';e.style.msTransform='rotate('+deg+'deg)';e.style.oTransform='rotate('+deg+'deg)';e.style.transform='rotate('+deg+'deg)';};};$scope.ListBoxSort=function(objId){if($("#"+objId).children("option:selected").text()==""){$("#"+objId).children("option:selected").remove();};$("#"+objId+" option").filter(function(){return!this.value||$.trim(this.value).length==0||$.trim(this.text).length==0;}).remove();var options=$("#"+objId+" option");var arr=options.map(function(_,o){return{t:$(o).text(),v:o.value};}).get();arr.sort(function(o1,o2){return o1.t>o2.t?1:o1.t<o2.t?-1:0;});options.each(function(i,o){o.value=arr[i].v;$(o).text(arr[i].t);});if($("#"+objId).children("option:selected").text()==""){$("#"+objId).children("option:selected").remove();};};$scope.ListBoxMoveItem=function(listID,direction){var listbox=document.getElementById(listID);var selIndex=listbox.selectedIndex;if(-1==selIndex){return;}var increment=-1;if(direction=='up'){if(selIndex==1){return;}else{increment=-1;}}else{increment=1;}if((selIndex+increment)<0||(selIndex+increment)>(listbox.options.length-1)){return;}var selValue=listbox.options[selIndex].value;var selText=listbox.options[selIndex].text;listbox.options[selIndex].value=listbox.options[selIndex+increment].value
listbox.options[selIndex].text=listbox.options[selIndex+increment].text
listbox.options[selIndex+increment].value=selValue;listbox.options[selIndex+increment].text=selText;listbox.selectedIndex=selIndex+increment;};$scope.OpenDialog=function(dlgId){var modalInstance=$modal.open({templateUrl:dlgId,controller:dlgId+'_Ctrl',scope:$scope,size:'sm',backdrop:'static',animation:true});};$scope.AlertBox=function(dlgTitle,dlgMsg,dlgKind,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" ng-class="modal-sm">'+'<div class="modal-content">'+'<div class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+'<button class="btn btn-primary" ng-click="CloseDialog();">OK</button>'+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn!=undefined){modalInstance.result.then(function(){callbackFn()},function(){callbackFn()});}};$scope.AlertBoxEx=function(dlgTitle,dlgMsg,dlgKind,theWidth,theHeight,theColor,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var dlgKind=dlgKind||"primary";if(theWidth<150){theWidth=150;}if(theHeight<200){theHeight=200;}var modalBodyMaxHeight=theHeight-140;var modalInstance=$modal.open({template:'<div class="modal-dialog" style="width:'+theWidth+'px;height:'+theHeight+'px;" ng-class="modal-sm">'+'<div class="modal-content">'+'<div style="background:'+theColor+';" class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div style="overflow:auto;max-height:'+modalBodyMaxHeight+'px" class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+'<button class="btn btn-custom" style="color:#fff;background:'+theColor+';" ng-click="CloseDialog();">OK</button>'+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn!=undefined){modalInstance.result.then(function(){callbackFn()},function(){callbackFn()});}};$scope.MessageBoxEx=function(dlgTitle,dlgMsg,dlgButtons,dlgKind,theWidth,theHeight,theColor,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}if(theWidth<150){theWidth=150;}if(theHeight<200){theHeight=200;}var modalBodyMaxHeight=theHeight-140;var idx;var btns=dlgButtons.split("|");var btnsHTML='';for(idx=0;idx<btns.length;idx++){btnsHTML+='<button class="btn btn-custom" style="color:#fff;background:'+theColor+';" ng-click="CloseDialogBtn('+idx.toString()+');">'+btns[idx]+'</button>';}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" style="width:'+theWidth+'px;height:'+theHeight+'px;" ng-class="modal-sm">'+'<div class="modal-content">'+'<div style="background:'+theColor+';" class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div style="overflow:auto;max-height:'+modalBodyMaxHeight+'px" class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+btnsHTML+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn){modalInstance.result.then(function(value){callbackFn(value+1)},function(){callbackFn(0)});}};$scope.MessageBox=function(dlgTitle,dlgMsg,dlgButtons,dlgKind,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var idx;var btns=dlgButtons.split("|");var btnsHTML='';for(idx=0;idx<btns.length;idx++){btnsHTML+='<button class="btn btn-primary" ng-click="CloseDialogBtn('+idx.toString()+');">'+btns[idx]+'</button>';}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" ng-class="modal-sm">'+'<div class="modal-content">'+'<div class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+btnsHTML+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn){modalInstance.result.then(function(value){callbackFn(value+1)},function(){callbackFn(0)});}};$scope.SerializeForm=function(formId){var form=document.getElementById(formId);if(!form||form.nodeName!=="FORM")return;var i,j,s,field,m,q=[];for(i=0;i<form.elements.length;i++){field=form.elements[i];if(field.name==="")continue;switch(field.nodeName){case'INPUT':switch(field.type){case'text':case'hidden':case'password':case'number':q.push(field.name+"="+encodeURIComponent(field.value));break;case'checkbox':if(angular.isElement(field)){m=angular.element(field).controller('ngModel');if(m){q.push(field.name+"="+encodeURIComponent(m.$modelValue));break;}}q.push(field.name+"="+encodeURIComponent(field.checked));break;case'radio':if(field.checked){q.push(field.name+"="+encodeURIComponent(field.value));}break;case'file':break;}break;case'TEXTAREA':q.push(field.name+"="+encodeURIComponent(field.value));break;case'SELECT':switch(field.type){case'select-one':q.push(field.name+"="+encodeURIComponent(field.value));break;case'select-multiple':s='';for(j=field.options.length-1;j>=0;j=j-1){if(field.options[j].selected){s+=','+encodeURIComponent(field.options[j].value);}}if(s.length>0)q.push(field.name+"="+s.substr(1));break;}break;}}return q.join("&");};$scope.SubmitForm=function(form,url,method,submitFn,successFn,failFn){var ok=true;if(submitFn){ok=submitFn();}if(ok&&form&&url&&method){var f=$scope.SerializeForm(form);$http({method:method,url:url,data:f,responseType:"text",headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(function(response){if(successFn)successFn(response.data,response.status);},function(response){if(failFn)failFn(response.data,response.status);});}};$scope.FormSubmit=function(formulario,url){var neoApp=angular.element(document.getElementById("ng-view")).scope();var fnsubmit=neoApp[formulario+"_submit"];var fnsuccess=neoApp[formulario+"_success"];var fnfail=neoApp[formulario+"_fail"];neoApp.SubmitForm(formulario,url,'POST',fnsubmit,fnsuccess,fnfail);};$scope.FormReset=function(formulario){$("#"+formulario).trigger("reset");};$scope.SetCompVar=function(varname,varvalue){varname2="";vararray=varname.split("[");for(n=0;n<vararray.length;n++){vararray[n]=vararray[n].replace("]","");if($App[vararray[n]]!=undefined){varname2=varname2+$App[vararray[n]];}else{varname2=varname2+vararray[n];};};$App[varname2]=varvalue;};$scope.GetCompVar=function(varname,composedvar){varname2="";vararray=composedvar.split("[");for(n=0;n<vararray.length;n++){vararray[n]=vararray[n].replace("]","");if($App[vararray[n]]!=undefined){varname2=varname2+$App[vararray[n]];}else{varname2=varname2+vararray[n];};};$App[varname]=$App[varname2];};$scope.ArraySuffle=function(array,newArray){for(n=0;n<array.length;n++){newArray[n]=array[n];}var currentIndex=newArray.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=newArray[currentIndex];newArray[currentIndex]=newArray[randomIndex];newArray[randomIndex]=temporaryValue;}};$scope.ArrayCopy=function(a,start,len){if(a&&start>-1&&len>0)return a.slice(start,start+len);return[]};$scope.LoadGoogleFont=function(fontName){$("head").append("<link href='https://fonts.googleapis.com/css?family="+fontName+"' rel='stylesheet' type='text/css'>");};$scope.LocalFileToVar=function(inputFileName,resultVar,tipo){$App.NAB.temp=resultVar;var realInputFileName=$("#"+inputFileName).prop("for");var files=$('#'+realInputFileName).prop("files");for(var i=0,f;f=files[i];i++){var reader=new FileReader();reader.onload=(function(theFile,resultVar,callBackFunction){return function(e,resultVar){varName=$App.NAB.temp;$App[varName]=e.target.result;};})(f);if(tipo=="text"){reader.readAsText(f);}else if(tipo=="binary"){reader.readAsBinaryString(f);}else if(tipo=="base64"){reader.readAsDataURL(f);}else{reader.readAsArrayBuffer(f);}};};$scope.SvgToBase64=function(theContainer,theWidth,theHeight,theType,theQuality,resultVar,callbackFn){var tagName=$("#"+theContainer).prop("tagName").toLowerCase();if(tagName=="svg"){var svg=document.getElementById(theContainer);}else{var svg=document.querySelector("#"+theContainer+" svg");}var svgToBase64PngTemp=svg.outerHTML;tempWidth=svg.getAttribute("width");if(tempWidth==null){tempWidth=theWidth;}tempHeight=svg.getAttribute("height");if(tempHeight==null){tempHeight=theHeight;}svg.setAttribute("width",theWidth);svg.setAttribute("height",theHeight);var svgData=new XMLSerializer().serializeToString(svg);var canvas=document.createElement("canvas");canvas.width=theWidth;canvas.height=theHeight;var ctx=canvas.getContext("2d");var img=document.createElement("img");img.setAttribute("src","data:image/svg+xml;base64,"+btoa(svgData));img.onload=function(){ctx.drawImage(img,0,0);svg.setAttribute("width",tempWidth);svg.setAttribute("height",tempHeight);if(theType=="jpg"){$App[resultVar]=canvas.toDataURL("image/jpeg",theQuality);if(callbackFn!=""&&callbackFn!=null&&callbackFn!=undefined){callbackFn();}}else{$App[resultVar]=canvas.toDataURL("image/png");if(callbackFn!=""&&callbackFn!=null&&callbackFn!=undefined){callbackFn();}}};};$scope.ImgToBase64=function(theImg,theType,theQuality,resultVar){var img=document.querySelector("#"+theImg);const canvas=document.createElement('canvas');const ctx=canvas.getContext('2d');canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;ctx.drawImage(img,0,0);if(theType=="jpg"){$App[resultVar]=canvas.toDataURL('image/jpeg',theQuality);}else{$App[resultVar]=canvas.toDataURL('image/png');}};$scope.Base64ToLocalFile=function(dataurl,filename){var arr=dataurl.split(','),mime=arr[0].match(/:(.*?);/)[1],bstr=atob(arr[1]),n=bstr.length,u8arr=new Uint8Array(n);while(n--){u8arr[n]=bstr.charCodeAt(n);}theFile=new File([u8arr],filename,{type:mime});saveAs(theFile,filename);};$scope.ResizeDesktopWindow=function(theWidth,theHeight){if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){window.resizeTo(theWidth,theHeight);}};$scope.FitAppToScreen=function(coverScreen,verticalAlign,horizontalAlign){$scope.AppPosition(verticalAlign,horizontalAlign);var ha=horizontalAlign.toUpperCase();var va=verticalAlign.toUpperCase();if(va=="MIDDLE"){va="CENTER"};fit(document.getElementById("ng-app"),{x:0,y:0,width:window.innerWidth,height:window.innerHeight},{cover:coverScreen,hAlign:fit[ha],vAlign:fit[va]});fit(document.getElementById("ng-app"),{x:0,y:0,width:window.innerWidth,height:window.innerHeight},{cover:coverScreen,hAlign:fit[ha],vAlign:fit[va]},function(transform){$App.NAB.AppScale=transform.scale});};$scope.IsInstalled=function(){if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){return true;}else{return false;}};$scope.CenterApp=function(){$("body").css("position","absolute");$("body").css("top","0px");$("body").css("bottom","0px");$("body").css("left","0px");$("body").css("right","0px");$("body").css("margin","auto");$("body").css("margin","auto");};$scope.TopCenterApp=function(){$("body").css("position","absolute");$("body").css("top","0px!important");$("body").css("left","0px");$("body").css("right","0px");$("body").css("bottom","auto");$("body").css("margin","auto");};$scope.ScaleApp=function(thezoom){$App.NAB.AppScale=thezoom;$("#ng-app").css("transform-origin","50% 50%");$("#ng-app").css("transform","scale("+thezoom+","+thezoom+")");};$scope.AppPosition=function(vertical,horizontal){$('body').css("position","absolute");if(vertical=="top"){$('body').css("top","0px");$('body').css("bottom","auto");}else if(vertical=="bottom"){$('body').css("bottom","0px");$('body').css("top","auto");}else{$('body').css("bottom","0px");$('body').css("top","0px");}if(horizontal=="left"){$('body').css("left","0px");$('body').css("right","auto");}else if(horizontal=="right"){$('body').css("left","auto");$('body').css("right","0px");}else{$('body').css("left","0px");$('body').css("right","0px");}$('body').css("margin","auto");};$scope.SetResponsivePages=function(plarge,pmedium,psmall,pxsmall){if(matchMedia){const largedisp=window.matchMedia("(min-width: 1025px)");const mediumdisp=window.matchMedia("(min-width: 768px) and (max-width: 1024px)");const smalldisp=window.matchMedia("(min-width: 481px) and (max-width: 767px)");const verysmalldisp=window.matchMedia("(min-width: 320px) and (max-width: 480px)");funciones=angular.element(document.getElementById("ng-view")).scope();$("body").css("width","100%");$("body").css("height","100%");$("body").css("overflow-x","hidden");$("body").css("overflow-y","auto");largedisp.addListener(WidthChangeLarge);WidthChangeLarge(largedisp);mediumdisp.addListener(WidthChangeMedium);WidthChangeMedium(mediumdisp);smalldisp.addListener(WidthChangeSmall);WidthChangeSmall(smalldisp);verysmalldisp.addListener(WidthChangeVerySmall);WidthChangeVerySmall(verysmalldisp);function WidthChangeLarge(largedisp){if(largedisp.matches){funciones.GotoPage(plarge);}};function WidthChangeMedium(mediumdisp){if(mediumdisp.matches){funciones.GotoPage(pmedium);}};function WidthChangeSmall(smalldisp){if(smalldisp.matches){funciones.GotoPage(psmall);}};function WidthChangeVerySmall(verysmalldisp){if(verysmalldisp.matches){funciones.GotoPage(pxsmall);}};}};$scope.AppBackgroundColor=function(thecolor){$("html").css("background",thecolor);};$scope.AppBackgroundImage=function(imagen){ruta=$("#"+imagen).attr('src');$("html").css('background-image','url('+ruta+' )');$("html").css('background-repeat','no-repeat');$("html").css('background-position','center center');$("html").css('background-attachment','fixed');$("html").css("-webkit-background-size","cover");$("html").css("-moz-background-size","cover");$("html").css("-o-background-size","cover");$("html").css("background-size","cover");};$scope.ObjDisableSelection=function(objectname){$("#"+objectname).css("-webkit-touch-callout","none");$("#"+objectname).css("-webkit-user-select","none");$("#"+objectname).css("-khtml-user-select","none");$("#"+objectname).css("-moz-user-select","none");$("#"+objectname).css("-ms-user-select","none");$("#"+objectname).css("user-select","none");};$scope.DisableSelection=function(){$("*").css("-webkit-touch-callout","none");$("*").css("-webkit-user-select","none");$("*").css("-khtml-user-select","none");$("*").css("-moz-user-select","none");$("*").css("-ms-user-select","none");$("*").css("user-select","none");};$scope.GetUrlParameter=function(param){url=window.location.href;var queryString=url?url.split('?')[1]:window.location.search.slice(1);var obj={};if(queryString){queryString=queryString.split('#')[0];var arr=queryString.split('&');for(var i=0;i<arr.length;i++){var a=arr[i].split('=');var paramName=a[0];var paramValue=typeof(a[1])==='undefined'?true:a[1];if(typeof paramValue==='string')paramValue=paramValue;if(paramName.match(/\[(\d+)?\]$/)){var key=paramName.replace(/\[(\d+)?\]/,'');if(!obj[key])obj[key]=[];if(paramName.match(/\[\d+\]$/)){var index=/\[(\d+)\]/.exec(paramName)[1];obj[key][index]=paramValue;}else{obj[key].push(paramValue);}}else{if(!obj[paramName]){obj[paramName]=paramValue;}else if(obj[paramName]&&typeof obj[paramName]==='string'){obj[paramName]=[obj[paramName]];obj[paramName].push(paramValue);}else{obj[paramName].push(paramValue);}}}}return obj[param];};$scope.csvToJSON=function(mycsv,separator,jsonObject){var lines=$App[mycsv].split("\n");var result=[];var headers=lines[0].split(separator);for(var i=1;i<lines.length;i++){var obj={};var currentline=lines[i].split(separator);for(var j=0;j<headers.length;j++){obj[headers[j]]=currentline[j];}result.push(obj);}$App[jsonObject]=result;};$scope.CheckInternetConnection=function(url,timeout,successFn,errorFn){$.ajax({url:url,timeout:timeout,cache:false,success:function(){if(successFn!=undefined){successFn();}},error:function(){if(errorFn!=undefined){errorFn();}},});};$scope.SetRelativePosition=function(objectname,vertical,horizontal){$("#"+objectname).css("position","absolute");if(vertical=="top"){$("#"+objectname).css("top","0px");$("#"+objectname).css("bottom","auto");}else if(vertical=="bottom"){$("#"+objectname).css("bottom","0px");$("#"+objectname).css("top","auto");}else{$("#"+objectname).css("bottom","0px");$("#"+objectname).css("top","0px");}if(horizontal=="left"){$("#"+objectname).css("left","0px");$("#"+objectname).css("right","auto");}else if(horizontal=="right"){$("#"+objectname).css("left","auto");$("#"+objectname).css("right","0px");}else{$("#"+objectname).css("left","0px");$("#"+objectname).css("right","0px");}$("#"+objectname).css("margin","auto");};$scope.WatchVar=function(varName,fn){if($App.NAB.$Watches[varName]){if($App.NAB.$Watches[varName].deRegFn)$App.NAB.$Watches[varName].deRegFn();delete $App.NAB.$Watches[varName];};if(fn){$App.NAB.$Watches[varName]={id:varName,deRegFn:undefined};$App.NAB.$Watches[varName].deRegFn=$scope.$watch(varName,function(newVal,oldVal){if(oldVal!==newVal)fn(newVal,oldVal);});};};$scope.TimerStart=function(objId,ms){if($App.NAB.$Timers[objId]){if(!angular.isDefined($App.NAB.$Timers[objId].promise)){$App.NAB.$Timers[objId].stime=Date.now();$App.NAB.$Timers[objId].promise=$interval($App.NAB.$Timers[objId].fn,ms||1000);}}else throw'A timer named "'+objId+'" does not exist.';};$scope.TimerStop=function(objId){if($App.NAB.$Timers[objId]){if(angular.isDefined($App.NAB.$Timers[objId].promise)){$interval.cancel($App.NAB.$Timers[objId].promise);$App.NAB.$Timers[objId].promise=undefined;}}else throw'A timer named "'+objId+'" does not exist.';};$scope._DeleteSound=function(sname){if($App.NAB.$Audio[sname]){$App.NAB.$Audio[sname].player.pause();delete $App.NAB.$Audio[sname].player;delete $App.NAB.$Audio[sname];return true;}return false;};$scope.PlaySound=function(fname,loop){var sname=ExtractFileName(fname).toLowerCase();if($App.NAB.$Audio[sname])throw'A sound named "'+sname+'" is already playing.';var devicePlatform=(typeof device!=='undefined'&&device.platform)?device.platform:null;if(typeof Audio!=="undefined"&&devicePlatform===null){obj={id:sname,kind:"audio",player:new Audio(fname)};obj.player.addEventListener("ended",function(){$scope._DeleteSound(sname);});}else if(devicePlatform){if(devicePlatform==='Android'){if(!IsUrl(fname))fname='/android_asset/www/'+fname;}obj={id:sname,kind:"media",player:new Media(fname,function onSuccess(){$scope._DeleteSound(sname);},function onError(e){console.log("Error playing sound: "+JSON.stringify(e));$scope._DeleteSound(sname);})};}else throw'Sound API unavailable.';$App.NAB.$Audio[sname]=obj;if(obj.kind==="audio"){obj.player.loop=loop;obj.player.play();}else obj.player.play({numberOfLoops:loop});};$scope.StopSound=function(fname){if(!fname||fname.length===0){for(var id in $App.NAB.$Audio)$scope._DeleteSound(id);}else{var sname=ExtractFileName(fname).toLowerCase();if(!$scope._DeleteSound(sname))throw'There is no playing sound named "'+sname+'"';}};$scope.CreateVideoPlayer=function(objId,fname,controls,autoplay,looping,muted){var sname=ExtractFileName(fname).toLowerCase();if(controls){addcontrols="controls";}else{addcontrols="";}if(autoplay){addautoplay="autoplay";}else{addautoplay="";}if(looping){addloop="loop";}else{addloop="";}if(muted){addmuted="muted";}else{addmuted="";}htmlstring='<video id="'+objId+'Video" width="100%" height="100%" '+addcontrols+' '+addautoplay+' '+addloop+' '+addmuted+'><source src="'+fname+'" type="video/mp4"></video>';$("#"+objId).html(htmlstring);};$scope.OnVideoEvent=function(objId,eventName,subroutine){if($App.NAB[objId+"Video"]){$App.NAB[objId+"Video"].on(eventName,subroutine);return;}$("#"+objId+"Video").on(eventName,subroutine);};$scope.CreateAudioPlayer=function(objId,fname,controls,autoplay,looping){var sname=ExtractFileName(fname).toLowerCase();if(controls){addcontrols="controls";}else{addcontrols="";}if(autoplay){addautoplay="autoplay";}else{addautoplay="";}if(looping){addloop="loop";}else{addloop="";}htmlstring='<audio id="'+objId+'Audio" width="100%" height="100%" '+addcontrols+' '+addautoplay+' '+addloop+'><source src="'+fname+'" type="audio/mp3"></audio>';$("#"+objId).html(htmlstring);};$scope.OnAudioEvent=function(objId,eventName,subroutine){if($App.NAB[objId+"Audio"]){$App.NAB[objId+"Audio"].on(eventName,subroutine);return;}$("#"+objId+"Audio").on(eventName,subroutine);};$scope.SoundBeep=function(){var snd=new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");snd.play();};var fit=function(){"use strict";function t(t){return t.toUpperCase()}function e(t){return"number"==typeof t&&!isNaN(t)}function n(){return(new Date).getTime()}function i(t,e){for(var n=[],i=0,r=t.length;r>i;i++)n[i]=e(t[i]);return n}function r(t,e){for(var n in e)n in t||(t[n]=e[n]);return t}function o(e){if(!d)for(var n,i=H(C.body),r=w,o=0,a=T.length;a>o&&(d=T[o],n=d+r,!(n in i))&&(d=d.replace(/^(\w)/,t),n=d+r,!(n in i));o++);return d+e}function a(t){var e=H(t),n=e[o(w)].replace(/[a-z()]/gi,"").split(",");if(n.length<6)return[1,0,0,1,0,0];for(var i=0;6>i;i++)n[i]=parseFloat(n[i]);return n}function f(t,e){var n=a(e);n[0]=t.scale,n[3]=t.scale,n[4]+=t.tx,n[5]+=t.ty;var r=i(n,function(t){return t.toFixed(6)});e.style[o(m)]="0 0",e.style[o(w)]="matrix("+r.join(",")+")"}function s(t,e){var n=H(e),i=parseFloat(n.left)||0,r=parseFloat(n.top)||0;"static"===n.position&&(e.style.position="relative"),e.style.left=i+t.tx+b,e.style.top=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function l(t,e){var n=H(e),i=parseFloat(n.marginLeft)||0,r=parseFloat(n.marginTop)||0;e.style.marginLeft=i+t.tx+b,e.style.marginTop=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function h(t,e){e.height*=t.scale,e.width*=t.scale,e.x+=t.tx,e.y+=t.ty}function u(t){if(t.nodeType&&1==t.nodeType){var n=t.getBoundingClientRect();t={height:t.offsetHeight,width:t.offsetWidth,x:n.left,y:n.top}}return!e(t.x)&&e(t.left)&&(t.x=t.left),!e(t.y)&&e(t.top)&&(t.y=t.top),t}function c(){var t=n(),e=t-y;if(x>=e)clearInterval(v),v=setTimeout(c,x-e);else{for(var i=0,r=M.length;r>i;i++)M[i]();y=t}}function g(t,e,n,i,r){var o=u(t),a=u(e),s=0===o.width?R:o.width,l=0===o.height?P:o.height,c=0===a.width?I:a.width,g=0===a.height?P:a.height;R=s,B=l,I=c,P=g;var p=c/s,d=g/l,y=s/l,v=c/g,x=n.cover?d:p,m=n.cover?p:d,w=y>=v?x:m,T=s*w,O=l*w,F=n.hAlign==E?.5*(T-c):n.hAlign==L?T-c:0,b=n.vAlign==E?.5*(O-g):n.vAlign==A?O-g:0;return r=r||{},r.tx=a.x-F-o.x,r.ty=a.y-b-o.y,r.x=a.x-F-o.x*w,r.y=a.y-b-o.y*w,r.height=o.height*w,r.width=o.width*w,r.scale=w,i?i(r,t):n.apply&&(i="undefined"!=typeof HTMLElement&&t instanceof HTMLElement?f:h)(r,t),r}function p(t,e,n,i){if(!t||!e)throw"You must supply a target and a container";"function"==typeof n&&(i=n,n={}),n=r(n||{},N);var o=g(t,e,n,i);return n.watch&&(M.length||(z.addEventListener?(z.addEventListener("resize",c),z.addEventListener("orientationchange",c)):(z.attachEvent("onresize",c),z.attachEvent("onorientationchange",c))),o.trigger=function(){g(t,e,n,i,o)},o.on=function(t){var e=M.indexOf(o.trigger);~e||M.push(o.trigger),t||o.trigger()},o.off=function(){var t=M.indexOf(o.trigger);~t&&M.splice(t,1)},o.on(!0)),o}var d,y,v,x=50,m="TransformOrigin",w="Transform",T="moz ms o webkit".split(" "),E="center",A="bottom",L="right",O="left",F="top",b="px",z=window||self,C=document,H=z.getComputedStyle,M=[],N={hAlign:E,vAlign:E,watch:!1,cover:!1,apply:!0};Array.prototype.indexOf||(Array.prototype.indexOf=function(t){for(var e=0;e<this.length;++e)if(this[e]==t)return e;return-1});var R,B,I,P;return r(p,{watching:M,defaults:N,cssTransform:f,cssPosition:s,cssMargin:l,CENTER:E,BOTTOM:A,RIGHT:L,LEFT:O,TOP:F})}();"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=fit),exports.fit=fit);(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});function d(c){var b,a;if(!this.length)return this;b=this[0];b.ownerDocument?a=b.ownerDocument:(a=b,b=a.documentElement);if(null==c){if(!a.exitFullscreen&&!a.webkitExitFullscreen&&!a.webkitCancelFullScreen&&!a.msExitFullscreen&&!a.mozCancelFullScreen)return null;c=!!a.fullscreenElement||!!a.msFullscreenElement||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!c?c:a.fullscreenElement||a.webkitFullscreenElement||a.webkitCurrentFullScreenElement||a.msFullscreenElement||a.mozFullScreenElement||c}c?(c=b.requestFullscreen||b.webkitRequestFullscreen||b.webkitRequestFullScreen||b.msRequestFullscreen||b.mozRequestFullScreen)&&c.call(b):(c=a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.msExitFullscreen||a.mozCancelFullScreen)&&c.call(a);return this}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.msExitFullscreen?(f="MSFullscreenChange",g="MSFullscreenError"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");jQuery(document).bind(f,function(){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))});jQuery(document).bind(g,function(){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))});$scope.EnterFullScreen=function(){$(document).fullScreen(true);};$scope.ExitFullScreen=function(){$(document).fullScreen(false);};$scope.ObjectEnterFullScreen=function(ObjId){$("#"+ObjId).fullScreen(true);};$scope.ObjectExitFullScreen=function(ObjId){$("#"+ObjId).fullScreen(false);};var neoscript;$scope.AppOnKeyDown=function(callbackFn){$("body").keydown(function(evt){callbackFn(evt.which);});};(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||"object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}};f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});$scope.VarToFile=function(datavar,filename){var blob=new Blob([datavar],{type:"text/plain;charset=utf-8"});saveAs(blob,filename);};!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.mexp=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d=a("./postfix_evaluator.js");d.prototype.formulaEval=function(){"use strict";for(var a,b,c,d=[],e=this.value,f=0;f<e.length;f++)1===e[f].type||3===e[f].type?d.push({value:3===e[f].type?e[f].show:e[f].value,type:1}):13===e[f].type?d.push({value:e[f].show,type:1}):0===e[f].type?d[d.length-1]={value:e[f].show+("-"!=e[f].show?"(":"")+d[d.length-1].value+("-"!=e[f].show?")":""),type:0}:7===e[f].type?d[d.length-1]={value:(1!=d[d.length-1].type?"(":"")+d[d.length-1].value+(1!=d[d.length-1].type?")":"")+e[f].show,type:7}:10===e[f].type?(a=d.pop(),b=d.pop(),"P"===e[f].show||"C"===e[f].show?d.push({value:"<sup>"+b.value+"</sup>"+e[f].show+"<sub>"+a.value+"</sub>",type:10}):d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+"<sup>"+a.value+"</sup>",type:1})):2===e[f].type||9===e[f].type?(a=d.pop(),b=d.pop(),d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+e[f].show+(1!=a.type?"(":"")+a.value+(1!=a.type?")":""),type:e[f].type})):12===e[f].type&&(a=d.pop(),b=d.pop(),c=d.pop(),d.push({value:e[f].show+"("+c.value+","+b.value+","+a.value+")",type:12}));return d[0].value},b.exports=d},{"./postfix_evaluator.js":5}],2:[function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++)a[c]+=b;return a}function e(a,b,c,d){for(var e=0;e<d;e++)if(a[c+e]!==b[e])return!1;return!0}var f=a("./math_function.js"),g=["sin","cos","tan","pi","(",")","P","C","asin","acos","atan","7","8","9","int","cosh","acosh","ln","^","root","4","5","6","/","!","tanh","atanh","Mod","1","2","3","*","sinh","asinh","e","log","0",".","+","-",",","Sigma","n","Pi","pow"],h=["sin","cos","tan","&pi;","(",")","P","C","asin","acos","atan","7","8","9","Int","cosh","acosh"," ln","^","root","4","5","6","&divide;","!","tanh","atanh"," Mod ","1","2","3","&times;","sinh","asinh","e"," log","0",".","+","-",",","&Sigma;","n","&Pi;","pow"],i=[f.math.sin,f.math.cos,f.math.tan,"PI","(",")",f.math.P,f.math.C,f.math.asin,f.math.acos,f.math.atan,"7","8","9",Math.floor,f.math.cosh,f.math.acosh,Math.log,Math.pow,Math.sqrt,"4","5","6",f.math.div,f.math.fact,f.math.tanh,f.math.atanh,f.math.mod,"1","2","3",f.math.mul,f.math.sinh,f.math.asinh,"E",f.math.log,"0",".",f.math.add,f.math.sub,",",f.math.sigma,"n",f.math.Pi,Math.pow],j={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0},k=[0,0,0,3,4,5,10,10,0,0,0,1,1,1,0,0,0,0,10,0,1,1,1,2,7,0,0,2,1,1,1,2,0,0,3,0,1,6,9,9,11,12,13,12,8],l={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0},m={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},n={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},o={},p={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},q={1:!0},r=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];f.addToken=function(a){for(var b=0;b<a.length;b++){var c=a[b].token.length,d=-1;if(c<r.length)for(var e=0;e<r[c].length;e++)if(a[b].token===r[c][e]){d=g.indexOf(r[c][e]);break}d===-1?(g.push(a[b].token),k.push(a[b].type),r.length<=a[b].token.length&&(r[a[b].token.length]=[]),r[a[b].token.length].push(a[b].token),i.push(a[b].value),h.push(a[b].show)):(g[d]=a[b].token,k[d]=a[b].type,i[d]=a[b].value,h[d]=a[b].show)}},f.lex=function(a,b){"use strict";var c,s,t,u,v={value:f.math.changeSign,type:0,pre:21,show:"-"},w={value:")",show:")",type:5,pre:0},x={value:"(",type:4,pre:0,show:"("},y=[x],z=[],A=a,B=0,C=l,D=0,E=o,F="";"undefined"!=typeof b&&f.addToken(b);var G={};for(s=0;s<A.length;s++)if(" "!==A[s]){for(c="",t=A.length-s>r.length-2?r.length-1:A.length-s;t>0;t--)for(u=0;u<r[t].length;u++)e(A,r[t][u],s,t)&&(c=r[t][u],u=r[t].length,t=0);if(s+=c.length-1,""===c)throw new f.Exception("Can't understand after "+A.slice(s));var H,I=g.indexOf(c),J=c,K=k[I],L=i[I],M=j[K],N=h[I],O=y[y.length-1];for(H=z.length;H--&&0===z[H];)if([0,2,3,5,9,11,12,13].indexOf(K)!==-1){if(C[K]!==!0)throw new f.Exception(c+" is not allowed after "+F);y.push(w),C=m,E=p,d(z,-1).pop()}if(C[K]!==!0)throw new f.Exception(c+" is not allowed after "+F);if(E[K]===!0&&(K=2,L=f.math.mul,N="&times;",M=3,s-=c.length),G={value:L,type:K,pre:M,show:N},0===K)C=l,E=o,d(z,2).push(2),y.push(G),y.push(x);else if(1===K)1===O.type?(O.value+=L,d(z,1)):y.push(G),C=m,E=n;else if(2===K)C=l,E=o,d(z,2),y.push(G);else if(3===K)y.push(G),C=m,E=p;else if(4===K)B+=z.length,z=[],D++,C=l,E=o,y.push(G);else if(5===K){if(!D)throw new f.Exception("Closing parenthesis are more than opening one, wait What!!!");for(;B--;)y.push(w);B=0,D--,C=m,E=p,y.push(G)}else if(6===K){if(O.hasDec)throw new f.Exception("Two decimals are not allowed in one number");1!==O.type&&(O={value:0,type:1,pre:0},y.push(O),d(z,-1)),C=q,d(z,1),E=o,O.value+=L,O.hasDec=!0}else 7===K&&(C=m,E=p,d(z,1),y.push(G));8===K?(C=l,E=o,d(z,4).push(4),y.push(G),y.push(x)):9===K?(9===O.type?O.value===f.math.add?(O.value=L,O.show=N,d(z,1)):O.value===f.math.sub&&"-"===N&&(O.value=f.math.add,O.show="+",d(z,1)):5!==O.type&&7!==O.type&&1!==O.type&&3!==O.type&&13!==O.type?"-"===J&&(C=l,E=o,d(z,2).push(2),y.push(v),y.push(x)):(y.push(G),d(z,2)),C=l,E=o):10===K?(C=l,E=o,d(z,2),y.push(G)):11===K?(C=l,E=o,y.push(G)):12===K?(C=l,E=o,d(z,6).push(6),y.push(G),y.push(x)):13===K&&(C=m,E=p,y.push(G)),d(z,-1),F=c}for(H=z.length;H--&&0===z[H];)y.push(w),d(z,-1).pop();if(C[5]!==!0)throw new f.Exception("complete the expression");for(;D--;)y.push(w);return y.push(w),new f(y)},b.exports=f},{"./math_function.js":3}],3:[function(a,b,c){var d=function(a){this.value=a};d.math={isDegree:!0,acos:function(a){return d.math.isDegree?180/Math.PI*Math.acos(a):Math.acos(a)},add:function(a,b){return a+b},asin:function(a){return d.math.isDegree?180/Math.PI*Math.asin(a):Math.asin(a)},atan:function(a){return d.math.isDegree?180/Math.PI*Math.atan(a):Math.atan(a)},acosh:function(a){return Math.log(a+Math.sqrt(a*a-1))},asinh:function(a){return Math.log(a+Math.sqrt(a*a+1))},atanh:function(a){return Math.log((1+a)/(1-a))},C:function(a,b){var c=1,e=a-b,f=b;f<e&&(f=e,e=b);for(var g=f+1;g<=a;g++)c*=g;return c/d.math.fact(e)},changeSign:function(a){return-a},cos:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.cos(a)},cosh:function(a){return(Math.pow(Math.E,a)+Math.pow(Math.E,-1*a))/2},div:function(a,b){return a/b},fact:function(a){if(a%1!==0)return"NaN";for(var b=1,c=2;c<=a;c++)b*=c;return b},inverse:function(a){return 1/a},log:function(a){return Math.log(a)/Math.log(10)},mod:function(a,b){return a%b},mul:function(a,b){return a*b},P:function(a,b){for(var c=1,d=Math.floor(a)-Math.floor(b)+1;d<=Math.floor(a);d++)c*=d;return c},Pi:function(a,b,c){for(var d=1,e=a;e<=b;e++)d*=Number(c.postfixEval({n:e}));return d},pow10x:function(a){for(var b=1;a--;)b*=10;return b},sigma:function(a,b,c){for(var d=0,e=a;e<=b;e++)d+=Number(c.postfixEval({n:e}));return d},sin:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.sin(a)},sinh:function(a){return(Math.pow(Math.E,a)-Math.pow(Math.E,-1*a))/2},sub:function(a,b){return a-b},tan:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.tan(a)},tanh:function(a){return d.sinha(a)/d.cosha(a)},toRadian:function(a){return a*Math.PI/180}},d.Exception=function(a){this.message=a},b.exports=d},{}],4:[function(a,b,c){var d=a("./lexer.js");d.prototype.toPostfix=function(){"use strict";for(var a,b,c,e,f,g=[],h=[{value:"(",type:4,pre:0}],i=this.value,j=1;j<i.length;j++)if(1===i[j].type||3===i[j].type||13===i[j].type)1===i[j].type&&(i[j].value=Number(i[j].value)),g.push(i[j]);else if(4===i[j].type)h.push(i[j]);else if(5===i[j].type)for(;4!==(b=h.pop()).type;)g.push(b);else if(11===i[j].type){for(;4!==(b=h.pop()).type;)g.push(b);h.push(b)}else{a=i[j],e=a.pre,f=h[h.length-1],c=f.pre;var k="Math.pow"==f.value&&"Math.pow"==a.value;if(e>c)h.push(a);else{for(;c>=e&&!k||k&&e<c;)b=h.pop(),f=h[h.length-1],g.push(b),c=f.pre,k="Math.pow"==a.value&&"Math.pow"==f.value;h.push(a)}}return new d(g)},b.exports=d},{"./lexer.js":2}],5:[function(a,b,c){var d=a("./postfix.js");d.prototype.postfixEval=function(a){"use strict";a=a||{},a.PI=Math.PI,a.E=Math.E;for(var b,c,e,f=[],g=this.value,h="undefined"!=typeof a.n,i=0;i<g.length;i++)1===g[i].type?f.push({value:g[i].value,type:1}):3===g[i].type?f.push({value:a[g[i].value],type:1}):0===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):7===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):8===g[i].type?(b=f.pop(),c=f.pop(),f.push({type:1,value:g[i].value(c.value,b.value)})):10===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(c.value=c.concat(b),c.value.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):2===g[i].type||9===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(console.log(c),c=c.concat(b),c.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):12===g[i].type?(b=f.pop(),"undefined"!=typeof b.type&&(b=[b]),c=f.pop(),e=f.pop(),f.push({type:1,value:g[i].value(e.value,c.value,new d(b))})):13===g[i].type&&(h?f.push({value:a[g[i].value],type:3}):f.push([g[i]]));if(f.length>1)throw new d.exception("Uncaught Syntax error");return f[0].value>1e15?"Infinity":parseFloat(f[0].value.toFixed(15))},d.eval=function(a,b,c){return"undefined"==typeof b?this.lex(a).toPostfix().postfixEval():"undefined"==typeof c?"undefined"!=typeof b.length?this.lex(a,b).toPostfix().postfixEval():this.lex(a).toPostfix().postfixEval(b):this.lex(a,b).toPostfix().postfixEval(c)},b.exports=d},{"./postfix.js":4}]},{},[1])(1)});$scope.Calculate=function(formula,decimals){var numero=mexp.eval(formula);if(decimals!=-1){potencia=Math.pow(10,decimals);numero=Math.round(numero*potencia)/potencia;}return numero;};$(document).mousemove(function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.pageX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.pageY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;var sx=((evt.pageX+$(window).scrollLeft())/$App.NAB.AppScale);var sy=((evt.pageY+$(window).scrollTop())/$App.NAB.AppScale);$App.NAB.MouseX=Math.round(x);$App.NAB.MouseY=Math.round(y);$App.NAB.MouseScreenX=Math.round(sx);$App.NAB.MouseScreenY=Math.round(sy);});$(document).on("touchmove",function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.touches[0].clientX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.touches[0].clientY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;$App.NAB.TouchX=Math.round(x);$App.NAB.TouchY=Math.round(y);});$(document).on("touchstart",function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.touches[0].clientX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.touches[0].clientY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;$App.NAB.TouchX=Math.round(x);$App.NAB.TouchY=Math.round(y);});
$App.NAB={PageList:["Main","About","MainBounce","EditHeaders","Base","SelectionM001","SelectionM002","SelectionM003","SelectionM004","SelectionM005","SelectionM006","SelectionM007","SelectionM008","SelectionM009","SelectionM013","SLAnalysis","SL1","SL2","SL3","SLAnalysis01","SelectionM015","ADHDAnalysis","ADHDAnalysis001","ADHDAnalysis001-q1","ADHDAnalysis002-q1","ADHDAnalysis002","ADHDAnalysis003","ADHDAnalysis004","ADHDAnalysis005","ADHDAnalysis006","ADHDAnalysis007","ADHDAnalysis008","ADHDAnalysis009","ADHDAnalysisScore","SelectionM015x01","SelectionM015x02","SelectionM015x03","SelectionM015x04","SelectionM015x05","SelectionM015x06","SelectionM015x07","SelectionM015x08","SelectionM015x09","SelectionM009x01","SelectionM009x02","SelectionM009x03","SelectionM006x01","SelectionM007x01","SelectionM008x01","SelectionM005x01","SelectionM005x02","SelectionM005x03","SelectionM005x04","SelectionM005x05","SelectionM005x06","SelectionM005x07","SelectionM005x08","SelectionM004x01","SelectionM004x02","SelectionM004x03","SelectionM004x04","SelectionM004x05","SelectionM004x06","SelectionM004x07","SelectionM004x08","SelectionM002x01","SelectionM002x02","SelectionM002x03","SelectionM002x04","SelectionM002x05","SelectionM002x06","SelectionM002x07","SelectionM002x08","SelectionM003x01","SelectionM003x02","SelectionM003x03","SelectionM003x04","SelectionM003x05","SelectionM003x06","SelectionM003x07","SelectionM003x08","SelectionM001x01","SelectionM001x02","SelectionM001x03","SelectionM001x04","SelectionM001x05","SelectionM001x06","SelectionM001x07","SelectionM001x08","BounceMain","CustomWork","CustomTime","CustomAppDev","SelectionM014"],PageEnterEffect:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],PageCount:94,PageExitEffect:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],PageNumber:1,AppScale:1,PageID:"",Hour:"",Hour24:"",Minute:"",Second:"",Time:"",Time24:"",DateShort:"",DateLong:"",DateFull:"",Month:"",MonthNum:"",WeekNum:"",Day:"",DayNum:"",Year:"",ClientWidth:$window.innerWidth,ClientHeight:$window.innerHeight,WindowWidth:$window.outerWidth,WindowHeight:$window.outerHeight,Orientation:$scope.GetOrientation(),OperatingSystem:"",$Watches:{},$Timers:{},$Audio:{}};$scope.__doUpdate=function(){var Now=new Date();$App.NAB.Hour=$filter("date")(Now,"h");$App.NAB.Hour24=$filter("date")(Now,"H");$App.NAB.Minute=$filter("date")(Now,"mm");$App.NAB.Second=$filter("date")(Now,"ss");$App.NAB.Time=$filter("date")(Now,"mediumTime");$App.NAB.Time24=$filter("date")(Now,"H:mm:ss");$App.NAB.DateShort=$filter("date")(Now,"shortDate");$App.NAB.DateLong=$filter("date")(Now,"longDate");$App.NAB.DateFull=$filter("date")(Now,"fullDate");$App.NAB.Month=$filter("date")(Now,"MMMM");$App.NAB.MonthNum=$filter("date")(Now,"M");$App.NAB.WeekNum=$filter("date")(Now,"w");$App.NAB.Day=$filter("date")(Now,"EEEE");$App.NAB.DayNum=$filter("date")(Now,"d");$App.NAB.Year=$filter("date")(Now,"yyyy");};$scope.__doOrientationChange=function(){$App.NAB.Orientation=$scope.GetOrientation();};$scope.__doResize=function(){$App.NAB.ClientWidth=$window.innerWidth;$App.NAB.ClientHeight=$window.innerHeight;$App.NAB.WindowWidth=$window.outerWidth;$App.NAB.WindowHeight=$window.outerHeight;};$scope.__init=function(){angular.element($window).bind("orientationchange.app",function(){$timeout($scope.__doOrientationChange);});angular.element($window).bind("resize.app",function(){$timeout($scope.__doResize);});$interval($scope.__doUpdate,1000);$App.NAB.OperatingSystem=GetPlatform();$scope.__doUpdate();};
$scope.Main_pageenter = function() {$App.googleSheet = "https://docs.google.com/spreadsheets/d/1LfHEbAWtax0i8tx9EZrSqjvVAvYbzHoSOMG2lClHD9w/edit?usp=sharing#gid=X";
$App.basename = localStorage.getItem("basename");
$App.v1w = localStorage.getItem("Work01");
$App.v2w = localStorage.getItem("Work02");
$App.v3w = localStorage.getItem("Work03");
$App.v4w = localStorage.getItem("Work04");
$App.v5w = localStorage.getItem("Work05");
$App.v6w = localStorage.getItem("Work06");
$App.v7w = localStorage.getItem("Work07");
$App.v8w = localStorage.getItem("Work08");
$App.v1a = localStorage.getItem("AppDev01");
$App.v2a = localStorage.getItem("AppDev02");
$App.v3a = localStorage.getItem("AppDev03");
$App.v4a = localStorage.getItem("AppDev04");
$App.v5a = localStorage.getItem("AppDev05");
$App.v6a = localStorage.getItem("AppDev06");
$App.v7a = localStorage.getItem("AppDev07");
$App.v8a = localStorage.getItem("AppDev08");
$App.v1t = localStorage.getItem("Time01");
$App.v2t = localStorage.getItem("Time02");
$App.v3t = localStorage.getItem("Time03");
$App.v4t = localStorage.getItem("Time04");
$App.v5t = localStorage.getItem("Time05");
$App.v6t = localStorage.getItem("Time06");
$App.v7t = localStorage.getItem("Time07");
$App.v8t = localStorage.getItem("Time08");
$App.main01 = localStorage.getItem("main01");
$App.main02 = localStorage.getItem("main02");
$App.main03 = localStorage.getItem("main03");
$App.main04 = localStorage.getItem("main04");
$App.main05 = localStorage.getItem("main05");
$App.main06 = localStorage.getItem("main06");
$App.main07 = localStorage.getItem("main07");
$App.main08 = localStorage.getItem("main08");
$App.main09 = localStorage.getItem("main09");
$App.main10 = localStorage.getItem("main10");
$App.main11 = localStorage.getItem("main11");
$App.main12 = localStorage.getItem("main12");
$App.main13 = localStorage.getItem("main13");
$App.main14 = localStorage.getItem("main14");
$App.main15 = localStorage.getItem("main15");
$App.main16 = localStorage.getItem("main16");
$App.main17 = localStorage.getItem("main17");
$App.main18 = localStorage.getItem("main18");
if ($App.basename == "") {
localStorage.setItem("basename",Basename);
$App.basename = localStorage.getItem("basename");
} else {
};};
$scope.About_pageenter = function() {$App.About = localStorage.getItem("About");};
$scope.MainBounce_pageenter = function() {$scope.GotoPage( "Main" );};
$scope.Base_pageenter = function() {$App.reda = localStorage.getItem("reda");
$App.redb = localStorage.getItem("redb");
$App.redc = localStorage.getItem("redc");
$App.redd = localStorage.getItem("redd");
$App.rede = localStorage.getItem("rede");
$App.redf = localStorage.getItem("redf");
$App.redg = localStorage.getItem("redg");
$App.redh = localStorage.getItem("redh");
$App.redgxc1 = "1";
$App.redgxc2 = "1";
$App.redgxc3 = "1";
$App.redgxc4 = "1";
$App.redgxc5 = "1";
$App.redgxc6 = "1";
$App.redgxc7 = "1";
$App.redgxc8 = "1";
$App.redgxc9 = "1";
$App.redgxc15 = "1";
$App.redgx1 = localStorage.getItem("redgx1");
$App.redgx2 = localStorage.getItem("redgx2");
$App.redgx3 = localStorage.getItem("redgx3");
$App.redgx4 = localStorage.getItem("redgx4");
$App.redgx5 = localStorage.getItem("redgx5");
$App.redgx6 = localStorage.getItem("redgx6");
$App.redgx7 = localStorage.getItem("redgx7");
$App.redgx8 = localStorage.getItem("redgx8");
$App.redgx9 = localStorage.getItem("redgx9");
$App.short = "Reset";
$App.M001x001a = localStorage.getItem("M001x001a");
$App.M002x001a = localStorage.getItem("M002x001a");
$App.M003x001a = localStorage.getItem("M003x001a");
$App.M004x001a = localStorage.getItem("M004x001a");
$App.M005x001a = localStorage.getItem("M005x001a");
$App.M006x001a = localStorage.getItem("M006x001a");
$App.M007x001a = localStorage.getItem("M007x001a");
$App.M008x001a = localStorage.getItem("M008x001a");
$App.M009x001a = localStorage.getItem("M009x001a");
$App.M010x001a = localStorage.getItem("M010x001a");
$App.M011x001a = localStorage.getItem("M011x001a");
$App.M012x001a = localStorage.getItem("M012x001a");
$App.M013x001a = localStorage.getItem("M013x001a");
$App.M014x001a = localStorage.getItem("M014x001a");
$App.M015x001a = localStorage.getItem("M015x001a");
$App.M016x001a = localStorage.getItem("M016x001a");
$App.M017x001a = localStorage.getItem("M017x001a");
$App.M018x001a = localStorage.getItem("M018x001a");
$App.M016x001 = localStorage.getItem("M016x001");
$App.M001x001a = localStorage.getItem("M001x001a");
$App.M002x001a = localStorage.getItem("M002x001a");
$App.M003x001a = localStorage.getItem("M003x001a");
$App.M004x001a = localStorage.getItem("M004x001a");
$App.M005x001a = localStorage.getItem("M005x001a");
$App.M006x001a = localStorage.getItem("M006x001a");
$App.M007x001a = localStorage.getItem("M007x001a");
$App.M008x001a = localStorage.getItem("M008x001a");
$App.basename = localStorage.getItem("basename");};
$scope.SelectionM013_pageenter = function() {neoGSheetsLoadCell($App.googleSheet,"Tree013DB01","c",1,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB02","c",2,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB03","c",3,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB04","c",4,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB05","c",5,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB06","c",6,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB07","c",7,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB08","c",8,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB09","c",9,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB10","c",10,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB11","c",11,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB12","c",12,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB13","c",13,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB14","c",14,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB15","c",15,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB16","c",16,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB17","c",17,null);

neoGSheetsLoadCell($App.googleSheet,"Tree013DB18","c",18,null);
};
$scope.SLAnalysis_pageenter = function() {$App.ADHDM013x001 = localStorage.getItem("ADHDM013x001");
$App.ADHDM013x001a = localStorage.getItem("ADHDM013x001a");};
$scope.SL1_pageenter = function() {$App.ADHDSL1 = localStorage.getItem("ADHDSL1");
$App.ADHDSL1a = localStorage.getItem("ADHDSL1a");};
$scope.SL2_pageenter = function() {$App.ADHDSL2 = localStorage.getItem("ADHDSL2");
$App.ADHDSL2a = localStorage.getItem("ADHDSL2a");};
$scope.SL3_pageenter = function() {$App.ADHDSL3 = localStorage.getItem("ADHDSL3");
$App.ADHDSL3a = localStorage.getItem("ADHDSL3a");};
$scope.SLAnalysis01_pageenter = function() {neoGSheetsLoadCell($App.googleSheet,"SLAnalysis001q","c",51,null);

localStorage.setItem("SLAnalysis001q",$App.SLAnalysis001q);
$App.SLAnalysis001q = localStorage.getItem("SLAnalysis001q");
neoGSheetsLoadCell($App.googleSheet,"SLAnalysis002q","c",51,null);

localStorage.setItem("SLAnalysis002q",$App.SLAnalysis002q);
$App.SLAnalysis002q = localStorage.getItem("SLAnalysis002q");
neoGSheetsLoadCell($App.googleSheet,"SLAnalysis003q","c",53,null);

localStorage.setItem("SLAnalysis003q",$App.SLAnalysis003q);
$App.SLAnalysis003q = localStorage.getItem("SLAnalysis003q");
neoGSheetsLoadCell($App.googleSheet,"SLAnalysis004q","c",54,null);

localStorage.setItem("SLAnalysis004q",$App.SLAnalysis004q);
$App.SLAnalysis004q = localStorage.getItem("SLAnalysis004q");};
$scope.SelectionM015_pageenter = function() {neoGSheetsLoadCell($App.googleSheet,"Tree001DB01","a",200,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB02","a",201,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB03","a",202,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB04","a",203,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB05","a",204,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB06","a",205,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB07","a",206,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB08","a",207,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB09","a",208,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB10","a",209,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB11","a",210,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB12","a",211,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB13","a",212,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB14","a",213,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB15","a",214,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB16","a",215,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB17","a",216,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB18","a",217,null);
};
$scope.ADHDAnalysis_pageenter = function() {$App.ADHDM015x001 = localStorage.getItem("ADHDM015x001");
$App.ADHDM015x001a = localStorage.getItem("ADHDM015x001a");};
$scope.ADHDAnalysis001_pageenter = function() {neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis001q","b",101,null);

localStorage.setItem("ADHDAnalysis001q",$App.ADHDAnalysis001q);
$App.ADHDAnalysis001q = localStorage.getItem("ADHDAnalysis001q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis002q","b",102,null);

localStorage.setItem("ADHDAnalysis002q",$App.ADHDAnalysis002q);
$App.ADHDAnalysis002q = localStorage.getItem("ADHDAnalysis002q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis003q","b",103,null);

localStorage.setItem("ADHDAnalysis003q",$App.ADHDAnalysis003q);
$App.ADHDAnalysis003q = localStorage.getItem("ADHDAnalysis003q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis004q","b",104,null);

localStorage.setItem("ADHDAnalysis004q",$App.ADHDAnalysis004q);
$App.ADHDAnalysis004q = localStorage.getItem("ADHDAnalysis004q");};
$scope.ADHDAnalysis002_pageenter = function() {neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis005q","b",105,null);

localStorage.setItem("ADHDAnalysis005q",$App.ADHDAnalysis005q);
$App.ADHDAnalysis005q = localStorage.getItem("ADHDAnalysis005q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis006q","b",106,null);

localStorage.setItem("ADHDAnalysis006q",$App.ADHDAnalysis006q);
$App.ADHDAnalysis006q = localStorage.getItem("ADHDAnalysis006q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis007q","b",107,null);

localStorage.setItem("ADHDAnalysis007q",$App.ADHDAnalysis007q);
$App.ADHDAnalysis007q = localStorage.getItem("ADHDAnalysis007q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis008q","b",108,null);

localStorage.setItem("ADHDAnalysis008q",$App.ADHDAnalysis008q);
$App.ADHDAnalysis008q = localStorage.getItem("ADHDAnalysis008q");};
$scope.ADHDAnalysis003_pageenter = function() {neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis009q","b",109,null);

localStorage.setItem("ADHDAnalysis009q",$App.ADHDAnalysis009q);
$App.ADHDAnalysis009q = localStorage.getItem("ADHDAnalysis009q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis010q","b",110,null);

localStorage.setItem("ADHDAnalysis010q",$App.ADHDAnalysis010q);
$App.ADHDAnalysis010q = localStorage.getItem("ADHDAnalysis010q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis011q","b",111,null);

localStorage.setItem("ADHDAnalysis011q",$App.ADHDAnalysis011q);
$App.ADHDAnalysis011q = localStorage.getItem("ADHDAnalysis011q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis012q","b",112,null);

localStorage.setItem("ADHDAnalysis012q",$App.ADHDAnalysis012q);
$App.ADHDAnalysis012q = localStorage.getItem("ADHDAnalysis012q");};
$scope.ADHDAnalysis004_pageenter = function() {neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis013q","b",113,null);

localStorage.setItem("ADHDAnalysis013q",$App.ADHDAnalysis013q);
$App.ADHDAnalysis013q = localStorage.getItem("ADHDAnalysis013q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis014q","b",114,null);

localStorage.setItem("ADHDAnalysis014q",$App.ADHDAnalysis014q);
$App.ADHDAnalysis014q = localStorage.getItem("ADHDAnalysis014q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis015q","b",115,null);

localStorage.setItem("ADHDAnalysis015q",$App.ADHDAnalysis015q);
$App.ADHDAnalysis015q = localStorage.getItem("ADHDAnalysis015q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis016q","b",116,null);

localStorage.setItem("ADHDAnalysis016q",$App.ADHDAnalysis016q);
$App.ADHDAnalysis016q = localStorage.getItem("ADHDAnalysis016q");};
$scope.ADHDAnalysis005_pageenter = function() {neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis017q","b",117,null);

localStorage.setItem("ADHDAnalysis017q",$App.ADHDAnalysis017q);
$App.ADHDAnalysis017q = localStorage.getItem("ADHDAnalysis017q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis018q","b",118,null);

localStorage.setItem("ADHDAnalysis018q",$App.ADHDAnalysis018q);
$App.ADHDAnalysis018q = localStorage.getItem("ADHDAnalysis018q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis019q","b",119,null);

localStorage.setItem("ADHDAnalysis019q",$App.ADHDAnalysis019q);
$App.ADHDAnalysis019q = localStorage.getItem("ADHDAnalysis019q");
neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis020q","b",120,null);

localStorage.setItem("ADHDAnalysis020q",$App.ADHDAnalysis020q);
$App.ADHDAnalysis020q = localStorage.getItem("ADHDAnalysis020q");};
$scope.ADHDAnalysis006_pageenter = function() {$App.ADHDAnalysis021r1 = localStorage.getItem("ADHDAnalysis021r1");
$App.ADHDAnalysis022r1 = localStorage.getItem("ADHDAnalysis022r1");
$App.ADHDAnalysis023r1 = localStorage.getItem("ADHDAnalysis023r1");
$App.ADHDAnalysis024r1 = localStorage.getItem("ADHDAnalysis024r1");
$App.ADHDAnalysis021q = localStorage.getItem("ADHDAnalysis021q");
$App.ADHDAnalysis022q = localStorage.getItem("ADHDAnalysis022q");
$App.ADHDAnalysis023q = localStorage.getItem("ADHDAnalysis023q");
$App.ADHDAnalysis024q = localStorage.getItem("ADHDAnalysis024q");};
$scope.ADHDAnalysis007_pageenter = function() {$App.ADHDAnalysis025r1 = localStorage.getItem("ADHDAnalysis025r1");
$App.ADHDAnalysis026r1 = localStorage.getItem("ADHDAnalysis026r1");
$App.ADHDAnalysis027r1 = localStorage.getItem("ADHDAnalysis027r1");
$App.ADHDAnalysis028r1 = localStorage.getItem("ADHDAnalysis028r1");
$App.ADHDAnalysis025q = localStorage.getItem("ADHDAnalysis025q");
$App.ADHDAnalysis026q = localStorage.getItem("ADHDAnalysis026q");
$App.ADHDAnalysis027q = localStorage.getItem("ADHDAnalysis027q");
$App.ADHDAnalysis028q = localStorage.getItem("ADHDAnalysis028q");};
$scope.ADHDAnalysis008_pageenter = function() {$App.ADHDAnalysis029r1 = localStorage.getItem("ADHDAnalysis029r1");
$App.ADHDAnalysis030r1 = localStorage.getItem("ADHDAnalysis030r1");
$App.ADHDAnalysis031r1 = localStorage.getItem("ADHDAnalysis031r1");
$App.ADHDAnalysis032r1 = localStorage.getItem("ADHDAnalysis032r1");
$App.ADHDAnalysis029q = localStorage.getItem("ADHDAnalysis029q");
$App.ADHDAnalysis030q = localStorage.getItem("ADHDAnalysis030q");
$App.ADHDAnalysis031q = localStorage.getItem("ADHDAnalysis031q");
$App.ADHDAnalysis032q = localStorage.getItem("ADHDAnalysis032q");};
$scope.ADHDAnalysis009_pageenter = function() {$App.ADHDAnalysis033r1 = localStorage.getItem("ADHDAnalysis033r1");
$App.ADHDAnalysis034r1 = localStorage.getItem("ADHDAnalysis034r1");
$App.ADHDAnalysis035r1 = localStorage.getItem("ADHDAnalysis035r1");
$App.ADHDAnalysis036r1 = localStorage.getItem("ADHDAnalysis036r1");
$App.ADHDAnalysis033q = localStorage.getItem("ADHDAnalysis033q");
$App.ADHDAnalysis034q = localStorage.getItem("ADHDAnalysis034q");
$App.ADHDAnalysis035q = localStorage.getItem("ADHDAnalysis035q");
$App.ADHDAnalysis036q = localStorage.getItem("ADHDAnalysis036q");};
$scope.ADHDAnalysisScore_pageenter = function() {$App.ADHDAnalysis033r1 = localStorage.getItem("ADHDAnalysis033r1");
$App.ADHDAnalysis034r1 = localStorage.getItem("ADHDAnalysis034r1");
$App.ADHDAnalysis035r1 = localStorage.getItem("ADHDAnalysis035r1");
$App.ADHDAnalysis036r1 = localStorage.getItem("ADHDAnalysis036r1");
$App.ADHDAnalysis033q = localStorage.getItem("ADHDAnalysis033q");
$App.ADHDAnalysis034q = localStorage.getItem("ADHDAnalysis034q");
$App.ADHDAnalysis035q = localStorage.getItem("ADHDAnalysis035q");
$App.ADHDAnalysis036q = localStorage.getItem("ADHDAnalysis036q");};
$scope.SelectionM015x01_pageenter = function() {$App.M015x001 = localStorage.getItem("M015x001");
$App.M015x001a = localStorage.getItem("M015x001a");};
$scope.SelectionM015x02_pageenter = function() {$App.M015x002 = localStorage.getItem("M015x002");
$App.M015x002a = localStorage.getItem("M015x002a");};
$scope.SelectionM015x03_pageenter = function() {$App.M015x003 = localStorage.getItem("M015x003");
$App.M015x003a = localStorage.getItem("M015x003a");};
$scope.SelectionM015x04_pageenter = function() {$App.M015x004 = localStorage.getItem("M015x004");
$App.M015x004a = localStorage.getItem("M015x004a");};
$scope.SelectionM015x05_pageenter = function() {$App.M015x005 = localStorage.getItem("M015x005");
$App.M015x005a = localStorage.getItem("M015x005a");};
$scope.SelectionM015x06_pageenter = function() {$App.M015x006 = localStorage.getItem("M015x006");
$App.M015x006a = localStorage.getItem("M015x006a");};
$scope.SelectionM015x07_pageenter = function() {$App.M015x007 = localStorage.getItem("M015x007");
$App.M015x007a = localStorage.getItem("M015x00a7");};
$scope.SelectionM015x08_pageenter = function() {$App.M015x008 = localStorage.getItem("M015x008");
$App.M015x008a = localStorage.getItem("M015x008a");};
$scope.SelectionM015x09_pageenter = function() {$App.M009x001 = localStorage.getItem("M009x001");
$App.M009x001a = localStorage.getItem("M009x001a");};
$scope.SelectionM009x01_pageenter = function() {$App.M009x001 = localStorage.getItem("M009x001");
$App.M009x001a = localStorage.getItem("M009x001a");};
$scope.SelectionM009x02_pageenter = function() {$App.M009x002q01 = localStorage.getItem("M009x002q01");
$App.M009x002a01 = localStorage.getItem("M009x002a01");
$App.M009x002q02 = localStorage.getItem("M009x002q02");
$App.M009x002a02 = localStorage.getItem("M009x002a02");};
$scope.SelectionM009x03_pageenter = function() {$App.M009x002q03 = localStorage.getItem("M009x002q03");
$App.M009x002a03 = localStorage.getItem("M009x002a03");
$App.M009x002q04 = localStorage.getItem("M009x002q04");
$App.M009x002a04 = localStorage.getItem("M009x002a04");};
$scope.SelectionM006x01_pageenter = function() {$App.M006x001 = localStorage.getItem("M006x001");
$App.M006x001a = localStorage.getItem("M006x001a");};
$scope.SelectionM007x01_pageenter = function() {$App.M007x001 = localStorage.getItem("M007x001");};
$scope.SelectionM008x01_pageenter = function() {$App.M008x001 = localStorage.getItem("M008x001");
$App.M008x001a = localStorage.getItem("M008x001a");};
$scope.SelectionM005x01_pageenter = function() {$App.M005x001 = localStorage.getItem("M005x001");
$App.M005x001a = localStorage.getItem("M005x001a");};
$scope.SelectionM005x02_pageenter = function() {$App.M005x002 = localStorage.getItem("M005x002");};
$scope.SelectionM005x03_pageenter = function() {$App.M005x003 = localStorage.getItem("M005x003");};
$scope.SelectionM005x04_pageenter = function() {$App.M005x004 = localStorage.getItem("M005x004");};
$scope.SelectionM005x05_pageenter = function() {$App.M005x005 = localStorage.getItem("M005x005");};
$scope.SelectionM005x06_pageenter = function() {$App.M005x006 = localStorage.getItem("M005x006");};
$scope.SelectionM005x07_pageenter = function() {$App.M005x007 = localStorage.getItem("M005x007");};
$scope.SelectionM005x08_pageenter = function() {$App.M005x008 = localStorage.getItem("M005x008");};
$scope.SelectionM004x01_pageenter = function() {$App.M004x001 = localStorage.getItem("M004x001");
$App.M004x001a = localStorage.getItem("M004x001a");};
$scope.SelectionM004x02_pageenter = function() {$App.M004x002 = localStorage.getItem("M004x002");};
$scope.SelectionM004x03_pageenter = function() {$App.M004x003 = localStorage.getItem("M004x003");};
$scope.SelectionM004x04_pageenter = function() {$App.M004x004 = localStorage.getItem("M004x004");};
$scope.SelectionM004x05_pageenter = function() {$App.M004x005 = localStorage.getItem("M004x005");};
$scope.SelectionM004x06_pageenter = function() {$App.M004x006 = localStorage.getItem("M004x006");};
$scope.SelectionM004x07_pageenter = function() {$App.M004x007 = localStorage.getItem("M004x007");};
$scope.SelectionM004x08_pageenter = function() {$App.M004x008 = localStorage.getItem("M004x008");};
$scope.SelectionM002x01_pageenter = function() {$App.M002x001 = localStorage.getItem("M002x001");
$App.M002x001a = localStorage.getItem("M002x001a");
$App.M002x001a = localStorage.getItem("M002x001a");};
$scope.SelectionM002x02_pageenter = function() {$App.M002x002 = localStorage.getItem("M002x002");};
$scope.SelectionM002x03_pageenter = function() {$App.M002x003 = localStorage.getItem("M002x003");};
$scope.SelectionM002x04_pageenter = function() {$App.M002x004 = localStorage.getItem("M002x004");};
$scope.SelectionM002x05_pageenter = function() {$App.M002x005 = localStorage.getItem("M002x005");};
$scope.SelectionM002x06_pageenter = function() {$App.M002x006 = localStorage.getItem("M002x006");};
$scope.SelectionM002x07_pageenter = function() {$App.M002x007 = localStorage.getItem("M002x007");};
$scope.SelectionM002x08_pageenter = function() {$App.M002x008 = localStorage.getItem("M002x008");};
$scope.SelectionM003x01_pageenter = function() {$App.M003x001 = localStorage.getItem("M003x001");};
$scope.SelectionM003x02_pageenter = function() {$App.M003x002 = localStorage.getItem("M003x002");};
$scope.SelectionM003x03_pageenter = function() {$App.M003x003 = localStorage.getItem("M003x003");};
$scope.SelectionM003x04_pageenter = function() {$App.M003x004 = localStorage.getItem("M003x004");};
$scope.SelectionM003x05_pageenter = function() {$App.M003x005 = localStorage.getItem("M003x005");};
$scope.SelectionM003x06_pageenter = function() {$App.M003x006 = localStorage.getItem("M003x006");};
$scope.SelectionM003x07_pageenter = function() {$App.M003x007 = localStorage.getItem("M003x007");};
$scope.SelectionM003x08_pageenter = function() {$App.M003x008 = localStorage.getItem("M003x008");};
$scope.SelectionM001x01_pageenter = function() {$App.M001x001 = localStorage.getItem("M001x001");
$App.M001x001a = localStorage.getItem("M001x001a");};
$scope.SelectionM001x02_pageenter = function() {$App.M001x002 = localStorage.getItem("M001x002");};
$scope.SelectionM001x03_pageenter = function() {$App.M001x003 = localStorage.getItem("M001x003");};
$scope.SelectionM001x04_pageenter = function() {$App.M001x004 = localStorage.getItem("M001x004");};
$scope.SelectionM001x05_pageenter = function() {$App.M001x005 = localStorage.getItem("M001x005");};
$scope.SelectionM001x06_pageenter = function() {$App.M001x006 = localStorage.getItem("M001x006");};
$scope.SelectionM001x07_pageenter = function() {$App.M001x007 = localStorage.getItem("M001x007");};
$scope.SelectionM001x08_pageenter = function() {$App.M001x008 = localStorage.getItem("M001x008");};
$scope.BounceMain_pageenter = function() {$scope.GotoPage( "main01" );};
$scope.CustomWork_pageenter = function() {$App.v1w = localStorage.getItem("Work01");
$App.v2w = localStorage.getItem("Work02");
$App.v3w = localStorage.getItem("Work03");
$App.v4w = localStorage.getItem("Work04");
$App.v5w = localStorage.getItem("Work05");
$App.v6w = localStorage.getItem("Work06");
$App.v7w = localStorage.getItem("Work07");
$App.v8w = localStorage.getItem("Work08");
$App.v9w = localStorage.getItem("Work09");
$App.v10w = localStorage.getItem("Work10");
$App.v11w = localStorage.getItem("Work11");
$App.v12w = localStorage.getItem("Work12");
$App.v13w = localStorage.getItem("Work13");
$App.v14w = localStorage.getItem("Work14");
$App.v15w = localStorage.getItem("Work15");
$App.v16w = localStorage.getItem("Work16");
$App.v17w = localStorage.getItem("Work17");
$App.v18w = localStorage.getItem("Work18");};
$scope.CustomTime_pageenter = function() {$App.v1t = localStorage.getItem("Time01");
$App.v2t = localStorage.getItem("Time02");
$App.v3t = localStorage.getItem("Time03");
$App.v4t = localStorage.getItem("Time04");
$App.v5t = localStorage.getItem("Time05");
$App.v6t = localStorage.getItem("Time06");
$App.v7t = localStorage.getItem("Time07");
$App.v8t = localStorage.getItem("Time08");
$App.v9t = localStorage.getItem("Time09");
$App.v10t = localStorage.getItem("Time10");
$App.v11t = localStorage.getItem("Time11");
$App.v12t = localStorage.getItem("Time12");
$App.v13t = localStorage.getItem("Time13");
$App.v14t = localStorage.getItem("Time14");
$App.v15t = localStorage.getItem("Time15");
$App.v16t = localStorage.getItem("Time16");
$App.v17t = localStorage.getItem("Time17");
$App.v18t = localStorage.getItem("Time18");};
$scope.CustomAppDev_pageenter = function() {$App.v1t = localStorage.getItem("Time01");
$App.v2t = localStorage.getItem("Time02");
$App.v3t = localStorage.getItem("Time03");
$App.v4t = localStorage.getItem("Time04");
$App.v5t = localStorage.getItem("Time05");
$App.v6t = localStorage.getItem("Time06");
$App.v7t = localStorage.getItem("Time07");
$App.v8t = localStorage.getItem("Time08");
$App.v9t = localStorage.getItem("Time09");
$App.v10t = localStorage.getItem("Time10");
$App.v11t = localStorage.getItem("Time11");
$App.v12t = localStorage.getItem("Time12");
$App.v13t = localStorage.getItem("Time13");
$App.v14t = localStorage.getItem("Time14");
$App.v15t = localStorage.getItem("Time15");
$App.v16t = localStorage.getItem("Time16");
$App.v17t = localStorage.getItem("Time17");
$App.v18t = localStorage.getItem("Time18");};
$scope.SelectionM014_pageenter = function() {$App.M014x001 = localStorage.getItem("M014x001");};
$App.NAB.PushButton262_hidden=true;
$App.NAB.q1but_hidden=true;
angular.element(document).ready( function(){
$scope.__init();
neo = angular.element(document.getElementById("ng-view")).scope();neo.Refresh();});
});NeoApp.controller("App_DlgCtrl",function($scope,$rootScope,$modalInstance,$filter,$window,$animate){$scope.CloseDialog=function(){$modalInstance.close();};$scope.CloseDialogBtn=function(btnNum){$modalInstance.close(btnNum);};});
function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};};NeoApp.directive('timer',function(){return{restrict:'E',replace:false,transclude:false,link:function(scope,element,attributes){if(attributes.autostop){scope.$on('$destroy',function(){scope.$parent.TimerStop(attributes.id);});};if(attributes.autostart)scope.$parent.TimerStart(attributes.id,attributes.interval);}};});NeoApp.directive('slider',['$window',function($window){return{restrict:'E',replace:true,transclude:true,require:'?ngModel',scope:{value:"=ngModel",min:"=",max:"=",disabled:'=ngDisabled',onChange:"&",onChanging:"&"},compile:function(element,attributes){element.addClass('neoapp-slider');var html='';if(attributes.trackimage){html+='<img class="track-img" src="'+attributes.trackimage+'"';if(attributes.trackheight)html+=' style="height:'+attributes.trackheight+'"';html+='/>';}else{html+='<div class="track"';if(attributes.trackheight)html+=' style="height:'+attributes.trackheight+'"';html+='><div class="track-left';if(attributes.kind)html+=' track-left-'+attributes.kind;html+='"></div>';};html+='</div><button class="thumb';if(attributes.thumbimage)html+=' thumb-img';if(attributes.kind)html+=' thumb-'+attributes.kind;html+='"';if(attributes.thumbwidth||attributes.thumbimage){html+=' style="';if(attributes.thumbwidth)html+='width:'+attributes.thumbwidth;if(attributes.thumbwidth&&attributes.thumbimage)html+=';';if(attributes.thumbimage)html+="background-image:url('"+attributes.thumbimage+"')";html+='"';};html+=' ng-style="NAB.'+attributes.id+'_style"';html+=' ng-transclude></button>';element.html(html);return linkFn;}};function linkFn($scope,element,attributes,ngModel){var mouseDown=false,track=attributes.trackimage?element.find('.track-img'):element.find('.track'),thumb=element.find('.thumb'),trackLeft=element.find('.track-left'),elemLeft,vMin=isNaN(parseFloat($scope.min))?0:parseFloat($scope.min),vMax=isNaN(parseFloat($scope.max))?100:parseFloat($scope.max),xOffs,dbOnChanging=($scope.onChanging)?debounce(function(){$scope.onChanging();},100):null;if(vMax<=vMin)vMax=vMin+1;var value=isNaN(parseFloat($scope.value))?vMin:parseFloat($scope.value);function positionThumb(){var basePos=((value-vMin)/(vMax-vMin))*(track.width()-thumb.innerWidth());thumb.css('left',basePos);if(trackLeft)trackLeft.css('width',basePos);};function updateValue(){if(ngModel&&!isNaN(parseFloat($scope.value))){var v=$scope.value;value=Math.max(vMin,Math.min(Math.floor(v),vMax));$scope.value=value;}else{value=Math.max(vMin,Math.min(Math.floor(value),vMax));};positionThumb();};function mouseCoords(event){if(event.type=='touchstart'||event.type=='touchmove'||event.type=='touchend'||event.type=='touchcancel'){var touch=event.originalEvent.touches[0]||event.originalEvent.changedTouches[0];return{x:touch.pageX,y:touch.pageY};}else{return{x:event.pageX,y:event.pageY};};};thumb.on('mousedown touchstart',function(event){if(!element.attr('disabled')){mouseDown=true;elemLeft=element.position().left;xOffs=mouseCoords(event).x-thumb.position().left-elemLeft;$(document).one('mouseup touchend ontouchcancel',function(event){if($scope.onChange)$scope.onChange();mouseDown=false;return false;});return false;};});element.on('mousemove touchmove',function(event){if(mouseDown){var xPos=mouseCoords(event).x-elemLeft-xOffs;var v=((xPos/(track.width()-thumb.innerWidth()))*(vMax-vMin))+vMin;v=Math.max(vMin,Math.min(Math.floor(v),vMax));if(value!=v){value=v;positionThumb();if(ngModel){$scope.value=value;if($scope.onChanging)$scope.onChanging();$scope.$apply();};if($scope.onChanging)dbOnChanging();};return false;};});angular.element($window).on('resize.'+element.id,function(){positionThumb();});if(ngModel){$scope.$watch('value',function(){if(!mouseDown){updateValue();};});};if(angular.isObject($scope.max)){$scope.$watch('max',function(){vMax=+$scope.max||100;updateValue();});};if(angular.isObject($scope.min)){$scope.$watch('min',function(){vMin=+$scope.min||0;updateValue();});};$scope.$watch('disabled',function(newVal){element.find('*').attr('disabled',newVal||false);});$scope.$on('$destroy',function(){angular.element($window).off('resize.'+element.id);});};}]);
NeoApp.controller("Main_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 1;
$App.NAB.PageID = "Main";
$scope.PushButton19_click = function() {$App.Main = "Work";
neoGSheetsLoadCell($App.googleSheet,"Tree001DB01","a",200,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB02","a",201,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB03","a",202,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB04","a",203,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB05","a",204,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB06","a",205,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB07","a",206,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB08","a",207,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB09","a",208,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB10","a",209,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB11","a",210,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB12","a",211,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB13","a",212,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB14","a",213,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB15","a",214,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB16","a",215,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB17","a",216,null);

neoGSheetsLoadCell($App.googleSheet,"Tree001DB18","a",217,null);

$scope.GotoPage( "SelectionM001" );};
$scope.PushButton20_click = function() {$App.Main = "Time";
neoGSheetsLoadCell($App.googleSheet,"Tree002DB01","a",150,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB02","a",151,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB03","a",152,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB04","a",153,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB05","a",154,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB06","a",155,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB07","a",156,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB08","a",157,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB09","a",158,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB10","a",159,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB11","a",160,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB12","a",161,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB13","a",162,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB14","a",163,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB15","a",164,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB16","a",165,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB17","a",166,null);

neoGSheetsLoadCell($App.googleSheet,"Tree002DB18","a",167,null);

$scope.GotoPage( "SelectionM002" );};
$scope.PushButton37_click = function() {$App.Main = "Time";
neoGSheetsLoadCell($App.googleSheet,"Tree003DB01","a",250,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB02","a",251,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB03","a",252,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB04","a",253,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB05","a",254,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB06","a",255,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB07","a",256,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB08","a",257,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB09","a",258,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB10","a",259,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB11","a",260,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB12","a",261,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB13","a",262,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB14","a",263,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB15","a",264,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB16","a",265,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB17","a",266,null);

neoGSheetsLoadCell($App.googleSheet,"Tree003DB18","a",267,null);

$scope.GotoPage( "SelectionM003" );};
$scope.PushButton29_click = function() {$App.Main = "Family & Friends";
neoGSheetsLoadCell($App.googleSheet,"Tree004DB01","a",300,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB02","a",301,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB03","a",302,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB04","a",303,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB05","a",304,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB06","a",305,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB07","a",306,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB08","a",307,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB09","a",308,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB10","a",309,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB11","a",310,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB12","a",311,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB13","a",312,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB14","a",313,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB15","a",314,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB16","a",315,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB17","a",316,null);

neoGSheetsLoadCell($App.googleSheet,"Tree004DB18","a",317,null);

$scope.GotoPage( "SelectionM004" );};
$scope.PushButton34_click = function() {$App.Main = "Time";
neoGSheetsLoadCell($App.googleSheet,"Tree005DB01","a",350,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB02","a",351,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB03","a",352,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB04","a",353,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB05","a",354,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB06","a",355,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB07","a",356,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB08","a",357,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB09","a",358,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB10","a",359,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB11","a",360,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB12","a",361,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB13","a",362,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB14","a",363,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB15","a",364,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB16","a",365,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB17","a",366,null);

neoGSheetsLoadCell($App.googleSheet,"Tree005DB18","a",367,null);

$scope.GotoPage( "SelectionM005" );};
$scope.PushButton35_click = function() {$App.Main = "Spare";
neoGSheetsLoadCell($App.googleSheet,"Tree006DB01","a",400,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB02","a",401,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB03","a",402,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB04","a",403,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB05","a",404,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB06","a",405,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB07","a",406,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB08","a",407,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB09","a",408,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB10","a",409,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB11","a",410,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB12","a",411,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB13","a",412,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB14","a",413,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB15","a",414,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB16","a",415,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB17","a",416,null);

neoGSheetsLoadCell($App.googleSheet,"Tree006DB18","a",417,null);

$scope.GotoPage( "SelectionM006" );};
$scope.PushButton38_click = function() {$App.Main = "Spare";
neoGSheetsLoadCell($App.googleSheet,"Tree007DB01","a",450,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB02","a",451,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB03","a",452,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB04","a",453,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB05","a",454,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB06","a",455,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB07","a",456,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB08","a",457,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB09","a",458,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB10","a",459,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB11","a",460,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB12","a",461,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB13","a",462,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB14","a",463,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB15","a",464,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB16","a",465,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB17","a",466,null);

neoGSheetsLoadCell($App.googleSheet,"Tree007DB18","a",467,null);

$scope.GotoPage( "SelectionM007" );};
$scope.PushButton39_click = function() {$App.Main = "Spare";
neoGSheetsLoadCell($App.googleSheet,"Tree008DB01","a",500,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB02","a",501,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB03","a",502,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB04","a",503,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB05","a",504,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB06","a",505,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB07","a",506,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB08","a",507,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB09","a",508,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB10","a",509,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB11","a",510,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB12","a",511,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB13","a",512,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB14","a",513,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB15","a",514,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB16","a",515,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB17","a",516,null);

neoGSheetsLoadCell($App.googleSheet,"Tree008DB18","a",517,null);

$scope.GotoPage( "SelectionM008" );};
$scope.PushButton40_click = function() {$scope.GotoPage( "SelectionM009" );
$App.main09 = "PhilosophyBuilder";};
$scope.PushButton42_click = function() {$App.Main = "Time";
neoGSheetsLoadCell($App.googleSheet,"TreeDB01","a",150,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB02","a",151,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB03","a",152,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB04","a",153,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB05","a",154,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB06","a",155,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB07","a",156,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB08","a",157,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB09","a",158,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB10","a",159,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB11","a",160,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB12","a",161,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB13","a",162,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB14","a",163,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB15","a",164,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB16","a",165,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB17","a",166,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB18","a",167,null);
};
$scope.PushButton43_click = function() {$App.Main = "Time";
neoGSheetsLoadCell($App.googleSheet,"TreeDB01","a",250,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB02","a",251,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB03","a",252,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB04","a",253,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB05","a",254,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB06","a",255,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB07","a",256,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB08","a",257,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB09","a",258,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB10","a",259,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB11","a",260,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB12","a",261,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB13","a",262,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB14","a",263,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB15","a",264,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB16","a",265,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB17","a",266,null);

neoGSheetsLoadCell($App.googleSheet,"TreeDB18","a",267,null);
};
$scope.PushButton44_click = function() {$scope.GotoPage( "SelectionM013" );};
$scope.PushButton46_click = function() {$App.Main = "ADHD";
$scope.GotoPage( "SelectionM015" );
neoGSheetsLoadCell($App.googleSheet,"Tree015DB01","a",650,null);

neoGSheetsLoadCell($App.googleSheet,"Tree015DB02","a",651,null);

neoGSheetsLoadCell($App.googleSheet,"Tree015DB03","a",652,null);

neoGSheetsLoadCell($App.googleSheet,"Tree015DB04","a",653,null);

neoGSheetsLoadCell($App.googleSheet,"Tree015DB05","a",654,null);

neoGSheetsLoadCell($App.googleSheet,"Tree015DB06","a",655,null);

neoGSheetsLoadCell($App.googleSheet,"Tree015DB07","a",656,null);

neoGSheetsLoadCell($App.googleSheet,"Tree015DB08","a",657,null);

neoGSheetsLoadCell($App.googleSheet,"Tree015DB09","a",658,null);

neoGSheetsLoadCell($App.googleSheet,"Tree015DB010","a",659,null);
};
$scope.PushButton47_click = function() {$scope.GotoPage( "Base" );};
$scope.PushButton45_click = function() {$scope.GotoPage( "SelectionM014" );};
$scope.PushButton50_click = function() {$scope.GotoPage( "EditHeaders" );};
$scope.PushButton237_click = function() {$scope.GotoPage( "About" );};
$scope.PushButton2_click = function() {neoGSheetsLoadCell($App.googleSheet,"ADHDAnalysis001q","b",101,null);

localStorage.setItem("ADHDAnalysis001q",$App.ADHDAnalysis001q);
$App.ADHDAnalysis001q = localStorage.getItem("ADHDAnalysis001q");
$App.ADHDAnalysis001qa = localStorage.getItem("ADHDAnalysis001qa");
$App.q1feel = localStorage.getItem("q1feel");
$scope.GotoPage( "ADHDAnalysis001-q1" );
$App.countq1a = 1;
$App.countq1b = 1;
$App.countq1c = 1;
$App.countq1d = 1;
$App.countq1e = 1;
$App.q1awhy = localStorage.getItem("q1awhy");
$App.q1bwhy = localStorage.getItem("q1bwhy");
$App.q1cwhy = localStorage.getItem("q1cwhy");
$App.q1dwhy = localStorage.getItem("q1dwhy");
$App.q1ewhy = localStorage.getItem("q1ewhy");};
});
NeoApp.controller("About_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 2;
$App.NAB.PageID = "About";
$scope.Pager93_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager93_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea83_change = function() {localStorage.setItem("About",$App.About);};
$scope.PushButton228_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("MainBounce_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 3;
$App.NAB.PageID = "MainBounce";
});
NeoApp.controller("EditHeaders_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 4;
$App.NAB.PageID = "EditHeaders";
$scope.TextInput92_change = function() {localStorage.setItem("main01",$App.main01);};
$scope.TextInput93_change = function() {localStorage.setItem("main02",$App.main02);};
$scope.TextInput94_change = function() {localStorage.setItem("main03",$App.main03);};
$scope.TextInput95_change = function() {localStorage.setItem("main04",$App.main04);};
$scope.TextInput96_change = function() {localStorage.setItem("main05",$App.main05);};
$scope.TextInput97_change = function() {localStorage.setItem("main06",$App.main06);};
$scope.TextInput98_change = function() {localStorage.setItem("main07",$App.main07);};
$scope.TextInput99_change = function() {localStorage.setItem("main08",$App.main08);};
$scope.TextInput100_change = function() {localStorage.setItem("main09",$App.main09);};
$scope.TextInput101_change = function() {localStorage.setItem("main10",$App.main10);};
$scope.TextInput102_change = function() {localStorage.setItem("main11",$App.main11);};
$scope.TextInput103_change = function() {localStorage.setItem("main12",$App.main12);};
$scope.TextInput104_change = function() {localStorage.setItem("main13",$App.main13);};
$scope.TextInput105_change = function() {localStorage.setItem("main14",$App.main14);};
$scope.TextInput106_change = function() {localStorage.setItem("main15",$App.main15);};
$scope.TextInput107_change = function() {localStorage.setItem("main16",$App.main16);};
$scope.TextInput108_change = function() {localStorage.setItem("main17",$App.main17);};
$scope.TextInput109_change = function() {localStorage.setItem("main18",$App.main18);};
$scope.TextInput110_change = function() {localStorage.setItem("basename",$App.basename);};
$scope.PushButton48_click = function() {localStorage.setItem("basename","Basename");
$App.basename = localStorage.getItem("basename");
localStorage.setItem("main01","WORK");
$App.main01 = localStorage.getItem("main01");
localStorage.setItem("main01",$App.main01);
localStorage.setItem("main02","TIME");
$App.main02 = localStorage.getItem("main02");
localStorage.setItem("main02",$App.main02);
localStorage.setItem("main03","APP DEVELOPMENT");
$App.main03 = localStorage.getItem("main03");
localStorage.setItem("main03",$App.main03);
localStorage.setItem("main04","FAMILY & FRIENDS");
$App.main04 = localStorage.getItem("main04");
localStorage.setItem("main04",$App.main04);
localStorage.setItem("main05","HEALTH");
$App.main05 = localStorage.getItem("main05");
localStorage.setItem("main05",$App.main05);
localStorage.setItem("main06","GENERAL NOTES:");
$App.main06 = localStorage.getItem("main06");
localStorage.setItem("main06",$App.main06);
localStorage.setItem("main07","SPARE 2");
$App.main07 = localStorage.getItem("main07");
localStorage.setItem("main07",$App.main07);
localStorage.setItem("main08","SPARE 3");
$App.main08 = localStorage.getItem("main08");
localStorage.setItem("main08",$App.main08);
localStorage.setItem("main09","PHILOSOPHY BUILDER");
$App.main09 = localStorage.getItem("main09");
localStorage.setItem("main09",$App.main09);
localStorage.setItem("main10","SPARE 4");
$App.main10 = localStorage.getItem("main10");
localStorage.setItem("main10",$App.main10);
localStorage.setItem("main11","SPARE 5");
$App.main11 = localStorage.getItem("main11");
localStorage.setItem("main11",$App.main11);
localStorage.setItem("main12","SPARE 6");
$App.main12 = localStorage.getItem("main12");
localStorage.setItem("main12",$App.main12);
localStorage.setItem("main13","SPARE 7");
$App.main13 = localStorage.getItem("main13");
localStorage.setItem("main13",$App.main13);
localStorage.setItem("main14","PRAYER");
$App.main14 = localStorage.getItem("main14");
localStorage.setItem("main14",$App.main14);
localStorage.setItem("main15","ADHD");
$App.main15 = localStorage.getItem("main15");
localStorage.setItem("main15",$App.main15);
localStorage.setItem("main16","BASE");
$App.main16 = localStorage.getItem("main16");
localStorage.setItem("main16",$App.main16);
localStorage.setItem("main17","WORK");
$App.main17 = localStorage.getItem("main17");
localStorage.setItem("main17",$App.main17);
localStorage.setItem("main18","WORK");
$App.main18 = localStorage.getItem("main18");
localStorage.setItem("main18",$App.main18);};
$scope.PushButton51_click = function() {localStorage.removeItem("Main01");
localStorage.removeItem("Main02");
localStorage.removeItem("Main03");
localStorage.removeItem("Main04");
localStorage.removeItem("Main05");
localStorage.removeItem("Main06");
localStorage.removeItem("Main07");
localStorage.removeItem("Main08");
localStorage.removeItem("Main09");
localStorage.removeItem("Main10");
localStorage.removeItem("Main11");
localStorage.removeItem("Main12");
localStorage.removeItem("Main13");
localStorage.removeItem("Main14");
localStorage.removeItem("Main15");
localStorage.removeItem("Main16");
localStorage.removeItem("Main17");
localStorage.removeItem("Main18");
if ($App.main01) delete $App.main01;
if ($App.main02) delete $App.main02;
if ($App.main03) delete $App.main03;
if ($App.main04) delete $App.main04;
if ($App.main05) delete $App.main05;
if ($App.main06) delete $App.main06;
if ($App.main07) delete $App.main07;
if ($App.main08) delete $App.main08;
if ($App.main09) delete $App.main09;
if ($App.main10) delete $App.main10;
if ($App.main11) delete $App.main11;
if ($App.main12) delete $App.main12;
if ($App.main13) delete $App.main13;
if ($App.main14) delete $App.main14;
if ($App.main15) delete $App.main15;
if ($App.main16) delete $App.main16;
if ($App.main17) delete $App.main17;
if ($App.main18) delete $App.main18;
$scope.GotoPage( "MainBounce" );};
$scope.PushButton87_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("Base_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 5;
$App.NAB.PageID = "Base";
$scope.PushButton124_click = function() {$scope.GotoPage( "SelectionM0"+$App.PAGEN+"x01" );};
$scope.Line01_click = function() {$scope.GotoPage( "SelectionM001x01" );};
$scope.Circlea_click = function() {$App.PAGEN = "01";
$App.short = $App.M001x001a;};
$scope.Circleb_click = function() {$App.PAGEN = "02";
$App.short = $App.M002x001a;};
$scope.Circlec_click = function() {$App.PAGEN = "03";
$App.short = $App.M003x001a;};
$scope.Circled_click = function() {$App.PAGEN = "04";
$App.short = $App.M004x001a;};
$scope.Circlee_click = function() {$App.PAGEN = "05";
$App.short = $App.M005x001a;};
$scope.Circlef_click = function() {$App.PAGEN = "06";
$App.short = $App.M006x001a;};
$scope.Circleh_click = function() {$App.PAGEN = "08";
$App.short = $App.M008x001a;};
$scope.Prompt07_click = function() {$App.PAGEN = "07";
$App.short = $App.M007x001a;};
$scope.Line07_click = function() {$scope.ObjectToFront("Short07");};
$scope.Line08_click = function() {$scope.ObjectToFront("Short08");};
$scope.PushButton139_click = function() {$scope.GotoPage( "Main" );};
$scope.Headline224_click = function() {$scope.GotoPage( "SelectionM0"+$App.PAGEN+"x01" );};
$scope.Headline205_click = function() {$App.PAGEN = "01";
$App.short = $App.M001x001a;};
$scope.Headline225_click = function() {$App.PAGEN = "03";
$App.short = $App.M003x001a;};
$scope.Headline226_click = function() {$App.PAGEN = "02";
$App.short = $App.M002x001a;};
$scope.Headline227_click = function() {$App.PAGEN = "07";
$App.short = $App.M007x001a;};
$scope.Headline233_click = function() {$App.PAGEN = "08";
$App.short = $App.M008x001a;};
$scope.Headline234_click = function() {$App.PAGEN = "05";
$App.short = $App.M005x001a;};
$scope.Headline235_click = function() {$App.PAGEN = "04";
$App.short = $App.M004x001a;};
$scope.Headline236_click = function() {$App.PAGEN = "06";
$App.short = $App.M006x001a;};
$scope.PushButton140_click = function() {$scope.GotoPage( "SelectionM014" );};
$scope.Headline260_click = function() {$App.redgxc1 = $scope.Calculate($App.redgxc1+"+1",-1);
if ($App.redgxc1 == "1") {
$App.redgx1 = "LOW";
localStorage.setItem("redgx1",$App.redgx1);
$App.redgx1 = localStorage.getItem("redgx1");
} else {
};
if ($App.redgxc1 == "2") {
$App.redgx1 = "MEDIUM";
localStorage.setItem("redgx1",$App.redgx1);
$App.redgx1 = localStorage.getItem("redgx1");
} else {
};
if ($App.redgxc1 == "3") {
$App.redgx1 = "HIGH";
localStorage.setItem("redgx1",$App.redgx1);
$App.redgx1 = localStorage.getItem("redgx1");
$App.redgxc1 = "0";
} else {
};};
$scope.Headline14_click = function() {$App.redgxc5 = $scope.Calculate($App.redgxc5+"+1",-1);
if ($App.redgxc5 == "1") {
$App.redgx5 = "LOW";
localStorage.setItem("redgx5",$App.redgx5);
$App.redgx5 = localStorage.getItem("redgx5");
} else {
};
if ($App.redgxc5 == "2") {
$App.redgx5 = "MEDIUM";
localStorage.setItem("redgx5",$App.redgx5);
$App.redgx5 = localStorage.getItem("redgx5");
} else {
};
if ($App.redgxc5 == "3") {
$App.redgx5 = "HIGH";
localStorage.setItem("redgx5",$App.redgx5);
$App.redgx5 = localStorage.getItem("redgx5");
$App.redgxc5 = "0";
} else {
};};
$scope.Headline33_click = function() {$App.redgxc4 = $scope.Calculate($App.redgxc4+"+1",-1);
if ($App.redgxc4 == "1") {
$App.redgx4 = "LOW";
localStorage.setItem("redgx4",$App.redgx4);
$App.redgx4 = localStorage.getItem("redgx4");
} else {
};
if ($App.redgxc4 == "2") {
$App.redgx4 = "MEDIUM";
localStorage.setItem("redgx4",$App.redgx4);
$App.redgx4 = localStorage.getItem("redgx4");
} else {
};
if ($App.redgxc4 == "3") {
$App.redgx4 = "HIGH";
localStorage.setItem("redgx4",$App.redgx4);
$App.redgx4 = localStorage.getItem("redgx4");
$App.redgxc4 = "0";
} else {
};};
$scope.Headline34_click = function() {$App.redgxc6 = $scope.Calculate($App.redgxc6+"+1",-1);
if ($App.redgxc6 == "1") {
$App.redgx6 = "LOW";
localStorage.setItem("redgx6",$App.redgx6);
$App.redgx6 = localStorage.getItem("redgx6");
} else {
};
if ($App.redgxc6 == "2") {
$App.redgx6 = "MEDIUM";
localStorage.setItem("redgx6",$App.redgx6);
$App.redgx6 = localStorage.getItem("redgx6");
} else {
};
if ($App.redgxc6 == "3") {
$App.redgx6 = "HIGH";
localStorage.setItem("redgx6",$App.redgx6);
$App.redgx6 = localStorage.getItem("redgx6");
$App.redgxc6 = "0";
} else {
};};
$scope.Headline37_click = function() {$App.redgxc2 = $scope.Calculate($App.redgxc2+"+1",-1);
if ($App.redgxc2 == "1") {
$App.redgx2 = "LOW";
localStorage.setItem("redgx2",$App.redgx2);
$App.redgx2 = localStorage.getItem("redgx2");
} else {
};
if ($App.redgxc2 == "2") {
$App.redgx2 = "MEDIUM";
localStorage.setItem("redgx2",$App.redgx2);
$App.redgx2 = localStorage.getItem("redgx2");
} else {
};
if ($App.redgxc2 == "3") {
$App.redgx2 = "HIGH";
localStorage.setItem("redgx2",$App.redgx2);
$App.redgx2 = localStorage.getItem("redgx2");
$App.redgxc2 = "0";
} else {
};};
$scope.Headline38_click = function() {$App.redgxc3 = $scope.Calculate($App.redgxc3+"+1",-1);
if ($App.redgxc3 == "1") {
$App.redgx3 = "LOW";
localStorage.setItem("redgx3",$App.redgx3);
$App.redgx3 = localStorage.getItem("redgx3");
} else {
};
if ($App.redgxc3 == "2") {
$App.redgx3 = "MEDIUM";
localStorage.setItem("redgx3",$App.redgx3);
$App.redgx3 = localStorage.getItem("redgx3");
} else {
};
if ($App.redgxc3 == "3") {
$App.redgx3 = "HIGH";
localStorage.setItem("redgx3",$App.redgx3);
$App.redgx3 = localStorage.getItem("redgx3");
$App.redgxc3 = "0";
} else {
};};
$scope.Headline39_click = function() {$App.redgxc7 = $scope.Calculate($App.redgxc7+"+1",-1);
if ($App.redgxc7 == "1") {
$App.redgx7 = "LOW";
localStorage.setItem("redgx7",$App.redgx7);
$App.redgx7 = localStorage.getItem("redgx7");
} else {
};
if ($App.redgxc7 == "2") {
$App.redgx7 = "MEDIUM";
localStorage.setItem("redgx7",$App.redgx7);
$App.redgx7 = localStorage.getItem("redgx7");
} else {
};
if ($App.redgxc7 == "3") {
$App.redgx7 = "HIGH";
localStorage.setItem("redgx7",$App.redgx7);
$App.redgx7 = localStorage.getItem("redgx7");
$App.redgxc7 = "0";
} else {
};};
$scope.Headline40_click = function() {$App.redgxc8 = $scope.Calculate($App.redgxc8+"+1",-1);
if ($App.redgxc8 == "1") {
$App.redgx8 = "LOW";
localStorage.setItem("redgx8",$App.redgx8);
$App.redgx8 = localStorage.getItem("redgx8");
} else {
};
if ($App.redgxc8 == "2") {
$App.redgx8 = "MEDIUM";
localStorage.setItem("redgx8",$App.redgx8);
$App.redgx8 = localStorage.getItem("redgx8");
} else {
};
if ($App.redgxc8 == "3") {
$App.redgx8 = "HIGH";
localStorage.setItem("redgx8",$App.redgx8);
$App.redgx8 = localStorage.getItem("redgx8");
$App.redgxc8 = "0";
} else {
};};
$scope.Headline257_click = function() {$App.M009x001 = localStorage.getItem("M009x001");
$App.M009x001a = localStorage.getItem("M009x001a");
$App.PAGEN = "09";
$App.short = $App.M009x001a;};
$scope.PushButton205_click = function() {$scope.GotoPage( "SelectionM013" );};
$scope.Headline309_click = function() {$App.M015x001 = localStorage.getItem("M015x001");
$App.M015x001a = localStorage.getItem("M015x001a");
$App.PAGEN = "15";
$App.short = $App.M015x001a;};
$scope.Headline258_click = function() {$App.redgxc15 = $scope.Calculate($App.redgxc15+"+1",-1);
if ($App.redgxc15 == "1") {
$App.redgx15 = "LOW";
localStorage.setItem("redgx15",$App.redgx15);
$App.redgx15 = localStorage.getItem("redgx15");
} else {
};
if ($App.redgxc15 == "2") {
$App.redgx15 = "MEDIUM";
localStorage.setItem("redgx15",$App.redgx15);
$App.redgx15 = localStorage.getItem("redgx15");
} else {
};
if ($App.redgxc15 == "3") {
$App.redgx15 = "HIGH";
localStorage.setItem("redgx15",$App.redgx15);
$App.redgx15 = localStorage.getItem("redgx15");
$App.redgxc15 = "0";
} else {
};};
$scope.PushButton272_click = function() {$scope.GotoPage( "SelectionM015" );};
});
NeoApp.controller("SelectionM001_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 6;
$App.NAB.PageID = "SelectionM001";
$scope.Pager1_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager1_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton18_click = function() {$scope.GotoPage( "SelectionM001x01" );};
$scope.PushButton30_click = function() {$scope.GotoPage( "SelectionM001x02" );};
$scope.PushButton31_click = function() {$scope.GotoPage( "SelectionM001x03" );};
$scope.PushButton77_click = function() {$scope.GotoPage( "SelectionM001x04" );};
$scope.PushButton78_click = function() {$scope.GotoPage( "SelectionM001x05" );};
$scope.PushButton79_click = function() {$scope.GotoPage( "SelectionM006x01q" );};
$scope.PushButton80_click = function() {$scope.GotoPage( "SelectionM001x08" );};
$scope.PushButton81_click = function() {$scope.GotoPage( "SelectionM001x07" );};
$scope.PushButton14_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM002_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 7;
$App.NAB.PageID = "SelectionM002";
$scope.Pager7_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager7_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton55_click = function() {$scope.GotoPage( "SelectionM002x01" );};
$scope.PushButton56_click = function() {$scope.GotoPage( "SelectionM002x02" );};
$scope.PushButton57_click = function() {$scope.GotoPage( "SelectionM002x03" );};
$scope.PushButton58_click = function() {$scope.GotoPage( "SelectionM002x04" );};
$scope.PushButton68_click = function() {$scope.GotoPage( "SelectionM002x05" );};
$scope.PushButton69_click = function() {$scope.GotoPage( "SelectionM002x06" );};
$scope.PushButton70_click = function() {$scope.GotoPage( "SelectionM002x07" );};
$scope.PushButton71_click = function() {$scope.GotoPage( "SelectionM002x08" );};
$scope.PushButton17_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM003_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 8;
$App.NAB.PageID = "SelectionM003";
$scope.Pager8_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager8_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton52_click = function() {$scope.GotoPage( "SelectionM003x01" );};
$scope.PushButton53_click = function() {$scope.GotoPage( "SelectionM003x02" );};
$scope.PushButton54_click = function() {$scope.GotoPage( "SelectionM003x03" );};
$scope.PushButton59_click = function() {$scope.GotoPage( "SelectionM003x04" );};
$scope.PushButton60_click = function() {$scope.GotoPage( "SelectionM003x05" );};
$scope.PushButton61_click = function() {$scope.GotoPage( "SelectionM003x06" );};
$scope.PushButton62_click = function() {$scope.GotoPage( "SelectionM003x07" );};
$scope.PushButton63_click = function() {$scope.GotoPage( "SelectionM003x08" );};
$scope.PushButton36_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM004_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 9;
$App.NAB.PageID = "SelectionM004";
$scope.Pager44_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager44_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton88_click = function() {$scope.GotoPage( "SelectionM004x01" );};
$scope.PushButton89_click = function() {$scope.GotoPage( "SelectionM004x02" );};
$scope.PushButton90_click = function() {$scope.GotoPage( "SelectionM004x03" );};
$scope.PushButton91_click = function() {$scope.GotoPage( "SelectionM004x04" );};
$scope.PushButton92_click = function() {$scope.GotoPage( "SelectionM004x05" );};
$scope.PushButton93_click = function() {$scope.GotoPage( "SelectionM004x06" );};
$scope.PushButton94_click = function() {$scope.GotoPage( "SelectionM004x07" );};
$scope.PushButton95_click = function() {$scope.GotoPage( "SelectionM004x08" );};
$scope.PushButton9_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM005_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 10;
$App.NAB.PageID = "SelectionM005";
$scope.PushButton104_click = function() {$scope.GotoPage( "Main" );};
$scope.Pager53_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager53_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton105_click = function() {$scope.GotoPage( "SelectionM005x01" );};
$scope.PushButton106_click = function() {$scope.GotoPage( "SelectionM005x02" );};
$scope.PushButton107_click = function() {$scope.GotoPage( "SelectionM005x03" );};
$scope.PushButton108_click = function() {$scope.GotoPage( "SelectionM005x04" );};
$scope.PushButton109_click = function() {$scope.GotoPage( "SelectionM005x05" );};
$scope.PushButton110_click = function() {$scope.GotoPage( "SelectionM005x06" );};
$scope.PushButton111_click = function() {$scope.GotoPage( "SelectionM005x07" );};
$scope.PushButton112_click = function() {$scope.GotoPage( "SelectionM005x08" );};
});
NeoApp.controller("SelectionM006_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 11;
$App.NAB.PageID = "SelectionM006";
$scope.PushButton141_click = function() {$scope.GotoPage( "Main" );};
$scope.Pager64_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager64_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton142_click = function() {$scope.GotoPage( "SelectionM006x01" );};
$scope.PushButton143_click = function() {$scope.GotoPage( "SelectionM005x02" );};
$scope.PushButton144_click = function() {$scope.GotoPage( "SelectionM005x03" );};
$scope.PushButton145_click = function() {$scope.GotoPage( "SelectionM005x04" );};
$scope.PushButton146_click = function() {$scope.GotoPage( "SelectionM005x05" );};
$scope.PushButton147_click = function() {$scope.GotoPage( "SelectionM005x06" );};
$scope.PushButton148_click = function() {$scope.GotoPage( "SelectionM005x07" );};
$scope.PushButton149_click = function() {$scope.GotoPage( "SelectionM005x08" );};
});
NeoApp.controller("SelectionM007_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 12;
$App.NAB.PageID = "SelectionM007";
$scope.PushButton150_click = function() {$scope.GotoPage( "Main" );};
$scope.Pager65_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager65_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton151_click = function() {$scope.GotoPage( "SelectionM007x01" );};
$scope.PushButton152_click = function() {$scope.GotoPage( "SelectionM005x02" );};
$scope.PushButton153_click = function() {$scope.GotoPage( "SelectionM005x03" );};
$scope.PushButton154_click = function() {$scope.GotoPage( "SelectionM005x04" );};
$scope.PushButton155_click = function() {$scope.GotoPage( "SelectionM005x05" );};
$scope.PushButton156_click = function() {$scope.GotoPage( "SelectionM005x06" );};
$scope.PushButton157_click = function() {$scope.GotoPage( "SelectionM005x07" );};
$scope.PushButton158_click = function() {$scope.GotoPage( "SelectionM005x08" );};
});
NeoApp.controller("SelectionM008_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 13;
$App.NAB.PageID = "SelectionM008";
$scope.PushButton159_click = function() {$scope.GotoPage( "Main" );};
$scope.Pager66_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager66_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton160_click = function() {$scope.GotoPage( "SelectionM008x01" );};
$scope.PushButton161_click = function() {$scope.GotoPage( "SelectionM005x02" );};
$scope.PushButton162_click = function() {$scope.GotoPage( "SelectionM005x03" );};
$scope.PushButton163_click = function() {$scope.GotoPage( "SelectionM005x04" );};
$scope.PushButton164_click = function() {$scope.GotoPage( "SelectionM005x05" );};
$scope.PushButton165_click = function() {$scope.GotoPage( "SelectionM005x06" );};
$scope.PushButton166_click = function() {$scope.GotoPage( "SelectionM005x07" );};
$scope.PushButton167_click = function() {$scope.GotoPage( "SelectionM005x08" );};
});
NeoApp.controller("SelectionM009_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 14;
$App.NAB.PageID = "SelectionM009";
$scope.PushButton121_click = function() {$scope.GotoPage( "Main" );};
$scope.Pager63_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager63_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton122_click = function() {$scope.GotoPage( "SelectionM009x01" );};
$scope.PushButton123_click = function() {$scope.GotoPage( "SelectionM009x02" );};
$scope.PushButton137_click = function() {$scope.GotoPage( "SelectionM009x03" );};
$scope.PushButton138_click = function() {$scope.GotoPage( "SelectionM005x04" );};
$scope.PushButton168_click = function() {$scope.GotoPage( "SelectionM005x05" );};
$scope.PushButton169_click = function() {$scope.GotoPage( "SelectionM005x06" );};
$scope.PushButton170_click = function() {$scope.GotoPage( "SelectionM005x07" );};
$scope.PushButton171_click = function() {$scope.GotoPage( "SelectionM005x08" );};
});
NeoApp.controller("SelectionM013_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 15;
$App.NAB.PageID = "SelectionM013";
$scope.PushButton233_click = function() {$scope.GotoPage( "Main" );};
$scope.Pager62_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager62_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton238_click = function() {$scope.GotoPage( "SelectionM013x01" );};
$scope.PushButton239_click = function() {$scope.GotoPage( "SelectionM013x02" );};
$scope.PushButton248_click = function() {$scope.GotoPage( "SelectionM013x03" );};
$scope.PushButton249_click = function() {$scope.GotoPage( "SelectionM013x04" );};
$scope.PushButton250_click = function() {$scope.GotoPage( "SelectionM013x05" );};
$scope.PushButton251_click = function() {$scope.GotoPage( "SelectionM013x06" );};
$scope.PushButton252_click = function() {$scope.GotoPage( "SelectionM013x07" );};
$scope.PushButton253_click = function() {$scope.GotoPage( "SelectionM013x08" );};
$scope.PushButton254_click = function() {$scope.GotoPage( "SLAnalysis" );};
$scope.PushButton269_click = function() {$scope.GotoPage( "SL1" );};
$scope.PushButton270_click = function() {$scope.GotoPage( "SL2" );};
$scope.PushButton271_click = function() {$scope.GotoPage( "SL3" );};
});
NeoApp.controller("SLAnalysis_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 16;
$App.NAB.PageID = "SLAnalysis";
$scope.Pager94_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager94_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea86_change = function() {localStorage.setItem("ADHDM013x001",$App.ADHDM013x001);};
$scope.PushButton255_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea87_change = function() {localStorage.setItem("ADHDM013x001a",$App.ADHDM013x001a);};
$scope.PushButton256_click = function() {$scope.GotoPage( "SelectionM013" );};
$scope.PushButton257_click = function() {$scope.GotoPage( "SLAnalysis01" );};
});
NeoApp.controller("SL1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 17;
$App.NAB.PageID = "SL1";
$scope.Pager96_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager96_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea92_change = function() {localStorage.setItem("ADHDSL1a",$App.ADHDSL1a);};
$scope.PushButton263_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea93_change = function() {localStorage.setItem("ADHDSL1",$App.ADHDSL1);};
$scope.PushButton264_click = function() {$scope.GotoPage( "SelectionM013" );};
});
NeoApp.controller("SL2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 18;
$App.NAB.PageID = "SL2";
$scope.Pager97_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager97_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea94_change = function() {localStorage.setItem("ADHDSL2a",$App.ADHDSL2a);};
$scope.PushButton265_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea95_change = function() {localStorage.setItem("ADHDSL2",$App.ADHDSL2);};
$scope.PushButton266_click = function() {$scope.GotoPage( "SelectionM013" );};
});
NeoApp.controller("SL3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 19;
$App.NAB.PageID = "SL3";
$scope.Pager98_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager98_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea96_change = function() {localStorage.setItem("ADHDSL3a",$App.ADHDSL3a);};
$scope.PushButton267_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea97_change = function() {localStorage.setItem("ADHDSL3",$App.ADHDSL3);};
$scope.PushButton268_click = function() {$scope.GotoPage( "SelectionM013" );};
});
NeoApp.controller("SLAnalysis01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 20;
$App.NAB.PageID = "SLAnalysis01";
$scope.Pager95_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager95_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton258_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea88_change = function() {localStorage.setItem("SLAnalysis001q",$App.SLAnalysis001q);};
$scope.PushButton259_click = function() {$scope.GotoPage( "SelectionM013" );};
$scope.Dropdown2_change = function(value) {$App.ADHDAnalysis001R1 = value;
localStorage.setItem("ADHDAnalysis001r1",$App.ADHDAnalysis001R1);
$scope.DisableObject("q1001",true);
$App.go1 = "1";
$scope.ShowObject("q1but","",47);
$App.ADHDAnalysis001qa = localStorage.getItem("ADHDAnalysis001qa");
$App.q1feel = localStorage.getItem("q1feel");
$scope.GotoPage( "ADHDAnalysis001-q1" );
$App.countq1a = 1;
$App.countq1b = 1;
$App.countq1c = 1;
$App.countq1d = 1;
$App.countq1e = 1;
$App.q1awhy = localStorage.getItem("q1awhy");
$App.q1bwhy = localStorage.getItem("q1bwhy");
$App.q1cwhy = localStorage.getItem("q1cwhy");
$App.q1dwhy = localStorage.getItem("q1dwhy");
$App.q1ewhy = localStorage.getItem("q1ewhy");};
$scope.TextArea89_change = function() {localStorage.setItem("ADHDAnalysis002q",$App.ADHDAnalysis002q);};
$scope.Dropdown3_change = function(value) {$App.ADHDAnalysis002R1 = value;
localStorage.setItem("ADHDAnalysis002r1",$App.ADHDAnalysis002R1);
$scope.DisableObject("q1002",true);
$App.go2 = "1";};
$scope.TextArea90_change = function() {localStorage.setItem("ADHDAnalysis003q",$App.ADHDAnalysis003q);};
$scope.Dropdown4_change = function(value) {$App.ADHDAnalysis003R1 = value;
localStorage.setItem("ADHDAnalysis003r1",$App.ADHDAnalysis003R1);
$scope.DisableObject("q1003",true);
$App.go3 = "1";};
$scope.TextArea91_change = function() {localStorage.setItem("ADHDAnalysis004q",$App.ADHDAnalysis004q);};
$scope.Dropdown19_change = function(value) {$App.ADHDAnalysis004R1 = value;
localStorage.setItem("ADHDAnalysis004r1",$App.ADHDAnalysis004R1);
if ($App.ADHDAnalysis001R1 == "SOMETIMES") {
$App.add01 = "2";
} else {
};
if ($App.ADHDAnalysis002R1 == "SOMETIMES") {
$App.add02 = "2";
} else {
};
if ($App.ADHDAnalysis003R1 == "SOMETIMES") {
$App.add03 = "2";
} else {
};
if ($App.ADHDAnalysis004R1 == "SOMETIMES") {
$App.add04 = "2";
} else {
};
if ($App.ADHDAnalysis001R1 == "RARELY") {
$App.add01 = "1";
} else {
};
if ($App.ADHDAnalysis002R1 == "RARELY") {
$App.add02 = "1";
} else {
};
if ($App.ADHDAnalysis003R1 == "RARELY") {
$App.add03 = "1";
} else {
};
if ($App.ADHDAnalysis004R1 == "RARELY") {
$App.add04 = "1";
} else {
};
if ($App.ADHDAnalysis001R1 == "OFTEN") {
$App.add01 = "3";
} else {
};
if ($App.ADHDAnalysis002R1 == "OFTEN") {
$App.add02 = "3";
} else {
};
if ($App.ADHDAnalysis003R1 == "OFTEN") {
$App.add03 = "3";
} else {
};
if ($App.ADHDAnalysis004R1 == "OFTEN") {
$App.add04 = "3";
} else {
};
$App.sub01 = $scope.Calculate($App.add01+"+"+$App.add02+"+"+$App.add03+"+"+$App.add04,-1);
$scope.DisableObject("q1004",true);
$App.go4 = "1";};
$scope.PushButton260_click = function() {$App.ADHDAnalysis001q = "How often do you have difficulty sustaining your attention while doing something for work, school, a hobby, or fun activity (e.g., remaining focused during lectures, lengthy reading or conversations)";
$App.ADHDAnalysis002q = "How often are you easily distracted by external stimuli, like something in your environment or unrelated thoughts?";
$App.ADHDAnalysis003q = "How often do you avoid, dislike, or are reluctant to engage in tasks that require sustained mental effort or thought?";
$App.ADHDAnalysis004q = "How often do you have trouble listening to someone, even when they are speaking directly to you — like your mind is somewhere else?";
$App.ADHDAnalysis005q = "How often do you have difficulty in organizing an activity or task needing to get done (e.g., poor time management, fails to meet deadlines, difficulty managing sequential tasks)?";
$App.ADHDAnalysis006q = "How often do you fail to give close attention to details, or make careless mistakes in things such as schoolwork, at work, or during other activities?";
$App.ADHDAnalysis007q = "How often do you forget to do something you do all the time, such as missing an appointment or paying a bill?";
$App.ADHDAnalysis008q = "How often do you lose, misplace or damage something that's necessary in order to get things done (e.g., your phone, eyeglasses, paperwork, wallet, keys, etc.)?";
$App.ADHDAnalysis009q = "How often do you have trouble following through on instructions, or failing to finish schoolwork, chores, or duties in the workplace (e.g., you start a task but quickly lose focus and are easily sidetracked)?";
$App.ADHDAnalysis010q = "How often are you unable to play or engage in leisurely activities quietly?";
$App.ADHDAnalysis011q = "How often do you have difficulty waiting your turn, such as while waiting in line?";
$App.ADHDAnalysis012q = "How often do you feel like you're on the go, acting as if you're driven by a motor (e.g., you're unable to be or uncomfortable being still for an extended period of time, such as in a restaurant or a meeting)?";
$App.ADHDAnalysis013q = "How often do you leave your seat in situations when remaining seated is expected (e.g., leaving your place in the office or workplace)?";
$App.ADHDAnalysis014q = "How often do you blurt out an answer before a question has been completed (e.g., completing another person's sentence or can't wait your turn in a conversation)?";
$App.ADHDAnalysis015q = "How often do you feel restless -- like you want to get out and do something?";
$App.ADHDAnalysis016q = "How often do you fidget with or tap your hands or feet, or squirm in your seat? ";
$App.ADHDAnalysis017q = "How often do find yourself talking excessively?";
$App.ADHDAnalysis018q = "How often do you interrupt or intrude on others, such as butting into their conversation or taking over what others are doing?";
$App.ADHDAnalysis019q = "Were several of the symptoms present prior to age 12?";
$App.ADHDAnalysis020q = "Do the symptoms appear in at least two or more settings (e.g., at home and school)? ";};
$scope.PushButton261_click = function() {$App.gop1 = $scope.Calculate($App.go1+"+"+$App.go2+"+"+$App.go3+"+"+$App.go4,-1);
if ($App.gop1 == "4") {
$scope.GotoPage( "ADHDAnalysis002" );
} else {
};};
$scope.PushButton262_click = function() {$App.ADHDAnalysis001qa = localStorage.getItem("ADHDAnalysis001qa");
$App.q1feel = localStorage.getItem("q1feel");
$scope.GotoPage( "ADHDAnalysis001-q1" );
$App.countq1a = 1;
$App.countq1b = 1;
$App.countq1c = 1;
$App.countq1d = 1;
$App.countq1e = 1;
$App.q1awhy = localStorage.getItem("q1awhy");
$App.q1bwhy = localStorage.getItem("q1bwhy");
$App.q1cwhy = localStorage.getItem("q1cwhy");
$App.q1dwhy = localStorage.getItem("q1dwhy");
$App.q1ewhy = localStorage.getItem("q1ewhy");};
});
NeoApp.controller("SelectionM015_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 21;
$App.NAB.PageID = "SelectionM015";
$scope.PushButton178_click = function() {$scope.GotoPage( "Main" );};
$scope.Pager72_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager72_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton179_click = function() {$scope.GotoPage( "SelectionM015x01" );};
$scope.PushButton180_click = function() {$scope.GotoPage( "SelectionM015x02" );};
$scope.PushButton181_click = function() {$scope.GotoPage( "SelectionM015x03" );};
$scope.PushButton182_click = function() {$scope.GotoPage( "SelectionM015x04" );};
$scope.PushButton183_click = function() {$scope.GotoPage( "SelectionM015x05" );};
$scope.PushButton184_click = function() {$scope.GotoPage( "SelectionM015x06" );};
$scope.PushButton185_click = function() {$scope.GotoPage( "SelectionM015x07" );};
$scope.PushButton186_click = function() {$scope.GotoPage( "SelectionM015x08" );};
$scope.PushButton208_click = function() {$scope.GotoPage( "ADHDAnalysis" );};
});
NeoApp.controller("ADHDAnalysis_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 22;
$App.NAB.PageID = "ADHDAnalysis";
$scope.Pager82_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager82_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea81_change = function() {localStorage.setItem("ADHDM015x001",$App.ADHDM015x001);};
$scope.PushButton206_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea82_change = function() {localStorage.setItem("ADHDM015x001a",$App.ADHDM015x001a);};
$scope.PushButton207_click = function() {$scope.GotoPage( "SelectionM015" );};
$scope.PushButton236_click = function() {$scope.GotoPage( "ADHDAnalysis001" );};
});
NeoApp.controller("ADHDAnalysis001_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 23;
$App.NAB.PageID = "ADHDAnalysis001";
$scope.Pager83_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager83_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton209_click = function() {$scope.GotoPage( "Main" );};
$scope.q1001_change = function() {localStorage.setItem("ADHDAnalysis001q",$App.ADHDAnalysis001q);};
$scope.PushButton210_click = function() {$scope.GotoPage( "SelectionM015" );};
$scope.Dropdown1_change = function(value) {$App.ADHDAnalysis001R1 = value;
localStorage.setItem("ADHDAnalysis001r1",$App.ADHDAnalysis001R1);
$scope.DisableObject("q1001",true);
$App.go1 = "1";
$scope.ShowObject("q1but","",47);
$App.ADHDAnalysis001qa = localStorage.getItem("ADHDAnalysis001qa");
$App.q1feel = localStorage.getItem("q1feel");
$scope.GotoPage( "ADHDAnalysis001-q1" );
$App.countq1a = 1;
$App.countq1b = 1;
$App.countq1c = 1;
$App.countq1d = 1;
$App.countq1e = 1;
$App.q1awhy = localStorage.getItem("q1awhy");
$App.q1bwhy = localStorage.getItem("q1bwhy");
$App.q1cwhy = localStorage.getItem("q1cwhy");
$App.q1dwhy = localStorage.getItem("q1dwhy");
$App.q1ewhy = localStorage.getItem("q1ewhy");};
$scope.q1002_change = function() {localStorage.setItem("ADHDAnalysis002q",$App.ADHDAnalysis002q);};
$scope.q1002q_change = function(value) {$App.ADHDAnalysis002R1 = value;
localStorage.setItem("ADHDAnalysis002r1",$App.ADHDAnalysis002R1);
$scope.DisableObject("q1002",true);
$App.go2 = "1";};
$scope.q1003_change = function() {localStorage.setItem("ADHDAnalysis003q",$App.ADHDAnalysis003q);};
$scope.q1003q_change = function(value) {$App.ADHDAnalysis003R1 = value;
localStorage.setItem("ADHDAnalysis003r1",$App.ADHDAnalysis003R1);
$scope.DisableObject("q1003",true);
$App.go3 = "1";};
$scope.q1004_change = function() {localStorage.setItem("ADHDAnalysis004q",$App.ADHDAnalysis004q);};
$scope.q1004q_change = function(value) {$App.ADHDAnalysis004R1 = value;
localStorage.setItem("ADHDAnalysis004r1",$App.ADHDAnalysis004R1);
if ($App.ADHDAnalysis001R1 == "SOMETIMES") {
$App.add01 = "2";
} else {
};
if ($App.ADHDAnalysis002R1 == "SOMETIMES") {
$App.add02 = "2";
} else {
};
if ($App.ADHDAnalysis003R1 == "SOMETIMES") {
$App.add03 = "2";
} else {
};
if ($App.ADHDAnalysis004R1 == "SOMETIMES") {
$App.add04 = "2";
} else {
};
if ($App.ADHDAnalysis001R1 == "RARELY") {
$App.add01 = "1";
} else {
};
if ($App.ADHDAnalysis002R1 == "RARELY") {
$App.add02 = "1";
} else {
};
if ($App.ADHDAnalysis003R1 == "RARELY") {
$App.add03 = "1";
} else {
};
if ($App.ADHDAnalysis004R1 == "RARELY") {
$App.add04 = "1";
} else {
};
if ($App.ADHDAnalysis001R1 == "OFTEN") {
$App.add01 = "3";
} else {
};
if ($App.ADHDAnalysis002R1 == "OFTEN") {
$App.add02 = "3";
} else {
};
if ($App.ADHDAnalysis003R1 == "OFTEN") {
$App.add03 = "3";
} else {
};
if ($App.ADHDAnalysis004R1 == "OFTEN") {
$App.add04 = "3";
} else {
};
$App.sub01 = $scope.Calculate($App.add01+"+"+$App.add02+"+"+$App.add03+"+"+$App.add04,-1);
$scope.DisableObject("q1004",true);
$App.go4 = "1";};
$scope.PushButton235_click = function() {$App.ADHDAnalysis001q = "How often do you have difficulty sustaining your attention while doing something for work, school, a hobby, or fun activity (e.g., remaining focused during lectures, lengthy reading or conversations)";
$App.ADHDAnalysis002q = "How often are you easily distracted by external stimuli, like something in your environment or unrelated thoughts?";
$App.ADHDAnalysis003q = "How often do you avoid, dislike, or are reluctant to engage in tasks that require sustained mental effort or thought?";
$App.ADHDAnalysis004q = "How often do you have trouble listening to someone, even when they are speaking directly to you — like your mind is somewhere else?";
$App.ADHDAnalysis005q = "How often do you have difficulty in organizing an activity or task needing to get done (e.g., poor time management, fails to meet deadlines, difficulty managing sequential tasks)?";
$App.ADHDAnalysis006q = "How often do you fail to give close attention to details, or make careless mistakes in things such as schoolwork, at work, or during other activities?";
$App.ADHDAnalysis007q = "How often do you forget to do something you do all the time, such as missing an appointment or paying a bill?";
$App.ADHDAnalysis008q = "How often do you lose, misplace or damage something that's necessary in order to get things done (e.g., your phone, eyeglasses, paperwork, wallet, keys, etc.)?";
$App.ADHDAnalysis009q = "How often do you have trouble following through on instructions, or failing to finish schoolwork, chores, or duties in the workplace (e.g., you start a task but quickly lose focus and are easily sidetracked)?";
$App.ADHDAnalysis010q = "How often are you unable to play or engage in leisurely activities quietly?";
$App.ADHDAnalysis011q = "How often do you have difficulty waiting your turn, such as while waiting in line?";
$App.ADHDAnalysis012q = "How often do you feel like you're on the go, acting as if you're driven by a motor (e.g., you're unable to be or uncomfortable being still for an extended period of time, such as in a restaurant or a meeting)?";
$App.ADHDAnalysis013q = "How often do you leave your seat in situations when remaining seated is expected (e.g., leaving your place in the office or workplace)?";
$App.ADHDAnalysis014q = "How often do you blurt out an answer before a question has been completed (e.g., completing another person's sentence or can't wait your turn in a conversation)?";
$App.ADHDAnalysis015q = "How often do you feel restless -- like you want to get out and do something?";
$App.ADHDAnalysis016q = "How often do you fidget with or tap your hands or feet, or squirm in your seat? ";
$App.ADHDAnalysis017q = "How often do find yourself talking excessively?";
$App.ADHDAnalysis018q = "How often do you interrupt or intrude on others, such as butting into their conversation or taking over what others are doing?";
$App.ADHDAnalysis019q = "Were several of the symptoms present prior to age 12?";
$App.ADHDAnalysis020q = "Do the symptoms appear in at least two or more settings (e.g., at home and school)? ";};
$scope.PushButton232_click = function() {$App.gop1 = $scope.Calculate($App.go1+"+"+$App.go2+"+"+$App.go3+"+"+$App.go4,-1);
if ($App.gop1 == "4") {
$scope.GotoPage( "ADHDAnalysis002" );
} else {
};};
$scope.q1but_click = function() {$App.ADHDAnalysis001qa = localStorage.getItem("ADHDAnalysis001qa");
$App.q1feel = localStorage.getItem("q1feel");
$scope.GotoPage( "ADHDAnalysis001-q1" );
$App.countq1a = 1;
$App.countq1b = 1;
$App.countq1c = 1;
$App.countq1d = 1;
$App.countq1e = 1;
$App.q1awhy = localStorage.getItem("q1awhy");
$App.q1bwhy = localStorage.getItem("q1bwhy");
$App.q1cwhy = localStorage.getItem("q1cwhy");
$App.q1dwhy = localStorage.getItem("q1dwhy");
$App.q1ewhy = localStorage.getItem("q1ewhy");};
});
NeoApp.controller("ADHDAnalysis001-q1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 24;
$App.NAB.PageID = "ADHDAnalysis001-q1";
$scope.PushButton12_click = function() {$scope.ShowObject("Q1A","fadeOut",19);
$scope.ShowObject("Q1B","fadeOut",19);
$scope.ShowObject("Q1C","fadeOut",19);
$scope.ShowObject("Q1D","fadeOut",19);
$scope.ShowObject("Q1E","fadeOut",19);};
$scope.PushButton1_click = function() {$scope.GotoPage( "ADHDAnalysis001" );};
$scope.TextArea84_change = function() {localStorage.setItem("ADHDAnalysis001q",$App.ADHDAnalysis001q);};
$scope.Q1A_click = function() {$App.q1feel = "Proud";
localStorage.setItem("q1feel",$App.q1feel);
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.Q1B_click = function() {$App.q1feel = "A little embarrassed";
localStorage.setItem("q1feel",$App.q1feel);
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.Q1C_click = function() {$App.q1feel = "Nutral";
localStorage.setItem("q1feel",$App.q1feel);
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.Q1D_click = function() {$App.q1feel = "Very embarrassed";
localStorage.setItem("q1feel",$App.q1feel);
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.Q1E_click = function() {$App.q1feel = "Self LOATHNG";
localStorage.setItem("q1feel",$App.q1feel);
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton3_click = function() {$App.countq1a = $scope.Calculate($App.countq1a+"+1",-1);
if ($App.countq1a == "1") {
$App.q1awhy = "-";
} else {
};
if ($App.countq1a == "2") {
$App.countq1a = "0";
$App.q1awhy = "-I think i'm different-";
} else {
};
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton4_click = function() {$App.countq1b = $scope.Calculate($App.countq1b+"+1",-1);
if ($App.countq1b == "1") {
$App.q1bwhy = "-";
} else {
};
if ($App.countq1b == "2") {
$App.countq1b = "0";
$App.q1bwhy = "-I constantly fail to address it-";
} else {
};
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton5_click = function() {$App.countq1c = $scope.Calculate($App.countq1c+"+1",-1);
if ($App.countq1c == "1") {
$App.q1cwhy = "-";
} else {
};
if ($App.countq1c == "2") {
$App.countq1c = "0";
$App.q1cwhy = "-Others mock me -";
} else {
};
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton6_click = function() {$App.countq1d = $scope.Calculate($App.countq1d+"+1",-1);
if ($App.countq1d == "1") {
$App.q1dwhy = "-";
} else {
};
if ($App.countq1d == "2") {
$App.countq1d = "0";
$App.q1dwhy = "-Others mock me -";
} else {
};
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton10_click = function() {$App.countq1e = $scope.Calculate($App.countq1e+"+1",-1);
if ($App.countq1e == "1") {
$App.q1ewhy = "-";
} else {
};
if ($App.countq1e == "2") {
$App.countq1e = "0";
$App.q1ewhy = "-It affects my self confidence-";
} else {
};
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton11_click = function() {localStorage.setItem("q1feel",$App.q1feel);
localStorage.setItem("q1awhy",$App.q1awhy);
localStorage.setItem("q1bwhy",$App.q1bwhy);
localStorage.setItem("q1cwhy",$App.q1cwhy);
localStorage.setItem("q1dwhy",$App.q1dwhy);
localStorage.setItem("q1ewhy",$App.q1ewhy);
$scope.GotoPage( "ADHDAnalysis001" );};
});
NeoApp.controller("ADHDAnalysis002-q1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 25;
$App.NAB.PageID = "ADHDAnalysis002-q1";
$scope.PushButton32_click = function() {$scope.ShowObject("Q1A","fadeOut",19);
$scope.ShowObject("Q1B","fadeOut",19);
$scope.ShowObject("Q1C","fadeOut",19);
$scope.ShowObject("Q1D","fadeOut",19);
$scope.ShowObject("Q1E","fadeOut",19);};
$scope.PushButton211_click = function() {$scope.GotoPage( "ADHDAnalysis001" );};
$scope.TextArea85_change = function() {localStorage.setItem("ADHDAnalysis002q",$App.ADHDAnalysis002q);};
$scope.q2a_click = function() {$App.q2feel = "Proud";
localStorage.setItem("q2feel",$App.q2feel);
$scope.HideObject("Q2A","fadeOut",19);
$scope.HideObject("Q2B","fadeOut",19);
$scope.HideObject("Q2C","fadeOut",19);
$scope.HideObject("Q2D","fadeOut",19);
$scope.HideObject("Q2E","fadeOut",19);};
$scope.u_click = function() {$App.q2feel = "A little embarrassed";
localStorage.setItem("q2feel",$App.q2feel);
$scope.HideObject("Q2A","fadeOut",19);
$scope.HideObject("Q2B","fadeOut",19);
$scope.HideObject("Q2C","fadeOut",19);
$scope.HideObject("Q2D","fadeOut",19);
$scope.HideObject("Q2E","fadeOut",19);};
$scope.Q2b_click = function() {$App.q1feel = "Nutral";
localStorage.setItem("q1feel",$App.q1feel);
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton240_click = function() {$App.q1feel = "Very embarrassed";
localStorage.setItem("q1feel",$App.q1feel);
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton241_click = function() {$App.q1feel = "Self LOATHNG";
localStorage.setItem("q1feel",$App.q1feel);
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton242_click = function() {$App.countq1a = $scope.Calculate($App.countq1a+"+1",-1);
if ($App.countq1a == "1") {
$App.q1awhy = "-";
} else {
};
if ($App.countq1a == "2") {
$App.countq1a = "0";
$App.q1awhy = "-I think i'm different-";
} else {
};
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton243_click = function() {$App.countq1b = $scope.Calculate($App.countq1b+"+1",-1);
if ($App.countq1b == "1") {
$App.q1bwhy = "-";
} else {
};
if ($App.countq1b == "2") {
$App.countq1b = "0";
$App.q1bwhy = "-I constantly fail to address it-";
} else {
};
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton244_click = function() {$App.countq1c = $scope.Calculate($App.countq1c+"+1",-1);
if ($App.countq1c == "1") {
$App.q1cwhy = "-";
} else {
};
if ($App.countq1c == "2") {
$App.countq1c = "0";
$App.q1cwhy = "-Others mock me -";
} else {
};
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton245_click = function() {$App.countq1d = $scope.Calculate($App.countq1d+"+1",-1);
if ($App.countq1d == "1") {
$App.q1dwhy = "-";
} else {
};
if ($App.countq1d == "2") {
$App.countq1d = "0";
$App.q1dwhy = "-Others mock me -";
} else {
};
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton246_click = function() {$App.countq1e = $scope.Calculate($App.countq1e+"+1",-1);
if ($App.countq1e == "1") {
$App.q1ewhy = "-";
} else {
};
if ($App.countq1e == "2") {
$App.countq1e = "0";
$App.q1ewhy = "-It affects my self confidence-";
} else {
};
$scope.HideObject("Q1A","fadeOut",19);
$scope.HideObject("Q1B","fadeOut",19);
$scope.HideObject("Q1C","fadeOut",19);
$scope.HideObject("Q1D","fadeOut",19);
$scope.HideObject("Q1E","fadeOut",19);};
$scope.PushButton247_click = function() {localStorage.setItem("q1feel",$App.q1feel);
localStorage.setItem("q1awhy",$App.q1awhy);
localStorage.setItem("q1bwhy",$App.q1bwhy);
localStorage.setItem("q1cwhy",$App.q1cwhy);
localStorage.setItem("q1dwhy",$App.q1dwhy);
localStorage.setItem("q1ewhy",$App.q1ewhy);
$scope.GotoPage( "ADHDAnalysis001" );};
});
NeoApp.controller("ADHDAnalysis002_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 26;
$App.NAB.PageID = "ADHDAnalysis002";
$scope.Pager84_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager84_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton212_click = function() {$scope.GotoPage( "Main" );};
$scope.q1005_change = function() {localStorage.setItem("ADHDAnalysis005q",$App.ADHDAnalysis005q);};
$scope.PushButton213_click = function() {$scope.GotoPage( "SelectionM015" );};
$scope.Dropdown5_change = function(value) {$App.ADHDAnalysis005R1 = value;
localStorage.setItem("ADHDAnalysis005r1",$App.ADHDAnalysis005R1);
$scope.DisableObject("q1005",true);};
$scope.q1006_change = function() {localStorage.setItem("ADHDAnalysis006q",$App.ADHDAnalysis006q);};
$scope.Dropdown6_change = function(value) {$App.ADHDAnalysis006R1 = value;
localStorage.setItem("ADHDAnalysis006r1",$App.ADHDAnalysis006R1);
$scope.DisableObject("q1006",true);};
$scope.q1007_change = function() {localStorage.setItem("ADHDAnalysis007q",$App.ADHDAnalysis007q);};
$scope.Dropdown7_change = function(value) {$App.ADHDAnalysis007R1 = value;
localStorage.setItem("ADHDAnalysis007r1",$App.ADHDAnalysis007R1);
$scope.DisableObject("q1007",true);};
$scope.q1008_change = function() {localStorage.setItem("ADHDAnalysis008q",$App.ADHDAnalysis008q);};
$scope.Dropdown8_change = function(value) {$App.ADHDAnalysis008R1 = value;
localStorage.setItem("ADHDAnalysis008r1",$App.ADHDAnalysis008R1);
if ($App.ADHDAnalysis005R1 == "SOMETIMES") {
$App.add05 = "2";
} else {
};
if ($App.ADHDAnalysis006R1 == "SOMETIMES") {
$App.add06 = "2";
} else {
};
if ($App.ADHDAnalysis007R1 == "SOMETIMES") {
$App.add07 = "2";
} else {
};
if ($App.ADHDAnalysis008R1 == "SOMETIMES") {
$App.add08 = "2";
} else {
};
if ($App.ADHDAnalysis005R1 == "RARELY") {
$App.add05 = "1";
} else {
};
if ($App.ADHDAnalysis006R1 == "RARELY") {
$App.add06 = "1";
} else {
};
if ($App.ADHDAnalysis007R1 == "RARELY") {
$App.add07 = "1";
} else {
};
if ($App.ADHDAnalysis008R1 == "RARELY") {
$App.add08 = "1";
} else {
};
if ($App.ADHDAnalysis005R1 == "OFTEN") {
$App.add05 = "3";
} else {
};
if ($App.ADHDAnalysis006R1 == "OFTEN") {
$App.add06 = "3";
} else {
};
if ($App.ADHDAnalysis007R1 == "OFTEN") {
$App.add07 = "3";
} else {
};
if ($App.ADHDAnalysis008R1 == "OFTEN") {
$App.add08 = "3";
} else {
};
$App.sub02 = $scope.Calculate($App.add05+"+"+$App.add06+"+"+$App.add07+"+"+$App.add08,-1);
$scope.DisableObject("q1008",true);};
});
NeoApp.controller("ADHDAnalysis003_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 27;
$App.NAB.PageID = "ADHDAnalysis003";
$scope.Pager85_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager85_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton214_click = function() {$scope.GotoPage( "Main" );};
$scope.q1009_change = function() {localStorage.setItem("ADHDAnalysis009q",$App.ADHDAnalysis009q);};
$scope.PushButton215_click = function() {$scope.GotoPage( "SelectionM015" );};
$scope.Dropdown9_change = function(value) {$App.ADHDAnalysis009R1 = value;
localStorage.setItem("ADHDAnalysis009r1",$App.ADHDAnalysis009R1);
$scope.DisableObject("q1009",true);};
$scope.q1010_change = function() {localStorage.setItem("ADHDAnalysis010q",$App.ADHDAnalysis010q);};
$scope.Dropdown10_change = function(value) {$App.ADHDAnalysis010R1 = value;
localStorage.setItem("ADHDAnalysis010r1",$App.ADHDAnalysis010R1);};
$scope.q1011_change = function() {localStorage.setItem("ADHDAnalysis011q",$App.ADHDAnalysis011q);};
$scope.Dropdown11_change = function(value) {$App.ADHDAnalysis011R1 = value;
localStorage.setItem("ADHDAnalysis011r1",$App.ADHDAnalysis011R1);};
$scope.q1012_change = function() {localStorage.setItem("ADHDAnalysis012q",$App.ADHDAnalysis012q);};
$scope.Dropdown12_change = function(value) {$App.ADHDAnalysis012R1 = value;
localStorage.setItem("ADHDAnalysis012r1",$App.ADHDAnalysis012R1);
if ($App.ADHDAnalysis009R1 == "SOMETIMES") {
$App.add09 = "2";
} else {
};
if ($App.ADHDAnalysis010R1 == "SOMETIMES") {
$App.add10 = "2";
} else {
};
if ($App.ADHDAnalysis011R1 == "SOMETIMES") {
$App.add11 = "2";
} else {
};
if ($App.ADHDAnalysis012R1 == "SOMETIMES") {
$App.add12 = "2";
} else {
};
if ($App.ADHDAnalysis09r1 == "RARELY") {
$App.add09 = "1";
} else {
};
if ($App.ADHDAnalysis010R1 == "RARELY") {
$App.add10 = "1";
} else {
};
if ($App.ADHDAnalysis011R1 == "RARELY") {
$App.add11 = "1";
} else {
};
if ($App.ADHDAnalysis012R1 == "RARELY") {
$App.add12 = "1";
} else {
};
if ($App.ADHDAnalysis009R1 == "OFTEN") {
$App.add09 = "3";
} else {
};
if ($App.ADHDAnalysis010R1 == "OFTEN") {
$App.add10 = "3";
} else {
};
if ($App.ADHDAnalysis011R1 == "OFTEN") {
$App.add11 = "3";
} else {
};
if ($App.ADHDAnalysis012R1 == "OFTEN") {
$App.add12 = "3";
} else {
};
$App.sub03 = $scope.Calculate($App.add09+"+"+$App.add10+"+"+$App.add11+"+"+$App.add12,-1);};
$scope.PushButton234_click = function() {localStorage.setItem("ADHDAnalysis001r1",$App.ADHDAnalysis001R1);
$App.ADHDAnalysis001R1 = "NEVER";
localStorage.setItem("ADHDAnalysis002r1",$App.ADHDAnalysis002R1);
$App.ADHDAnalysis002R1 = "NEVER";
localStorage.setItem("ADHDAnalysis003r1",$App.ADHDAnalysis003R1);
$App.ADHDAnalysis003R1 = "NEVER";
localStorage.setItem("ADHDAnalysis004r1",$App.ADHDAnalysis004R1);
$App.ADHDAnalysis004R1 = "NEVER";
localStorage.setItem("ADHDAnalysis005r1",$App.ADHDAnalysis005R1);
$App.ADHDAnalysis005R1 = "NEVER";
localStorage.setItem("ADHDAnalysis006r1",$App.ADHDAnalysis006R1);
$App.ADHDAnalysis006R1 = "NEVER";
localStorage.setItem("ADHDAnalysis007r1",$App.ADHDAnalysis007R1);
$App.ADHDAnalysis007R1 = "NEVER";
localStorage.setItem("ADHDAnalysis008r1",$App.ADHDAnalysis008R1);
$App.ADHDAnalysis008R1 = "NEVER";
localStorage.setItem("ADHDAnalysis009r1",$App.ADHDAnalysis009R1);
$App.ADHDAnalysis009R1 = "NEVER";
localStorage.setItem("ADHDAnalysis010r1",$App.ADHDAnalysis010R1);
$App.ADHDAnalysis010R1 = "NEVER";
localStorage.setItem("ADHDAnalysis011r1",$App.ADHDAnalysis011R1);
$App.ADHDAnalysis011R1 = "NEVER";
localStorage.setItem("ADHDAnalysis012r1",$App.ADHDAnalysis012R1);
$App.ADHDAnalysis012R1 = "NEVER";
localStorage.setItem("ADHDAnalysis013r1",$App.ADHDAnalysis013r1);
$App.ADHDAnalysis013r1 = "NEVER";
localStorage.setItem("ADHDAnalysis014r1",$App.ADHDAnalysis014r1);
$App.ADHDAnalysis014r1 = "NEVER";
localStorage.setItem("ADHDAnalysis015r1",$App.ADHDAnalysis015r1);
$App.ADHDAnalysis015r1 = "NEVER";
localStorage.setItem("ADHDAnalysis016r1",$App.ADHDAnalysis016r1);
$App.ADHDAnalysis016r1 = "NEVER";
localStorage.setItem("ADHDAnalysis017r1",$App.ADHDAnalysis017r1);
$App.ADHDAnalysis017r1 = "NEVER";
localStorage.setItem("ADHDAnalysis018r1",$App.ADHDAnalysis018r1);
$App.ADHDAnalysis018r1 = "NEVER";
localStorage.setItem("ADHDAnalysis019r1",$App.ADHDAnalysis019r1);
$App.ADHDAnalysis019r1 = "NEVER";
localStorage.setItem("ADHDAnalysis020r1",$App.ADHDAnalysis020r1);
$App.ADHDAnalysis020r1 = "NEVER";
localStorage.setItem("ADHDAnalysis021r1",$App.ADHDAnalysis021r1);
$App.ADHDAnalysis021r1 = "NEVER";
localStorage.setItem("ADHDAnalysis022r1",$App.ADHDAnalysis022r1);
$App.ADHDAnalysis022r1 = "NEVER";
localStorage.setItem("ADHDAnalysis023r1",$App.ADHDAnalysis023r1);
$App.ADHDAnalysis023r1 = "NEVER";
localStorage.setItem("ADHDAnalysis024r1",$App.ADHDAnalysis024r1);
$App.ADHDAnalysis024r1 = "NEVER";
localStorage.setItem("ADHDAnalysis025r1",$App.ADHDAnalysis025r1);
$App.ADHDAnalysis025r1 = "NEVER";
localStorage.setItem("ADHDAnalysis026r1",$App.ADHDAnalysis026r1);
$App.ADHDAnalysis026r1 = "NEVER";
localStorage.setItem("ADHDAnalysis271r1",$App.ADHDAnalysis027r1);
$App.ADHDAnalysis027r1 = "NEVER";
localStorage.setItem("ADHDAnalysis028r1",$App.ADHDAnalysis028r1);
$App.ADHDAnalysis028r1 = "NEVER";
localStorage.setItem("ADHDAnalysis029r1",$App.ADHDAnalysis029r1);
$App.ADHDAnalysis029r1 = "NEVER";
localStorage.setItem("ADHDAnalysis030r1",$App.ADHDAnalysis030r1);
$App.ADHDAnalysis030r1 = "NEVER";
localStorage.setItem("ADHDAnalysis031r1",$App.ADHDAnalysis031r1);
$App.ADHDAnalysis031r1 = "NEVER";
localStorage.setItem("ADHDAnalysis032r1",$App.ADHDAnalysis032r1);
$App.ADHDAnalysis032r1 = "NEVER";
localStorage.setItem("ADHDAnalysis033r1",$App.ADHDAnalysis033r1);
$App.ADHDAnalysis033r1 = "NEVER";
localStorage.setItem("ADHDAnalysis034r1",$App.ADHDAnalysis034r1);
$App.ADHDAnalysis034r1 = "NEVER";
localStorage.setItem("ADHDAnalysis035r1",$App.ADHDAnalysis035r1);
$App.ADHDAnalysis035r1 = "NEVER";
localStorage.setItem("ADHDAnalysis036r1",$App.ADHDAnalysis036r1);
$App.ADHDAnalysis036r1 = "NEVER";};
});
NeoApp.controller("ADHDAnalysis004_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 28;
$App.NAB.PageID = "ADHDAnalysis004";
$scope.Pager86_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager86_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton216_click = function() {$scope.GotoPage( "Main" );};
$scope.q1013_change = function() {localStorage.setItem("ADHDAnalysis013q",$App.ADHDAnalysis013q);};
$scope.PushButton217_click = function() {$scope.GotoPage( "SelectionM015" );};
$scope.Dropdown13_change = function(value) {$App.ADHDAnalysis013r1 = value;
localStorage.setItem("ADHDAnalysis013r1",$App.ADHDAnalysis013r1);};
$scope.q1014_change = function() {localStorage.setItem("ADHDAnalysis014q",$App.ADHDAnalysis014q);};
$scope.Dropdown14_change = function(value) {$App.ADHDAnalysis014r1 = value;
localStorage.setItem("ADHDAnalysis014r1",$App.ADHDAnalysis014r1);};
$scope.q1015_change = function() {localStorage.setItem("ADHDAnalysis015q",$App.ADHDAnalysis015q);};
$scope.Dropdown15_change = function(value) {$App.ADHDAnalysis015r1 = value;
localStorage.setItem("ADHDAnalysis015r1",$App.ADHDAnalysis015r1);};
$scope.q1016_change = function() {localStorage.setItem("ADHDAnalysis016q",$App.ADHDAnalysis016q);};
$scope.Dropdown16_change = function(value) {$App.ADHDAnalysis016r1 = value;
localStorage.setItem("ADHDAnalysis016r1",$App.ADHDAnalysis016r1);
if ($App.ADHDAnalysis013r1 == "SOMETIMES") {
$App.add13 = "2";
} else {
};
if ($App.ADHDAnalysis014r1 == "SOMETIMES") {
$App.add14 = "2";
} else {
};
if ($App.ADHDAnalysis015r1 == "SOMETIMES") {
$App.add15 = "2";
} else {
};
if ($App.ADHDAnalysis016r1 == "SOMETIMES") {
$App.add16 = "2";
} else {
};
if ($App.ADHDAnalysis013r1 == "RARELY") {
$App.add13 = "1";
} else {
};
if ($App.ADHDAnalysis014r1 == "RARELY") {
$App.add14 = "1";
} else {
};
if ($App.ADHDAnalysis015r1 == "RARELY") {
$App.add15 = "1";
} else {
};
if ($App.ADHDAnalysis016r1 == "RARELY") {
$App.add16 = "1";
} else {
};
if ($App.ADHDAnalysis013r1 == "OFTEN") {
$App.add13 = "3";
} else {
};
if ($App.ADHDAnalysis014r1 == "OFTEN") {
$App.add14 = "3";
} else {
};
if ($App.ADHDAnalysis015r1 == "OFTEN") {
$App.add15 = "3";
} else {
};
if ($App.ADHDAnalysis016r1 == "OFTEN") {
$App.add16 = "3";
} else {
};
$App.sub04 = $scope.Calculate($App.add13+"+"+$App.add14+"+"+$App.add15+"+"+$App.add16,-1);};
});
NeoApp.controller("ADHDAnalysis005_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 29;
$App.NAB.PageID = "ADHDAnalysis005";
$scope.Pager87_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager87_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton218_click = function() {$scope.GotoPage( "Main" );};
$scope.q1017_change = function() {localStorage.setItem("ADHDAnalysis017q",$App.ADHDAnalysis017q);};
$scope.PushButton219_click = function() {$scope.GotoPage( "SelectionM015" );};
$scope.Dropdown17_change = function(value) {$App.ADHDAnalysis017r1 = value;
localStorage.setItem("ADHDAnalysis017r1",$App.ADHDAnalysis017r1);};
$scope.q1018_change = function() {localStorage.setItem("ADHDAnalysis018q",$App.ADHDAnalysis018q);};
$scope.Dropdown18_change = function(value) {$App.ADHDAnalysis018r1 = value;
localStorage.setItem("ADHDAnalysis018r1",$App.ADHDAnalysis018r1);};
$scope.q1019_change = function() {localStorage.setItem("ADHDAnalysis019q",$App.ADHDAnalysis019q);};
$scope.q1020_change = function() {localStorage.setItem("ADHDAnalysis020q",$App.ADHDAnalysis020q);};
$scope.Dropdown37_change = function(value) {$App.ADHDAnalysis019r1 = value;
localStorage.setItem("ADHDAnalysis019r1",$App.ADHDAnalysis019r1);};
$scope.Dropdown38_change = function(value) {$App.ADHDAnalysis020r1 = value;
localStorage.setItem("ADHDAnalysis020r1",$App.ADHDAnalysis020r1);
if ($App.ADHDAnalysis017r1 == "SOMETIMES") {
$App.add17 = "2";
} else {
};
if ($App.ADHDAnalysis018r1 == "SOMETIMES") {
$App.add18 = "2";
} else {
};
if ($App.ADHDAnalysis019r1 == "yes") {
$App.add19 = "2";
} else {
$App.add19 = "0";
};
if ($App.ADHDAnalysis020r1 == "yes") {
$App.add20 = "2";
} else {
$App.add20 = "0";
};
if ($App.ADHDAnalysis017r1 == "RARELY") {
$App.add17 = "1";
} else {
};
if ($App.ADHDAnalysis018r1 == "RARELY") {
$App.add18 = "1";
} else {
};
if ($App.ADHDAnalysis017r1 == "OFTEN") {
$App.add17 = "3";
} else {
};
if ($App.ADHDAnalysis018r1 == "OFTEN") {
$App.add18 = "3";
} else {
};
$App.sub05 = $scope.Calculate($App.add17+"+"+$App.add17+"+"+$App.add19+"+"+$App.add20,-1);
$App.tot = $scope.Calculate($App.sub01+"+"+$App.sub02+"+"+$App.sub03+"+"+$App.sub04+"+"+$App.sub05,-1);};
});
NeoApp.controller("ADHDAnalysis006_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 30;
$App.NAB.PageID = "ADHDAnalysis006";
$scope.Pager88_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager88_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton220_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea103_change = function() {localStorage.setItem("ADHDAnalysis021q",$App.ADHDAnalysis021q);};
$scope.PushButton221_click = function() {$scope.GotoPage( "SelectionM015" );};
$scope.Dropdown21_change = function(value) {$App.ADHDAnalysis021r1 = value;
localStorage.setItem("ADHDAnalysis021r1",$App.ADHDAnalysis021r1);};
$scope.TextArea104_change = function() {localStorage.setItem("ADHDAnalysis022q",$App.ADHDAnalysis022q);};
$scope.Dropdown22_change = function(value) {$App.ADHDAnalysis022r1 = value;
localStorage.setItem("ADHDAnalysis022r1",$App.ADHDAnalysis022r1);};
$scope.TextArea105_change = function() {localStorage.setItem("ADHDAnalysis023q",$App.ADHDAnalysis023q);};
$scope.Dropdown23_change = function(value) {$App.ADHDAnalysis023r1 = value;
localStorage.setItem("ADHDAnalysis023r1",$App.ADHDAnalysis023r1);};
$scope.TextArea106_change = function() {localStorage.setItem("ADHDAnalysis024q",$App.ADHDAnalysis024q);};
$scope.Dropdown24_change = function(value) {$App.ADHDAnalysis024r1 = value;
localStorage.setItem("ADHDAnalysis024r1",$App.ADHDAnalysis024r1);
if ($App.ADHDAnalysis021r1 == "SOMETIMES") {
$App.add21 = "2";
} else {
};
if ($App.ADHDAnalysis022r1 == "SOMETIMES") {
$App.add22 = "2";
} else {
};
if ($App.ADHDAnalysis023r1 == "SOMETIMES") {
$App.add23 = "2";
} else {
};
if ($App.ADHDAnalysis024r1 == "SOMETIMES") {
$App.add24 = "2";
} else {
};
if ($App.ADHDAnalysis021r1 == "RARELY") {
$App.add21 = "1";
} else {
};
if ($App.ADHDAnalysis022r1 == "RARELY") {
$App.add22 = "1";
} else {
};
if ($App.ADHDAnalysis023r1 == "RARELY") {
$App.add23 = "1";
} else {
};
if ($App.ADHDAnalysis024r1 == "RARELY") {
$App.add24 = "1";
} else {
};
if ($App.ADHDAnalysis021r1 == "OFTEN") {
$App.add21 = "3";
} else {
};
if ($App.ADHDAnalysis022r1 == "OFTEN") {
$App.add22 = "3";
} else {
};
if ($App.ADHDAnalysis023r1 == "OFTEN") {
$App.add23 = "3";
} else {
};
if ($App.ADHDAnalysis024r1 == "OFTEN") {
$App.add24 = "3";
} else {
};
$App.sub06 = $scope.Calculate($App.add21+"+"+$App.add22+"+"+$App.add23+"+"+$App.add24,-1);};
});
NeoApp.controller("ADHDAnalysis007_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 31;
$App.NAB.PageID = "ADHDAnalysis007";
$scope.Pager89_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager89_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton222_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea107_change = function() {localStorage.setItem("ADHDAnalysis025q",$App.ADHDAnalysis025q);};
$scope.PushButton223_click = function() {$scope.GotoPage( "SelectionM015" );};
$scope.Dropdown25_change = function(value) {$App.ADHDAnalysis025r1 = value;
localStorage.setItem("ADHDAnalysis025r1",$App.ADHDAnalysis025r1);};
$scope.TextArea108_change = function() {localStorage.setItem("ADHDAnalysis026q",$App.ADHDAnalysis026q);};
$scope.Dropdown26_change = function(value) {$App.ADHDAnalysis026r1 = value;
localStorage.setItem("ADHDAnalysis026r1",$App.ADHDAnalysis026r1);};
$scope.TextArea109_change = function() {localStorage.setItem("ADHDAnalysis027q",$App.ADHDAnalysis027q);};
$scope.Dropdown27_change = function(value) {$App.ADHDAnalysis027r1 = value;
localStorage.setItem("ADHDAnalysis027r1",$App.ADHDAnalysis027r1);};
$scope.TextArea110_change = function() {localStorage.setItem("ADHDAnalysis028q",$App.ADHDAnalysis028q);};
$scope.Dropdown28_change = function(value) {$App.ADHDAnalysis028r1 = value;
localStorage.setItem("ADHDAnalysis028r1",$App.ADHDAnalysis028r1);
if ($App.ADHDAnalysis025r1 == "SOMETIMES") {
$App.add25 = "2";
} else {
};
if ($App.ADHDAnalysis026r1 == "SOMETIMES") {
$App.add25 = "2";
} else {
};
if ($App.ADHDAnalysis027r1 == "SOMETIMES") {
$App.add27 = "2";
} else {
};
if ($App.ADHDAnalysis028r1 == "SOMETIMES") {
$App.add28 = "2";
} else {
};
if ($App.ADHDAnalysis025r1 == "RARELY") {
$App.add25 = "1";
} else {
};
if ($App.ADHDAnalysis026r1 == "RARELY") {
$App.add26 = "1";
} else {
};
if ($App.ADHDAnalysis027r1 == "RARELY") {
$App.add27 = "1";
} else {
};
if ($App.ADHDAnalysis028r1 == "RARELY") {
$App.add28 = "1";
} else {
};
if ($App.ADHDAnalysis025r1 == "OFTEN") {
$App.add25 = "3";
} else {
};
if ($App.ADHDAnalysis026r1 == "OFTEN") {
$App.add26 = "3";
} else {
};
if ($App.ADHDAnalysis027r1 == "OFTEN") {
$App.add27 = "3";
} else {
};
if ($App.ADHDAnalysis028r1 == "OFTEN") {
$App.add28 = "3";
} else {
};
$App.sub07 = $scope.Calculate($App.add25+"+"+$App.add26+"+"+$App.add27+"+"+$App.add28,-1);};
});
NeoApp.controller("ADHDAnalysis008_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 32;
$App.NAB.PageID = "ADHDAnalysis008";
$scope.Pager90_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager90_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton224_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea111_change = function() {localStorage.setItem("ADHDAnalysis029q",$App.ADHDAnalysis029q);};
$scope.PushButton225_click = function() {$scope.GotoPage( "SelectionM015" );};
$scope.Dropdown29_change = function(value) {$App.ADHDAnalysis029r1 = value;
localStorage.setItem("ADHDAnalysis029r1",$App.ADHDAnalysis029r1);};
$scope.TextArea112_change = function() {localStorage.setItem("ADHDAnalysis030q",$App.ADHDAnalysis030q);};
$scope.Dropdown30_change = function(value) {$App.ADHDAnalysis030r1 = value;
localStorage.setItem("ADHDAnalysis030r1",$App.ADHDAnalysis030r1);};
$scope.TextArea113_change = function() {localStorage.setItem("ADHDAnalysis031q",$App.ADHDAnalysis031q);};
$scope.Dropdown31_change = function(value) {$App.ADHDAnalysis031r1 = value;
localStorage.setItem("ADHDAnalysis031r1",$App.ADHDAnalysis031r1);};
$scope.TextArea114_change = function() {localStorage.setItem("ADHDAnalysis032q",$App.ADHDAnalysis032q);};
$scope.Dropdown32_change = function(value) {$App.ADHDAnalysis032r1 = value;
localStorage.setItem("ADHDAnalysis032r1",$App.ADHDAnalysis032r1);
if ($App.ADHDAnalysis029r1 == "SOMETIMES") {
$App.add29 = "2";
} else {
};
if ($App.ADHDAnalysis030r1 == "SOMETIMES") {
$App.add30 = "2";
} else {
};
if ($App.ADHDAnalysis031r1 == "SOMETIMES") {
$App.add31 = "2";
} else {
};
if ($App.ADHDAnalysis032r1 == "SOMETIMES") {
$App.add32 = "2";
} else {
};
if ($App.ADHDAnalysis029r1 == "RARELY") {
$App.add29 = "1";
} else {
};
if ($App.ADHDAnalysis030r1 == "RARELY") {
$App.add30 = "1";
} else {
};
if ($App.ADHDAnalysis031r1 == "RARELY") {
$App.add31 = "1";
} else {
};
if ($App.ADHDAnalysis032r1 == "RARELY") {
$App.add32 = "1";
} else {
};
if ($App.ADHDAnalysis029r1 == "OFTEN") {
$App.add29 = "3";
} else {
};
if ($App.ADHDAnalysis030r1 == "OFTEN") {
$App.add30 = "3";
} else {
};
if ($App.ADHDAnalysis031r1 == "OFTEN") {
$App.add31 = "3";
} else {
};
if ($App.ADHDAnalysis032r1 == "OFTEN") {
$App.add32 = "3";
} else {
};
$App.sub08 = $scope.Calculate($App.add29+"+"+$App.add30+"+"+$App.add31+"+"+$App.add32,-1);};
});
NeoApp.controller("ADHDAnalysis009_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 33;
$App.NAB.PageID = "ADHDAnalysis009";
$scope.Pager91_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager91_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton226_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea115_change = function() {localStorage.setItem("ADHDAnalysis033q",$App.ADHDAnalysis033q);};
$scope.PushButton227_click = function() {$scope.GotoPage( "SelectionM015" );};
$scope.Dropdown33_change = function(value) {$App.ADHDAnalysis033r1 = value;
localStorage.setItem("ADHDAnalysis033r1",$App.ADHDAnalysis033r1);};
$scope.TextArea116_change = function() {localStorage.setItem("ADHDAnalysis034q",$App.ADHDAnalysis034q);};
$scope.Dropdown34_change = function(value) {$App.ADHDAnalysis034r1 = value;
localStorage.setItem("ADHDAnalysis034r1",$App.ADHDAnalysis034r1);};
$scope.TextArea117_change = function() {localStorage.setItem("ADHDAnalysis035q",$App.ADHDAnalysis035q);};
$scope.Dropdown35_change = function(value) {$App.ADHDAnalysis035r1 = value;
localStorage.setItem("ADHDAnalysis035r1",$App.ADHDAnalysis035r1);};
$scope.TextArea118_change = function() {localStorage.setItem("ADHDAnalysis036q",$App.ADHDAnalysis036q);};
$scope.Dropdown36_change = function(value) {$App.ADHDAnalysis036r1 = value;
localStorage.setItem("ADHDAnalysis036r1",$App.ADHDAnalysis036r1);
if ($App.ADHDAnalysis033r1 == "SOMETIMES") {
$App.add33 = "2";
} else {
};
if ($App.ADHDAnalysis034r1 == "SOMETIMES") {
$App.add34 = "2";
} else {
};
if ($App.ADHDAnalysis035r1 == "SOMETIMES") {
$App.add35 = "2";
} else {
};
if ($App.ADHDAnalysis036r1 == "SOMETIMES") {
$App.add36 = "2";
} else {
};
if ($App.ADHDAnalysis033r1 == "RARELY") {
$App.add33 = "1";
} else {
};
if ($App.ADHDAnalysis034r1 == "RARELY") {
$App.add34 = "1";
} else {
};
if ($App.ADHDAnalysis035r1 == "RARELY") {
$App.add35 = "1";
} else {
};
if ($App.ADHDAnalysis036r1 == "RARELY") {
$App.add36 = "1";
} else {
};
if ($App.ADHDAnalysis033r1 == "OFTEN") {
$App.add33 = "3";
} else {
};
if ($App.ADHDAnalysis034r1 == "OFTEN") {
$App.add34 = "3";
} else {
};
if ($App.ADHDAnalysis035r1 == "yes") {
$App.add35 = "2";
} else {
};
if ($App.ADHDAnalysis036r1 == "yes") {
$App.add36 = "2";
} else {
};
$App.sub09 = $scope.Calculate($App.add33+"+"+$App.add34+"+"+$App.add35+"+"+$App.add36,-1);
$App.tot = $scope.Calculate($App.sub01+"+"+$App.sub02+"+"+$App.sub03+"+"+$App.sub04+"+"+$App.sub05+"+"+$App.sub06+"+"+$App.sub07+"+"+$App.sub08+"+"+$App.sub09,-1);
$App.tot1 = $scope.Calculate($App.tot+"/2",-1);};
});
NeoApp.controller("ADHDAnalysisScore_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 34;
$App.NAB.PageID = "ADHDAnalysisScore";
$scope.Pager92_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager92_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton229_click = function() {$scope.GotoPage( "Main" );};
$scope.PushButton230_click = function() {$scope.GotoPage( "SelectionM015" );};
});
NeoApp.controller("SelectionM015x01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 35;
$App.NAB.PageID = "SelectionM015x01";
$scope.Pager73_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager73_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea63_change = function() {localStorage.setItem("M015x001",$App.M015x001);};
$scope.PushButton187_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea64_change = function() {localStorage.setItem("M015x001a",$App.M015x001a);};
$scope.PushButton188_click = function() {$scope.GotoPage( "Base" );};
});
NeoApp.controller("SelectionM015x02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 36;
$App.NAB.PageID = "SelectionM015x02";
$scope.Pager74_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager74_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea65_change = function() {localStorage.setItem("M015x002",$App.M015x002);};
$scope.PushButton189_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea66_change = function() {localStorage.setItem("M015x002a",$App.M015x002a);};
$scope.PushButton190_click = function() {$scope.GotoPage( "Base" );};
});
NeoApp.controller("SelectionM015x03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 37;
$App.NAB.PageID = "SelectionM015x03";
$scope.Pager75_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager75_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea67_change = function() {localStorage.setItem("M015x003",$App.M015x003);};
$scope.PushButton191_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea68_change = function() {localStorage.setItem("M015x003a",$App.M015x003a);};
$scope.PushButton192_click = function() {$scope.GotoPage( "Base" );};
});
NeoApp.controller("SelectionM015x04_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 38;
$App.NAB.PageID = "SelectionM015x04";
$scope.Pager77_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager77_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea71_change = function() {localStorage.setItem("M015x004",$App.M015x004);};
$scope.PushButton195_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea72_change = function() {localStorage.setItem("M015x004a",$App.M015x004a);};
$scope.PushButton196_click = function() {$scope.GotoPage( "Base" );};
});
NeoApp.controller("SelectionM015x05_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 39;
$App.NAB.PageID = "SelectionM015x05";
$scope.Pager78_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager78_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea73_change = function() {localStorage.setItem("M015x005",$App.M015x005);};
$scope.PushButton197_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea74_change = function() {localStorage.setItem("M015x005a",$App.M015x005a);};
$scope.PushButton198_click = function() {$scope.GotoPage( "Base" );};
});
NeoApp.controller("SelectionM015x06_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 40;
$App.NAB.PageID = "SelectionM015x06";
$scope.Pager79_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager79_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea75_change = function() {localStorage.setItem("M015x006",$App.M015x006);};
$scope.PushButton199_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea76_change = function() {localStorage.setItem("M015x006a",$App.M015x006a);};
$scope.PushButton200_click = function() {$scope.GotoPage( "Base" );};
});
NeoApp.controller("SelectionM015x07_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 41;
$App.NAB.PageID = "SelectionM015x07";
$scope.Pager80_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager80_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea77_change = function() {localStorage.setItem("M015x007",$App.M015x007);};
$scope.PushButton201_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea78_change = function() {localStorage.setItem("M015x007a",$App.M015x007a);};
$scope.PushButton202_click = function() {$scope.GotoPage( "Base" );};
});
NeoApp.controller("SelectionM015x08_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 42;
$App.NAB.PageID = "SelectionM015x08";
$scope.Pager81_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager81_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea79_change = function() {localStorage.setItem("M015x008",$App.M015x008);};
$scope.PushButton203_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea80_change = function() {localStorage.setItem("M015x008a",$App.M015x008a);};
$scope.PushButton204_click = function() {$scope.GotoPage( "Base" );};
});
NeoApp.controller("SelectionM015x09_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 43;
$App.NAB.PageID = "SelectionM015x09";
$scope.Pager76_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager76_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea69_change = function() {localStorage.setItem("M009x001",$App.M009x001);};
$scope.PushButton193_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea70_change = function() {localStorage.setItem("M009x001a",$App.M009x001a);};
$scope.PushButton194_click = function() {$scope.GotoPage( "Base" );};
});
NeoApp.controller("SelectionM009x01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 44;
$App.NAB.PageID = "SelectionM009x01";
$scope.Pager68_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager68_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea51_change = function() {localStorage.setItem("M009x001",$App.M009x001);};
$scope.PushButton172_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea54_change = function() {localStorage.setItem("M009x001a",$App.M009x001a);};
$scope.PushButton173_click = function() {$scope.GotoPage( "Base" );};
});
NeoApp.controller("SelectionM009x02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 45;
$App.NAB.PageID = "SelectionM009x02";
$scope.Pager69_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager69_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea55_change = function() {localStorage.setItem("M009x002q01",$App.M009x002q01);};
$scope.PushButton174_click = function() {$scope.GotoPage( "Main" );};
$scope.PushButton175_click = function() {$scope.GotoPage( "Base" );};
$scope.TextArea57_change = function() {localStorage.setItem("M009x002a01",$App.M009x002a01);};
$scope.TextArea58_change = function() {localStorage.setItem("M009x002a02",$App.M009x002a02);};
$scope.TextArea59_change = function() {localStorage.setItem("M009x002q02",$App.M009x002q02);};
});
NeoApp.controller("SelectionM009x03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 46;
$App.NAB.PageID = "SelectionM009x03";
$scope.Pager71_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager71_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea56_change = function() {localStorage.setItem("M009x002q03",$App.M009x002q03);};
$scope.PushButton176_click = function() {$scope.GotoPage( "Main" );};
$scope.PushButton177_click = function() {$scope.GotoPage( "Base" );};
$scope.TextArea60_change = function() {localStorage.setItem("M009x002a03",$App.M009x002a03);};
$scope.TextArea61_change = function() {localStorage.setItem("M009x002a04",$App.M009x002a04);};
$scope.TextArea62_change = function() {localStorage.setItem("M009x002q04",$App.M009x002q04);};
});
NeoApp.controller("SelectionM006x01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 47;
$App.NAB.PageID = "SelectionM006x01";
$scope.Pager27_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager27_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea10_change = function() {localStorage.setItem("M006x001",$App.M006x001);
localStorage.setItem("M006x001a",$App.M006x001a);};
$scope.PushButton72_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea48_change = function() {localStorage.setItem("M006x001a",$App.M006x001a);};
$scope.PushButton125_click = function() {$scope.GotoPage( "Base" );};
});
NeoApp.controller("SelectionM007x01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 48;
$App.NAB.PageID = "SelectionM007x01";
$scope.Pager67_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager67_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea49_change = function() {localStorage.setItem("M007x001",$App.M007x001);};
$scope.TextArea50_change = function() {localStorage.setItem("M007x001a",$App.M007x001a);};
$scope.PushButton126_click = function() {$scope.GotoPage( "Base" );};
$scope.PushButton127_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM008x01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 49;
$App.NAB.PageID = "SelectionM008x01";
$scope.Pager70_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager70_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea52_change = function() {localStorage.setItem("M008x001",$App.M008x001);};
$scope.TextArea53_change = function() {localStorage.setItem("M008x001a",$App.M008x001a);};
$scope.PushButton128_click = function() {$scope.GotoPage( "Base" );};
$scope.PushButton129_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM005x01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 50;
$App.NAB.PageID = "SelectionM005x01";
$scope.Pager54_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager54_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea36_change = function() {localStorage.setItem("M005x001",$App.M005x001);};
$scope.TextArea47_change = function() {localStorage.setItem("M005x001a",$App.M005x001a);};
$scope.PushButton113_click = function() {$scope.GotoPage( "Base" );};
$scope.PushButton130_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM005x02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 51;
$App.NAB.PageID = "SelectionM005x02";
$scope.Pager55_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager55_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea37_change = function() {localStorage.setItem("M005x002",$App.M005x002);};
$scope.PushButton114_click = function() {$scope.GotoPage( "Base" );};
$scope.PushButton131_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM005x03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 52;
$App.NAB.PageID = "SelectionM005x03";
$scope.Pager56_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager56_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea38_change = function() {localStorage.setItem("M005x003",$App.M005x003);};
$scope.PushButton115_click = function() {$scope.GotoPage( "Base" );};
$scope.PushButton132_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM005x04_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 53;
$App.NAB.PageID = "SelectionM005x04";
$scope.Pager57_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager57_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea39_change = function() {localStorage.setItem("M005x004",$App.M005x004);};
$scope.PushButton116_click = function() {$scope.GotoPage( "Base" );};
$scope.PushButton133_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM005x05_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 54;
$App.NAB.PageID = "SelectionM005x05";
$scope.Pager58_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager58_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea40_change = function() {localStorage.setItem("M005x005",$App.M005x005);};
$scope.PushButton117_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM005x06_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 55;
$App.NAB.PageID = "SelectionM005x06";
$scope.Pager59_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager59_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea41_change = function() {localStorage.setItem("M005x006",$App.M005x006);};
$scope.PushButton118_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM005x07_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 56;
$App.NAB.PageID = "SelectionM005x07";
$scope.Pager60_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager60_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea42_change = function() {localStorage.setItem("M005x007",$App.M005x007);};
$scope.PushButton119_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM005x08_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 57;
$App.NAB.PageID = "SelectionM005x08";
$scope.Pager61_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager61_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea43_change = function() {localStorage.setItem("M005x008",$App.M005x008);};
$scope.PushButton120_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM004x01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 58;
$App.NAB.PageID = "SelectionM004x01";
$scope.Pager45_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager45_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea28_change = function() {localStorage.setItem("M004x001",$App.M004x001);};
$scope.PushButton96_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea8_change = function() {localStorage.setItem("M004x001a",$App.M004x001a);};
});
NeoApp.controller("SelectionM004x02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 59;
$App.NAB.PageID = "SelectionM004x02";
$scope.Pager46_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager46_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea29_change = function() {localStorage.setItem("M004x002",$App.M004x002);};
$scope.PushButton97_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM004x03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 60;
$App.NAB.PageID = "SelectionM004x03";
$scope.Pager47_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager47_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea30_change = function() {localStorage.setItem("M004x003",$App.M004x003);};
$scope.PushButton98_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM004x04_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 61;
$App.NAB.PageID = "SelectionM004x04";
$scope.Pager48_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager48_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea31_change = function() {localStorage.setItem("M004x004",$App.M004x004);};
$scope.PushButton99_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM004x05_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 62;
$App.NAB.PageID = "SelectionM004x05";
$scope.Pager49_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager49_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea32_change = function() {localStorage.setItem("M004x005",$App.M004x005);};
$scope.PushButton100_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM004x06_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 63;
$App.NAB.PageID = "SelectionM004x06";
$scope.Pager50_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager50_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea33_change = function() {localStorage.setItem("M004x006",$App.M004x006);};
$scope.PushButton101_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM004x07_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 64;
$App.NAB.PageID = "SelectionM004x07";
$scope.Pager51_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager51_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea34_change = function() {localStorage.setItem("M004x007",$App.M004x007);};
$scope.PushButton102_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM004x08_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 65;
$App.NAB.PageID = "SelectionM004x08";
$scope.Pager52_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager52_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea35_change = function() {localStorage.setItem("M004x008",$App.M004x008);};
$scope.PushButton103_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM002x01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 66;
$App.NAB.PageID = "SelectionM002x01";
$scope.Pager4_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager4_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea3_change = function() {localStorage.setItem("M002x001",$App.M002x001);};
$scope.TextArea44_change = function() {localStorage.setItem("M002x001a",$App.M002x001a);};
$scope.PushButton27_click = function() {$scope.GotoPage( "Base" );};
$scope.PushButton134_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM002x02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 67;
$App.NAB.PageID = "SelectionM002x02";
$scope.Pager5_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager5_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea4_change = function() {localStorage.setItem("M002x002",$App.M002x002);};
$scope.PushButton21_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM002x03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 68;
$App.NAB.PageID = "SelectionM002x03";
$scope.Pager28_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager28_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea17_change = function() {localStorage.setItem("M002x003",$App.M002x003);};
$scope.PushButton22_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM002x04_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 69;
$App.NAB.PageID = "SelectionM002x04";
$scope.Pager29_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager29_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea18_change = function() {localStorage.setItem("M002x004",$App.M002x004);};
$scope.PushButton23_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM002x05_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 70;
$App.NAB.PageID = "SelectionM002x05";
$scope.Pager30_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager30_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea19_change = function() {localStorage.setItem("M002x005",$App.M002x005);};
$scope.PushButton73_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM002x06_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 71;
$App.NAB.PageID = "SelectionM002x06";
$scope.Pager31_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager31_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea20_change = function() {localStorage.setItem("M002x006",$App.M002x006);};
$scope.PushButton74_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM002x07_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 72;
$App.NAB.PageID = "SelectionM002x07";
$scope.Pager32_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager32_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea21_change = function() {localStorage.setItem("M002x007",$App.M002x007);};
$scope.PushButton75_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM002x08_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 73;
$App.NAB.PageID = "SelectionM002x08";
$scope.Pager33_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager33_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea22_change = function() {localStorage.setItem("M002x008",$App.M002x008);};
$scope.PushButton76_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM003x01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 74;
$App.NAB.PageID = "SelectionM003x01";
$scope.Pager6_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager6_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea5_change = function() {localStorage.setItem("M003x001",$App.M003x001);};
$scope.TextArea46_change = function() {localStorage.setItem("M003x001a",$App.M003x001a);};
$scope.PushButton28_click = function() {$scope.GotoPage( "Base" );};
$scope.PushButton135_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM003x02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 75;
$App.NAB.PageID = "SelectionM003x02";
$scope.Pager11_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager11_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea6_change = function() {localStorage.setItem("M003x002",$App.M003x002);};
$scope.Pager12_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager12_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton24_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM003x03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 76;
$App.NAB.PageID = "SelectionM003x03";
$scope.Pager13_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager13_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea11_change = function() {localStorage.setItem("M003x003",$App.M003x003);};
$scope.Pager14_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager14_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton25_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM003x04_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 77;
$App.NAB.PageID = "SelectionM003x04";
$scope.Pager15_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager15_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea12_change = function() {localStorage.setItem("M003x004",$App.M003x004);};
$scope.Pager16_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager16_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton26_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM003x05_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 78;
$App.NAB.PageID = "SelectionM003x05";
$scope.Pager17_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager17_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea13_change = function() {localStorage.setItem("M003x005",$App.M003x005);};
$scope.Pager18_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager18_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton64_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM003x06_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 79;
$App.NAB.PageID = "SelectionM003x06";
$scope.Pager19_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager19_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea14_change = function() {localStorage.setItem("M003x006",$App.M003x006);};
$scope.Pager20_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager20_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton65_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM003x07_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 80;
$App.NAB.PageID = "SelectionM003x07";
$scope.Pager21_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager21_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea15_change = function() {localStorage.setItem("M003x007",$App.M003x007);};
$scope.Pager22_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager22_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton66_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM003x08_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 81;
$App.NAB.PageID = "SelectionM003x08";
$scope.Pager23_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager23_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea16_change = function() {localStorage.setItem("M003x008",$App.M003x008);};
$scope.Pager24_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager24_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton67_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM001x01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 82;
$App.NAB.PageID = "SelectionM001x01";
$scope.Pager2_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager2_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea1_change = function() {localStorage.setItem("M001x001",$App.M001x001);};
$scope.Pager3_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager3_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea45_change = function() {localStorage.setItem("M001x001a",$App.M001x001a);};
$scope.PushButton33_click = function() {$scope.GotoPage( "Base" );};
$scope.PushButton136_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM001x02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 83;
$App.NAB.PageID = "SelectionM001x02";
$scope.Pager9_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager9_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea2_change = function() {localStorage.setItem("M001x002",$App.M001x002);};
$scope.Pager10_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager10_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton15_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM001x03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 84;
$App.NAB.PageID = "SelectionM001x03";
$scope.Pager25_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager25_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea9_change = function() {localStorage.setItem("M001x003",$App.M001x003);};
$scope.Pager26_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager26_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton16_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM001x04_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 85;
$App.NAB.PageID = "SelectionM001x04";
$scope.Pager34_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager34_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea23_change = function() {localStorage.setItem("M001x004",$App.M001x004);};
$scope.Pager35_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager35_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton82_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM001x05_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 86;
$App.NAB.PageID = "SelectionM001x05";
$scope.Pager36_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager36_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea24_change = function() {localStorage.setItem("M001x005",$App.M001x005);};
$scope.Pager37_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager37_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton83_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM001x06_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 87;
$App.NAB.PageID = "SelectionM001x06";
$scope.Pager38_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager38_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea25_change = function() {localStorage.setItem("M001x006",$App.M001x006);};
$scope.Pager39_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager39_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton84_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM001x07_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 88;
$App.NAB.PageID = "SelectionM001x07";
$scope.Pager40_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager40_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea26_change = function() {localStorage.setItem("M001x007",$App.M001x007);};
$scope.Pager41_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager41_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton85_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("SelectionM001x08_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 89;
$App.NAB.PageID = "SelectionM001x08";
$scope.Pager42_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager42_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea27_change = function() {localStorage.setItem("M001x008",$App.M001x008);};
$scope.Pager43_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager43_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton86_click = function() {$scope.GotoPage( "Main" );};
});
NeoApp.controller("BounceMain_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 90;
$App.NAB.PageID = "BounceMain";
});
NeoApp.controller("CustomWork_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 91;
$App.NAB.PageID = "CustomWork";
$scope.TextInput17_change = function() {localStorage.setItem("Work02",$App.v2w);};
$scope.TextInput20_change = function() {localStorage.setItem("Work03",$App.v3w);};
$scope.TextInput21_change = function() {localStorage.setItem("Work04",$App.v4w);};
$scope.TextInput24_change = function() {localStorage.setItem("Work05",$App.v5w);};
$scope.TextInput25_change = function() {localStorage.setItem("Work06",$App.v6w);};
$scope.TextInput28_change = function() {localStorage.setItem("Work01",$App.v1w);};
$scope.TextInput29_change = function() {localStorage.setItem("Work07",$App.v7w);};
$scope.TextInput30_change = function() {localStorage.setItem("Work08",$App.v8w);};
$scope.PushButton7_click = function() {$scope.GotoPage( "main01" );};
$scope.TextInput11_change = function() {localStorage.setItem("Work10",$App.v10w);};
$scope.TextInput12_change = function() {localStorage.setItem("Work11",$App.v11w);};
$scope.TextInput13_change = function() {localStorage.setItem("Work12",$App.v12w);};
$scope.TextInput14_change = function() {localStorage.setItem("Work13",$App.v13w);};
$scope.TextInput15_change = function() {localStorage.setItem("Work14",$App.v14w);};
$scope.TextInput16_change = function() {localStorage.setItem("Work09",$App.v9w);};
$scope.TextInput18_change = function() {localStorage.setItem("Work15",$App.v15w);};
$scope.TextInput19_change = function() {localStorage.setItem("Work16",$App.v16w);};
$scope.TextInput22_change = function() {localStorage.setItem("Work17",$App.v17w);};
$scope.TextInput23_change = function() {localStorage.setItem("Work18",$App.v18w);};
});
NeoApp.controller("CustomTime_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 92;
$App.NAB.PageID = "CustomTime";
$scope.TextInput33_change = function() {localStorage.setItem("Time01",$App.v1t);};
$scope.TextInput34_change = function() {localStorage.setItem("Time02",$App.v2t);};
$scope.TextInput35_change = function() {localStorage.setItem("Time03",$App.v3t);};
$scope.TextInput36_change = function() {localStorage.setItem("Time04",$App.v4t);};
$scope.TextInput37_change = function() {localStorage.setItem("Time05",$App.v5t);};
$scope.TextInput38_change = function() {localStorage.setItem("Time06",$App.v6t);};
$scope.TextInput39_change = function() {localStorage.setItem("Time07",$App.v7t);};
$scope.TextInput40_change = function() {localStorage.setItem("Time08",$App.v8t);};
$scope.PushButton8_click = function() {$scope.GotoPage( "main01" );};
$scope.TextInput1_change = function() {localStorage.setItem("Time09",$App.v9t);};
$scope.TextInput2_change = function() {localStorage.setItem("Time10",$App.v10t);};
$scope.TextInput3_change = function() {localStorage.setItem("Time11",$App.v11t);};
$scope.TextInput4_change = function() {localStorage.setItem("Time12",$App.v12t);};
$scope.TextInput5_change = function() {localStorage.setItem("Time13",$App.v13t);};
$scope.TextInput6_change = function() {localStorage.setItem("Time14",$App.v14t);};
$scope.TextInput7_change = function() {localStorage.setItem("Time15",$App.v15t);};
$scope.TextInput8_change = function() {localStorage.setItem("Time16",$App.v16t);};
$scope.TextInput9_change = function() {localStorage.setItem("Time17",$App.v17t);};
$scope.TextInput10_change = function() {localStorage.setItem("Time18",$App.v18t);};
});
NeoApp.controller("CustomAppDev_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 93;
$App.NAB.PageID = "CustomAppDev";
$scope.TextInput55_change = function() {localStorage.setItem("AppDev01",$App.v1a);};
$scope.TextInput56_change = function() {localStorage.setItem("AppDev02",$App.v2a);};
$scope.TextInput57_change = function() {localStorage.setItem("AppDev03",$App.v3a);};
$scope.TextInput58_change = function() {localStorage.setItem("AppDev04",$App.v4a);};
$scope.TextInput59_change = function() {localStorage.setItem("AppDev05",$App.v5a);};
$scope.TextInput60_change = function() {localStorage.setItem("AppDev06",$App.v6a);};
$scope.TextInput61_change = function() {localStorage.setItem("AppDev07",$App.v7a);};
$scope.TextInput62_change = function() {localStorage.setItem("AppDev08",$App.v8a);};
$scope.PushButton13_click = function() {$scope.GotoPage( "main01" );};
$scope.TextInput63_change = function() {localStorage.setItem("Time09",$App.v9t);};
$scope.TextInput64_change = function() {localStorage.setItem("Time10",$App.v10t);};
$scope.TextInput65_change = function() {localStorage.setItem("Time11",$App.v11t);};
$scope.TextInput66_change = function() {localStorage.setItem("Time12",$App.v12t);};
$scope.TextInput67_change = function() {localStorage.setItem("Time13",$App.v13t);};
$scope.TextInput68_change = function() {localStorage.setItem("Time14",$App.v14t);};
$scope.TextInput69_change = function() {localStorage.setItem("Time15",$App.v15t);};
$scope.TextInput70_change = function() {localStorage.setItem("Time16",$App.v16t);};
$scope.TextInput71_change = function() {localStorage.setItem("Time17",$App.v17t);};
$scope.TextInput72_change = function() {localStorage.setItem("Time18",$App.v18t);};
});
NeoApp.controller("SelectionM014_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 94;
$App.NAB.PageID = "SelectionM014";
$scope.PushButton49_click = function() {$scope.GotoPage( "Main" );};
$scope.TextArea7_change = function() {localStorage.setItem("M014x001",$App.M014x001);};
});
NeoApp.controller("NewDialog_Ctrl", function($scope,$rootScope,$modalInstance,$filter,$window) {
 $scope.CloseDialog = function() {
  $modalInstance.close();
 };
});
function neoGSheetsLoad(gsheets,theArray,sqlquery,subroutine){$App[theArray]=new Array();sheetrock({url:gsheets,query:sqlquery,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoad error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{for(n=0;n<response.rows.length;n++){$App[theArray][n]=new Object();for(i=0;i<response.rows[n].cellsArray.length;i++){etiqueta=response.rows[n].labels[i];$App[theArray][n][etiqueta]=response.rows[n].cellsArray[i];}}if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadColumn(gsheets,theArray,columnLetter,subroutine){$App[theArray]=new Array();columnLetter=columnLetter.toUpperCase();sheetrock({url:gsheets,query:"select "+columnLetter,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadColumn error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{for(n=1;n<response.rows.length;n++){$App[theArray][n-1]=response.rows[n].cellsArray[0];}if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadCell(gsheets,myVar,columnLetter,rowNumber,subroutine){rowNumber--;columnLetter=columnLetter.toUpperCase();sheetrock({url:gsheets,query:"select "+columnLetter,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadCell error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{$App[myVar]=response.rows[rowNumber].cellsArray[0];if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadAsTable(objId,gsheets,sqlquery,subroutine){$('#'+objId).html('<table id="'+objId+'neoGSheets" class="table table-striped"></table>');$('#'+objId+'neoGSheets').sheetrock({url:gsheets,fetchSize:0,reset:true,query:sqlquery,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadAsTable error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else if(subroutine){subroutine(error,options,response);}}});};function neoGSheetsLoadByName(gsheets,theArray,fieldPrefix,sqlquery,subroutine){console.log("neoGSheetsLoadByName - ");sheetrock({url:gsheets,query:"select *",fetchSize:1,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadByName error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{columnIDStr1="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,";columnIDStr2="AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,AW,AX,AY,AZ,";columnIDStr3="BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BY,BZ";columnIDStr=columnIDStr1+columnIDStr2+columnIDStr3;columnIDArray=columnIDStr.split(",");for(i=0;i<response.rows[0].cellsArray.length;i++){columnID=columnIDArray[i];fieldName=response.rows[0].labels[i];console.log("neoGSheetsLoadByName column for field "+fieldName+" is "+columnID);var regexstring=fieldPrefix+fieldName;var regexp=new RegExp(regexstring,"g");sqlquery=sqlquery.replace(regexp,columnID);}console.log("neoGSheetsLoadByName sqlquery: "+sqlquery);neoGSheetsLoad(gsheets,theArray,sqlquery,subroutine);}}});};
