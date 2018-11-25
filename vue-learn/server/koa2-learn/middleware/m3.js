function m3 (ctx) {
    global.console.log('m3')
}

module.exports = function(){
    return async function(ctx,next){
         m3(ctx)
         await next()
    }
}