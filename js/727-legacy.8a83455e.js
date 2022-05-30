"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[727],{3727:function(s,e,t){t.r(e),t.d(e,{default:function(){return v}});var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"trade-container"},[t("h3",{staticClass:"title"},[s._v("填写并核对订单信息")]),t("div",{staticClass:"content"},[t("h5",{staticClass:"receive"},[s._v("收件人信息")]),s._l(s.addressInfo,(function(e,a){return t("div",{key:e.id,staticClass:"address clearFix"},[t("span",{staticClass:"username",class:{selected:1==e.isDefault}},[s._v(s._s(e.consignee))]),t("p",{on:{click:function(t){return s.changeDefault(e,s.addressInfo)}}},[t("span",{staticClass:"s1"},[s._v(s._s(e.fullAddress))]),t("span",{staticClass:"s2"},[s._v(s._s(e.phoneNum))]),t("span",{directives:[{name:"show",rawName:"v-show",value:1==e.isDefault,expression:"address.isDefault == 1"}],staticClass:"s3"},[s._v("默认地址")])])])})),t("div",{staticClass:"line"}),t("h5",{staticClass:"pay"},[s._v("支付方式")]),s._m(0),t("div",{staticClass:"line"}),t("h5",{staticClass:"pay"},[s._v("送货清单")]),s._m(1),t("div",{staticClass:"detail"},[t("h5",[s._v("商品清单")]),s._l(s.orderInfo.detailArrayList,(function(e,a){return t("ul",{key:e.skuId,staticClass:"list clearFix"},[t("li",[t("img",{staticStyle:{width:"100px"},attrs:{src:e.imgUrl,alt:""}})]),t("li",[t("p",[s._v(" "+s._s(e.skuName)+" ")]),t("h4",[s._v("7天无理由退货")])]),t("li",[t("h3",[s._v("￥"+s._s(e.orderPrice)+".00")])]),t("li",[s._v("X"+s._s(e.skuNum))]),t("li",[s._v("有货")])])}))],2),t("div",{staticClass:"bbs"},[t("h5",[s._v("买家留言：")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:s.msg,expression:"msg"}],staticClass:"remarks-cont",attrs:{placeholder:"建议留言前先与商家沟通确认"},domProps:{value:s.msg},on:{input:function(e){e.target.composing||(s.msg=e.target.value)}}})]),t("div",{staticClass:"line"}),s._m(2)],2),t("div",{staticClass:"money clearFix"},[t("ul",[t("li",[t("b",[t("i",[s._v(s._s(s.orderInfo.totalNum))]),s._v("件商品，总商品金额")]),t("span",[s._v("¥"+s._s(s.orderInfo.totalAmount)+".00")])]),s._m(3),s._m(4)])]),t("div",{staticClass:"trade"},[t("div",{staticClass:"price"},[s._v(" 应付金额:"),t("span",[s._v("¥"+s._s(s.orderInfo.totalAmount)+".00")])]),t("div",{staticClass:"receiveInfo"},[s._v(" 寄送至: "),t("span",[s._v(s._s(s.userDefaultAddress.fullAddress))]),s._v(" 收货人："),t("span",[s._v(s._s(s.userDefaultAddress.consignee))]),t("span",[s._v(s._s(s.userDefaultAddress.phoneNum))])])]),t("div",{staticClass:"sub clearFix"},[t("a",{staticClass:"subBtn",on:{click:s.submitOrder}},[s._v("提交订单")])])])},r=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"address clearFix"},[t("span",{staticClass:"username selected"},[s._v("在线支付")]),t("span",{staticClass:"username",staticStyle:{"margin-left":"5px"}},[s._v("货到付款")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"way"},[t("h5",[s._v("配送方式")]),t("div",{staticClass:"info clearFix"},[t("span",{staticClass:"s1"},[s._v("天天快递")]),t("p",[s._v("配送时间：预计8月10日（周三）09:00-15:00送达")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"bill"},[t("h5",[s._v("发票信息：")]),t("div",[s._v("普通发票（电子） 个人 明细")]),t("h5",[s._v("使用优惠/抵用")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("li",[t("b",[s._v("返现：")]),t("span",[s._v("0.00")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("li",[t("b",[s._v("运费：")]),t("span",[s._v("0.00")])])}],n=t(6198),i=t(3019),l=(t(5666),t(9826),t(1539),t(4747),t(3941)),d={name:"Trade",data:function(){return{msg:"",orderId:""}},mounted:function(){this.$store.dispatch("getUserAddress"),this.$store.dispatch("getOrderInfo")},computed:(0,i.Z)((0,i.Z)({},(0,l.rn)({addressInfo:function(s){return s.trade.address},orderInfo:function(s){return s.trade.orderInfo}})),{},{userDefaultAddress:function(){return this.addressInfo.find((function(s){return 1==s.isDefault}))||{}}}),methods:{changeDefault:function(s,e){e.forEach((function(s){return s.isDefault=0})),s.isDefault=1},submitOrder:function(){var s=this;return(0,n.Z)(regeneratorRuntime.mark((function e(){var t,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=s.orderInfo.tradeNo,a={consignee:s.userDefaultAddress.consignee,consigneeTel:s.userDefaultAddress.phoneNum,deliveryAddress:s.userDefaultAddress.fullAddress,paymentWay:"ONLINE",orderComment:s.msg,orderDetailList:s.orderInfo.detailArrayList},e.next=4,s.$API.reqSubmitOrder(t,a);case 4:r=e.sent,200==r.code?(s.orderId=r.data,s.$router.push("/pay?orderId="+s.orderId)):alert(r.data);case 6:case"end":return e.stop()}}),e)})))()}}},c=d,u=t(1001),o=(0,u.Z)(c,a,r,!1,null,"6e6ef86b",null),v=o.exports},9826:function(s,e,t){var a=t(2109),r=t(2092).find,n=t(1223),i="find",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),a({target:"Array",proto:!0,forced:l},{find:function(s){return r(this,s,arguments.length>1?arguments[1]:void 0)}}),n(i)}}]);