<<<<<<< HEAD
=======
/* gameRestartの動作　止まる前に動かすので、右端のリールだけ２倍速くなる */
/* viewMedalFlowの完成 */
>>>>>>> origin/master
var countLeft= Math.floor(Math.random()*15);
var countCenter= Math.floor(Math.random()*15);
var countRight= Math.floor(Math.random()*15);

var imgLeft= new Array("src/bell.png","src/wm.png","src/7.png","src/cherry.png","src/bar.png","src/wm.png","src/rep.png","src/7.png","src/cherry.png","src/bar.png","src/bell.png","src/rep.png","src/7.png","src/cherry.png","src/bar.png");
var imgCenter= new Array("src/bar.png","src/cherry.png","src/bell.png","src/wm.png","src/cherry.png","src/bar.png","src/rep.png","src/bell.png","src/cherry.png","src/wm.png","src/7.png","src/rep.png","src/cherry.png","src/bell.png","src/wm.png");
var imgRight= new Array("src/wm.png","src/cherry.png","src/wm.png","src/bell.png","src/7.png","src/bar.png","src/bell.png","src/rep.png","src/cherry.png","src/wm.png","src/bell.png","src/rep.png","src/cherry.png","src/wm.png","src/bell.png");	

var flgl= 0;
var flgc= 0;
var flgr= 0;

var checkLT=0;	var checkCT=0;	var checkRT=0;
var checkLC=0;	var checkCC=0;	var checkRC=0;
var checkLB=0;	var checkCB=0;	var checkRB=0;

var medalCount= 100;
var payoutCount=0;
<<<<<<< HEAD
var totalPayoutCount=0;
=======
>>>>>>> origin/master

function changeLeftImage(){
	if(flgl !=0) return;
	document.getElementById("leftBottom").src = imgLeft[countLeft];
	checkLB=countLeft;
	leftDown();
	document.getElementById("left").src=imgLeft[countLeft];
	checkLC=countLeft;
	leftDown();
	document.getElementById("leftTop").src=imgLeft[countLeft];
	checkLT=countLeft;
	leftUp();
	setTimeout("changeLeftImage()",120);
}

function changeCenterImage(){
	if(flgc !=0) return;
	document.getElementById("centerBottom").src = imgCenter[countCenter];
	checkCB=countCenter;
	centerUp();
	document.getElementById("center").src=imgCenter[countCenter];
	checkCC=countCenter;
	centerUp();
	document.getElementById("centerTop").src=imgCenter[countCenter];
	checkCT=countCenter;
	centerDown();
	setTimeout("changeCenterImage()",120);
}

function changeRightImage(){
	if(flgr !=0) return;
	document.getElementById("rightBottom").src= imgRight[countRight];
	checkRB=countRight;
	rightUp();
	document.getElementById("right").src= imgRight[countRight];
	checkRC=countRight;
	rightUp();
	document.getElementById("rightTop").src= imgRight[countRight];
	checkRT=countRight;
	rightDown();
	setTimeout("changeRightImage()",120);
}

function leftUp(){
	if(countLeft==14){
		countLeft=0;
	}
	else{
		countLeft++;
	}
}

function leftDown(){
	if(countLeft==0){
		countLeft=14;
	}
	else{
		countLeft--;
	}
}

function centerUp(){
	if(countCenter==14){
		countCenter=0;
	}
	else{
		countCenter++;
	}
}

function centerDown(){
	if(countCenter==0){
		countCenter=14;
	}
	else{
		countCenter--;
	}
}

function rightUp(){
	if(countRight==14){
		countRight=0;
	}
	else{
		countRight++;
	}
}

function rightDown(){
	if(countRight==0){
		countRight=14;
	}
	else{
		countRight--;
	}
}

function gameStart(){	
	flgr=0;
	flgc=0;
	flgl=0;
	changeRightImage();
	changeCenterImage();
	changeLeftImage();
	medalCount = medalCount-3;
	medalView();		//メダル数表示
}

