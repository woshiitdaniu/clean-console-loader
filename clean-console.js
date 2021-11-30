/*
 * @Description: 
 * @Autor: Bingo
 * @Date: 2021-11-30 11:22:12
 * @LastEditors: Kaven
 * @LastEditTime: 2021-11-30 14:36:44
 */

/* 
   @desc:去除项目中未注释的console 操作
   @最好是配合npm hooks husk 减少对业务的侵入
   @同时将该loader配在其他loader链后面

   @(.*?) 表示去除贪婪匹配  防止出现console.log();fn()  fn也被匹配到的问题
*/
module.exports = function (content, map, meta) {
 
    var reg = /console\.(.*?)\((.*?)\)/g
    content = content.replace(reg,function($1,$2,$3){  
        return `/**console.${$2}(${$3})*/`
    })
    return content
};