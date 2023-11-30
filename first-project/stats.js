const os = require('os')

setInterval(()=>{

    console.clear()

    const { freemem , totalmem } = os

    const mem = parseInt(freemem() / 1024 / 1024)
    const total = parseInt(totalmem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)

    const stats = {
        freeMem: `${mem} MB`,
        totalMem: `${total} MB`,
        freePercents: `${percents}%`
    }

    console.log('******** Memory Stats ********')
    console.table(stats)

    

}, 1000)