function gameRestart(){	
<<<<<<< HEAD
	setTimeout("gameStart()",700);
=======
	flgl=0;
	flgc=0;
	flgr=0;
	changeLeftImage();
	changeCenterImage();
	changeRightImage();
	medalView();		//メダル数表示
>>>>>>> origin/master
}

function medalView(){
	document.getElementById("medals").textContent= medalCount;
}

function payoutView(){
	document.getElementById("payouts").textContent= payoutCount;
}
<<<<<<< HEAD
function totalPayoutView(){
	document.getElementById("totalPayouts").textContent= totalPayoutCount;
}
=======
>>>>>>> origin/master

function lineChecker(){
	if(flgr==1 && flgl==1 && flgc==1){
		LTChecker();
		LCChecker();
		LBChecker();
		console.log(medalCount);
<<<<<<< HEAD
	}
}
function medalMove(){
	if(payoutCount==0) return;
		payoutCount--;
		payoutView();
		medalCount++;
		medalView();
		totalPayoutCount++;
		setTimeout("medalMove()",150);		
}

function medalFlowView(){			
	payoutView();
	setTimeout("medalMove()",1500);
}
=======
		console.log(payoutCount);
	}
}
>>>>>>> origin/master

function LTChecker(){
	switch(checkLT){			//左下からの揃い判定
		case 2:
		case 7:
		case 12:
			if((checkCT==10 && checkRT==4) || (checkCC==10 && checkRB==4)){
				payoutCount=300;
<<<<<<< HEAD
				medalFlowView();			} 
=======
				medalCount+=300;
				medalView();
				payoutView();
			} 
>>>>>>> origin/master
			else{
				payoutCount=0;
				payoutView();
			}
			break;
		case 4:
		case 9:
		case 14:
			if(((checkCT==0 || checkCT==5) && checkRT==5) || ((checkCC==0 || checkCC==5) && checkRB==5)){
				payoutCount=100;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=100;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount=0;
				payoutView();
			}
			break;
		case 0:
		case 10:
			if(((checkCT==2 || checkCT==7 || checkCT==13) && (checkRT==3 || checkRT==6 || checkRT==10 || checkRT==14)) || ((checkCC==2 || checkCC==7 || checkCC==13) && (checkRB==3 || checkRB==6 || checkRB==10 || checkRB==14))){
				payoutCount=15;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=15;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount=0;
				payoutView();
			}
			break;
		case 1:
		case 5:
			if(((checkCT==3 || checkCT==9 || checkCT==14) && (checkRT==0 || checkRT==2 || checkRT==9 || checkRT==13)) || ((checkCC==3 || checkCC==9 || checkCC==14) && (checkRB==0 || checkRB==2 || checkRB==9 || checkRB==13))){
				payoutCount=15;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=15;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount=0;
				payoutView();
			}
			break;
		case 3:
		case 8:
		case 13:
			if(((checkCT==1 || checkCT==4 || checkCT==8 || checkCT==12) && (checkRT==1 || checkRT==8 || checkRT==12)) || ((checkCC==1 || checkCC==4 || checkCC==8 || checkCC==12) && (checkRB==1 || checkRB==8 || checkRB==12))){
				payoutCount=8;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=8;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount=0;
				payoutView();
			}
			break;
		case 6:
		case 11:
			if(((checkCT==6 || checkCT==11) && (checkRT==7 || checkRT==11)) || ((checkCC==6 || checkCC==11) && (checkRB==7 || checkRB==11))){
				gameRestart();
			}
			break;
	}
}

