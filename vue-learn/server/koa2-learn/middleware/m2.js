function m2 (ctx) {
    global.console.log('m2')
}

module.exports = function(){
    return async function(ctx,next){
         m2(ctx)
         await next()
    }
}