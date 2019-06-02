
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    console.log('tablename:'+event.tablename);
    console.log('id:'+event.id);
    console.log('num:'+event.num)
    return await db.collection(event.tablename).doc(event.id).update({
      // data 传入需要局部更新的数据
      data: {
        num: event.num+1
      }
    })
  } catch (e) {
    console.error('e'+e)
  }
}