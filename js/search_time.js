
//获取某个元素最后出现位置
function getUpper(arr, key){
    var low = 0, high = arr.length - 1;
    var mid = Math.round((low + high) / 2);
    /*其实是一个递归迭代*/ 
    while(low <= high){
        
        if(arr[mid] <= key){
        	 //当要查找的值比中位数大于等于时，把查找的低位限制为mid+1
            low = mid + 1;
        }else{
        	 //当要找的值比 中位数小时，把查找的高位限制为mid-1 
            high = mid - 1;  
        }
        mid = Math.round((low + high) / 2);
               
    } 
	// 返回最后出现位置 
    return high; 
}

//获取某个元素第一次出现位置
function getLower(arr,key){ 
    var low = 0, high = arr.length - 1;
    var mid = Math.round((low + high) / 2);
    while(low <= high){      
        //当要找的值比 中位数小于等于时，把查找的高位限制为mid+1 
        if(arr[mid] >= key){
            high = mid -1;
        }else{
        	//当要找的值比 中位数大时，，把查找的低位限制为mid+1 
            low = mid + 1;
        }
        mid = Math.round((low + high) / 2);       
    }    
    //返回第一次出现位置 
    return low; 
} 
 
var arr = [0,1,1,2,2,2,2,4,4,4]; //测试数组 
var key = 2;
var higher = getUpper(arr,key);
var lower = getLower(arr,key);
console.log(higher-lower+1);