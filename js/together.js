function dealQueue(urls, max, callback) {
  const urlCount = urls.length;
  const requestsQueue = [];
  const results = [];
  let i = 0;
  const handleRequest = (url) => {
    const req = getJson(url).then(res => {
      console.log('当前并发： '+requestsQueue);
      const len = results.push(res);
      if (len < urlCount && i + 1 < urlCount) {
        requestsQueue.shift();
        handleRequest(urls[++i])
      } else if (len === urlCount) {
        callback(results)
      }
    }).catch(e => {
      results.push(e)
    });
    if (requestsQueue.push(req) < max) {
      handleRequest(urls[++i])
    }
  };
  handleRequest(urls[i])
}


const getJson = function (url) {
  return new Promise(resolve => {
    console.log(`start request ${url}`);
    const timeout = parseInt(Math.random() * 10);
    setTimeout(() => {
      console.log(`end request ${url}`);
      resolve(url)
    }, timeout*1000)
  })
};

const urls = ['http://qq.com/getJson/1','http://qq.com/getJson/2','http://qq.com/getJson/3','http://qq.com/getJson/4','http://qq.com/getJson/5','http://qq.com/getJson/6','http://qq.com/getJson/7'];
const max = 4;
const callback = () => {
  console.log('finish callback');
};


dealQueue(urls, max, callback);