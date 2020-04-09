let util = {}
// 添加时间格式化
util.Format = function (date) {
  // const val = JSON.parse(date)
  const dt = new Date(date)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

  
//判断是否为数字   
util.isRealNum = function (val){
  // 先判定是否为number
  if(typeof val !== 'number'){
  return false;
  }
  if(!isNaN(val)){
      return true;
  }else{
      return false;
  }
}

// 一维数组转树结构
util.toTree = function(list, parent) {
  var tree = []
  for(var node of list) {
    if(node.pId == parent) {
      var children = util.toTree(list, node.id) 
      if(children.length) {
          node.children = children
      }
      tree.push(node)
    }
  }
  return tree
}

// 树结构转一维数组
util.toArr = function(data) {
  var res = []
  data.forEach(item => {
    let loop = data => {
      res.push({
        id: data.id,
        pId: data.pId,
        area_name: data.area_name,
        area_level: data.area_level,
        water_demind: data.water_demind,
        water_user: data.water_user,
        err_amont: data.err_amont,
        err_rate: data.err_rate,
        res_balance: data.res_balance
      })
      let child = data.children
      if(child) {
        for(let i = 0; i< child.length; i++) {
          loop(child[i])
        }
      }      
    }
    loop(item)
  })
  return res
}






//数组去重
 util.reArrTheSame = function (arr) {
  return [...new Set(arr)]
}




export default util