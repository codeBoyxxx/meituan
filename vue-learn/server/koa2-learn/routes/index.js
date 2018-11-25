const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  global.console.log('index')
  ctx.cookies.set('pvid',Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json1',
    cookies:ctx.cookies.get('pvid')
  }
})
router.get('/test', async (ctx, next) => {
  ctx.body = {
    title: 'test2'
  }
})


module.exports = router