function LCChecker(){
	switch(checkLC){			//左中からの揃い判定
		case 2:
		case 7:
		case 12:
			if((checkCC==10 || checkCC==4) && (checkRC==10 || checkRC==4)){
				payoutCount+=300;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=300;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount+=0;
				payoutView();
			}
			break;
		case 4:
		case 9:
		case 14:
			if((checkCC==0 || checkCC==5) && checkRC==5){
				payoutCount+=100;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=100;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount+=0;
				payoutView();
			}
			break;
		case 0:
		case 10:
			if((checkCC==2 || checkCC==7 || checkCC==13) && (checkRC==3 || checkRC==6 || checkRC==10 || checkRC==14)){
				payoutCount+=15;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=15;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount+=0;
				payoutView();
			}
			break;
		case 1:
		case 5:
			if((checkCC==3 || checkCC==9 || checkCC==14) && (checkRC==0 || checkRC==2 || checkRC==9 || checkRC==13)){
				payoutCount+=15;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=15;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount+=0;
				payoutView();
			}
			break;
		case 3:
		case 8:
		case 13:
			if((checkCC==1 || checkCC==4 || checkCC==8 || checkCC==12) && (checkRC==1 || checkRC==8 || checkRC==12)){
				payoutCount+=8;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=8;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount+=0;
				payoutView();
			}
			break;
		case 6:
		case 11:
			if((checkCC==6 || checkCC==11)&&(checkRC==7 || checkRC==11)){
				gameRestart();
			}
			break;
	}
}

function LBChecker(){
	switch(checkLB){			//左上からの揃い判定
		case 2:
		case 7:
		case 12:
			if((checkCB==10 && checkRB==4) || (checkCC==10 && checkRT==4)){
				payoutCount+=300;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=300;
				medalView();
				payoutView();
>>>>>>> origin/master
			} 
			else{
				payoutCount+=0;
				payoutView();
			}
			break;
		case 4:
		case 9:
		case 14:
			if(((checkCB==0 || checkCB==5) && checkRB==5) || ((checkCC==0 || checkCC==5) && checkRT==5)){
				payoutCount+=100;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=100;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount+=0;
				payoutView();
			}
			break;
		case 0:
		case 10:
			if(((checkCB==2 || checkCB==7 || checkCB==13) && (checkRB==3 || checkRB==6 || checkRB==10 || checkRB==14)) || ((checkCC==2 || checkCC==7 || checkCC==13) && (checkRT==3 || checkRT==6 || checkRT==10 || checkRT==14))){
				payoutCount+=15;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=15;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount+=0;
				payoutView();
			}
			break;
		case 1:
		case 5:
			if(((checkCB==3 || checkCB==9 || checkCB==14) && (checkRB==0 || checkRB==2 || checkRB==9 || checkRB==13)) || ((checkCC==3 || checkCC==9 || checkCC==14) && (checkRT==0 || checkRT==2 || checkRT==9 || checkRT==13))){
				payoutCount+=15;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=15;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount+=0;
				payoutView();
			}
			break;
		case 3:
		case 8:
		case 13:
			if(((checkCB==1 || checkCB==4 || checkCB==8 || checkCB==12) && (checkRB==1 || checkRB==8 || checkRB==12)) || ((checkCC==1 || checkCC==4 || checkCC==8 || checkCC==12) && (checkRT==1 || checkRT==8 || checkRT==12))){
				payoutCount+=8;
<<<<<<< HEAD
				medalFlowView();
=======
				medalCount+=8;
				medalView();
				payoutView();
>>>>>>> origin/master
			}
			else{
				payoutCount+=0;
				payoutView();
			}
			break;
		case 6:
		case 11:
			if(((checkCB==6 || checkCB==11) && (checkRB==7 || checkRB==11)) || ((checkCC==6 || checkCC==11) && (checkRT==7 || checkRT==11))){
				gameRestart();
			}
			break;
	}
<<<<<<< HEAD
=======
}

function viewMedalFlow(){			//PAYOUTからCREDITへメダルを移す payoutが0になるまでデクリメントし、creditをインクリメントする(settimeoutで繰り返す)

>>>>>>> origin/master
}