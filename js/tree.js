const arr =[{id: '1',
menu_name: '设置',
menu_url: 'setting',
parent_id: 0
}, {
id: '1-1',
menu_name: '权限设置',
menu_url: 'setting.permission',
parent_id: '1'
}, {
id: '1-1-1',
menu_name: '用户管理列表',
menu_url: 'setting.permission.user_list',
parent_id: '1-1'
}, {
id: '1-1-2',
menu_name: '用户管理新增',
menu_url: 'setting.permission.user_add',
parent_id: '1-1'
}, {
id: '1-1-3',
menu_name: '角色管理列表',
menu_url: 'setting.permission.role_list',
parent_id: '1-1'
}, {
id: '1-1-4',
menu_name: '角色管理新增',
menu_url: 'setting.permission.role_add',
parent_id: '1-1'
}, {
id: '1-2',
menu_name: '菜单设置',
menu_url: 'setting.menu',
parent_id: '1'
}, {
id: '1-2-1',
menu_name: '菜单列表',
menu_url: 'setting.menu.menu_list',
parent_id: '1-2'
}, {
id: '1-2-2',
menu_name: '菜单添加',
menu_url: 'setting.menu.menu_add',
parent_id: '1-2'
}, {
id: '2',
menu_name: '订单',
menu_url: 'order',
parent_id: 0
}, {
id: '2-1',
menu_name: '报单审核',
menu_url: 'order.orderreview',
parent_id: '2'
}, {
id: '2-2',
menu_name: '退款管理',
menu_url: 'order.refundmanagement',
parent_id: '2'
}, {
id: '2-3',
menu_name: '实物订单',
menu_url: 'order.realorder',
parent_id: '2'
}, {
id: '2-1-1',
menu_name: '全部报单',
menu_url: 'order.orderreview.all',
parent_id: '2-1'
}, {
id: '2-2-1',
menu_name: '所有记录',
menu_url: 'order.refundmanagement.all',
parent_id: '2-2'
}, {
id: '2-2-2',
menu_name: '待处理',
menu_url: 'order.refundmanagement.wait',
parent_id: '2-2'
}, {
id: '2-2-3',
menu_name: '退款原因',
menu_url: 'order.refundmanagement.result',
parent_id: '2-2'
}, {
id: '2-3-1',
menu_name: '实物订单管理',
menu_url: 'order.realorder.list',
parent_id: '2-3'
}, {
id: '3',
menu_name: '商品',
menu_url: 'commodity',
parent_id: 0
}, {
id: '3-1',
menu_name: '分类管理',
menu_url: 'commodity.classifieldmanagement',
parent_id: '3'
}, {
id: '3-1-1',
menu_name: '管理',
menu_url: 'commodity.classifieldmanagement.management',
parent_id: '3-1'
}, {
id: '3-1-2',
menu_name: '编辑或新增',
menu_url: 'commodity.classifieldmanagement.edit',
parent_id: '3-1'
}, {
id: '3-2',
menu_name: '品牌管理',
menu_url: 'commodity.brandmanagement',
parent_id: '3'
}, {
id: '3-2-1',
menu_name: '管理',
menu_url: 'commodity.brandmanagement.management',
parent_id: '3-2'
}, {
id: '3-2-2',
menu_name: '编辑或新增',
menu_url: 'commodity.brandmanagement.edit',
parent_id: '3-2'
}, {
id: '3-3',
menu_name: '商品管理',
menu_url: 'commodity.commoditymanagement',
parent_id: '3'
}, {
id: '3-3-1',
menu_name: '管理',
menu_url: 'commodity.commoditymanagement.management',
parent_id: '3-3'
}, {
id: '3-3-2',
menu_name: '编辑或新增',
menu_url: 'commodity.commoditymanagement.edit',
parent_id: '3-3'
}, {
id: '3-4',
menu_name: '类型管理',
menu_url: 'commodity.typeManagement',
parent_id: '3'
}, {
id: '3-4-1',
menu_name: '管理',
menu_url: 'commodity.typeManagement.management',
parent_id: '3-4'
}, {
id: '3-4-2',
menu_name: '编辑或新增',
menu_url: 'commodity.typeManagement.edit',
parent_id: '3-4'
}];

function buildTree(list){
    let temp = {};
    let tree = {};
    for(let i in list){
        temp[list[i].id] = list[i];
    }
    for(let i in temp){
        if(temp[i].parent_id) {
            if(!temp[temp[i].parent_id].children) {
                temp[temp[i].parent_id].children = new Object();
            }
            temp[temp[i].parent_id].children[temp[i].id] = temp[i];
        } else {
            tree[temp[i].id] =  temp[i];
        }
    }
    return tree;
}

let iceman =buildTree(arr)
console.log(iceman)

