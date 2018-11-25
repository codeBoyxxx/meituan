const router = require('koa-router')()
// 引入person这个模型，然后实例化，就可以使用model的API进行数据的增删改查
const Person = require('../dbs/models/person')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/person',async (ctx)=>{
  const person = new Person({
    name:ctx.request.body.name,
    age:ctx.request.body.age
  })
  let code
  try {
    await person.save()
    code=0
  } catch (error) {
    code=-1
  }
  ctx.body ={
    code
  }

})

module.exports = router
